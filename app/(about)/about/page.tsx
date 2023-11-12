import AboutCoverSection from "@/components/about/about-cover-section";
import Skills from "@/components/about/skills";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: `Here are some details about me`,
};

const AboutPage = () => {
  return (
    <div>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-xl self-start mx-20 text-dark">
        Have a project in mind? reach out to me from{" "}
        <Link href="/contact" className="!underline underline-2">
          here
        </Link>{" "}
        and lets make it happen
      </h2>
    </div>
  );
};

export default AboutPage;
