/*
 * GASTRONOMY BLOG , /blog/three-kitchens-one-rainforest
 * Renders the gastronomy blog post using BlogPostTemplate
 */
import BlogPostTemplate from "./BlogPostTemplate";
import { gastronomyBlogPost } from "@/data/blogPostsNew";

export default function GastronomyBlog() {
  return <BlogPostTemplate post={gastronomyBlogPost} hideNav hideConcierge />;
}
