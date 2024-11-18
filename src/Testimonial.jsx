import { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    text: "Positivus helped us triple our online sales in just six months. Their innovative strategies, combined with their in-depth understanding of digital marketing, have brought us outstanding results. We are incredibly impressed with their professionalism and commitment to our growth.",
    author: "Jane Doe",
    role: "CEO at ABC Inc.",
  },
  {
    text: "The level of detail and thought that Positivus puts into their work is unparalleled. Our online engagement has skyrocketed, and our brand presence has never been stronger. Their team has been a game changer for our online growth, and we are extremely pleased with their service.",
    author: "Michael Johnson",
    role: "Head of Digital at E-Commerce Co.",
  },
  {
    text: "Positivus' SEO services have transformed our website traffic and lead generation. Their strategic approach and hands-on management have consistently driven high-quality leads to our site. We are thrilled with their results and look forward to our continued partnership.",
    author: "Emily Brown",
    role: "Content Strategist at DEF Ltd.",
  },
  {
    text: "Their team is knowledgeable, dedicated, and delivers results. From the moment we started working with Positivus, we noticed a substantial improvement in our social media engagement and overall customer reach. We are thrilled with the results and highly recommend their services.",
    author: "David Wilson",
    role: "COO at GHI Solutions",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div
      className="mt-[40px] md:mt-[80px] mx-5 md:mx-[100px] bg-Dark rounded-[45px] pt-[30px] md:pt-[84px] px-[30px] pb-[60px] 
    space-y-[60px] md:space-y-[124px] font-space overflow-hidden"
    >
      <div className="md:flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="space-y-[21px] md:space-y-0 md:w-[70%] md:flex md:flex-row md:mx-auto"
          >
            <div className="hidden md:block w-2/3 md:transform md:-translate-x-[100%]">
              <Card
                text={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].text}
                author={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].author}
                role={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].role}
              />
            </div>
            <div className="md:w-2/3">
              <Card
                text={testimonials[currentIndex].text}
                author={testimonials[currentIndex].author}
                role={testimonials[currentIndex].role}
              />
            </div>
            <div className="hidden md:block w-2/3 md:transform md:translate-x-[100%]">
              <Card
                text={testimonials[(currentIndex + 1 + testimonials.length) % testimonials.length].text}
                author={testimonials[(currentIndex + 1 + testimonials.length) % testimonials.length].author}
                role={testimonials[(currentIndex + 1 + testimonials.length) % testimonials.length].role}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between text-center items-center md:justify-evenly md:mx-[120px]">
        <ArrowLeft className="text-white w-8 h-8 cursor-pointer" onClick={handlePrev} />
        <div className="text-white flex space-x-[10px]">
          {testimonials.map((_, index) => (
            <Sparkle
              key={index}
              className={index === currentIndex ? "text-Green fill-Green" : ""}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <ArrowRight className="text-white w-8 h-8 cursor-pointer" onClick={handleNext} />
      </div>
    </div>
  );
}

function Card({ text, author, role }) {
  return (
    <>
      <div className="relative outline outline-1 outline-Green rounded-[45px] p-6">
        <div className="text-p-mobile text-white">{`"${text}"`}</div>
        <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-Green"></div>
      </div>
      <div className="text-white ml-10 md:ml-20 text-p-mobile md:flex md:flex-col md:text-start md:selft-start md:mt-[30px]">
        <div className="text-Green">{author}</div>
        <div>{role}</div>
      </div>
    </>
  );
}
