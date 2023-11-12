"use client"

import { Blog } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import Image from "next/image"
import type { MDXComponents } from "mdx/types"

const mdxComponents: MDXComponents = {
  Image,
}

const RenderMdx = ({ blog }: { blog: Blog }) => {
  const MDXContent = useMDXComponent(blog.body.code)
  return (
    <div
      className="dark:prose-text-dark prose prose-lg col-span-12 mx-auto max-w-[1000px] font-in dark:prose-invert first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-bold first-letter:text-accent prose-blockquote:rounded-r-lg prose-blockquote:border-accent prose-blockquote:bg-accent/20 prose-blockquote:p-2
    prose-blockquote:px-6 prose-li:marker:text-accent dark:first-letter:text-accentDark dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark
    lg:col-span-8
    "
    >
      <MDXContent components={mdxComponents} />
    </div>
  )
}

export default RenderMdx
