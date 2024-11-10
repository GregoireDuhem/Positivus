import "./App.css";
import { ArrowRight } from "lucide-react";

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* Logos */}
      <div className="mt-[60px]">
        <img className="grayscale" src="Logos.png" alt="Logos" />
      </div>

      <div className="px-5 mt-[60px] space-y-[30px] flex flex-col justify-center items-center text-center">
        <div className="text-h2-mobile text-medium text-Black font-space bg-Green rounded-[7px] px-2">Services</div>
        <div className="text-p-mobile text-Black font-space">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
          These services include:
        </div>
      </div>

      {/* Cards */}
      <div className="mt-10 px-5 space-y-[30px]">
        <Card Bg={"bg-Grey"} text1={"Search engine"} text2={"Optimization"} textBg={"bg-Green"} img={"Search.png"} />
        <Card Bg={"bg-Green"} text1={"Pay-per-click"} text2={"Advertising"} textBg={"bg-Grey"} img={"Click.png"} />
        <Card Bg={"bg-Dark"} text1={"Social media"} text2={"Marketing"} textBg={"bg-Grey"} img={"React.png"} />
        <Card Bg={"bg-Grey"} text1={"Email"} text2={"Marketing"} textBg={"bg-Green"} img={"Send.png"} />
        <Card Bg={"bg-Green"} text1={"Content"} text2={"Creation"} textBg={"bg-Grey"} img={"Tabs.png"} />
        <Card Bg={"bg-Dark"} text1={"Analytics"} text2={"Tracking"} textBg={"bg-Grey"} img={"Graph.png"} />
      </div>
    </>
  );
}

export default App;

function Card({ Bg, text1, text2, textBg, img }) {
  return (
    <div
      className={`h-[322px] ${Bg} space-y-[27px] rounded-[45px] p-[50px] outline outline-1 outline-Dark 
      drop-shadow-[0_5px_0_theme(colors.Dark)]`}
    >
      <div className="">
        <div className={`${textBg} font-space  rounded-[7px] px-2`}>{text1}</div>
        <div className={`${textBg} font-space inline-block rounded-[7px] px-2`}>{text2}</div>
      </div>
      <div className="flex justify-between items-end">
        <button className={`rounded-full bg-Dark p-2 hover:-rotate-45 transition-all duration-300`}>
          <ArrowRight className="text-Green" />
        </button>
        <img src={img} alt={img} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="pt-[30px] flex px-5 items-center justify-between">
      <div className="flex items-center">
        <img className="h-[23px] mr-2" src="Icon.png" alt="Icon" />
        <img className="h-[19px]" src="Positivus.png" alt="Positivus" />
      </div>
      <div className="md:hidden">hamburger</div>

      {/* For desktop, show full navigation */}
      <div className="hidden md:flex gap-10">
        <a href="#">About us</a>
        <a href="#">Services</a>
        <a href="#">Use Cases</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
        <button>Request a quote</button>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <>
      <div className="px-5 mt-10 text-h1-mobile md:text-h1 font-space font-medium text-Black">
        Navigating the digital landscape for success
      </div>
      <img className="px-[35px] mt-[10px]" src="Illustration.png" alt="Illustration" />
      <div className="text-p-mobile px-5 text-Black font-space">
        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO,
        PPC, social media marketing, and content creation.
      </div>
      <div className="w-full flex justify-center">
        <button className="flex items-center justify-center mt-10 px-[35px] py-5 bg-Dark text-Grey w-[90%] font-space text-[20px] rounded-[14px]">
          Book a consultation
        </button>
      </div>
    </>
  );
}
