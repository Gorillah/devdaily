import React from "react"
import { allBlogs } from "contentlayer/generated"
import Tag from "@/components/elements/tag"
import Image from "next/image"
import BlogDetails from "@/components/blog/blog-details"
import RenderMdx from "@/components/blog/render-mdx"
import TOC from "@/components/blog/toc"
import { slug } from "github-slugger"
import siteMetadata from "@/lib/siteMetadata"

type Props = {
  params: {
    slug: string
  }
}

type ImageFieldData = /*unresolved*/ any

export async function generateMetadata({ params }: Props) {
  const blog = allBlogs.find((b) => b._raw.flattenedPath === params.slug)
  let imageList: string[] | ImageFieldData = [siteMetadata.socialBanner]
  if (blog?.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image
  }
  if (!blog) return

  const publishedAt = new Date(blog.publishedAt).toISOString()
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString()

  const ogImages = imageList.map((image: string) => ({
    url: image.includes("http") ? image : siteMetadata.siteUrl + image,
  }))

  const authors = blog?.author ? [blog.author] : siteMetadata.author

  return {
    title: blog?.title,
    description: blog?.description,
    openGraph: {
      title: blog?.title,
      description: blog?.description,
      url: siteMetadata.siteUrl,
      siteName: siteMetadata.title,
      images: ogImages,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
    },
    authors: authors.length > 0 ? authors : [siteMetadata.author],
    twitter: {
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  }
}

const BlogPage = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)
  let imageList: string[] | ImageFieldData = [siteMetadata.socialBanner]
  if (blog?.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image
  }
  const image = blog?.image as { filePath: string; blurhashDataUrl: string }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog?.title,
    description: blog?.description,
    image: imageList,
    datePublished: new Date(blog?.publishedAt!).toISOString(),
    dateModified: new Date(blog?.updatedAt!).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog?.author || siteMetadata.author,
        url: "https://www.linkedin.com/in/bilel-nassar/",
      },
    ],
  }

  if (!blog) return <div>Blog not found</div>
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="relative mb-8 h-[70vh] w-full bg-dark text-center">
          <div className="absolute left-1/2 top-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
            <Tag
              name={slug(blog.tags![0])}
              link={`/categories/${slug(blog.tags![0])}`}
              className="px-6 py-2 text-sm"
            />
            <h1 className="relative mt-6 inline-block w-5/6 text-5xl font-semibold capitalize leading-normal text-light">
              {blog.title}
            </h1>
          </div>
          <div className="absolute inset-0 h-full w-full bg-dark/60" />
          <Image
            src={image.filePath.replace("../public", "")}
            blurDataURL={image.blurhashDataUrl!}
            placeholder="blur"
            alt={blog.title}
            width={blog.image?.width}
            height={blog.image?.height}
            className="h-full w-full object-cover"
          />
        </div>
        <BlogDetails blog={blog} slug={params.slug} />
        <div className="container-full relative my-20 grid grid-cols-12 gap-y-16 md:relative">
          <TOC blog={blog} />
          <RenderMdx blog={blog} />
          <div className="col-span-2 h-full w-full bg-blue-200"></div>
        </div>
      </article>
    </>
  )
}

export default BlogPage
