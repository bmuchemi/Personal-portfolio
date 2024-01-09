// About.js
import React from "react";
import ResumeButton from "./ResumeButton";

export default function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex px-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi, I'm Benjamin Muchemi
            <br className="hidden lg:inline-block" />
            Passionate about crafting exceptional applications.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a dedicated software developer with a strong foundation in
            creating robust and innovative software solutions. My enthusiasm
            lies in building scalable and user-friendly applications that
            address real-world challenges. I am committed to continuous learning
            and staying up-to-date with the latest industry trends.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="ml-4 inline-flex text-white-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Let's collaborate
            </a>
            <ResumeButton />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
