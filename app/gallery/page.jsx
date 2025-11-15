"use client";
import Footer from "../components/footer/footer";
import Navbar from "../components/layout/navbar";
import Title from "../components/title";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbEye } from "react-icons/tb";

function page() {
  return (
    <div className="font-tommy-light font-semibold text-white bg-[#121212] min-h-screen ">
      <Navbar />
      <div className="">
        <div className="relative bg-[linear-gradient(to_right,#161616_2px,transparent_2px),linear-gradient(to_bottom,#161616_2px,transparent_2px)] bg-[size:50px_50px] w-full flex items-center justify-center h-[60vh] 2xl:h-[50vh] ">
          {/* bottom fade overlay to smoothly blend the grid into the page background */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 bottom-0 h-56 pointer-events-none z-10 bg-gradient-to-b from-transparent to-[#121212]"
          />
          <Title
            className={
              "text-[150px] font-tommy-bold mt-10 2xl:mt-5 select-none z-10"
            }
          >
            #UX<span className="text-[#ababab]">GFX</span>
          </Title>
        </div>
        <div className=" px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-28 w-full">
          <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
            <div className=" relative h-64 bg-[#0a0a0a] w-full rounded-lg overflow-hidden border border-[#1a1a1a] group cursor-pointer">
              <h1 className="text-[400px] font-tommy-bold leading-none -mt-32 -ml-36 tracking-tighter opacity-[1%]">
                UX
              </h1>
              <div className=" absolute inset-0 px-5 pt-5 ">
                <div className=" w-full h-full relative">
                  <h4 className=" text-lg">UX</h4>
                  <h2 className=" text-2xl font-tommy-regular">
                    Logo Design w/
                  </h2>
                  <h5 className=" text-sm text-zinc-400">Brand Projects</h5>

                  <div className=" absolute right-1 bottom-5">
                    <HiArrowNarrowRight className=" size-7 text-white group-hover:opacity-0 duration-300" />
                  </div>
                </div>
                <div className=" absolute left-0 right-0 w-full -bottom-[100%] group-hover:bottom-0 duration-300 h-20 bg-gradient-to-t from-[#030303] z-10 to-transparent">
                  <div className=" w-full h-full flex items-center justify-center px-5 ">
                    <div className=" w-full flex items-end justify-between gap-2">
                      <div className="">
                        <h3 className=" text-[15px] 2xl:text-lg">
                          Company Logos
                        </h3>
                        <h4 className=" text-[11px] 2xl:text-sm leading-none font-light">
                          Mutual projects
                        </h4>
                      </div>

                      <div className=" flex items-center gap-1 -mb-1">
                        <div>
                          <TbEye className=" size-5 2xl:size-6 text-white" />
                        </div>
                        <h4 className=" text-[11px] 2xl:text-sm leading-none">
                          1245
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
