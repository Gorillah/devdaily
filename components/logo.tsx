import Link from "next/link"
import React from "react"
import { MdOutlineDeveloperBoard } from "react-icons/md"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <MdOutlineDeveloperBoard className="text-4xl dark:text-light" />
      <span className="text-bold ml-2 font-in text-2xl font-bold dark:text-light">
        DevDaily
      </span>
    </Link>
  )
}

export default Logo
