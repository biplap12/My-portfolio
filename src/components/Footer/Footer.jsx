import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { AiFillLinkedin } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  return (
    <>
   <Helmet>
  <title>Biplap Neupane | Full Stack Developer | Software Engineer</title>

  <meta
    name="description"
    content="Portfolio of Biplap Neupane — Full Stack Developer and Software Engineer."
  />
  <meta
    name="keywords"
    content="Full Stack Developer, Software Engineer, Biplap Neupane, Web Developer Nepal"
  />
  <meta name="author" content="Biplap Neupane" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#ABF1FF" />

  {/* Open Graph */}
  <meta property="og:title" content="Biplap Neupane | Full Stack Developer" />
  <meta
    property="og:description"
    content="Portfolio of Biplap Neupane — Full Stack Developer and Software Engineer."
  />
  <meta
    property="og:image"
    content="https://www.biplapneupane.com.np/static/media/me.663cc6ab950f2b9c54cd.png"
  />
  <meta property="og:url" content="https://www.biplapneupane.com.np" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Biplap Neupane | Full Stack Developer" />
  <meta
    name="twitter:description"
    content="Portfolio of Biplap Neupane — Full Stack Developer and Software Engineer."
  />
  <meta
    name="twitter:image"
    content="https://www.biplapneupane.com.np/static/media/me.663cc6ab950f2b9c54cd.png"
  />
  <meta name="twitter:site" content="@biplapneupane" />
  <meta name="twitter:creator" content="@biplapneupane" />

  {/* Google Site Verification — use the token only */}
  <meta name="google-site-verification" content="google67faf6dbbf5fedfd" />
</Helmet>

   
    <div className="footer" onContextMenu={(e) => e.preventDefault()}>
      <img
        className="wave_img"
        src={Wave}
        alt="Wave decorative images for Biplap Neupane's site"
        style={{ width: "100%" }}
        onContextMenu={(e) => e.preventDefault()}
      />
      <div className="f-content" onContextMenu={(e) => e.preventDefault()}>
        <a
          href="mailto:contact@biplapneupane.com.np?subject=Hiring%20Inquiry&body=Hi%20Biplap%2C%0AI'm%20interested%20in%20working%20with%20you."
          aria-label="Send hiring inquiry email to contact@biplapneupane.com.np"
          onContextMenu={(e) => e.preventDefault()}
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          contact@biplapneupane.com.np
        </a>

        <div className="f-icons" onContextMenu={(e) => e.preventDefault()}>
          <a
            href="https://www.instagram.com/biplap11"
            rel="noopener noreferrer"
            target={"_blank"}
            aria-label="Instagram profile of biplap11"
            onContextMenu={(e) => e.preventDefault()}
          >
            <Insta color="white" size={"2rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/biplap12/"
            rel="noreferrer"
            target={"_blank"}
            aria-label="LinkedIn profile of biplap12"
            onContextMenu={(e) => e.preventDefault()}
            style={{ color: "white" }}
          >
            <AiFillLinkedin color="white" size={"2rem"} />
          </a>
          <a
            href="https://github.com/biplap12"
            rel="noreferrer"
            target={"_blank"}
            aria-label="GitHub profile of biplap12"
            onContextMenu={(e) => e.preventDefault()}
            style={{ color: "white" }}
          >
            <Gitub color="white" size={"2rem"} />
          </a>
        </div>

        {/* Copyright Notice */}
        <p>
          &copy; {new Date().getFullYear()} Biplap Neupane. All rights reserved.
        </p>
      </div>
    </div>
    </>
    );
};

export default Footer;

