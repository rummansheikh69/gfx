import Image from "next/image";
import React from "react";

function Services() {
  return (
    <div id="services" className=" w-full pt-24 ">
      <div className=" flex items-center justify-center w-full">
        <div className=" flex items-center justify-center w-full gap-20">
          <div className=" h-[2px] w-1/5  bg-gradient-to-l from-[#acacac] via-[#6e6e6e] to-[#121212]"></div>
          <div className="">
            <h1 className=" text-7xl font-tommy-regular tracking-wide leading-none -mt-3  bg-gradient-to-r from-white  to-[#c3c3c3] bg-clip-text text-transparent">
              Our Services
            </h1>
          </div>
          <div className=" h-[2px] w-1/5  bg-gradient-to-r from-[#acacac] via-[#6e6e6e]  to-[#121212]"></div>
        </div>
      </div>
      {/* cards  */}
      <div className=" mt-24 px-5 md:px-10 lg:px-14 xl:px-20 2xl:px-32">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <div className=" h-[350px] 2xl:h-[420px]  w-full border-2 border-[#383838] rounded-2xl bg-[#121212] relative overflow-hidden">
            <div className=" absolute -right-14 -bottom-6">
              <Image
                src="/logo_design.png"
                alt="review"
                width={300}
                height={300}
              />
            </div>

            <div className=" absolute top-40 left-20 w-[500px] h-[500px] rounded-full bg-[#3f3f3f] blur-[150px]"></div>

            <div className=" p-5 z-10 flex flex-col justify-between h-full">
              <div className=" w-12 h-12 border-[1.5px] bg-[#202020] border-[#5f5f5e] rounded-full flex items-center justify-center text-2xl font-tommy-light font-light">
                01
              </div>
              <div className=" mt-10">
                <h2 className=" text-xl 2xl:text-2xl">Logo Design</h2>
                <h2 className=" text-sm 2xl:text-lg  text-[#a4a4a4]">
                  The face of your brand.
                </h2>
              </div>

              <h3 className="text-sm 2xl:text-lg mb-3 tracking-wider text-[#a4a4a4] underline">
                Starting at $20
              </h3>
            </div>
          </div>

          <div className=" h-[350px] 2xl:h-[420px]  w-full border-2 border-[#383838] rounded-2xl bg-[#121212] relative overflow-hidden">
            <div className=" absolute right-0 bottom-0">
              <Image
                src="/socials.png"
                alt="review"
                width={500}
                height={500}
                className=" scale-150"
              />
            </div>

            <div className=" absolute top-44 left-20 w-[500px] h-[500px] rounded-full bg-[#3f3f3f] blur-[150px]"></div>

            <div className=" p-5 z-10 flex flex-col justify-between h-full">
              <div className=" w-12 h-12 border-[1.5px] bg-[#202020] border-[#5f5f5e] rounded-full flex items-center justify-center text-2xl font-tommy-light font-light">
                02
              </div>
              <div className=" mt-10">
                <h2 className=" text-xl 2xl:text-2xl">Banner Design</h2>
                <h2 className=" text-sm 2xl:text-lg text-[#a4a4a4]">
                  Your brand, in full view.
                </h2>
              </div>

              <h3 className="text-sm 2xl:text-lg mb-3 tracking-wider text-[#a4a4a4] underline">
                Starting at $15
              </h3>
            </div>
          </div>

          <div className=" h-[350px] 2xl:h-[420px]  w-full border-2 border-[#383838] rounded-2xl bg-[#121212] relative overflow-hidden">
            <div className=" absolute -right-14 -bottom-1">
              <Image src="/globe.png" alt="review" width={300} height={300} />
            </div>

            <div className=" absolute top-44 left-20 w-[500px] h-[500px] rounded-full bg-[#3f3f3f] blur-[150px]"></div>

            <div className=" p-5 z-10 flex flex-col justify-between h-full">
              <div className=" w-12 h-12 border-[1.5px] bg-[#202020] border-[#5f5f5e] rounded-full flex items-center justify-center text-2xl font-tommy-light font-light">
                03
              </div>
              <div className=" mt-10">
                <h2 className=" text-xl 2xl:text-2xl">Website Design</h2>
                <h2 className=" text-sm 2xl:text-lg text-[#a4a4a4]">
                  The hub that connects it all.
                </h2>
              </div>

              <h3 className="text-sm 2xl:text-lg mb-3 tracking-wider text-[#a4a4a4] underline">
                Starting at $100
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* cards end */}

      <h4 className=" text-3xl font-extrabold tracking-wide leading-none  bg-gradient-to-r from-white  to-[#c3c3c3] bg-clip-text text-transparent text-center mt-20">
        & So Much More..
      </h4>
    </div>
  );
}

export default Services;
