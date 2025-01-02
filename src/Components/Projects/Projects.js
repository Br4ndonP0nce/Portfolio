import React from "react";
import Card from "../Card/Card";
import projectsData from "../../data/projectData.json";
const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-5 px-5 md:px-10">
      {projectsData.map((projectsData, index) => (
        <div key={index} className="flex flex-col md:flex-row">
          <Card
            projectName={projectsData.projectName}
            description={projectsData.description}
            link={projectsData.link}
            socials={projectsData.socials}
            imgLink={projectsData.imgLink}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
