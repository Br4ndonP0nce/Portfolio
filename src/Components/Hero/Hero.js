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
    <div ref={heroRef} className="hero min-h-screen w-screen">
      <div className="hero-content text-center">
        <div className="relative flex flex-col ">
          <h1 className="text-center  text-3xl mt-2  font-black text-gray-300">
            Hello
          </h1>
          <h2 className="text-7xl font-black  mt-3  text-center text-gray-400">
            Meet <br /> Decode <br />
            <b className="">Next</b>
          </h2>

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
