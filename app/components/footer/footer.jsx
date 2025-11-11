import React from "react";

function Footer() {
  return (
    <div>
      <div
        id="contact"
        className=" lg:h-[70vh]  px-5 md:px-10 lg:px-14 xl:px-20 2xl:px-32 w-full"
      >
        <div className=" w-full h-full border-b-2 border-[#797979] flex items-center">
          <div className=" flex items-center justify-between w-full px-8 md:px-14 lg:px-20 xl:px-28 2xl:px-52">
            <a
              className=" group"
              href="https://t.me/disproportions"
              target="_blank"
            >
              <h2 className=" group-hover:underline text-[#838383] text-xl 2xl:text-2xl">
                Telegram
              </h2>
              <h2 className=" group-hover:underline text-xl mt-1 2xl:text-2xl tracking-wider">
                disproportions
              </h2>
            </a>
            <a className=" group" href="https://uxgfx.com">
              <h2 className="group-hover:underline text-[#838383] text-xl 2xl:text-2xl">
                Website
              </h2>
              <h2 className="group-hover:underline  text-xl mt-1 2xl:text-2xl tracking-wider">
                uxgfx.com
              </h2>
            </a>
            <a
              className=" group"
              href="https://discord.gg/uxgfx"
              target="_blank"
            >
              <h2 className="group-hover:underline text-[#838383] text-xl 2xl:text-2xl">
                Discord
              </h2>
              <h2 className="group-hover:underline  text-xl 2xl:text-2xl mt-1 tracking-wider">
                discord.gg/uxgfx
              </h2>
            </a>
          </div>
        </div>
      </div>
      <div className=" py-10 font-tommy-regular  px-8 md:px-14 lg:px-20 xl:px-28 2xl:px-40 w-full flex justify-between items-center">
        <h3 className=" 2xl:text-2xl">
          UXGFX{" "}
          <span className="font-tommy-light font-medium text-[#aeaeae]">®</span>{" "}
          <span className="text-[#aeaeae]">2025</span>
        </h3>

        <h3 className="font-tommy-light font-semibold 2xl:text-2xl">
          Made with ❤️ by ux
        </h3>
      </div>
    </div>
  );
}

export default Footer;
