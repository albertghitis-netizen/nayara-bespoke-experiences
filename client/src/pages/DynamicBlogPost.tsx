/*
 * DYNAMIC BLOG POST , Resolves any slug from the allBlogPosts registry
 * Route: /journal/:slug
 * Falls back to NotFound if slug doesn't match.
 */

import { useParams } from "wouter";
import BlogPostTemplate from "./BlogPostTemplate";
import { getBlogPost } from "@/data/blogPosts";
import NotFound from "./NotFound";

export default function DynamicBlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const post = getBlogPost(slug);

  if (!post) return <NotFound />;

  return <BlogPostTemplate post={post} />;
}
