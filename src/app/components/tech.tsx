/* eslint-disable @next/next/no-img-element */
import { techData } from "app/core/_data";
import React from "react";

const Tech = () => {
  return (
    <section className="container-max flex flex-col py-14 md:py-20 justify-center items-center bg-gradient-to-b from-[#F3F3F3] to-[#f3f3f300] border-b-2 border-gray-300">
      <div className="px-5 pb-10 max-w-screen-lg text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl xl:leading-[3.5rem] font-medium">
          Variety of Tech stacks we hire talent for
        </h1>
        <p className="text-sm sm:text-base lg:text-lg pt-3 md:pt-8 font-medium px-6 md:px-20">
          Given the HighQ&apos;s vast pool of IT professionals in Asia, any
          company can request a broad spectrum of IT skills and services for
          their IT hiring needs.
        </p>
      </div>
      <div className="grid grid-cols-2 xsm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-16 justify-between px-4 sm:px-9 md:px-16 lg:px-20">
        {techData &&
          techData.map(({ id, img, name }) => (
            <div
              key={id}
              className="text-center text-sm md:text-base flex flex-col justify-center items-center gap-5 font-medium"
            >
              <img className="pb-4" src={img} alt={name} />
              {name}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Tech;
