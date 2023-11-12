import { Blog } from "@/.contentlayer/generated"
import React from "react"

const TOC = ({ blog }: { blog: Blog }) => {
  return (
    <div className="col-span-12 lg:col-span-2 lg:max-w-[400px]">
      <details
        className="sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto rounded-lg border-[1px] border-dark p-4 text-dark dark:border-light"
        open
      >
        <summary className="cursor-pointer text-lg font-semibold capitalize dark:text-light">
          Tables Of Content
        </summary>
        <ul className="my-4 font-in text-sm no-underline dark:text-light">
          {blog.toc.map((heading: any, i: any) => (
            <li key={`#${heading.slug}`} className="py-1">
              <a
                href={`#${heading.slug}`}
                data-level={heading.level}
                className="flex items-center justify-start border-solid border-dark/40 data-[level=two]:border-t data-[level=three]:pl-6 data-[level=two]:pl-0 data-[level=two]:pt-2 dark:border-light/40"
              >
                {heading.level === "three" ? (
                  <span className="flex h-1 w-1 rounded-full bg-dark">
                    &nbsp;
                  </span>
                ) : null}
                <span className="hover:underline">{heading.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  )
}

export default TOC
