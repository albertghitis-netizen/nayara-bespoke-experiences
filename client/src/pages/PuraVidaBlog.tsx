/*
 * PURA VIDA BLOG — /blog/pura-vida
 * Renders the Pura Vida blog post using BlogPostTemplate
 */
import BlogPostTemplate from "./BlogPostTemplate";
import { puraVidaPost } from "@/data/blogPosts";
export default function PuraVidaBlog() {
  return <BlogPostTemplate post={puraVidaPost} />;
}
