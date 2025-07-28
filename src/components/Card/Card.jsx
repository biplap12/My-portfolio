import React from "react";
import "./Card.css";
import { Helmet } from "react-helmet-async";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <>
      <Helmet>
        <title>
          Biplap Neupane || Full Stack Developer || Software Engineer
        </title>
        <meta name="description" content="Card biplap neupane " />
        <meta
          name="keywords"
          content="Card Full Stack Developer Biplap Neupane"
        />
        <meta name="author" content="Biplap Neupane Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="card" style={{ borderColor: { color } }}>
        <img src={emoji} alt=" emoji" />
        <span>{heading}</span>
        <span>{detail}</span>
        {/* <button className="c-button">LEARN MORE</button> */}
      </div>
    </>
  );
};

export default Card;
