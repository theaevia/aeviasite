import { defineConfig } from "tinacms";

// Monorepo-aware Tina config. This builds the admin UI into
// apps/journal/public/admin so Astro will copy it to dist at build time.
export default defineConfig({
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  branch:
    process.env.TINA_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.GITHUB_REF_NAME ||
    "main",
  build: {
    publicFolder: "apps/journal/public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      publicFolder: "apps/journal/public",
      mediaRoot: "images",
    },
  },
  schema: {
    collections: [
      {
        name: "posts",
        label: "Posts",
        path: "apps/journal/src/content/posts",
        format: "mdx",
        frontmatterFormat: "yaml",
        ui: {
          router: ({ document }) => `/journal/${document._sys.filename}`,
        },
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "dek", label: "Dek" },
          { type: "datetime", name: "date", label: "Date" },
          { type: "datetime", name: "updated", label: "Updated" },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: ["draft", "published"],
          },
          {
            type: "reference",
            name: "authors",
            label: "Authors",
            collections: ["authors"],
            list: true,
          },
          {
            type: "reference",
            name: "categories",
            label: "Categories",
            collections: ["categories"],
            list: true,
          },
          { type: "string", name: "tags", label: "Tags", list: true },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "image", name: "src", label: "Image" },
              { type: "string", name: "alt", label: "Alt" },
            ],
          },
          { type: "image", name: "og_image", label: "Open Graph Image" },
          { type: "string", name: "reviewed_by", label: "Reviewed By" },
          { type: "string", name: "disclaimer", label: "Disclaimer", ui: { component: "textarea" } },
          { type: "number", name: "reading_time", label: "Reading Time (min)" },
          { type: "string", name: "canonical", label: "Canonical URL" },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
      {
        name: "authors",
        label: "Authors",
        path: "apps/journal/src/content/authors",
        format: "json",
        fields: [
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "string", name: "name", label: "Name", required: true },
          { type: "string", name: "credentials", label: "Credentials" },
          { type: "string", name: "role", label: "Role" },
          { type: "image", name: "avatar", label: "Avatar" },
          { type: "string", name: "bio", label: "Bio", ui: { component: "textarea" } },
          {
            type: "object",
            name: "links",
            label: "Links",
            fields: [
              { type: "string", name: "website", label: "Website" },
              { type: "string", name: "instagram", label: "Instagram" },
              { type: "string", name: "linkedin", label: "LinkedIn" },
            ],
          },
        ],
      },
      {
        name: "categories",
        label: "Categories",
        path: "apps/journal/src/content/categories",
        format: "json",
        fields: [
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "string", name: "label", label: "Label", required: true },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
        ],
      },
    ],
  },
});

