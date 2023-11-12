import type { Blog } from "@/.contentlayer/generated/types.d";
import { sortBlogs } from "@/lib/utils";
import BlogLayoutOne from "../blog/blog-layout-one";
import BlogLayoutTwo from "../blog/blog-layout-two";
import H2Header from "../elements/h2-headers";

const FeaturedPosts = ({ blogs }: { blogs: Blog[] }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="container-full w-full flex flex-col items-center justify-center">
      <H2Header>Features</H2Header>
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-6 mt-16 w-full">
        <article className="col-span-1 row-span-2 relative overflow-hidden rounded-3xl">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article className="col-span-1 row-span-1">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-1 row-span-1">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
