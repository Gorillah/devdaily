import type { Blog } from "@/.contentlayer/generated/types.d";
import { sortBlogs } from "@/lib/utils";
import Link from "next/link";
import BlogLayoutThree from "@/components/blog/blog-layout-three";
import H2Header from "@/components/elements/h2-headers";

const RecentPost = ({ blogs }: { blogs: Blog[] }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="container-full w-full flex flex-col items-center justify-center">
      <div className="flex justify-between w-full items-center">
        <H2Header>Recent Posts</H2Header>
        <Link
          href="/categories/all"
          className="text-accent font-medium underline underline-offset-2 capitalize text-lg dark:text-accentDark whitespace-nowrap"
        >
          view all
        </Link>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-2 md:gap-12 mt-16 ">
        {sortedBlogs.slice(4, 10).map((blog, i) => (
          <article key={i} className="col-span-1 row-span-1">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPost;
