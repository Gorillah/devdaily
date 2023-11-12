import { Blog } from "contentlayer/generated"
import { format } from "date-fns"
import Link from "next/link"
import React from "react"
import { slug } from "github-slugger"
import ViewCounter from "@/components/blog/view-counter"

const BlogDetails = ({
  blog,
  slug: blogSlug,
}: {
  blog: Blog
  slug: string
}) => {
  return (
    <div className="mx-5 flex h-20 flex-wrap items-center justify-between gap-x-4 rounded-lg bg-accent px-6 py-2 !text-lg font-medium text-light dark:bg-accentDark dark:text-dark md:px-10">
      <time>{format(new Date(blog.publishedAt), "MMMM d, yyyy")}</time>
      <span>
        <ViewCounter slug={blogSlug} />
      </span>
      <div>{blog.readingTime.text}</div>
      <Link href={`/categories/${slug(blog.tags![0])}`}>#{blog.tags![0]}</Link>
    </div>
  )
}

export default BlogDetails
