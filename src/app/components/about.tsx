/* eslint-disable @next/next/no-img-element */
import { aboutData } from "app/core/_data";
import React from "react";

const About = () => {
  return (
    <section className="container-max flex flex-col justify-center items-center py-16 sm:py-24 border-b-4 border-primary">
      <div className="pb-10 md:pb-20 max-w-screen-lg text-center">
        <h1 className="text-3xl xsm:text-4xl sm:text-5xl md:text-6xl font-medium">
          Why HighQ Desk?
        </h1>
        <p className="text-sm xsm:text-base md:text-lg pt-4 sm:pt-8 font-medium px-5 sm:px-10">
          Why settle for good when you can have the best? HighQDesk isn&apos;t
          just a cloud staffing solution; it&apos;s a gateway to Asia&apos;s
          elite IT mastery with a decade of experience at your service.
        </p>
      </div>
      <div className="grid grid-flow-row max-w-lg md:max-w-full gap-12 md:gap-0 md:grid-cols-3 px-2 xsm:px-10 xl:px-16 text-center">
        {aboutData &&
          aboutData.map(({ id, name, img, desc }) => (
            <div key={id} className="px-3 sm:px-8 flex flex-col items-center">
              <img src={img} alt="icon" />
              <h1 className="text-primary font-medium text-xl xsm:text-2xl lg:text-3xl pt-3 xsm:pt-6 pb-3">
                {name}
              </h1>
              <p className="text-center text-sm font-normal">{desc}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default About;
