import React from "react";

function Discount() {
  return (
    <>
      <section className="z-10 relative">
        <div className="max-w-[300px] sm:max-w-sm md:max-w-[600px] mx-auto text-center px-4 py-10 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 space-y-3 md:space-y-5">
          <h2 className="text-h2 font-sansita font-medium text-colors-primaryDark">
            20% Off Your First Order
          </h2>
          <p className="text-colors-textBlack font-medium font-inter text-sm sm:text-base lg:text-lg xl:text-xl">
            Enjoy 20% off on our delicious baked treats, freshly made and
            crafted with love just for you.
          </p>
          <div className="pt-4 md:pt-6 lg:pt-8">
            <a href="#about" className="button">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Discount;
