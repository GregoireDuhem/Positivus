import "./App.css";
import Hero from "./Hero";
import Header from "./Header";
import Card from "./Card";
import TextSection from "./TextSection";
import Step from "./Step";
import SlideCard from "./SlideCard";
import Team from "./Team";
import Testimonial from "./Testimonial";
import ContactForm from "./ContactForm";
import { Facebook, Linkedin, Twitter } from "lucide-react";

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* Logos */}
      <div className="mt-[60px] md:hidden">
        <img className="grayscale" src="Logos.png" alt="Logos" />
      </div>
      <div className="md:mt-[60px] hidden md:flex md:justify-center">
        <img className="grayscale" src="LogosDesktop.png" alt="Logos" />
      </div>

      <TextSection
        title={"Services"}
        text={
          "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        }
      />

      {/* Cards */}
      <div className="mt-10 md:mt-[80px] md:grid md:grid-cols-2 px-5 md:px-[100px] space-y-[30px] md:space-y-0 md:gap-10">
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

      <SlideCard />

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

      <div className="mt-10 px-5 space-y-[30px]">
        <Team
          img={"Team1.png"}
          name={"John Smith"}
          role={"CEO and Founder"}
          experience={"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"}
        />
        <Team
          img={"Team2.png"}
          name={"Jane Doe"}
          role={"Director of Operations"}
          experience={
            "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
          }
        />
        <Team
          img={"Team3.png"}
          name={"Michael Brown"}
          role={"Senior SEO Specialist"}
          experience={
            "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
          }
        />
        <Team
          img={"Team4.png"}
          name={"Emily Johnson"}
          role={"PPC Manager"}
          experience={
            "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
          }
        />
      </div>

      <div className="px-5 mt-[39px] font-space">
        <button className="flex items-center justify-center px-[35px] py-5 bg-Dark text-Grey w-full font-space text-[20px] rounded-[14px]">
          See all team
        </button>
      </div>

      <TextSection
        title={"Testimonials"}
        text={
          "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        }
      />

      <Testimonial />

      <TextSection title={"Contact Us"} text={"Connect with Us: Let's Discuss Your Digital Marketing Needs"} />

      <ContactForm />

      <Footer />
    </>
  );
}

function Footer() {
  return (
    <div className="mt-[90px] bg-Dark pt-[50px] pb-[30px] px-5 space-y-[37px] font-space ">
      <div className="flex items-center justify-center">
        <img className="h-[23px] mr-2" src="IconWhite.png" alt="Icon" />
        <img className="h-[19px]" src="PositivusWhite.png" alt="Positivus" />
      </div>
      <div className="flex flex-col items-center justify-center space-y-[15px] text-white text-p-mobile">
        <div>About us</div>
        <div>Services</div>
        <div>Use Cases</div>
        <div>Pricing</div>
      </div>
      <div className="flex justify-center">
        <div className="text-Black bg-Green inline-block px-[7px] rounded-[7px]">Contact us:</div>
      </div>

      <div className="flex flex-col items-center justify-center text-center text-white space-y-[15px] text-p-mobile">
        <div>Email: info@positivus.com</div>
        <div>Phone: 555-567-8901</div>
        <div>Address: 1234 Main St Moonstone City, Stardust State 12345</div>
      </div>

      <div className="bg-[#292A32] w-full py-[30px] px-[30px] rounded-[14px] space-y-[22px] font-space">
        <input
          type="email"
          placeholder="Email"
          className="rounded-[14px] bg-[#292A32] outline outline-1 outline-white px-[20px] py-[18px] w-full text-p-mobile"
        />
        <button className="flex items-center justify-center px-[35px] py-5 bg-Green text-Dark w-full  text-[20px] rounded-[14px]">
          Subscribe to news
        </button>
      </div>

      <div className="flex justify-center space-x-5">
        <div className="rounded-full p-2 bg-white">
          <Linkedin />
        </div>
        <div className="rounded-full p-2 bg-white">
          <Facebook />
        </div>
        <div className="rounded-full p-2 bg-white">
          <Twitter />
        </div>
      </div>

      <hr className="border-t-1 border-white" />

      <div className="flex flex-col space-y-[15px] items-center justify-center text-white text-p-mobile">
        <div>© 2023 Positivus. All rights reserved</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
}

export default App;
