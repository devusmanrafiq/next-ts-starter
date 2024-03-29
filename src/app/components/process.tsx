/* eslint-disable @next/next/no-img-element */
import { processData } from "app/core/_data";
import React from "react";

const Process = () => {
  return (
    <section className="container-max relative flex flex-col justify-center items-center py-10 sm:py-20 lg:py-28 border-b-2 border-gray-300">
      <img className="absolute right-0 top-10" src="/icons/5.svg" alt="five" />
      <div className="pb-9 sm:pb-20 max-w-screen-lg text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold">
          HighQ Desk <span className="text-primary">Hiring Process</span>
        </h1>
        <p className="text-sm sm:text-base px-5 lg:text-lg pt-4 sm:pt-8 font-medium">
          At HighQ Desk, we understand the importance of finding the right IT
          resources to enhance your team&apos;s capabilities. That&apos;s why we
          have developed a streamlined 5-step hiring process that ensures a
          seamless and successful recruitment experience. Here&apos;s a
          breakdown of our process:
        </p>
      </div>
      <div className="grid grid-cols-1 max-w-md gap-10 xl:gap-1 md:max-w-full md:grid-cols-3 xl:grid-cols-5 px-6">
        {processData &&
          processData.map(({ id, img, name, desc }) => (
            <div key={id} className="px-4 flex flex-col items-center">
              <img src={img} alt="first-step" />
              <h1 className="text-xl text-center font-semibold pt-4 pb-3 md:h-20 3xl:h-auto">
                {name}
              </h1>
              <p className="text-center font-medium text-sm">{desc}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Process;
