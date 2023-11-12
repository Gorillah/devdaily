import React from "react";
import Category from "./category";
import { slug } from "github-slugger";

type CategoriesProps = {
  categories: string[];
  currentSlug: string;
};

const Categories = ({ categories, currentSlug }: CategoriesProps) => {
  return (
    <div className="mt-10 text-dark border-t-2 border-b-2 border-solid border-dark py-4 flex items-start flex-wrap">
      {categories.map((category) => (
        <Category
          name={category}
          active={currentSlug === slug(category)}
          key={category}
          link={`/categories/${slug(category)}`}
        />
      ))}
    </div>
  );
};

export default Categories;
