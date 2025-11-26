"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { LuMail } from "react-icons/lu";
import Skeleton from "../skeleton/skeleton";

export default function FullscreenModal({
  id,
  project,
  isGettinghProjectForView,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  // Global open/close controller
  if (typeof window !== "undefined") {
    window[id] = {
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false),
    };
  }

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    // focus the modal so wheel/middle-click autoscroll targets it
    if (isOpen && modalRef.current) {
      // short timeout to ensure element is mounted and focusable
      setTimeout(() => modalRef.current?.focus?.(), 0);
    }
  }, [isOpen]);

  const isLoadng = isGettinghProjectForView ? true : false; // Placeholder for loading state

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // prevent view-transition from affecting this overlay/modal
          style={{ viewTransitionName: "none" }}
        >
          {/* dim background */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* MAIN FULLSCREEN MODAL */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            onAuxClick={(e) => {
              // ensure middle-click (aux) focuses the modal so autoscroll works
              if (e.button === 1) {
                modalRef.current?.focus?.();
              }
            }}
            className="
              relative 
              w-full h-full 
              bg-[#121212]
              overflow-y-scroll
              p-6 md:p-10
            "
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 60,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1], // smooth springy
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              y: 60,
              transition: { duration: 0.3 },
            }}
            // ensure the modal's scroll is contained and not affected by root transforms
            style={{
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
              viewTransitionName: "none",
            }}
          >
            {/* X CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              className="fixed top-6 right-6 h-10 w-10 flex items-center justify-center 
              cursor-pointer rounded-full bg-[#202020] hover:bg-[#1d1d1d] 
              text-gray-200 z-50 shadow-lg"
            >
              ✕
            </button>

            {/* Hire Button */}
            <a
              href="https://t.me/disproportions"
              target="_blank"
              className="fixed top-20 right-6 flex flex-col items-center z-50 cursor-pointer"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#202020] hover:bg-[#1d1d1d]">
                <LuMail />
              </div>
              <h3 className="text-sm">Hire</h3>
            </a>

            {/* Bottom Badge */}
            <div className="fixed bottom-0 inset-x-0 w-full pb-6 pt-3 px-6 z-50 bg-gradient-to-t from-[#030303] to-transparent">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-md border border-zinc-600 bg-[#202020] flex items-center justify-center">
                  <h2 className="text-sm select-none">UX</h2>
                </div>

                <div>
                  <h3 className="text-[12px] 2xl:text-sm">{project?.title}</h3>
                  <h3 className="text-[10px] 2xl:text-xs font-tommy-light font-light text-zinc-300 leading-none">
                    {project?.sub_title}
                  </h3>
                </div>
              </div>
            </div>

            {/* MAIN IMAGE */}
            {isLoadng ? (
              <div className="w-full px-20 mb-5">
                <Skeleton className="w-full  aspect-[16/9]  rounded-xl" />
              </div>
            ) : (
              project?.images?.map((imgSrc, index) => (
                <div key={index} className="w-full px-20 mb-5">
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt={`Project Image ${index + 1}`}
                      fill
                      className="object-cover "
                    />
                  </div>
                </div>
              ))
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
