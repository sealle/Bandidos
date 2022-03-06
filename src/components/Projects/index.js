import React, { useState, useEffect } from "react";
import {
  ProjectsContainer,
  ProjectsBg,
  ProjectsContent,
  ProjectsH1,
  ProjectsP,
  ProjectsBox,
  ProjectsImg,
  ProjectsImageContainer,
  ProjectsWrapper,
} from "./Projects";
import Tech from "../../images/Tech1.jpg";

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <ProjectsWrapper>
        <ProjectsContent>
          <ProjectsH1>Realised Projecs</ProjectsH1>
          <ProjectsP>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </ProjectsP>
        <ProjectsImg src={Tech} />
        </ProjectsContent>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
}

export default Projects;
