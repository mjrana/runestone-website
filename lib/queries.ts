import { groq } from "next-sanity";

export const SETTINGS_QUERY = groq`*[_type == "siteSettings"][0]`;
export const NAVIGATION_QUERY = groq`*[_type == "navigation"][0]`;

export const HOMEPAGE_QUERY = groq`*[_type == "homePage"][0]{
  title,
  hero,
  sections
}`;

export const SERVICES_QUERY = groq`*[_type == "service"] | order(name.en asc){
  _id,
  name,
  slug,
  shortDescription,
  category
}`;

export const SERVICE_QUERY = groq`*[_type == "service" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  hero,
  body,
  category
}`;

export const BLOG_LIST_QUERY = groq`*[_type == "blogPost"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  coverImage,
  "authorName": author->name
}`;

export const BLOG_POST_QUERY = groq`*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  publishedAt,
  excerpt,
  coverImage,
  "authorName": author->name
}`;
