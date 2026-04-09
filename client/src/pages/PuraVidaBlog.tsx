/*
 * PURA VIDA BLOG — Rendered via the definitive BlogPostTemplate
 * Route: /blog/pura-vida
 */

import BlogPostTemplate from "./BlogPostTemplate";
import { puraVidaPost } from "@/data/blogPosts";

export default function PuraVidaBlog() {
  return <BlogPostTemplate post={puraVidaPost} />;
}
