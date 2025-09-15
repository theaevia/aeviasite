import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.TINA_BRANCH ||
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          { type: "string", name: "dek", label: "Dek", required: false },
          { type: "datetime", name: "date", label: "Date", required: true },
          { type: "datetime", name: "updated", label: "Updated", required: false },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: [
              { label: "Draft", value: "draft" },
              { label: "Published", value: "published" },
            ],
            required: true,
          },
          { type: "string", name: "authors", label: "Authors", list: true },
          { type: "string", name: "categories", label: "Categories", list: true },
          { type: "string", name: "tags", label: "Tags", list: true, required: false },
          {
            type: "object",
            name: "hero",
            label: "Hero Image",
            required: false,
            fields: [
              { type: "string", name: "src", label: "Src" },
              { type: "string", name: "alt", label: "Alt" },
            ],
          },
          { type: "string", name: "og_image", label: "OG Image", required: false },
          { type: "string", name: "reviewed_by", label: "Reviewed By", required: false },
          { type: "string", name: "disclaimer", label: "Disclaimer", required: false },
          { type: "number", name: "reading_time", label: "Reading Time (min)", required: false },
          { type: "string", name: "canonical", label: "Canonical URL", required: false },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        // Omit router during dev to avoid Tina iframe preview recursion.
        // We'll rely on the built-in editor routes (collections/edit/...).
      },
    ],
  },
});
