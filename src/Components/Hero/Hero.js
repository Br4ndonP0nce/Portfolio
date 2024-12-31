"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "../Animated Title/AnimatedTitle";
import Button from "../Button/Button";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const element = heroRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div ref={heroRef} className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="flex flex-col max-w-md">
          <div className="flex flex-col justify-center items-center">
            <AnimatedTitle
              title="Hello"
              containerClass="mt-5 !text-black text-start"
              textSize="md:text-3xl text-3xl"
              TextColor={"!text-gray-300"}
            />
            <AnimatedTitle
              title="Meet Brandon"
              containerClass=" mt-3 !text-black text-center"
              textSize="text-6xl"
              TextColor={"!text-gray-400"}
            />
          </div>
          <p className="py-4">
            Computer Engineer | web3 Developer/Consultant | Product Developer
          </p>
          <div className="flex justify-center">
            <Button
              title="Get in touch"
              ContainerClass="items-center self-center"
              link="#contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
