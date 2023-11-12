import { Blog } from "@/.contentlayer/generated"
import { format } from "date-fns"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const BlogLayoutTwo = ({ blog }: { blog: Blog }) => {
  return (
    <div className="group grid grid-cols-12 items-center gap-4 text-dark dark:text-light">
      <Link
        href={blog.url}
        className="col-span-4 h-full overflow-hidden rounded-xl"
      >
        <Image
          src={blog.image?.filePath.replace("../public", "")!}
          placeholder="blur"
          blurDataURL={blog.image?.blurhashDataUrl}
          alt={blog.title}
          width={blog.image?.width}
          height={blog.image?.height}
          className="ease aspect-square h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="col-span-8 w-full lg:col-span-8">
        <span className="inline-block w-full font-semibold uppercase text-accent dark:text-accentDark">
          {blog.tags![0]}
        </span>
        <Link href={blog.url} className="my-1 inline-block">
          <h2 className="font-semibold capitalize ">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] bg-left-bottom bg-no-repeat
                transition-[background-size] duration-500 group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="date">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  )
}

export default BlogLayoutTwo
