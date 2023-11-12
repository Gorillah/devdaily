import type { Blog } from "@/.contentlayer/generated/types"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { cx } from "@/lib/utils"

const BlogLayoutThree = ({
  blog,
  ...props
}: {
  blog: Blog
  className?: string
}) => {
  const image = blog.image as { filePath: string; blurhashDataUrl: string }
  const tags = blog.tags as string[]
  return (
    <div
      className={cx(
        "group flex flex-col items-center justify-center text-dark",
        props?.className!,
      )}
    >
      <Link href={blog.url} className="h-full">
        <Image
          src={image.filePath.replace("../public", "")}
          alt={blog.title}
          width={blog.image?.width!}
          height={blog.image?.height!}
          placeholder={"blur"}
          blurDataURL={image.blurhashDataUrl!}
          className="aspect-video h-full w-full overflow-hidden rounded-xl object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
        />
      </Link>
      <div className="bottom-0 w-full py-6 md:py-10">
        <Link href={blog.url} className="flex flex-col gap-3">
          <span className="font-bold uppercase text-accent dark:text-accentDark">
            {tags[0]}
          </span>
          <h2 className="font-bold capitalize text-dark">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0%_6px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-in-out group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark dark:bg-[length:0%_6px]">
              {blog.title}
            </span>
          </h2>
          <span className="date">
            {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default BlogLayoutThree
