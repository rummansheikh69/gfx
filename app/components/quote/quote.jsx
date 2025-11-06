import Image from "next/image";
import React from "react";
import { MdOutlineDone } from "react-icons/md";

function Quote() {
  return (
    <div id="quote" className=" w-full pt-24 ">
      <div className=" px-5 md:px-10 lg:px-14 xl:px-20 2xl:px-32 w-full">
        <div className="w-full border-2 border-[#303030] rounded-2xl bg-[#121212] relative overflow-hidden">
          <div className=" absolute -left-[420px] 2xl:-left-72 top-56 2xl:top-64 h-[2500px] w-[2500px] rounded-full bg-[#414141] blur-[150px]"></div>
          <div className="  z-10 py-10 px-7 2xl:px-10 ">
            <div className=" grid grid-cols-1 lg:grid-cols-2">
              <div className="">
                <h1 className=" text-6xl tracking-wide leading-none  bg-gradient-to-r from-white via-[#c3c3c3]  to-[#c3c3c3] bg-clip-text text-transparent">
                  Retainer Service
                </h1>

                <h3 className="text-[#a4a4a4] my-5 text-2xl">
                  Unlimited requests, quick turnarounds, <br /> all for a fixed
                  weekly price.
                </h3>

                <div className=" flex items-center gap-3 mb-2">
                  <MdOutlineDone className=" text-white size-6" />
                  <h2 className=" text-white text-xl tracking-wide">
                    Unlimited Requests
                  </h2>
                </div>
                <div className=" flex items-center gap-3 mb-2">
                  <MdOutlineDone className=" text-white size-6" />
                  <h2 className=" text-white text-xl tracking-wide">
                    Pause/Cancel Whenever
                  </h2>
                </div>
                <div className=" flex items-center gap-3 mb-2">
                  <MdOutlineDone className=" text-white size-6" />
                  <h2 className=" text-white text-xl tracking-wide">
                    No Contracts/Obligations
                  </h2>
                </div>
                <div className=" flex items-center gap-3 mb-2">
                  <MdOutlineDone className=" text-white size-6" />
                  <h2 className=" text-white text-xl tracking-wide">
                    Prioritised Turnaround
                  </h2>
                </div>
                <div className=" flex items-center gap-3 ">
                  <MdOutlineDone className=" text-white size-6" />
                  <h2 className=" text-white text-xl tracking-wide">
                    Multi-Brand Coverage
                  </h2>
                </div>
              </div>

              <div className=" relative">
                <div className=" w-full h-full flex items-center justify-center">
                  <div className=" flex items-end">
                    <h2 className="text-[150px] font-tommy-regular tracking-wide leading-none  bg-gradient-to-r from-white via-[#c3c3c3]  to-[#c3c3c3] bg-clip-text text-transparent">
                      $200
                    </h2>
                    <div className=" flex flex-col items-center mb-4">
                      <h4 className=" text-3xl text-[#a4a4a4]">/week</h4>
                      <h4 className="text-xl text-[#a4a4a4]">(negotiable)</h4>
                    </div>
                  </div>
                </div>

                <div className=" absolute bottom-0 inset-x-0 mx-auto w-56 h-14 border-2 rounded-xl border-white bg-gradient-to-l from-[#999999] to-white flex items-center justify-center group cursor-pointer">
                  <div className="flex items-center gap-3 ">
                    <h3 className="text-[25px] text-black">Contact</h3>
                    <Image
                      src="/arrow-right-black.svg"
                      alt="arrow"
                      width={22}
                      height={22}
                      className="group-hover:translate-x-2 duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
