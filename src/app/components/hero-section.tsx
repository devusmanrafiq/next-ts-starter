/* eslint-disable @next/next/no-img-element */
"use client";
import { companyLogos, heroData } from "app/core/_data";
import Button from "components/core-ui/button/button";
import handleCalendly from "hooks/use-button-click";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const handleClick = handleCalendly();
  return (
    <section className="container-max relative">
      <div className="flex items-end flex-col sm:flex-col sm:pt-5 md:flex-row lg:pt-3 xl:pt-6 relative">
        <div className="px-6 xsm:px-12 me-5 sm:px-16 lg:ps-16 md:ps-16 md:pe-0 lg:pe-3 xl:ps-24">
          <h1 className="font-semibold 3xl:pe-20 text-3xl xsm:text-4xl sm:text-5xl sm:mr-0 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-7.5xl md:pb-2 lg:pb-6 md:mr-[-5rem] lg:mr-[-7rem] 2xl:mr-[-5rem]">
            <span className="text-primary">Hire Asia&apos;s IT</span> Talent
            within 24 hours
          </h1>

          <p className="xl:text-lg lg:text-base md:text-sm sm:text-base text-sm lg:me-[-2rem] md:me-[-3rem] 2xl:me-16">
            Forget the old ways of hiring, save recruitment fees, and all other
            hiring hassle. HighQ Desk opens the door to Asia&apos;s most skilled
            remote IT talent for your business.
          </p>
          <div className="flex flex-col xsm:flex-row gap-4 text-xs mt-4 md:mr-[-1rem] mb-6 sm:gap-8 sm:text-sm sm:mt-4 sm:mb-6 md:gap-3 lg:gap-5 md:text-xs md:pt-3 lg:text-sm md:pb-4 lg:pb-8 xl:pb-12">
            <Button
              onClick={handleClick}
              variant="primary"
              type="button"
              className="py-2 px-7 md:py-2 md:px-3 lg:py-2 lg:px-5 xl:px-8 xl:py-3"
            >
              Hire Your Team
            </Button>
            <Button
              variant="default"
              type="button"
              className="py-2 px-6 md:py-2 md:px-3 lg:py-2 lg:px-5 xl:px-8 xl:py-3 hover:border-gray-200"
            >
              Apply as a Talent
            </Button>
          </div>
        </div>
        <img
          className="mx-auto xl:max-w-2xl lg:max-w-xl md:max-w-md sm:max-w-lg xsm:max-w-md max-w-xs"
          src="/images/hero-image.png"
          alt="people"
        />
      </div>
      <div className="flex flex-col gap-7 items-center xl:flex-row justify-between bg-black py-10 text-white 2xl:ps-14 2xl:pe-20 md:ps-12 md:pe-16">
        <div>
          <p className="ps-3 sm:ps-12">Trusted by Leading Companies</p>
          <div className="grid grid-cols-2 xsm:grid-cols-3 sm:grid-cols-5 items-center gap-2 sm:pt-0 pt-7">
            {companyLogos.map(({ icon, key, href }) => (
              <Link href={href} key={key} className="flex justify-evenly">
                <img src={icon} alt="companies" />
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 ps-2 xsm:ps-0 max-w-3xl ">
          {heroData &&
            heroData.map(({ id, name, number, desc }, index) => (
              <div key={id}>
                <p className="text-primary mb-4 text-base font-semibold">
                  {name}
                </p>
                <div className="flex justify-between">
                  <p>{number}</p>
                  {index < heroData.length - 1 && (
                    <hr className="h-4 ml-10 mt-2 rounded bg-gray-700 w-0.25 border-0" />
                  )}
                </div>
                <p className="text-xs">{desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
