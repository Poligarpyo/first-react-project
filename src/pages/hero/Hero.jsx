import { curve, heroBackground, robot } from "../../assets";
import Button from "../../components/Button";
import Section from "../../components/Section";

import {
  BackgroundCircles,
  BottomLine,
  Gradient,
} from "../../components/design/Hero";
import { heroIcons } from "../../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "../../components/Generating";
import Notification from "../../components/Notification";
import CompanyLogo from "../../components/CompanyLogo";
const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Text Section */}
        <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-16 md:mb-20 lg:mb-24">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="inline-block relative">
              POLICARPYO
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="text-lg leading-relaxed p-4 shadow-md mb-8 md:mb-10 lg:mb-12">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/features" white>
            Get Started
          </Button>
        </div>

        {/* Image Section */}

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-10 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  alt="AI"
                  className="w-full scale-[1.7]
                  translate-y-[8%] md:scale-[1]
                  md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                />

                <Generating
                  className="absolute left-3 right-4 bottom-5 
                 md:right-auto md:bottom-8 md:left-[31rem] md:-translate-x-1/2 sm:left-20 sm:-bottom-5"
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul
                    className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1
                   bg-n-9/40 backdrop-blur border-n-1/10 rounded-2xl xl:flex"
                  >
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} alt={icon} width={24} height={25} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code Generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          {/* Background Image */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[136%] lg:-top-[104%]">
            <img
              src={heroBackground}
              alt="herobackground"
              className="w-full"
              width={1440}
              height={1800}
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogo className="hidden relative z-10 mt-20 lg:block " />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
