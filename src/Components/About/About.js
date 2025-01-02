import React from "react";

export const About = () => {
  return (
    <div id="about" className="flex flex-col px-20 gap-5 py-10">
      <h1 className="text-center md:text-start self-center max-w-sm md:self-start text-xl md:text-2xl  font-black">
        Everything for your business needs
      </h1>
      <div className="mockup-code self-center text-sm ">
        <pre data-prefix="$">
          <code>npm i Brandon</code>
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
