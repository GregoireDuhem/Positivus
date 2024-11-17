import { useEffect } from "react";
import { gsap } from "gsap";
import { Menu } from "lucide-react";

export default function Header() {
  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");

    links.forEach((link) => {
      const underline = link.querySelector(".underline");
      const tl = gsap.timeline({ paused: true });

      // Animate the underline
      tl.fromTo(underline, { width: "0%" }, { width: "100%", duration: 0.3, ease: "power2.out" });

      // Add hover event listeners
      link.addEventListener("mouseenter", () => tl.play());
      link.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);

  return (
    <div className="pt-[30px] md:pt-[60px] flex px-5 md:px-[100px] items-center justify-between">
      <div className="flex items-center cursor-pointer group">
        <img
          className="h-[23px] md:w-[36px] md:h-auto mr-2 group-hover:rotate-180 transition-all duration-300"
          src="Icon.png"
          alt="Icon"
        />
        <img className="h-[19px] md:w-[171px] md:h-auto" src="Positivus.png" alt="Positivus" />
      </div>
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Desktop Navigation with GSAP Animation */}
      <div className="hidden md:flex gap-10 items-center">
        {["About us", "Services", "Use Cases", "Pricing", "Blog"].map((text, index) => (
          <a href="#" key={index} className="nav-link relative group">
            {text}
            <span className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-black"></span>
          </a>
        ))}
        <button className="outline outline-1 outline-Dark hover:bg-Dark hover:text-Grey transition-all duration-300 rounded-[14px] py-[20px] px-[35px]">
          Request a quote
        </button>
      </div>
    </div>
  );
}
