import React from "react";

export const About = () => {
  return (
    <div id="about" className="flex flex-col px-20 gap-5 py-10">
      <h1 className="text-center md:text-start self-center max-w-md md:self-start text-xl md:text-6xl  font-black">
        <b className="text-orange-500 font-robert-regular ">Every</b>
        thing for your business needs
      </h1>
      <div className="mockup-code self-center text-xs md:text-xl ">
        <pre data-prefix="$">
          <code>npm i DecodeNext</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>installing...</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Web3/web2 Fullstack</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Project Lead</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Business developer & Consultant</code>
        </pre>
      </div>
    </div>
  );
};
