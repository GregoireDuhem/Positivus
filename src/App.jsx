import "./App.css";
import Hero from "./Hero";
import Header from "./Header";
import Card from "./Card";
import { ArrowRight, Plus } from "lucide-react";

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* Logos */}
      <div className="mt-[60px]">
        <img className="grayscale" src="Logos.png" alt="Logos" />
      </div>

      <TextSection
        title={"Services"}
        text={
          "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.These services include:"
        }
      />

      {/* Cards */}
      <div className="mt-10 px-5 space-y-[30px]">
        <Card
          Bg={"bg-Grey"}
          text1={"Search engine"}
          text2={"Optimization"}
          textBg={"bg-Green"}
          img={"Search.png"}
          buttonBg={"bg-Dark"}
        />
        <Card
          Bg={"bg-Green"}
          text1={"Pay-per-click"}
          text2={"Advertising"}
          textBg={"bg-Grey"}
          img={"Click.png"}
          buttonBg={"bg-Dark"}
        />
        <Card
          Bg={"bg-Dark"}
          text1={"Social media"}
          text2={"Marketing"}
          textBg={"bg-Grey"}
          img={"React.png"}
          buttonBg={"bg-Grey"}
        />
        <Card
          Bg={"bg-Grey"}
          text1={"Email"}
          text2={"Marketing"}
          textBg={"bg-Green"}
          img={"Send.png"}
          buttonBg={"bg-Dark"}
        />
        <Card
          Bg={"bg-Green"}
          text1={"Content"}
          text2={"Creation"}
          textBg={"bg-Grey"}
          img={"Tabs.png"}
          buttonBg={"bg-Dark"}
        />
        <Card
          Bg={"bg-Dark"}
          text1={"Analytics"}
          text2={"Tracking"}
          textBg={"bg-Grey"}
          img={"Graph.png"}
          buttonBg={"bg-Grey"}
        />
      </div>

      {/* Proposal */}
      <div className="mt-[70px] mx-5 h-[370px] bg-Grey p-[50px] font-space space-y-5 rounded-[45px]">
        <div className="text-h3-mobile ">Let’s make things happen</div>
        <div className="text-p-mobile">
          Contact us today to learn more about how our digital marketing services can help your business grow and
          succeed online.
        </div>
        <button className="flex items-center justify-center px-[35px] py-5 bg-Dark text-Grey w-full font-space text-[20px] rounded-[14px]">
          Get your proposal
        </button>
      </div>

      <TextSection
        title={"Case Studies"}
        text={"Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"}
      />

      {/* Slide Cards */}
      <div className="mt-10 gap-5 px-5 w-full flex overflow-x-auto">
        <div className="h-[252px] w-[350px] flex-shrink-0 rounded-[45px] bg-Dark font-space py-[42px] px-[50px] space-y-5">
          <div className="text-white text-p-mobile">
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website
            traffic and a 25% increase in sales.
          </div>
          <div className="flex items-center group text-Green text-[20px] cursor-pointer">
            Learn more
            <button className="ml-2 group-hover:-rotate-45 transition-all duration-300">
              <ArrowRight />
            </button>
          </div>
        </div>
        {/*  */}
        <div className="h-[252px] w-[350px] flex-shrink-0 rounded-[45px] bg-Dark font-space py-[42px] px-[50px] space-y-5">
          <div className="text-white text-p-mobile">
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website
            traffic and a 25% increase in sales.
          </div>
          <div className="flex items-center group text-Green text-[20px] cursor-pointer">
            Learn more
            <button className="ml-2 group-hover:-rotate-45 transition-all duration-300">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <TextSection title={["Our Working", "Process"]} text={"Step-by-Step Guide to Achieving Your Business Goals"} />

      <div className="mt-[30px] space-y-5">
        <Step nb={"01"} title={"Consultation"} />
        <Step nb={"02"} title={"Research and Strategy Development"} />
        <Step nb={"03"} title={"Implementation"} />
        <Step nb={"04"} title={"Monitoring and Optimization"} />
        <Step nb={"05"} title={"Reporting and Communication"} />
        <Step nb={"06"} title={"Continual Improvement"} />
      </div>

      <TextSection
        title={"Team"}
        text={"Meet the skilled and experienced team behind our successful digital marketing strategies"}
      />
    </>
  );
}

export default App;

function Step({ nb, title }) {
  return (
    <div className="mx-5 p-[30px] flex h-[98px] justify-between outline outline-1 outline-black rounded-[45px] font-space bg-Grey drop-shadow-[0_5px_0_theme(colors.Dark)]">
      <div className="flex items-center space-x-[33px]">
        <div className="text-[30px] font-medium">{nb}</div>
        <div className="text-h4-mobile font-medium">{title}</div>
      </div>
      <button className="outline outline-1 rounded-full p-2">
        <Plus className="w-5 h-5" />
      </button>
    </div>
  );
}

function TextSection({ title, text }) {
  return (
    <div className="px-5 mt-[60px] space-y-[30px] flex flex-col justify-center items-center text-center">
      <div className="text-h2-mobile text-medium text-Black font-space">
        {Array.isArray(title) ? (
          title.map((line, index) => (
            <div className="bg-Green rounded-[7px] px-2 inline-block" key={index}>
              {line}
            </div>
          ))
        ) : (
          <span className="bg-Green rounded-[7px] px-2">{title}</span>
        )}
      </div>
      <div className="text-p-mobile text-Black font-space">{text}</div>
    </div>
  );
}
