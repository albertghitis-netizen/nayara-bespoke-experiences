/*
 * GREEN GLOBE & S CERTIFICATION BLOG — Rendered via the definitive BlogPostTemplate
 * Route: /blog/green-globe-s-certification
 */

import BlogPostTemplate from "./BlogPostTemplate";
import { greenGlobePost } from "@/data/blogPosts";

export default function GreenGlobeBlog() {
  return <BlogPostTemplate post={greenGlobePost} />;
}
