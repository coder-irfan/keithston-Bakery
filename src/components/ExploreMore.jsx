import React from "react";

function ExploreMore() {
  return (
    <>
      <section
        id="explore"
        className="px-4 py-10 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 overflow-hidden max-w-[80rem] mx-auto"
      >
        <div className="space-y-4 md:space-y-8">
          <div className="space-y-4 md:space-y-8">
            <div className="space-y-4">
              <h2 className="text-h2 text-colors-textBlack font-semibold font-sansita text-center">
                Explore More
              </h2>{" "}
              <hr className="border border-b-colors-textDarkGray" />
            </div>

            <div className="overflow-hidden relative">
              <div className="flex whitespace-nowrap animate-scroll gap-6 lg:gap-12 py-4">
                {["Cake", "Muffins", "Croissant", "Bread", "Tart"].map(
                  (item, idx) => (
                    <div
                      className="inline-block bg-gradient-to-br from-colors-primaryLightesh to-colors-primaryLight border border-colors-primaryLight rounded-xl py-2 px-6 lg:py-3 lg:px-8 text-colors-textLight text-sm md:text-base lg:text-lg font-semibold transform transition-transform duration-500 hover:scale-110"
                      key={idx}
                    >
                      {item}
                    </div>
                  )
                )}
                {["Cake", "Muffins", "Croissant", "Bread", "Tart"].map(
                  (item, idx) => (
                    <div
                      className="inline-block bg-gradient-to-br from-colors-primaryLightesh to-colors-primaryLight border border-colors-primaryLight rounded-xl py-2 px-6 lg:py-3 lg:px-8 text-colors-textLight text-sm md:text-base lg:text-lg font-semibold transform transition-transform duration-500 hover:scale-110"
                      key={`repeat-${idx}`}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
            <img
              src="images/chocolate-capcake.webp"
              alt="chocolate capcake"
              className="w-80 md:w-full rounded-md"
            />
            <img
              src="images/berries-cake.webp"
              alt="berries cake"
              className="w-80 md:w-full rounded-md"
            />
            <img
              src="images/cut-cake.webp"
              alt="cut cake"
              className="w-80 md:w-full rounded-md"
            />
            <img
              src="images/normal-cake.webp"
              alt="normal cake"
              className="w-80 md:w-full rounded-md"
            />
            <img
              src="images/strawberry-cake.webp"
              alt="strawberry cake"
              className="w-80 md:w-full rounded-md"
            />
            <img
              src="images/cherry-cake.webp"
              alt="cherry cake"
              className="w-80 md:w-full rounded-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ExploreMore;
