/*
 * IN-HOUSE ACTIVITIES BLOG , /blog/in-house-activities-three-hotels-infinite-experiences
 * Renders the in-house activities blog post using BlogPostTemplate
 */
import BlogPostTemplate from "./BlogPostTemplate";
import { inHouseActivitiesBlogPost } from "@/data/blogPostsNew";
export default function InHouseActivitiesBlog() {
  return <BlogPostTemplate post={inHouseActivitiesBlogPost} hideNav hideConcierge hideFooterSections heroAspect="16/9" />;
}
