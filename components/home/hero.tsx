import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tags from "@/components/elements/tag";
import type { Blog } from "@/.contentlayer/generated/types.d";
import { sortBlogs } from "@/lib/utils";
import { slug } from "github-slugger";

const Hero = ({ blogs }: { blogs: Blog[] }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  const image = blog.image as { filePath: string; blurhashDataUrl: string };
  const tags = blog.tags as string[];

  return (
    <div className="w-full inline-block container-full">
      <article className="flex flex-col items-start justify-end relative h-[60vh] sm:h-[85vh]">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            "
        />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
          sizes="100vw"
          priority
        />

        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light">
          <Tags
            link={`/categories/${slug(blog.tags[0])}`}
            name={blog.tags[0]}
          />
          <Link href={blog.url} className="mt-6">
            <h1 className="font-bold capitalize">
              <span
                className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
              >
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="mt-4 font-in">{blog.description}</p>
        </div>
      </article>
    </div>
  );
};

export default Hero;
