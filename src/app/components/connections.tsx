"use client";
/* eslint-disable @next/next/no-img-element */
import { connectionData } from "app/core/_data";
import Button from "components/core-ui/button/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import handleCalendly from "hooks/use-button-click";

const Connections = () => {
  const handleClick = handleCalendly();

  return (
    <section className="container-max flex flex-col justify-center items-center pt-6 sm:pt-12 pb-20">
      <div className=" pb-10 max-w-screen-md text-center">
        <h1 className="px-5 text-2xl xsm:text-3xl md:text-4xl xl:text-5xl xl:leading-[3.5rem] font-semibold">
          Meet The Top Asian Developers In Our Network
        </h1>
        <p className="text-sm xsm:text-base xl:text-lg py-4 lg:py-10 font-medium">
          Through our professional vetting process, we shortlist the most
          skilled Asian IT talent to connect them with top-notch IT companies
          for their IT Staffing.
        </p>
        <Button
          onClick={handleClick}
          className="rounded-md text-white font-medium text-sm md:text-base py-2 px-4 xsm:px-6 lg:px-8 lg:py-3"
        >
          Hire Developers
        </Button>
      </div>
      <div className="w-full ps-5 sm:ps-10">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={20}
          className="mt-3 lg:mt-8"
          autoplay={{
            delay: 4500,
          }}
          loop
          modules={[Autoplay]}
          breakpoints={{
            480: {
              slidesPerView: 2.2,
              spaceBetween: 25,
            },
            640: {
              slidesPerView: 2.7,
              spaceBetween: 25,
            },
            796: {
              slidesPerView: 3.3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4.2,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4.7,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 5.2,
              spaceBetween: 50,
            },
          }}
        >
          {connectionData &&
            connectionData.map(({ id, img, role, icon }) => (
              <SwiperSlide key={id}>
                <img className="w-full" src={img} alt={role} />
                <div className="bg-black flex items-center gap-2 2xl:gap-4 ps-2 xl:ps-3 3xl:ps-4 py-3 xl:py-5 border-t-3 border-primary">
                  <img src={icon} alt="Q" />
                  <h2 className="text-white font-medium leading-none text-xs sm:text-sm xl:text-base">
                    {role}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Connections;
