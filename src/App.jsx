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
import Footer from "./Footer";

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
      <div className="mt-[70px] md:mt-[100px] mx-5 md:mx-[100px] h-[370px] bg-Grey p-[50px] md:px-[60px] font-space rounded-[45px] md:flex md:items-center md:justify-between">
        <div className="md:w-[40%] space-y-5 md:space-y-[26px]">
          <div className="text-h3-mobile md:text-h3">Let’s make things happen</div>
          <div className="text-p-mobile md:text-p">
            Contact us today to learn more about how our digital marketing services can help your business grow and
            succeed online.
          </div>
          <button className="flex items-center justify-center px-[35px] py-5 bg-Dark text-Grey w-full md:w-[60%] font-space text-[20px] rounded-[14px]">
            Get your proposal
          </button>
        </div>
        <img className="hidden md:block w-[550px] relative right-[-50px]" src="Star.png" alt="star" />
      </div>

      <TextSection
        title={"Case Studies"}
        text={"Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"}
      />

      <SlideCard />

      <TextSection title={["Our Working", "Process"]} text={"Step-by-Step Guide to Achieving Your Business Goals"} />

      <div className="mt-[30px] md:mt-[80px] space-y-5 md:space-y-[30px]">
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

      <div className="mt-10 md:mt-[80px] px-5 md:px-[100px] space-y-[30px] md:space-y-0 md:grid md:grid-cols-3 md:gap-10">
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
        <div className="hidden md:block">
          <Team
            img={"Team4.png"}
            name={"Brian Williams"}
            role={"Social Media Specialist"}
            experience={
              "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
            }
          />
        </div>
        <div className="hidden md:block">
          <Team
            img={"Team4.png"}
            name={"Sarah Kim"}
            role={"Content Creator"}
            experience={
              "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
            }
          />
        </div>
      </div>

      <div className="px-5 md:px-[100px] mt-[39px] md:mt-[40px] font-space md:flex md:justify-end">
        <button className="flex items-center justify-center px-[35px] py-5 bg-Dark text-Grey w-full md:w-[22%] font-space text-[20px] rounded-[14px]">
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

export default App;
