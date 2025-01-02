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
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
        Web3/Web2
      </h1>
      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className=" hero-heading text-gray-400">
            <b className="text-orange-500">De</b>CODE NEXT
          </h1>
          <p className="mb-5 max-w-64 font-robert-regular">
            <br /> Computer Engineer | <br />
            web3/web2 Developer/Consultant|
            <br />
            Product Developer
          </p>
          <div className="flex flex-row gap-2">
            <Button
              title={"Get in touch"}
              id=""
              containerClass="bg-yellow-300 flex-center gap-1 "
              link={"#contact"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
