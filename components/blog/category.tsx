import { cx } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  link: string;
  name?: string;
  className?: string;
  active?: boolean;
};

const Category = ({ link = "#", name, active, ...props }: Props) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 m-2 px-10  rounded-full font-semibold border-2 border-solid border-dark hover:scale-[1.10] transition-all east duration-200 dark:text-dark",
        props?.className!,
        active
          ? "bg-dark text-light dark:bg-light dark:text-dark"
          : " text-dark dark:text-light dark:border-light",
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
