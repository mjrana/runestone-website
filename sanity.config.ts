import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schema } from "./schemas"; // <-- from your schema folder

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  title: "Runestone Intelligence Studio",
  apiVersion: "2024-06-01",
  basePath: "/studio",
  plugins: [deskTool()],
  schema,
});
