import React from "react";
import { MdAlarm } from "react-icons/md";
import { AiOutlineTrophy } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

function Review() {
  return (
    <div className=" pb-12 pt-24 ">
      <div className=" w-full h-full flex justify-center items-center">
        <div className=" flex flex-col lg:flex-row gap-52 items-center">
          <div className=" flex flex-col gap-5">
            <div className=" relative">
              <div className=" py-3 border-b">
                <h2 className=" tracking-wider text-lg 2xl:text-2xl leading-none bg-gradient-to-r from-white via-white to-[#c3c3c3] bg-clip-text text-transparent">
                  Unmatched Fulfilment
                </h2>
              </div>
              <div className=" absolute md:-right-[11px] md:-bottom-[5px] lg:-right-[11px] lg:-bottom-[4px] h-8 rotate-45 w-[1px] bg-white" />
              <div className=" absolute md:-right-[61.5px] md:top-[25.5px] lg:-right-[78px] lg:top-[19.5px] 2xl:top-[25.5px]  h-[1px]  w-14 bg-white" />
              <div className=" absolute md:-right-[60px] md:top-[25.5px] lg:-right-[60px] lg:-top-3 ">
                <MdAlarm className=" size-5 2xl:size-6" />
              </div>
            </div>
            <div className=" relative">
              <div className=" py-3 border-b">
                <h2 className=" tracking-wider text-lg 2xl:text-2xl leading-none bg-gradient-to-r from-white via-white to-[#c3c3c3] bg-clip-text text-transparent">
                  5+ Years Experience
                </h2>
              </div>
              <div className=" absolute md:-right-[11px] md:-bottom-[5px] lg:-right-[11px] lg:-bottom-[4px] h-8 rotate-45 w-[1px] bg-white" />
              <div className=" absolute md:-right-[61.5px] md:top-[25.5px] lg:-right-[78px] lg:top-[19.5px] 2xl:top-[25.5px] h-[1px]  w-14 bg-white" />
              <div className=" absolute md:-right-[60px] md:top-[25.5px] lg:-right-[60px] lg:-top-3 ">
                <AiOutlineTrophy className=" size-5 2xl:size-6" />
              </div>
            </div>
            <div className=" relative">
              <div className=" py-3 border-b">
                <h2 className=" tracking-wider text-lg 2xl:text-2xl leading-none bg-gradient-to-r from-white via-white to-[#c3c3c3] bg-clip-text text-transparent">
                  Over 4000+ Vouches
                </h2>
              </div>
              <div className=" absolute md:-right-[11px] md:-bottom-[5px] lg:-right-[11px] lg:-bottom-[4px] h-8 rotate-45 w-[1px] bg-white" />
              <div className=" absolute md:-right-[61.5px] md:top-[25.5px] lg:-right-[78px] lg:top-[19.5px] 2xl:top-[25.5px] h-[1px]  w-14 bg-white" />
              <div className=" absolute md:-right-[60px] md:top-[25.5px] lg:-right-[60px] lg:-top-3 ">
                <GoVerified className=" size-5 2xl:size-6" />
              </div>
            </div>
          </div>

          <div className=" overflow-hidden relative h-96 w-full lg:w-[500px] border-2 border-[#383838] rounded-2xl bg-[#121212] ">
            <div className=" absolute -right-2/5 rotate-6 -bottom-16">
              <Image
                src="/quote.png"
                alt="review"
                width={600}
                height={600}
                className=" opacity-10"
              />
            </div>

            <div className=" -ml-10 -mt-16  w-96 h-40 bg-gradient-to-b from-[#383838] via-[#222222] to-transparent -rotate-[25deg]"></div>
            <div className="absolute -right-10  -bottom-5 rounded-t-4xl  w-96 h-20 bg-gradient-to-b to-[#38383870] via-[#22222273] from-transparent -rotate-[10deg]"></div>

            <div className=" absolute z-10 inset-0">
              <div className=" relative w-full h-full pl-5 pr-10">
                <div className=" flex items-center justify-between gap-8 mt-5">
                  <div className=" flex items-center gap-2 ">
                    <div className="">
                      <Image
                        src="/agent.png"
                        alt="avatar"
                        width={80}
                        height={80}
                      />
                    </div>

                    <h2 className=" text-2xl font-tommy-regular tracking-wider">
                      Anonymous
                    </h2>
                  </div>
                  <div className=" flex items-center gap-1">
                    <FaStar className=" text-white size-6" />
                    <FaStar className=" text-white size-6" />
                    <FaStar className=" text-white size-6" />
                    <FaStar className=" text-white size-6" />
                    <FaStar className=" text-white size-6" />
                  </div>
                </div>

                {/* review desc */}
                <div className=" mt-3 pl-3">
                  <h3 className=" text-[#b5b5b5] text-2xl leading-11 tracking-wide">
                    He made a custom logo/profile picture design for me, went
                    above and beyond with everything and actually gave me a
                    clean PSD file that isn't a mess!
                  </h3>
                </div>
                {/* review desc end */}

                {/* arrow  */}
                <div className=" absolute border-2 bottom-9 flex items-center justify-center right-4 size-10 rounded-full hover:bg-white border-white hover:text-black cursor-pointer duration-300">
                  <HiArrowRight className=" size-6" />
                </div>
                {/* arrow end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
