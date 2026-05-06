/*
 * EXPERIENTIAL TRAVEL BLOG , /blog/experiential-travel-nayara-2026
 * Renders the experiential travel blog post using BlogPostTemplate
 */
import BlogPostTemplate from "./BlogPostTemplate";
import { experientialTravelPost } from "@/data/blogPostsExperiential";

export default function ExperientialTravelBlog() {
  return <BlogPostTemplate post={experientialTravelPost} hideNav hideConcierge />;
}
