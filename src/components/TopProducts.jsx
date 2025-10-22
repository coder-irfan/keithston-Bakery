import React from "react";

const products = [
  {
    id: "1",
    img: "images/pastry-with-jam.webp",
    price: "$40",
    info: "i",
    name: "Bread With Jam",
  },
  {
    id: "2",
    img: "images/blueberries-bread.webp",
    price: "$50",
    info: "i",
    name: "Bread With Blueberry",
  },
  {
    id: "3",
    img: "images/loaf-of-bread.webp",
    price: "$35",
    info: "i",
    name: "Loaf Of Bread",
  },
  {
    id: "4",
    img: "images/sugar-powdered-bread.webp",
    price: "$44",
    info: "i",
    name: "Whole Grain Bread",
  },
  {
    id: "5",
    img: "images/bread.webp",
    price: "$60",
    info: "i",
    name: "Sweatened Bread",
  },
  {
    id: "6",
    img: "images/tajiki-bread.webp",
    price: "$40",
    info: "i",
    name: "Tajikistan Bread",
  },
];

function TopProducts() {
  return (
    <>
      <section
        id="products"
        className="px-4 py-10 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-24"
      >
        <div className="space-y-4 md:space-y-8 max-w-6xl mx-auto ">
          <div className="text-colors-textBlack space-y-2">
            <h2 className="text-h2 font-semibold font-sansita text-center">
              Top Products
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center font-medium font-inter">
              Check out our top products
            </p>
          </div>

          <hr className="border border-b-colors-textDarkGray" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-4  bg-colors-bgDark rounded-md p-4"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-48 mx-auto"
                />
                <div className="mt-auto bg-colors-textDarkGray/20 p-4 space-y-6">
                  <div className="flex items-center justify-between gap-3 lg:gap-4">
                    <span className="md:text-lg xl:text-xl font-medium">
                      {product.price}
                    </span>
                    <span className="rounded-full px-2.5 lg:py-1 lg:px-3.5 border cursor-pointer">
                      {product.info}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-h4 font-medium">{product.name}</h4>
                    <button className="button">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TopProducts;
