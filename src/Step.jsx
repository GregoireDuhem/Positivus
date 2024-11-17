import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function Step({ nb, title, description, isOpen, onClick }) {
  return (
    <div
      className={`mx-5 md:mx-[100px] p-[30px] md:p-[0px] md:py-[40px] md:px-[60px] flex flex-col justify-between outline outline-1 outline-black rounded-[45px] font-space
     ${
       isOpen ? "bg-Green" : "bg-Grey"
     } transition-all duration-300 drop-shadow-[0_5px_0_theme(colors.Dark)] items-center space-y-[30px]`}
    >
      {/* Header section */}
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center space-x-[33px]">
          <div className="text-[30px] md:text-h1 font-medium">{nb}</div>
          <div className="text-h4-mobile md:text-h3 font-medium">{title}</div>
        </div>
        <button
          onClick={onClick}
          className={`outline outline-1 rounded-full p-1 w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex items-center justify-center transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <Plus className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Collapsible content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "max-content", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden w-full text-p-mobile md:text-p space-y-[30px]"
          >
            <motion.hr
              className="border-t-1 border-Black w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
            >
              {description}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
