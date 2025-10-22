import React from "react";

function Footer() {
  return (
    <>
      <section
        id="contact"
        className="px-4 sm:px-6 md:px-8 py-8 md:py-10 lg:px-16 lg:py-12 relative z-10"
      >
        <div className="space-y-6 lg:space-y-10">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <img src="images/logo.webp" alt="logo" className="" />

            <div className="flex items-center gap-6 lg:gap-10">
              <h3 className="text-h3 font-semibold text-colors-primaryLight">
                Follow Us
              </h3>

              <div className="flex items-center gap-2 md:gap-4">
                <img
                  src="images/facebook.webp"
                  alt="facebook"
                  className="w-6 md:w-8"
                />
                <img
                  src="images/pinterest.webp"
                  alt="pinterest"
                  className="w-6 md:w-8"
                />
                <img
                  src="images/whatsapp.webp"
                  alt="whatsapp"
                  className="w-6 md:w-8"
                />
                <img
                  src="images/instagram.webp"
                  alt="instagram"
                  className="w-6 md:w-8"
                />
              </div>
            </div>
          </div>

          <hr className="border-b border-colors-primaryLight/30" />

          <div className="space-y-10 md:space-y-14 lg:space-y-20 flex flex-col items-center justify-center text-center md:items-stretch md:justify-normal md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
              <div className="space-y-3 md:space-y-4">
                <h3 className="font-semibold text-colors-primaryLight font-inter text-h3">
                  About Us
                </h3>
                <ul className="text-sm md:text-base lg:text-lg space-y-2 md:space-y-1">
                  <li className="">(456) 789-12301</li>
                  <li className="">info@modrino.co.uk</li>
                  <li className="">
                    South 13th street <br /> New York US
                  </li>
                </ul>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h3 className="font-semibold text-colors-primaryLight font-inter text-h3">
                  Explore
                </h3>
                <ul className="text-sm md:text-base items-center lg:text-lg space-y-2 md:space-y-1 flex flex-col md:items-start">
                  <li className="hover-link cursor-pointer">Home</li>
                  <li className="hover-link cursor-pointer">Blog</li>
                  <li className="hover-link cursor-pointer">Contact Us</li>
                  <li className="hover-link cursor-pointer">Services</li>
                </ul>
              </div>
              <div className="space-y-6 md:space-y-4">
                <h3 className="font-semibold text-colors-primaryLight font-inter text-h3">
                  Recent News
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <img
                      src="images/pastery-2.webp"
                      alt="pastery"
                      className="w-20 md:w-auto"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm text-colors-primaryLight">
                        {new Date().getDate()}/{new Date().getMonth() + 1}/
                        {new Date().getUTCFullYear()}
                      </span>
                      <span className="text-sm md:text-base">
                        Puff Pastery Bliss
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <img
                      src="images/pastery-3.webp"
                      alt="pastery"
                      className="w-20 md:w-auto"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm text-colors-primaryLight">
                        {new Date().getDate()}/{new Date().getMonth() + 1}/
                        {new Date().getUTCFullYear()}
                      </span>
                      <span className="text-sm md:text-base">
                        Puff Pastery Bliss
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-colors-textDarkGray text-sm sm:text-base md:text-lg xl:text-xl font-medium">
              © {new Date().getFullYear()} All rights reserved -{" "}
              <strong className="text-colors-primaryLight/60">
                Coder Irfan
              </strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
