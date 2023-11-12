import ContactForm from "@/components/contect/contact-form";
import LottieAnimation from "@/components/cotnact/lottie-animation";
import siteMetadata from "@/lib/siteMetadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact me",
  description: `Contact me through this form or email me at ${siteMetadata.email}`,
};

const ContactPage = () => {
  return (
    <section className="w-full h-[75vh] md:border-b-2 border-solid border-dark flex flex-col md:flex-row items-center justify-center text-dark container-full">
      <div className="md:w-2/5 h-full flex items-center md:border-r-2 flex-1 border-solid border-dark">
        <LottieAnimation />
      </div>
      <div className="md:w-3/5 flex flex-col items-start justify-center pb-6 md:p-16">
        <h2 className="font-bold capitalize text-4xl">Lets Connect</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
