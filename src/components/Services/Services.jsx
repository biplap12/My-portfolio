import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import Resume from "./resume.pdf";

const Services = () => {
	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	// transition
	const transition = {
		duration: 1.5,
		type: "spring",
	};

	return (
		<div className="services" id="services">
			{/* left side */}
			<div className="awesome">
				{/* dark mode */}
				<span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
				<span>services</span>
				<spane>
					The most crucial aspect of a business success is how well its time is
					<br />
					utilized, and designing websites is no different. I made an effort to
					<br />
					provide the client with customer-friendly work as quickly as possible.
				</spane>
				{/* <a href={Resume} whileInView download>
					<button className="button s-button">Download CV</button>
				</a> */}
				<div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
			</div>
			{/* right */}
			<div className="cards">
				{/* first card */}
				<motion.div
					initial={{ /*left: "25rem"*/ left: "35rem" }}
					whileInView={{ /*left: "14rem"*/ left: "25rem" }}
					transition={transition}
				>
					<Card
						emoji={HeartEmoji}
						heading={"Database"}
						detail={"Microsoft SQL server"}
					/>
				</motion.div>
				{/* second card */}
				<motion.div
					initial={{ left: "-11rem", top: "12rem" }}
					whileInView={{ left: "4rem" /*left: "25rem"*/ }}
					transition={transition}
				>
					<Card
						emoji={Glasses}
						heading={"Developer"}
						detail={"Html, Css, JavaScript, MERN, JAVA, Android"}
					/>
				</motion.div>
				{/* 3rd */}
				<motion.div
					initial={{ top: "19rem", left: "12rem" }}
					whileInView={{ left: "25rem" }}
					transition={transition}
				>
					<Card
						emoji={Humble}
						heading={"IT Support & Services"}
						detail={
							"Hotel,Restaurants, Mart, Dental Hospital, Motors Management System"
						}
						color="rgba(252, 166, 31, 0.45)"
					/>
				</motion.div>
				<div
					className="blur s-blur2"
					style={{ background: "var(--purple)" }}
				></div>
			</div>
		</div>
	);
};

export default Services;
