import React from "react"
import type { Blog } from "@/.contentlayer/generated"
import Image from "next/image"
import Tags from "../elements/tag"
import Link from "next/link"
import { slug } from "github-slugger"

const BlogLayoutOne = ({ blog }: { blog: Blog }) => {
  const image = blog.image as { filePath: string; blurhashDataUrl: string }
  const tags = blog.tags as string[]

  return (
    <div className="group cursor-pointer">
      <div className="absolute inset-0 z-10 h-full w-full rounded-3xl bg-gradient-to-b from-transparent from-0% to-dark/90" />
      <div className="h-full w-full">
        <Image
          src={image.filePath.replace("../public", "")}
          blurDataURL={image.blurhashDataUrl!}
          placeholder="blur"
          alt={blog.title}
          width={blog.image?.width}
          height={blog.image?.height}
          className="h-full w-full rounded-3xl object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="absolute bottom-0 z-20 w-full p-6 md:p-10 xl:w-3/4">
        <Tags
          name={slug(blog.tags![0])}
          link={`/categories/${slug(blog.tags![0])}`}
          className="mb-4 !border px-6 py-2"
        />
        <Link href={blog.url} className="flex flex-col gap-3">
          <h2 className="shadow-text dark:shadow-textDark capitalize text-light">
            <span className="bg-gradient-to-r from-accent/50 to-accent bg-[length:0%_6px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-in-out group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark">
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default BlogLayoutOne
