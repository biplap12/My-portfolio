import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../../data/projects";
import "./ProjectDetails.css";
import { Helmet } from "react-helmet-async";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects?.find((p) => p?.slug === slug);

  if (!project) {
    return <p>Project not found.</p>;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { title, image, alt, url, description } = project;
  const siteUrl = window.location.origin + `/projects/${slug}`;

  return (
    <>
      <Helmet>
        <title>
          {title} || Biplap Neupane || Full Stack Developer || Software Engineer
        </title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={`${title}, portfolio, projects, Biplap Neupane, Full Stack Developer, Software Engineer`}
        />
        <meta name="author" content="Biplap Neupane" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ABF1FF" />

        {/* Open Graph (Facebook, LinkedIn, etc) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url || siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Biplap Neupane" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:url" content={url || siteUrl} />
        <meta name="twitter:site" content="@biplapneupane" />
        <meta name="twitter:creator" content="@biplapneupane" />

        {/* Canonical URL */}
        <link rel="canonical" href={url || siteUrl} />

        {/* Robots and Google bot */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Helmet>
      <div className="container">
        <button onClick={() => navigate(-1)} className="backButton">
          ← Back
        </button>

        <h1 className="title">{title}</h1>
        <img src={image} alt={alt} className="projectImage" />
        <p className="description">{description}</p>

        <a href={url} target="_blank" rel="noreferrer" className="projectLink">
          View Project
        </a>
      </div>
    </>
  );
};

export default ProjectDetails;
