import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

function Header({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="font-poppins">
        <div
          className={`px-4 sm:px-6 md:px-8 py-1 md:py-2 lg:px-16 fixed top-0 right-0 left-0 z-[60]
          transition-color duration-300 max-w-[100rem] mx-auto ${
            scrolled ? "bg-colors-bgDark/80 shadow-lg" : ""
          }  `}
        >
          <div
            className={`md:hidden fixed w-screen h-screen opacity-75 inset-0 bg-black transition-all duration-700 z-20
            ${
              isOpen
                ? "translate-x-0 delay-100 pointer-events-auto"
                : "translate-x-full delay-200 pointer-events-none"
            }`}
          ></div>

          <div className="flex items-center justify-between">
            <img
              src="images/logo.webp"
              alt="logo"
              className="w-12 h-12 lg:w-14 lg:h-14"
            />

            <div className="z-50">
              <nav
                className={`md:relative fixed top-0 right-0 h-full w-4/5 sm:w-2/3 md:right-0 transition-all duration-700 pt-24 pr-6 md:pr-0 md:pt-0
                md:h-auto md:w-auto md:translate-x-0 bg-colors-bgDark/95 md:bg-transparent ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <ul className="flex flex-col md:flex-row items-end md:items-center gap-4 md:gap-8 lg:gap-10 xl:gap-12 text-base lg:text-lg text-colors-textLight font-medium">
                  <li className="hover-link">
                    <a href="#home" className="">
                      Home
                    </a>
                  </li>
                  <li className="h-[0.06rem] w-full bg-colors-textDarkGray md:hidden"></li>
                  <li className="hover-link">
                    <a href="#products" className="">
                      Products
                    </a>
                  </li>
                  <li className="h-[0.06rem] w-full bg-colors-textDarkGray md:hidden"></li>
                  <li className="hover-link">
                    <a href="#explore" className="">
                      Explore
                    </a>
                  </li>
                  <li className="h-[0.06rem] w-full bg-colors-textDarkGray md:hidden"></li>
                  <li className="hover-link">
                    <a href="#about" className="">
                      About
                    </a>
                  </li>
                  <li className="h-[0.06rem] w-full bg-colors-textDarkGray md:hidden"></li>
                  <li className="hover-link">
                    <a href="#treats" className="">
                      Treats
                    </a>
                  </li>
                  <li className="h-[0.06rem] w-full bg-colors-textDarkGray md:hidden"></li>
                  <li className="hover-link">
                    <a href="#contact" className="">
                      Contact
                    </a>
                  </li>
                  <li className="h-[0.06rem] w-full bg-colors-textDarkGray md:hidden"></li>
                </ul>

                {isOpen && (
                  <div
                    className="absolute top-4 right-5 sm:right-6 text-[1.4rem] md:hidden border border-colors-primaryLight cursor-pointer rounded-md p-1"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaTimes className="text-colors-primaryLight" />
                  </div>
                )}
              </nav>
            </div>
            {!isOpen && (
              <div
                className="absolute top-4 right-5 sm:right-6 text-[1.4rem] md:hidden border border-colors-primaryLight cursor-pointer rounded-md p-1"
                onClick={() => setIsOpen(true)}
              >
                <FaBars
                  aria-label="Open menu"
                  className=" text-colors-primaryLight"
                />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
