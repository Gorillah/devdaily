import { cx } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  link: string;
  name?: string;
  className?: string;
};

const Tag = ({ link = "#", name, ...props }: Props) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 px-5 md:py-3 md:px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-[1.10] transition-all east duration-200 text-xs md:text-lg",
        props?.className!,
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
