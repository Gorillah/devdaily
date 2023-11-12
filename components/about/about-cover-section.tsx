import Image from "next/image";
import React from "react";
import character from "/public/character.png";
import H2Header from "../elements/h2-headers";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 md:border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark container-full gap-16 border-none">
      <div className="w-full md:w-1/2 h-full border-r-2 md:border-solid border-dark dark:border-light flex justify-center border-none">
        <Image
          src={character}
          alt="Bilel"
          className="w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 1200px) 80vw, 50vw"
        ></Image>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-center md:text-left">
        <H2Header>Dream Big, Work Hard, Achieve More!</H2Header>
        <p className="font-medium capitalize text-lg mt-4">
          This Mantra Drives My Work As A Passionate Freelancer. I Blend
          Innovative Technology With Timeless Design For Captivating Digital
          Experiences. Inspired By Nature And Literature, I&apos;m A Perpetual
          Embracing Challenges. With Each Project, I Aim To Leave A Lasting
          Impact—One Pixel At A Time
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
