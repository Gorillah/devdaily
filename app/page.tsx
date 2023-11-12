import FeaturedPosts from "@/components/home/featured-posts"
import Hero from "@/components/home/hero"
import RecentPost from "@/components/home/recent-post"
import { allBlogs } from "contentlayer/generated"

export default function Home() {
  console.log(allBlogs[0])
  return (
    <main className="flex flex-col items-center justify-start gap-16 md:gap-32">
      <Hero blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPost blogs={allBlogs} />
    </main>
  )
}
