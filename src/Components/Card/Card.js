import React from "react";

const Card = ({
  projectName,
  description,
  link,
  socials,
  imgLink,
  linkInfo = "View Project",
}) => {
  return (
    <div className="card card-compact bg-base-100 w-full sm:w-96 shadow-xl mx-auto bg-opacity-60">
      <figure>
        <img src={imgLink} alt="ProjectImage" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{projectName}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={link}>
            {linkInfo}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
