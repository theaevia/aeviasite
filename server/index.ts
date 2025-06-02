import 'dotenv/config';
const PORT = Number(process.env.PORT ?? 3000);
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const isProd = process.env.NODE_ENV === 'production';

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "default-src": ["'self'"],
      "img-src": ["'self'", "data:", "https:", "blob:"],
      "frame-src": ["'self'", "https://calendly.com", "https://www.calendly.com", "https://assets.calendly.com", "https://www.googletagmanager.com"],
      "connect-src": [
        "'self'",
        "https://calendly.com",
        "https://www.calendly.com",
        "https://assets.calendly.com",
        "https://api.calendly.com",
        "https://www.googletagmanager.com",
        "https://www.google-analytics.com",
        "https://region1.google-analytics.com" // Required for GA4
      ],
      "script-src": [
        "'self'",
        "'unsafe-inline'", // Required for GTM and inline scripts
        "https://www.googletagmanager.com",
        "https://assets.calendly.com",
        ...(isProd ? [] : ["https://replit.com"]) // Only include Replit in development
      ],
      "script-src-elem": [
        "'self'",
        "'unsafe-inline'", // Required for GTM and inline scripts
        "https://www.googletagmanager.com",
        "https://assets.calendly.com",
        ...(isProd ? [] : ["https://replit.com"]) // Only include Replit in development
      ],
      "style-src": [
        "'self'",
        "'unsafe-inline'", // Required for dynamic styles
        "https://assets.calendly.com",
        "https://fonts.googleapis.com" // Explicitly allow Google Fonts stylesheets
      ],
      "style-src-elem": [
        "'self'",
        "'unsafe-inline'", // Required for dynamic styles
        "https://assets.calendly.com",
        "https://fonts.googleapis.com" // Explicitly allow Google Fonts stylesheets
      ],
      "font-src": [
        "'self'",
        "https://fonts.gstatic.com"
      ],
      "frame-ancestors": ["'none'"], // Prevents site from being embedded in iframes
      "form-action": ["'self'"], // Restricts form submissions to same origin
      "base-uri": ["'self'"], // Restricts base tag to same origin
      "object-src": ["'none'"], // Prevents object/embed/applet tags
      "upgrade-insecure-requests": null, // Upgrades HTTP to HTTPS (boolean directive)
      "report-uri": isProd ? ["https://www.theaevia.co.uk/api/csp-report"] : [], // CSP violation reporting in production
    },
    reportOnly: false, // Set to true to test CSP without blocking
  },
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false, limit: '1mb' }));

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Add CSP report endpoint
app.post('/api/csp-report', express.json({ type: 'application/csp-report' }), (req, res) => {
  const report = req.body;
  log(`CSP Violation: ${JSON.stringify(report)}`, "warn");
  res.status(204).end();
});

(async () => {
  try {
    const server = await registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      res.status(status).json({ message });
      log(`Error: ${message}`, "error");
    });

    if (!isProd) {
      await setupVite(app, server);
    } else {
      // Serve static files from the public directory
      app.use(express.static(path.join(__dirname, 'public')));
      // Serve assets from the assets directory
      app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
      // Fallback to index.html for client-side routing
      app.get('*', (_req, res) =>
        res.sendFile(path.join(__dirname, 'public', 'index.html'))
      );
    }

    server.listen({
      port: PORT,
      host: "0.0.0.0",
    }, () => {
      log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    log(`Failed to start server: ${error}`, "error");
    process.exit(1);
  }
})();
