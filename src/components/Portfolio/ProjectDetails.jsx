import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../../data/projects";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p>Project not found.</p>;
  }

  const { title, image, alt, url, description } = project;

  return (
    <div className="container">
      <button 
        onClick={() => navigate(-1)}
        className="backButton"
      >
        ← Back
      </button>

      <h1 className="title">{title}</h1>
      <img
        src={image}
        alt={alt}
        className="projectImage"
      />
      <p className="description">
        {description}
      </p>

      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="projectLink"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectDetails;