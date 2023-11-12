"use client"

import { useState } from "react"
import Logo from "@/components/logo"
import Link from "next/link"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"
import siteMetadata from "@/lib/siteMetadata"
import { useThemeSwitch } from "@/hooks/useThemeSwitch"
import { cx } from "@/lib/utils"

const Header = () => {
  const { mode, setMode } = useThemeSwitch()
  const [click, setClick] = useState(false)

  return (
    <header className="container-full flex w-full items-center justify-between p-3">
      <Logo />
      <button
        className="z-50 inline-block p-3 md:hidden"
        onClick={() => setClick(!click)}
      >
        <div className="ease w-6 cursor-pointer transition-all duration-300">
          <div className="relative">
            <span
              className="ease absolute top-0 inline-block h-0.5 w-full rounded bg-black transition-all duration-200 dark:bg-light"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="ease absolute top-0 inline-block h-0.5 w-full rounded bg-black transition-all duration-200 dark:bg-light"
              style={{
                opacity: click ? "0" : "1",
              }}
            >
              &nbsp;
            </span>
            <span
              className="ease absolute top-0 inline-block h-0.5 w-full rounded bg-black transition-all duration-200 dark:bg-light"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>
      <nav
        className="ease fixed right-[50%] top-5 z-50 flex w-max translate-x-[50%] items-center justify-center gap-3 rounded-full border border-dark bg-white/80 px-8 py-3 text-lg backdrop-blur-sm transition-all duration-300 md:!top-[1.0rem]"
        style={{
          top: click ? "1.3rem" : "-5rem",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          className={cx(
            "ease translation-all animation-rotate ml-2 flex h-6 w-6 items-center justify-center rounded-full",
            mode === "light" ? " text-dark" : " text-dark",
          )}
        >
          {mode === "light" ? (
            <BsFillSunFill className="text-2xl" />
          ) : (
            <BsFillMoonFill className="text-2xl" />
          )}
        </button>
      </nav>
      <div className="hidden gap-3 text-3xl md:flex">
        <a
          href={siteMetadata.github}
          className="transition hover:scale-[1.2]"
          target="_blank"
        >
          <AiFillGithub className="text-4xl text-black dark:text-white" />
        </a>
        <a
          href={siteMetadata.linkedin}
          target="_blank"
          className="transition hover:scale-[1.2]"
        >
          <AiFillLinkedin className="text-4xl text-blue-500 dark:text-white" />
        </a>
      </div>
    </header>
  )
}

export default Header
