/*
 * FAMILY BUCKET LIST BLOG , /blog/family-bucket-list-nayara
 * Renders the family bucket list blog post using BlogPostTemplate
 */
import BlogPostTemplate from "./BlogPostTemplate";
import { familyBucketListPost } from "@/data/blogPostsExperiential";

export default function FamilyBucketListBlog() {
  return <BlogPostTemplate post={familyBucketListPost} />;
}
