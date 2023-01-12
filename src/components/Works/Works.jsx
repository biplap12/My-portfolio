import React, { useContext } from "react";
import "./Works.css";
import Logo from "../../img/logo.png";
import Webbook from "../../img/webbook.png";

import WebHMS from "../../img/webhms.png";
import Logo_college_project from "../../img/logo_college_project.png";
import Logo_guitarshop from "../../img/logo-guitarshop.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	// transition
	return (
		<div className="works" id="works">
			{/* left side */}
			<div className="w-left">
				<div className="awesome">
					{/* dark Mode */}
					<span style={{ color: darkMode ? "white" : "" }}>
						Works for All these
					</span>
					<span>Brands & Clients</span>
					<spane>
						There are many different brands among my clientele. I aim to keep my
						job as diverse as possible, thus <br />I don't commit to one field.
						It keeps me sharp and enables me to learn new things.
					</spane>
					<Link to="contact" smooth={true} spy={true}>
						<button className="button s-button">Hire Me</button>
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
						<img src={Webbook} alt="Webbook" height={"200px"} width={"170px"} />
					</div>
					<div className="w-secCircle">
						<img src={Logo} alt="" />
					</div>
					<div className="w-secCircle">
						<img src={WebHMS} alt="" height={"100px"} width={"150px"} />
					</div>{" "}
					<div className="w-secCircle">
						<img
							src={Logo_college_project}
							alt=""
							height={"150px"}
							width={"150px"}
						/>
					</div>
					<div className="w-secCircle">
						<img src={Logo_guitarshop} alt="" height={"55px"} width={"200px"} />
					</div>
				</motion.div>
				{/* background Circles */}
				<div className="w-backCircle blueCircle"></div>
				<div className="w-backCircle yellowCircle"></div>
			</div>
		</div>
	);
};

export default Works;
