import siteMetadata from "@/lib/siteMetadata"
import Link from "next/link"
import React from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="container-footer flex flex-col items-center justify-center gap-10 rounded-3xl bg-dark p-4 py-20 text-center text-light dark:border md:p-10 ">
      <h4 className="text-3xl leading-[1.2] lg:text-5xl">
        Interesting Stories | Updates | Guides
      </h4>
      <p className="text-lg md:text-xl">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <form action={""} className="flex w-full flex-1 flex-col gap-6">
        <div className="relative mx-auto flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-white p-3 sm:flex-row md:w-fit">
          <input
            type="email"
            placeholder="Enter your email"
            className="decoration text-md mx-auto mr-2 h-12 w-full border-0 border-b text-dark outline-none placeholder:text-lg focus:border-dark focus:ring-0"
            required
          />
          <button className="text-md z-60 h-12 w-full rounded-lg bg-dark px-6 py-1 font-semibold md:inline-block">
            Submit
          </button>
        </div>
      </form>
      <div className="flex gap-4">
        <Link href={siteMetadata.linkedin} target="_blank">
          <BsLinkedin className="text-3xl" />
        </Link>
        <Link href={siteMetadata.github} target="_blank">
          <BsGithub className="text-3xl" />
        </Link>
      </div>
      <div className="flex w-full justify-around">
        <span>&copy; 2023 DevBlogs</span>
        <Link href="/sitemap.xml" target="_blank" className="underline">
          Sitemap
        </Link>
        <span>
          Made with &hearts; by{" "}
          <a href="https://bilel.dev" target="_blank" className="underline">
            Bilel.dev
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
