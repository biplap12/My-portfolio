import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import me from "../../img/me.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet-async";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <Helmet>
        <title>Biplap Neupane || Full Stack Developer || Software Engineer</title>
        <meta name="description" content="Intro biplap neupane" />
        <meta
          name="keywords"
          content="Full Stack Developer with 1 year experience in web designing,
              development,server side development and IT support and services
              producting the quality work."
        />
        <meta name="author" content="Biplap Neupane Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ABF1FF" />
        <meta property="og:title" content="Intro biplap neupane" />
        <meta property="og:description" content="Intro biplap neupane" />
        <meta
          property="og:image"
          content="https://www.biplapneupane.com.np/static/media/me.663cc6ab950f2b9c54cd.png"
        />
        <meta property="og:url" content="https://www.biplapneupane.com.np" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Intro biplap neupane" />
        <meta name="twitter:description" content="Intro biplap neupane" />
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
      <div
        className="Intro"
        id="Intro"
        aria-details="Intro Biplap Neupane."
        aria-label="Intro Biplap Neupane."
        oncontextmenu="return false"
      >
        {/* left name side */}
        <div
          className="i-left"
          aria-details="Intro Biplap Neupane."
          aria-label="Intro Biplap Neupane."
          oncontextmenu="return false"
        >
          <div
            className="i-name"
            aria-details="Intro Biplap Neupane."
            aria-label="Intro Biplap Neupane."
            oncontextmenu="return false"
          >
            <h1 style={{ color: darkMode ? "white" : "" }}>Hey! I Am </h1>
            <TypeAnimation
              sequence={[
                "Biplap Neupane.",
                1000,
                "Full Stack Developer.",
                2000,
              ]}
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block", color: "#fca61f" }}
            />
            <p
              style={{ fontSize: "1rem", color: darkMode ? "white" : "" }}
              aria-details="Full Stack Developer Biplap Neupane."
              aria-label="Full Stack Developer Biplap Neupane."
              oncontextmenu="return false"
            >
              Full Stack Developer with 1 year experience in web designing,
              development,server side development and IT support and services
              producting the quality work.
            </p>
          </div>
          <Link
            to="contact"
            smooth={true}
            spy={true}
            aria-details="Hire me Biplap Neupane."
            aria-label="Hire me Biplap Neupane."
            oncontextmenu="return false"
          >
            <button
              className="button i-button"
              aria-details="Hire me Biplap Neupane."
              aria-label="Hire me Biplap Neupane."
              oncontextmenu="return false"
            >
              Hire me
            </button>
          </Link>

          {/* social icons */}
          <div className="i-icons">
            <a
              href="https://github.com/biplap12"
              rel="noreferrer"
              target={"_blank"}
              oncontextmenu="return false"
              aria-details="https://github.com/biplap12"
              aria-label="github Biplap Neupane biplap12"
            >
              {" "}
              <img
                src={Github}
                alt="github biplap12"
                aria-details="https://github.com/biplap12"
                aria-label="github biplap12"
                oncontextmenu="return false"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/biplap12/"
              rel="noreferrer"
              target={"_blank"}
              oncontextmenu="return false"
              aria-details="https://www.linkedin.com/in/biplap12/"
              aria-label="linkedin Biplap Neupane biplap12"
            >
              <img
                src={LinkedIn}
                alt="linkedin biplap12"
                aria-details="https://www.linkedin.com/in/biplap12/"
                aria-label="linkedin biplap12"
                oncontextmenu="return false"
              />
            </a>
            <a
              href="https://www.instagram.com/biplap11"
              rel="noreferrer"
              target={"_blank"}
              oncontextmenu="return false"
              aria-details="https://www.instagram.com/biplap11"
              aria-label="instagram Biplap Neupane biplap11"
            >
              <img
                src={Instagram}
                alt="instagram Biplap Neupane biplap11"
                aria-details="https://www.instagram.com/biplap11"
                aria-label="instagram Biplap Neupane biplap11"
                oncontextmenu="return false"
              />
            </a>
          </div>
        </div>
        {/* right image side */}
        <div className="i-right">
          <img
            src={Vector1}
            alt="vector1 biplap12"
            aria-details="vector1 biplap12"
            aria-label="vector1 biplap12"
          />
          <img
            src={Vector2}
            alt="vector2 biplap12"
            aria-details="vector2 biplap12"
            aria-label="vector2 biplap12"
          />
          <img
            className="phoptp"
            src={me}
            alt="Full Stack Developer Biplap Neupane profile_picture"
            oncontextmenu="return false"
            height={"380rem"}
            width={"250rem"}
            aria-details="Full Stack Developer Biplap Neupane profile_picture"
            aria-label="Full Stack Developer Biplap Neupane profile_picture"
          />
          {/* animation */}
          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji}
            alt="glassesimoji biplap12 Full Stack Developer Biplap Neupane"
            className="glassemoji"
            oncontextmenu="return false"
            aria-details="glassesimoji biplap12 Full Stack Developer Biplap Neupane"
            aria-label="glassesimoji biplap12 Full Stack Developer Biplap Neupane"
          />

          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
            aria-details="floating-div biplap12 Full Stack Developer Biplap Neupane"
            aria-label="floating-div biplap12 Full Stack Developer Biplap Neupane"
          >
            <FloatinDiv
              img={crown}
              text1="Web"
              text2="Developer"
              oncontextmenu="return false"
              aria-details="floating-div biplap12 Full Stack Developer Biplap Neupane"
              aria-label="floating-div biplap12 Full Stack Developer Biplap Neupane"
            />
          </motion.div>

          {/* animation */}
          <motion.div
            initial={{ left: "6rem", top: "18rem" }}
            whileInView={{ left: "65%" }}
            transition={transition}
            className="floating-div itsupport"
            aria-details="floating-div biplap12 Full Stack Developer Biplap Neupane"
            aria-label="floating-div biplap12 Full Stack Developer Biplap Neupane"
          >
            <FloatinDiv
              img={thumbup}
              text1="IT Support"
              text2="& Services"
              oncontextmenu="return false"
              aria-details="floating-div biplap12 Full Stack Developer Biplap Neupane"
              aria-label="floating-div biplap12 Full Stack Developer Biplap Neupane"
            />
          </motion.div>

          <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
            aria-details="blur biplap12 Full Stack Developer Biplap Neupane"
            aria-label="blur biplap12 Full Stack Developer Biplap Neupane"
          ></div>
          <div
            className="blur"
            aria-details="blur biplap12 Full Stack Developer Biplap Neupane"
            aria-label="blur biplap12 Full Stack Developer Biplap Neupane"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Intro;
