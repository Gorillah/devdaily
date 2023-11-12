import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/components/blog/blog-layout-three";
import Categories from "@/components/blog/categories";
import { slug } from "github-slugger";
import React from "react";

type metaDataProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: metaDataProps) {
  return {
    title: `${params.slug.replaceAll("-", " ")}`,
    description: `Learn more about ${
      params.slug === "all" ? "Web development" : params.slug
    } through out collection of our blog and tutorials`,
  };
}

const CategoriesPage = ({ params }: { params: { slug: string } }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter(
    (blog) =>
      blog.tags?.some((tag) => {
        const slugifiedTag = slug(tag);
        if (!allCategories.includes(slugifiedTag))
          allCategories.push(slugifiedTag);
        if (params.slug === "all") return true;
        return slugifiedTag === params.slug;
      }),
  );
  return (
    <article className="mt-12 flex flex-col text-dark container-full">
      <div className="flex flex-col ">
        <h1 className="mt-6 font-semibold text-5xl">#{params.slug}</h1>
        <span className="mt-3">
          Discover more categories and expand your knowledge
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-16 mt-24">
        {blogs.map((blog, i) => (
          <article className="col-span-1 relative" key={i}>
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoriesPage;
