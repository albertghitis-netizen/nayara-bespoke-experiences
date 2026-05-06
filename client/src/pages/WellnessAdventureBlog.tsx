/*
 * WELLNESS ADVENTURE BLOG , /blog/wellness-adventure-nayara
 * Renders the wellness adventure blog post using BlogPostTemplate
 */
import BlogPostTemplate from "./BlogPostTemplate";
import { wellnessAdventurePost } from "@/data/blogPostsExperiential";

export default function WellnessAdventureBlog() {
  return <BlogPostTemplate post={wellnessAdventurePost} />;
}
