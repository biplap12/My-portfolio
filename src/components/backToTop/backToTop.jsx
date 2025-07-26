import React, { useState, useEffect } from "react";
import { MdOutlineArrowCircleUp } from "react-icons/md";
import "./backToTop.css";
import { Helmet } from "react-helmet-async";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll behavior
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Back To Top</title>
        <meta name="description" content="Back To Top" />
        <meta
          name="keywords"
          content="Back To Top Full Stack Developer Biplap Neupane"
        />
        <meta name="author" content="Biplap Neupane Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-details="back-to-top biplap12 Full Stack Developer Biplap Neupane"
          aria-label="back-to-top biplap12 Full Stack Developer Biplap Neupane"
          oncontextmenu="return false"
        >
          <MdOutlineArrowCircleUp size={40} />
        </button>
      )}
    </>
  );
};

export default BackToTop;
