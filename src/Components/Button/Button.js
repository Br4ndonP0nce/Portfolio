import React from "react";

const Button = ({
  title,
  id,
  rightIcon,
  leftIcon,
  ContainerClass,
  link,
  target,
}) => {
  return (
    <a
      href={link}
      rel="noreferrer"
      target={target}
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden bg-white rounded-md px-7 py-3 text-black flex items-center justify-center text-center ${ContainerClass} hover:opacity-50 duration-500`}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-black text-xs uppercase">
        <div>{title}</div>
      </span>
    </a>
  );
};

export default Button;
