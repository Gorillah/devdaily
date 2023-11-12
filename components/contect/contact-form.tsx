"use client";

import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-12 text-xl font-medium leading-relaxed font-in dark:text-white"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="Your name"
        {...register("Name", { required: true })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-dark/20 focus:border-dark/20 bg-transparent dark:border-light dark:text-light"
      />
      and I want to discuss a potential project, You can email me at
      <input
        type="text"
        placeholder="Your email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-dark/20 focus:border-dark/20 bg-transparent dark:border-light dark:text-light"
      />
      or reach out to me on
      <input
        type="tel"
        placeholder="Your phone number"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-dark/20 focus:border-dark/20 bg-transparent dark:border-light dark:text-light"
      />
      Here are some details of my project <br /> <br />
      <textarea
        {...register("Text", {})}
        rows={3}
        placeholder="My project is about..."
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0  placeholder:text-lg border-b border-dark/20 focus:border-dark/20 bg-transparent dark:border-light dark:text-light"
      />
      <input
        type="submit"
        value={"send request"}
        className="block mt-8 font-medium capitalize text-2xl px-5 py-3 border-2 border-solid border-dark rounded cursor-pointer dark:bg-light dark:text-dark hover:scale-105 transition-all ease-in-out duration-500"
      />
    </form>
  );
};

export default ContactForm;
