/*
 * THE SUMMER OF YOU BLOG — /blog/summer-of-you
 * Renders the Summer of You blog post using BlogPostTemplate
 */
import BlogPostTemplate from "./BlogPostTemplate";
import { summerOfYouPost } from "@/data/blogPostSummerOfYou";
export default function SummerOfYouBlog() {
  return <BlogPostTemplate post={summerOfYouPost} />;
}
