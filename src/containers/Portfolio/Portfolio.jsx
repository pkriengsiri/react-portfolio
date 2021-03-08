import React, { useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import Modal from "../../components/Modal/Modal";
import Project from "../../components/Project/Project";
import circleImage from "../../images/portfolio.jpg";
import projects from "./projects";
import ProjectContext from "../../contexts/ProjectContext";

const Portfolio = () => {
  const [project, setProject] = useState({
    image: "bird.png",
  });
  const [projectDisplay, setProjectDisplay] = useState([]);
  const [truth, setTruth] = useState(true);

  useEffect(() => {
    const projectDisplayArray = [];
    for (let i = 0; i < projects.length; i++) {
      projectDisplayArray.push(false);
    }
    setProjectDisplay(projectDisplayArray);
    // setTimeout(()=>{setProjectDisplay(["true",])
    // setTimeout(()=>{setProjectDisplay(["true","true"])},1000)},1000)
    
    // console.log(projectDisplay);
    displayProjects();
   
  }, []);

  const displayProjects = () => {
    const projectDisplayArray = [];

    let count = 0;
    const interval = setInterval(() => {
      projectDisplayArray.push(true);
      count++;
      setProjectDisplay(projectDisplayArray);
      if (count === projects.length) {
        console.log("interval cleared");
        clearInterval(interval);
      }
    }, 1000);
  }
  const circleImageAlt = "picture of a printed circuit board";
  const content = (
    <>
      <div className="row ml-5">
        <h3>Please click on a project card to view the project details: </h3>
      </div>
      <div className="row justify-content-center" id="project-list">
        {projects.map((project, index) => (
          <>
            {projectDisplay[index] && (
              <Project
                key={index}
                {...project}
                details={project}
                setProject={setProject}
              />
            )}
          </>
        ))}
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
