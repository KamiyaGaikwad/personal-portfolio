import React from "react";
import cat1 from "../assets/img/cat-kitten-pixel-art-pixels.png";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../assets/data";

export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="heading">
        <div className="image">
          <img src={cat1} alt="cat" />
        </div>
        <h2>Projects</h2>
      </div>
      {projects.map(({id,projectTitle, languages, wakatimeSvgLink, description, demoLink, codeLink, image})=><ProjectCard id={id} projectTitle={projectTitle} languages={languages} wakatimeSvgLink={wakatimeSvgLink} description={description} demoLink={demoLink} codeLink={codeLink} image={image} />)}
    </div>
  );
};