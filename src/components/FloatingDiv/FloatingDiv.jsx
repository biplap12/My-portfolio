import React from "react";

import "./FloatingDiv.css";

const FloatinDiv = ({ img, text1, text2 }) => {
  return (
    // darkMode
    <div
      className="floatingDiv"
      aria-details="floating-div biplap12 Full Stack Developer Biplap Neupane"
      aria-label="floating-div biplap12 Full Stack Developer Biplap Neupane"
      oncontextmenu="return false"
    >
      <img
        src={img}
        alt="floating-div biplap12 Full Stack Developer Biplap Neupane"
      />
      <span
        aria-details="floating-div biplap12 Full Stack Developer Biplap Neupane"
        aria-label="floating-div biplap12 Full Stack Developer Biplap Neupane"
        oncontextmenu="return false"
      >
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
