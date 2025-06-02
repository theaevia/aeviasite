import { Button } from "@/components/ui/button";

export default function Journal() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-lg text-center">
        <h1 className="text-4xl font-serif font-bold mb-4 text-primary">Journal</h1>
        <p className="text-lg text-foreground/70 mb-6">
          This page is currently <span className="text-primary font-semibold">in development</span>.<br />
          Check back soon for updates, stories, and insights from The Aevia team!
        </p>
        <Button variant="outline" asChild>
          <a href="/">Return Home</a>
        </Button>
      </div>
    </div>
  );
}
