import React from "react";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="flex justify-center items-center text-center lg:justify-start lg:items-start lg:text-start z-10 relative px-4 pt-36 pb-24 sm:px-6 sm:pt-44 sm:pb-36 md:px-8 md:pt-44 md:pb-28 lg:px-16 lg:pt-44 lg:pb-32 xl:pt-48 xl:pb-[8.2rem]"
      >
        <div className="max-w-[400px] md:max-w-[500px] space-y-10 xl:space-y-16">
          <div className="space-y-2">
            <span className="text-heroSubtitle font-semibold font-inter text-colors-primaryLight">
              Delicious Cafe
            </span>
            <h1 className="text-h1 font-sansita leading-tight">
              Sweet Treats, Perfect Eats
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-inter">
              Indulge in our freshly baked delights — from decadent cakes to
              buttery pastries, each treat is crafted with love to make your day
              a little sweeter
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-6 font-inter font-semibold">
            <a href="#products" className="button">
              Shop Now
            </a>
            <a
              href="#about"
              className="px-3 py-1.5 lg:px-4 lg:py-2 bg-colors-primaryDark/40 border-2 border-colors-primaryDark hover:bg-colors-primaryDark hover:border-2 hover:border-colors-primaryDark rounded-md text-sm md:text-base xl:text-lg transition-all duration-300 cursor-pointer"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
