import React, { useContext, useEffect, useState } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          All Projects by Biplap Neupane | Full Stack Developer | Software
          Engineer
        </title>
        <meta
          name="description"
          content="Browse all development projects by Biplap Neupane, a Full Stack Developer and Software Engineer. Explore web apps, UI/UX designs, and more."
        />
        <meta
          name="keywords"
          content="Biplap Neupane Projects, Full Stack Developer, Software Engineer, Web Development, Portfolio"
        />
        <meta name="author" content="Biplap Neupane" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://biplapneupane.com.np/portfolio/all-projects"
        />

        {/* Open Graph */}
        <meta property="og:title" content="All Projects by Biplap Neupane" />
        <meta
          property="og:description"
          content="Explore the latest projects by Biplap Neupane — Full Stack Developer specializing in modern web apps and creative solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://biplapneupane.com.np/portfolio/all-projects"
        />
        <meta
          property="og:image"
          content="https://biplapneupane.com.np/biplap.png"
        />
        <meta property="og:site_name" content="Biplap Neupane Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="All Projects by Biplap Neupane" />
        <meta
          name="twitter:description"
          content="Discover all full-stack and frontend projects by Biplap Neupane. Built with React, Node.js, and modern web technologies."
        />
        <meta
          name="twitter:image"
          content="https://biplapneupane.com.np/biplap.png"
        />
        <meta name="twitter:creator" content="@biplapneupane" />
        <meta name="twitter:site" content="@biplapneupane" />
      </Helmet>

      <div className={`all-projects-container ${darkMode ? "dark-mode" : ""}`}>
        <div className="portfolio-header">
          <motion.h2
            className="section-title"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            My <span>Projects</span>
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
          {projects.map(({ image, title, alt, slug, description }) => (
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
