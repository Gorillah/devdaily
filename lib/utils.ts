import { compareDesc, parseISO } from "date-fns";

export const cx = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const sortBlogs = (blogs: any[]) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)),
    );
};
