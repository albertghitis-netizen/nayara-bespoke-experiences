/**
 * ROMANCE BLOG — /blog/romance-at-nayara-springs-and-bocas-del-toro
 * Renders the adults-only romance blog post using BlogPostTemplate
 */
import BlogPostTemplate from "./BlogPostTemplate";
import { romanticBlogPost } from "@/data/blogPostRomantic";
export default function RomanceBlog() {
  return <BlogPostTemplate post={romanticBlogPost} />;
}
