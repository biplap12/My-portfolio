import React from "react";

import "./FloatingDiv.css";
import { Helmet } from "react-helmet-async";
const FloatinDiv = ({ img, text1, text2 }) => {
  return (
    // darkMode
    <>
      <Helmet>
        <title>Floating Div</title>
        <meta name="description" content="Floating Div biplap neupane" />
        <meta
          name="keywords"
          content="Floating Div Full Stack Developer Biplap Neupane"
        />
        <meta name="author" content="Biplap Neupane Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ABF1FF" />
        <link rel="canonical" href="https://www.biplapneupane.com.np" />
        <meta property="og:title" content="Floating Div biplap neupane" />
        <meta property="og:description" content="Floating Div biplap neupane" />
        <meta
          property="og:image"
          content="https://www.biplapneupane.com.np/static/media/me.663cc6ab950f2b9c54cd.png"
        />
        <meta property="og:url" content="https://www.biplapneupane.com.np" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Floating Div biplap neupane" />
        <meta
          name="twitter:description"
          content="Floating Div biplap neupane"
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
      </Helmet>
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
    </>
  );
};

export default FloatinDiv;
