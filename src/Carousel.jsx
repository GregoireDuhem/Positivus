import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Carousel() {
  const images1 = ["Amazon.png", "Dribbble.png", "Hubspot.png"];
  const images2 = ["Notion.png", "Netflix.png", "Zoom.png"];
  const desktopImages = ["Amazon.png", "Dribbble.png", "Hubspot.png", "Notion.png", "Netflix.png", "Zoom.png"];

  const mobileCarousel1Ref = useRef(null);
  const mobileCarousel2Ref = useRef(null);
  const desktopCarouselRef = useRef(null);

  // Function to create infinite scroll using GSAP timeline
  const createInfiniteScroll = (carouselRef, speed, direction = "left") => {
    const carousel = carouselRef.current;
    const items = carousel.children;

    // Calculate total width of all items including spacing
    const totalWidth = Array.from(items).reduce(
      (acc, item) => acc + item.offsetWidth + parseFloat(getComputedStyle(item).marginRight),
      0
    );

    const timeline = gsap.timeline({ repeat: -1, ease: "none" });
    timeline.to(carousel, {
      x: direction === "left" ? -totalWidth : totalWidth,
      duration: speed,
      ease: "none",
      onComplete: () => {
        carousel.style.transform = "translateX(0)"; // Reset position after scroll
        timeline.restart();
      },
    });
  };

  useEffect(() => {
    // Mobile Carousels
    createInfiniteScroll(mobileCarousel1Ref, 15, "left");
    createInfiniteScroll(mobileCarousel2Ref, 15, "right");

    // Desktop Carousel
    createInfiniteScroll(desktopCarouselRef, 20, "left");
  }, []);

  return (
    <>
      {/* Mobile Carousels */}
      <div className="mt-10 md:hidden space-y-5">
        {/* Carousel 1 */}
        <div className="overflow-hidden">
          <div ref={mobileCarousel1Ref} className="flex space-x-5">
            {[...images1, ...images1].map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-auto h-[48px] grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>

        {/* Carousel 2 */}
        <div className="overflow-hidden">
          <div ref={mobileCarousel2Ref} className="flex space-x-5">
            {[...images2, ...images2].map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-auto h-[48px] grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:flex overflow-hidden mt-[70px]">
        <div ref={desktopCarouselRef} className="flex space-x-[10vw]">
          {[...desktopImages, ...desktopImages].map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-auto h-[48px] grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </>
  );
}
