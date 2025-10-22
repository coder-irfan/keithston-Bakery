import React from "react";

function About() {
  return (
    <>
      <section id="about" className="z-10 relative scroll-mt-16">
        <div className="max-w-[300px] sm:max-w-sm md:max-w-[550px] mx-auto text-center px-4 py-10 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 space-y-3 md:space-y-5">
          <h2 className="text-h2 font-sansita font-semibold">About Us</h2>
          <p className="font-medium font-inter text-sm sm:text-base lg:text-lg xl:text-xl">
            At Keithston Bakery Delight, we craft fresh, handcrafted baked goods
            with love, bringing joy and flavor to every bite.
          </p>
          <div className="pt-4 md:pt-6 lg:pt-10">
            <a href="#treats" className="button">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
