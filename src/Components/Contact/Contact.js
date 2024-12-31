import React from "react";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="py-20 px-10 md:px-40  ">
      <div className="chat chat-start text-lg md:text-2xl">
        <div className="chat-bubble font-black">Let's work together!</div>
      </div>
      <div className="chat chat-end font-black">
        <div className="chat-bubble flex flex-col text-lg md:text-2xl ">
          Sure, let's chat!
          <br />
          <div className="flex flex-row text-2xl justify-end gap-2">
            {" "}
            <a href="#" className="hover:opacity-50 duration-300">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:opacity-50 duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:opacity-50 duration-300">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
