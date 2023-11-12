import React from "react";

const SkillList = [
  "next.js",
  "tailwind css",
  "figma",
  "javaScript",
  "web design",
  "Gatsby.js",
  "strapi",
  "firebase",
  "generative AI",
  "wireframing",
  "SEO",
  "framer motion",
  "sanity",
];

const Skills = () => {
  return (
    <section className="w-full flex flex-col p-20 border-b-2 border-solid border-dark text-dark">
      <span className="font-medium text-4xl text-accent dark:text-accentDark whitespace-nowrap">
        I&apos;m confident in my ...
      </span>
      <ul className=" mt-6">
        {SkillList.map((skill, i) => (
          <li
            key={i}
            className="font-semibold inline-block mr-3 mb-3 capitalize text-lg py-1 px-2 md:text-2xl md:py-2 md:px-4 border-2 border-solid border-dark rounded-full hover:scale-105 transition-all ease-in-out duration-500 dark:border-light dark:text-light"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
