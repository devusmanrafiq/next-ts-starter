/* eslint-disable @next/next/no-img-element */
"use client";
import { storiesData } from "app/core/_data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import React from "react";

const Stories = () => {
  return (
    <section className="container-max flex flex-col py-8 sm:py-12 md:py-20 justify-center items-center border-b-2 border-gray-300">
      <div className="pb-2 sm:pb-4 px-3 md:pb-10 max-w-screen-lg text-center">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl xl:leading-[3rem] font-medium">
          HighQ <span className="text-primary font-semibold"> Success </span>
          Stories
        </h1>
        <p className="text-base md:text-lg pt-3 sm:pt-8 font-medium px-4">
          HighQ Desk&apos;s journey has been illuminated by its collaboration
          with visionary partners and remarkable IT clients, jointly forging a
          path towards excellence in IT.
        </p>
      </div>
      <div className="px-3 max-w-[80%] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl">
        <Swiper
          pagination={{
            el: ".swiper-custom-pagination",
            clickable: true,
          }}
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroup={1}
          slidesPerGroupSkip={0}
          spaceBetween={10}
          className="mt-8"
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
              slidesPerGroup: 3,
            },
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          {storiesData &&
            storiesData.map(({ id, img, name, title, desc, icon }) => (
              <SwiperSlide key={id}>
                <div
                  key={id}
                  className="border-2 relative border-primary rounded-2xl p-5 md:p-4 sm:h-105 md:h-80 lg:h-96 3xl:h-88"
                >
                  <div className="flex items-center gap-1 md:gap-2 xl:gap-4">
                    <img src={img} alt={name} />
                    <div>
                      <h3 className="text-base font-medium leading-6">
                        {name}
                      </h3>
                      <h4 className="text-xs leading-none">{title}</h4>
                    </div>
                  </div>
                  <p className="text-sm py-1 pb-3 md:py-4 text-justify">
                    {desc}
                  </p>
                  <div className="absolute right-2 bottom-2 md:bottom-3 xl:bottom-3 2xl:bottom-5 md:right-3">
                    <img src={icon} alt="icon" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-custom-pagination pt-8 flex justify-center" />
      </div>
    </section>
  );
};

export default Stories;
