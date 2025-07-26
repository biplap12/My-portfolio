import React, { useContext } from "react";
import "./Works.css";
import Logo from "../../img/logo.png";
import Webbook from "../../img/webbook.png";
import WebX from "../../img/webx_logo.jpeg";
import Logo_college_project from "../../img/dharapani neupane samaj.png";
import Logo_guitarshop from "../../img/logo-guitarshop.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet-async";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <>
      <Helmet>
        <title>
          Biplap Neupane || Full Stack Developer || Software Engineer
        </title>
        <meta
          name="keywords"
          content="Full Stack Developer, Software Engineer, Web Designer, Web Developer, Backend Developer, IT Support, Quality Software Development, JavaScript, React, Node.js"
        />
        <meta name="author" content="Biplap Neupane Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ABF1FF" />
        <meta property="og:title" content="Works Biplap Neupane" />
        <meta property="og:description" content="Works Biplap Neupane" />
        <meta
          property="og:image"
          content="https://www.biplapneupane.com.np/static/media/me.663cc6ab950f2b9c54cd.png"
        />
        <meta property="og:url" content="https://www.biplapneupane.com.np" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Works Biplap Neupane" />
        <meta name="twitter:description" content="Works Biplap Neupane" />
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
      </Helmet>

      <div className="works" id="works">
        {/* left side */}
        <div className="w-left">
          <div className="awesome">
            {/* dark Mode */}
            <span style={{ color: darkMode ? "white" : "" }}>
              Works for All these
            </span>
            <span>Brands & Clients</span>
            <p style={{ fontSize: "1rem", color: darkMode ? "white" : "" }}>
              There are many different brands among my clientele. I aim to keep{" "}
              <br />
              my job as diverse as possible, thus I don't commit to one field.
              It keeps
              <br /> me sharp and enables me to learn new things.
            </p>
            <Link
              to="contact"
              smooth={true}
              spy={true}
              oncontextmenu="return false"
              aria-details="Hire me Biplap Neupane"
              aria-label="Hire me Biplap Neupane"
            >
              <button
                className="button s-button"
                aria-details="Hire me Biplap Neupane"
                aria-label="Hire me Biplap Neupane"
              >
                Hire Me
              </button>
            </Link>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>

          {/* right side */}
        </div>
        <div className="w-right">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle"
          >
            <div className="w-secCircle">
              <img
                src={Webbook}
                aria-details="Webbook"
                aria-label="Webbook"
                alt="Webbook"
                height={"200px"}
                width={"170px"}
              />
            </div>
            <div className="w-secCircle">
              <img
                src={Logo}
                aria-details="Eydean Logo by biplap neupane"
                aria-label="Eydean Logo by biplap neupane"
                alt="Eydean Logo by biplap neupane"
              />
            </div>
            <div className="w-secCircle">
              <img
                src={WebX}
                aria-details="WebXNep IT Company —Biplap Neupane"
                aria-label="WebXNep IT Company —Biplap Neupane"
                alt="WebXNep IT Company —Biplap Neupane"
                height={"200px"}
                width={"200px"}
              />
            </div>{" "}
            <div className="w-secCircle">
              <img
                src={Logo_college_project}
                aria-details="Logo college project"
                aria-label="Logo college project"
                alt="Logo college project"
                height={"150px"}
                width={"150px"}
              />
            </div>
            <div className="w-secCircle">
              <img
                src={Logo_guitarshop}
                aria-details="Guitarshop web project by biplap neupane"
                aria-label="Guitarshop web project by biplap neupane"
                alt="Guitarshop web project by biplap neupane"
                height={"55px"}
                width={"200px"}
              />
            </div>
          </motion.div>
          {/* background Circles */}
          <div
            className="w-backCircle blueCircle"
            aria-details="blueCircle"
            aria-label="blueCircle"
          ></div>
          <div
            className="w-backCircle yellowCircle"
            aria-details="yellowCircle"
            aria-label="yellowCircle"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Works;
