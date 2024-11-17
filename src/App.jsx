import { useState } from "react";
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
import Carousel from "./Carousel";

import { useLenis } from "./useLenis";

function App() {
  const [openStep, setOpenStep] = useState(null);

  useLenis();

  const toggleStep = (index) => {
    setOpenStep(openStep === index ? null : index);
  };

  const steps = [
    {
      nb: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we take the time to understand your business goals, challenges, and vision. We'll have an in-depth discussion about your target audience, competitors, and current marketing strategies. This step is crucial to align our approach with your objectives and identify key opportunities for growth. By the end of this session, you'll have a clear roadmap outlining our recommended strategies tailored to your needs.",
    },
    {
      nb: "02",
      title: "Research and Strategy Development",
      description:
        "Our team conducts thorough research to gather insights into your industry, competitors, and customer behavior. We analyze market trends, keywords, and the competitive landscape to build a robust strategy. This process includes defining KPIs, identifying the best channels for your brand, and creating a strategic plan that ensures maximum impact. The goal is to establish a solid foundation for your marketing campaign, optimizing for both short-term wins and long-term success.",
    },
    {
      nb: "03",
      title: "Implementation",
      description:
        "With a clear strategy in place, we move into the implementation phase. Our experts handle everything from setting up campaigns, designing creatives, and optimizing your digital assets. This involves crafting engaging content, optimizing your website, launching social media and PPC campaigns, and integrating tracking tools. Our team ensures that all elements are aligned with your brand and optimized for conversion, ensuring the campaign's effectiveness from day one.",
    },
    {
      nb: "04",
      title: "Monitoring and Optimization",
      description:
        "Our work doesn’t stop once the campaigns are launched. We continuously monitor performance metrics, analyze data, and adjust strategies in real-time to ensure optimal results. This includes A/B testing, adjusting bids, refining ad copy, and optimizing landing pages to maximize conversion rates. By leveraging analytics, we ensure that every dollar you invest is working as efficiently as possible to drive your business objectives forward.",
    },
    {
      nb: "05",
      title: "Reporting and Communication",
      description:
        "Transparency is key to our partnership. We provide regular, detailed reports that outline the progress of your campaigns, highlight key metrics, and provide insights into what's working. Our team will schedule regular meetings to discuss these reports, address any questions you may have, and refine our strategies based on the data. You'll always have a clear view of your campaign performance and ROI, ensuring that you stay informed every step of the way.",
    },
    {
      nb: "06",
      title: "Continual Improvement",
      description:
        "Digital marketing is an ongoing process, and we are committed to helping you grow over time. After analyzing the results of our campaigns, we identify areas for improvement and develop strategies to build on your successes. This phase includes scaling successful campaigns, exploring new channels, and leveraging emerging technologies. Our goal is to create a sustainable, long-term growth strategy that keeps your brand ahead of the competition.",
    },
  ];

  return (
    <>
      <Header />
      <Hero />

      <Carousel />

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
          <button className="flex items-center justify-center px-[35px] py-5 bg-Dark text-Grey hover:bg-transparent hover:text-Dark hover:outline hover:outline-1 hover:outline-Dark transition-all duration-300 w-full md:w-[60%] font-space text-[20px] rounded-[14px]">
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
        {steps.map((step, index) => (
          <Step
            key={index}
            nb={step.nb}
            title={step.title}
            description={step.description}
            isOpen={openStep === index}
            onClick={() => toggleStep(index)}
          />
        ))}
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
