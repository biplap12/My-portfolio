import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import projects from "../../data/projects";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./allproject.css";
import { Helmet } from "react-helmet-async";

const AllProjects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [hoveredId, setHoveredId] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  return (
    <>
      <Helmet>
        <title>
          Biplap Neupane || Full Stack Developer || Software Engineer
        </title>
        <meta name="description" content="All Projects biplap neupane" />
        <meta
          name="keywords"
          content="All Projects Full Stack Developer Biplap Neupane, Biplap Neupane Full Stack Developer, Biplap Neupane Software Engineer"
        />
        <meta name="author" content="Biplap Neupane Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className={`all-projects-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="portfolio-header">
        <motion.h2
          className="section-title"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          My <span className="highlight">Projects</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Carefully crafted work showcasing my skills
        </motion.p>
      </div>

      <motion.div
        className="project-grid"  
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map(({ image, title, alt, slug, description}) => (
          <motion.div
            key={slug}
            className="project-card-wrapper"
            variants={item}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredId(slug)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <Link
              to={`/portfolio/${slug}`}
              className={`project-card ${
                hoveredId === slug ? "card-hovered" : ""
              }`}
              aria-label={`View project ${title}`}
            >
              <div className="image-container">
                <img
                  src={image}
                  alt={alt}
                  className="card-image"
                  style={{
                    filter:
                      hoveredId === slug
                        ? "brightness(1.05)"
                        : "brightness(0.95)",
                  }}
                />
                <div className="overlay">
                  <button className="btn-view">View</button>
                </div>
              </div>

              <div className="card-body">
                <div className="card-header">
                  <h3 className="card-title">{title}</h3>
                </div>
                <p className="card-desc">{description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </>
  );
};

export default AllProjects;
