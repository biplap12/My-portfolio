import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const navbar = () => {
  const { pathname } = useLocation();
  const handleClick = () => {
    if (pathname.startsWith("/portfolio") && pathname !== "/") {
      window.location.replace("/");
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Biplap Neupane || Full Stack Developer || Software Engineer
        </title>
        <meta
          name="description"
          content="Biplap Neupane is a passionate Full Stack Developer and Software Engineer based in Nepal, with expertise in frontend, backend, and IT support."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, Software Engineer, Web Designer, Web Developer, Backend Developer, IT Support, Quality Software Development, JavaScript, React, Node.js"
        />
        <meta
          property="og:title"
          content="Biplap Neupane - Full Stack Developer & Software Engineer"
        />
        <meta
          property="og:description"
          content="Biplap Neupane is a passionate Full Stack Developer and Software Engineer based in Nepal, with expertise in frontend, backend, and IT support."
        />
        <meta
          name="twitter:title"
          content="Biplap Neupane - Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Biplap Neupane is a passionate Full Stack Developer and Software Engineer based in Nepal, with expertise in frontend, backend, and IT support."
        />
        <meta name="author" content="Biplap Neupane Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ABF1FF" />
        <meta
          property="og:title"
          content="Biplap Neupane || Full Stack Developer || Software Engineer"
        />
        <meta
          property="og:description"
          content="Biplap Neupane is a passionate Full Stack Developer and Software Engineer based in Nepal, with expertise in frontend, backend, and IT support."
        />
        <meta
          property="og:image"
          content="https://www.biplapneupane.com.np/static/media/me.663cc6ab950f2b9c54cd.png"
        />
        <meta property="og:url" content="https://www.biplapneupane.com.np" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Biplap Neupane || Full Stack Developer || Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Biplap Neupane is a passionate Full Stack Developer and Software Engineer based in Nepal, with expertise in frontend, backend, and IT support."
        />
        <meta name="twitter:url" content="https://www.biplapneupane.com.np" />
        <meta
          name="twitter:image"
          content="https://www.biplapneupane.com.np/static/media/me.663cc6ab950f2b9c54cd.png"
        />
        <meta name="twitter:site" content="@biplapneupane" />
        <meta name="twitter:creator" content="@biplapneupane" />
        <meta
          name="google-site-verification"
          content="google67faf6dbbf5fedfd.html"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="googlebot-news" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Biplap Neupane",
            url: "https://www.biplapneupane.com.np",
            image:
              "https://www.biplapneupane.com.np/static/media/me.663cc6ab950f2b9c54cd.png",
            jobTitle: "Full Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance / Self-employed",
            },
            sameAs: [
              "https://github.com/biplap12",
              "https://linkedin.com/in/biplapneupane",
              "https://twitter.com/biplapneupane",
            ],
          })}
        </script>
      </Helmet>
      <div
        className="n-wrapper"
        id="Navbar"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* left */}
        <div
          className="n-left"
          aria-label="toggle button of Biplap Neupane Full Stack Developer"
        >
          <div
            onClick={handleClick}
            className="n-name"
            aria-label="Biplap Neupane Full Stack Developer"
          >
            Biplap
          </div>
          <Toggle />
        </div>
        {/* right */}
        <div
          className="n-right"
          aria-label="Primary Navigation Links of Biplap Neupane Full Stack Developer"
        >
          <div
            className="n-list"
            aria-label="Primary Navigation Links of Biplap Neupane Full Stack Developer"
          >
            <ul style={{ listStyleType: "none" }}>
              <li
                className="active"
                aria-label="Home Biplap Neupane Full Stack Developer"
              >
                <Link
                  activeClass="active"
                  to="Navbar"
                  onClick={handleClick}
                  spy={true}
                  smooth={true}
                  aria-label="Home Biplap Neupane Full Stack Developer"
                >
                  Home
                </Link>
              </li>
              <li aria-label="Services Biplap Neupane Full Stack Developer">
                <Link
                  to="services"
                  onClick={handleClick}
                  spy={true}
                  smooth={true}
                  aria-label="Services Biplap Neupane Full Stack Developer"
                >
                  Services
                </Link>
              </li>
              <li aria-label="Experience Biplap Neupane Full Stack Developer">
                <Link
                  to="works"
                  onClick={handleClick}
                  spy={true}
                  smooth={true}
                  aria-label="Experience Biplap Neupane Full Stack Developer"
                >
                  Experience
                </Link>
              </li>
              <li aria-label="Portfolio Biplap Neupane Full Stack Developer">
                <Link
                  to="portfolio"
                  onClick={handleClick}
                  spy={true}
                  smooth={true}
                  aria-label="Portfolio Biplap Neupane Full Stack Developer"
                >
                  Protfolio
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="contact"
            onClick={handleClick}
            spy={true}
            smooth={true}
            aria-label="Contact Biplap Neupane Full Stack Developer"
          >
            <button
              className="button n-button"
              aria-label="Contact button of Biplap Neupane Full Stack Developer"
            >
              Contact
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default navbar;
