import React, {useState} from "react";
import Main from "../../components/Main/Main";
import Modal from "../../components/Modal/Modal";
import Project from "../../components/Project/Project";
import circleImage from "../../images/portfolio.jpg";
import projects from "./projects";
import ProjectContext from "../../contexts/ProjectContext";

const Portfolio = () => {
  const [project,setProject] = useState({});

  const circleImageAlt = "picture of a printed circuit board";
  const content = (
    <>
      <div className="row ml-5">
        <h3>Please click on a project card to view the project details: </h3>
      </div>
      <div className="row justify-content-center" id="project-list">
        {projects.map((project, index) => {
          return <Project key={index} {...project} details={project} setProject={setProject} />;
        })}
      </div>
    </>
  );
  const title = "Portfolio";

  return (
      <ProjectContext.Provider value={project}>
        <Main
          circleImage={circleImage}
          circleImageAlt={circleImageAlt}
          content={content}
          title={title}
        />
        <Modal />
      </ProjectContext.Provider>
  );
};

export default Portfolio;
