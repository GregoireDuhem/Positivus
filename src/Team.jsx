import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function Team({ img, name, role, experience }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);
  // Handle mouse movement to tilt the card
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    const rotateX = (y / rect.height - 0.5) * -10; // Adjust the multiplier for tilt intensity
    const rotateY = (x / rect.width - 0.5) * 10;

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
      className="px-[40px] py-[35px] bg-white rounded-[45px] h-[294px] md:h-auto space-y-5 font-space text-Black
    outline outline-1 outline-black drop-shadow-[0_5px_0_theme(colors.Dark)]"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-end space-x-5">
        <img src={img} alt={img} />
        <div>
          <div className="text-h4-mobile font-medium">{name}</div>
          <div className="text-p-mobile">{role}</div>
        </div>
        <button className="rounded-full p-2 bg-Black absolute top-0 right-0">
          <Linkedin className="text-Green" />
        </button>
      </div>
      <hr className="border-t-1 border-Black" />
      <div className="text-p-mobile">{experience}</div>
    </motion.div>
  );
}
