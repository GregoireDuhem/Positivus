import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Card({ Bg, text1, text2, textBg, img, buttonBg }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const textColor = getTextColor(buttonBg);

  // Handle mouse movement to tilt the card
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    const rotateX = ((y / rect.height) - 0.5) * -10; // Adjust the multiplier for tilt intensity
    const rotateY = ((x / rect.width) - 0.5) * 10;

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  // Reset tilt on mouse leave
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`h-[322px] ${Bg} space-y-[27px] rounded-[45px] p-[50px] outline outline-1 outline-Dark drop-shadow-lg relative`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div className={`${textBg} font-space inline-block rounded-[7px] px-2 md:text-h3`}>{text1}</div>
        <br />
        <div className={`${textBg} font-space inline-block rounded-[7px] px-2 md:text-h3`}>{text2}</div>
      </div>

      <div className="flex justify-between items-end">
        <div className="md:absolute md:bottom-[50px] md:flex md:items-center md:space-x-4 group">
          <motion.button
            className={`rounded-full ${buttonBg} p-2 group-hover:-rotate-45 transition-all duration-300`}
          >
            <ArrowRight className={`${buttonBg === "bg-Grey" ? "text-Dark" : "text-Green"}`} />
          </motion.button>
          <div className={`${textColor} text-h4 cursor-pointer hidden md:block hover:underline`}>
            Learn more
          </div>
        </div>
        <motion.img
          className="md:absolute md:top-[30%] md:right-[50px]"
          src={img}
          alt={img}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

function getTextColor(buttonBg) {
  switch (buttonBg) {
    case "bg-Grey":
      return "text-white";
    default:
      return "text-Black";
  }
}
