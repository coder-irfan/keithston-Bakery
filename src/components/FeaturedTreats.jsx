import React from "react";

function FeaturedTreats() {
  return (
    <>
      <section
        id="treats"
        className="px-4 py-10 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 overflow-hidden max-w-[80rem] mx-auto"
      >
        <div className="space-y-4 md:space-y-8">
          <div className="text-colors-textBlack space-y-2">
            <h2 className="text-h2 font-semibold font-sansita text-center">
              Featured Treats
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center font-medium font-inter">
              Explore our featured treats
            </p>
          </div>

          <hr className="border border-b-colors-textDarkGray" />

          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <div className="relative">
              <img
                src="images/pastery-1.webp"
                alt="pastery"
                className="w-80 md:w-full rounded-md"
              />
              <span className="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
                $20
              </span>
            </div>
            <div className="relative">
              <img
                src="images/doughnut.webp"
                alt="doughnut"
                className="w-80 md:w-full rounded-md"
              />
              <span className="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
                $35
              </span>
            </div>
            <div className="relative">
              <img
                src="images/brownies.webp"
                alt="brownies"
                className="w-80 md:w-full rounded-md"
              />
              <span className="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
                $30
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedTreats;
