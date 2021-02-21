import React from "react";
import Main from "../../components/Main/Main";
import Project from "../../components/Project/Project";
import circleImage from "../../images/portfolio.jpg";
import projects from "./projects";

const Portfolio = () => {
  const circleImageAlt = "picture of a printed circuit board";
  const content = (
    <>
      <div className="row ml-5">
        <h3>Please click on a project card to view the project details: </h3>
      </div>
      <div className="row justify-content-center" id="project-list">
          {projects.map((project,index) => {
              return <Project key={index} {...project}/>
          })}
      </div>
    </>
  );
  const title = "Portfolio";

  return (
    <Main
      circleImage={circleImage}
      circleImageAlt={circleImageAlt}
      content={content}
      title={title}
    />
  );
};

export default Portfolio;
