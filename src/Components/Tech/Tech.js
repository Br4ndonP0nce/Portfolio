import React from "react";

const Tech = () => {
  return (
    <section className="flex flex-col items-center min-h-screen gap-10 ">
      <h1 className="text-5xl md:text-7xl font-bold px-5">Our Tech</h1>
      <div
        id="tech"
        className=" flex flex-col md:flex-row items-center justify-center gap-5 md:gap-80 px-5 font-robert-regular"
      >
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold ">
              <b className="text-primaryYellow">Fullstack</b> services
            </h1>
            <li>Backend Development (Server-side logic)</li>
            <li>Frontend Development (User interfaces)</li>
            <li>Database Design & Management</li>
            <li>Cloud Hosting & Scaling Solutions</li>
            <li>Data compliance</li>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold ">
              <b className="text-primaryYellow">Web3</b> & Blockchain
            </h1>
            <li>Decentralized App (DApp) Development</li>
            <li>Smart Contract Creation & Auditing</li>
            <li>Token Development & Launches</li>
            <li>Blockchain Consulting & Implementation</li>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold ">
              <b className="text-orange-500">Digital</b> Transformation
            </h1>
            <li>Business Process Automation</li>
            <li>Digital Strategy Consulting</li>
            <li>E-commerce & Digital Platform Integration</li>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold ">
              <b className="text-primaryYellow">Software</b> Solutions
            </h1>
            <li>Custom Software Development</li>
            <li>Software Testing & QA</li>
            <li>System Integrations & Migration</li>
            <li>Continuous Integration & Deployment</li>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold ">
              <b className="text-blue-400">Digital</b> Products{" "}
              <b className="text-blue-400">Development</b>
            </h1>
            <li>Website Design & Creation</li>
            <li>Mobile App Development</li>
            <li>User Experience (UX) & User Interface (UI) Design</li>
            <li>Cloud Hosting & Scaling Solutions</li>
            <li>Interactive Prototyping</li>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold ">
              <b className="text-orange-500">Artificial</b> Intelligence
            </h1>
            <li className="max-w-sm">
              LLMs integrations and independent agents based on language and
              context
            </li>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
