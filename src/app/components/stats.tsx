/* eslint-disable @next/next/no-img-element */
"use client";
import { statsData } from "app/core/_data";
import Button from "components/core-ui/button/button";
import handleCalendly from "hooks/use-button-click";
import React from "react";

const Stats = () => {
  const handleClick = handleCalendly();

  return (
    <section className="container-max relative flex flex-col ps-8 lg:ps-20 py-9 sm:py-16 lg:py-28">
      <img
        className="hidden xl:block absolute right-0 top-0"
        src="/images/stats-group.png"
        alt="Stats"
      />
      <div className="max-w-screen-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium">
          Expanded Globaly
        </h1>
        <p className="text-base lg:text-lg xl:text-base 2xl:text-lg pt-4 xsm:pt-8 pe-5 xl:pe-0 font-medium xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-screen-md">
          HighQ Desk&apos;s network spans across key IT-focused Asian markets,
          connecting you with highly skilled and dedicated IT professionals for
          your staffing needs.
        </p>
      </div>
      <div className="py-7 grid grid-cols-3 xsm:grid-cols-5 xl:max-w-screen-sm 2xl:max-w-screen-md">
        {statsData &&
          statsData.map(({ id, name, desc }) => (
            <div key={id}>
              <h1 className="font-secondary text-primary-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold">
                {name}
              </h1>
              <p className="font-medium text-xs sm:text-sm md:text-lg xl:text-base 2xl:text-lg pb-4 pt-2">
                {desc}
              </p>
            </div>
          ))}
      </div>
      <Button
        className="text-sm md:text-base py-2 px-4 lg:px-8 lg:py-3"
        variant="primary"
        type="button"
        onClick={handleClick}
      >
        Request Talent
      </Button>
    </section>
  );
};

export default Stats;
