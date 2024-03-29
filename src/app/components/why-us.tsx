/* eslint-disable @next/next/no-img-element */
import { whyUs } from "app/core/_data";
import React from "react";

const WhyUs = () => {
  return (
    <section className="container-max flex flex-col justify-center py-5  pt-0 xl:pt-20 items-center">
      <div className="px-5 md:px-16 lg:px-0 pb-4 md:pb-10 max-w-screen-lg text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl lg:leading-tight font-semibold">
          Why Organizations Choose HighQ Desk for Staff Augmentation?
        </h1>
        <p className="text-base md:text-lg pt-4 sm:pt-8 font-medium sm:px-8">
          Why settle for good when you can have the best? HighQDesk isn&apos;t
          just a cloud staffing solution; it&apos;s a gateway to asia&apos;s
          elite IT mastery with a decade of experience at your service.
        </p>
      </div>
      <div className="sm:grid flex flex-col sm:grid-cols-3 my-8 max-w-screen-xl bg-black text-white rounded-lg px-5 py-5">
        {whyUs &&
          whyUs.map(({ id, img, name, desc }) => (
            <div
              key={id}
              className="bg-[#262523] rounded-md my-5 mx-5 p-4 lg:py-6 lg:ps-6 lg:pe-7"
            >
              <h1 className="font-semibold text-sm leading-none md:text-base md:leading-tight lg:text-xl pb-3">
                {name}
                <img className="ps-2 inline" src={img} alt={name} />
              </h1>
              <p className="text-xs lg:text-sm pb-1">{desc}</p>
            </div>
          ))}
        <div className="bg-primary gap-5 md:gap-0 text-black col-span-3 grid grid-flow-row md:grid-cols-3 rounded-md items-center justify-center mx-5 mb-5">
          <div className="py-5 px-2 md:ps-3 md:pe-1 md:py-1 lg:px-8 xl:px-12">
            <h1 className="font-medium text-xl pb-2 sm:text-2xl md:text-xl md:leading-none lg:text-3xl xl:text-4xl md:pb-1 lg:pb-3">
              Infinite Business Continuity
            </h1>
            <p className="text-xs md:text-sm lg:text-sm pb-1">
              We understand the importance of uninterrupted business operations
              for IT companies. HighQ Desk provides every onboarded company with
              free project manager, dedicated CSM, and employee replacement
              support as part of our IT staffing services.
            </p>
          </div>
          <div>
            <img
              className="m-auto w-3/4 sm:w-1/2 md:w-full"
              src="/images/whyus-infinity.png"
              alt="infinity"
            />
          </div>
          <div>
            <img
              className="m-auto w-3/4 sm:w-1/2 md:w-full"
              src="/images/whyus-hand.png"
              alt="hand"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
