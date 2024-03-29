/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "components/core-ui/button/button";
import handleCalendly from "hooks/use-button-click";
import React from "react";

const Oppotunities = () => {
  const handleClick = handleCalendly();
  return (
    <section className="container-max pt-16">
      <div className="flex-col xsm:items-center lg:flex-row bg-primary max-w-[85%] xsm:max-w-[70%] sm:max-w-[55%] lg:max-w-[82%] flex m-auto rounded-2xl">
        <div className="p-5 xl:py-6 md:ps-4 lg:mr-[-2rem] xl:mr-[-3rem] 2xl:mr-0 xl:ps-7">
          <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-4xl lg:mr-[-1rem] lg:py-2 xl:py-4 font-medium">
            Have a Potential?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-5 pb-5">
            Are you an experienced and enthusiastic IT developer? Join the most
            extensive network of HighQ Desk to explore a new horizon of
            opportunities.
          </p>
          <Button className="border-none font-semibold bg-black hover:bg-gray-100 hover:text-black text-xs lg:text-sm xl:text-base py-2 px-6 lg:px-6 lg:py-2 xl:px-8 xl:py-3">
            Apply as a Talent
          </Button>
        </div>
        <img
          className="hidden lg:block"
          src="/images/opportunities.png"
          alt="Group"
        />
        <img
          className="block lg:hidden"
          src="/images/opportunities-res.png"
          alt="Group"
        />
      </div>
      <div className="flex flex-col xsm:flex-row mt-16 bg-black text-white py-10 border-b-2 border-white">
        <div className="px-7 md:px-12 lg:px-24 xl:pe-28">
          <h2 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
            Book Free Consultancy
          </h2>
          <p className="text-sm lg:text-base py-2 sm:py-5">
            Get in touch with the team HighQ Desk to book free consultancy and
            talk to HighQ experts for any assistance or discussing project
            scope.
          </p>
          <Button
            onClick={handleClick}
            className="border-none font-semibold my-4 sm:my-4 text-black bg-white hover:bg-primary hover:text-white px-4 py-2 text-sm lg:text-base lg:px-8 lg:py-3"
          >
            Schedule Meeting
          </Button>
        </div>
        <div className="px-7 md:px-12 lg:px-32">
          <h2 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary">
            Request IT Resource
          </h2>
          <p className="text-sm lg:text-base py-5">
            Get in touch with the team HighQ Desk to book free consultancy and
            talk to HighQ experts for any assistance or discussing project
            scope.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Oppotunities;
