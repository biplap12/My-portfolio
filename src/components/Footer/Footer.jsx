import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
// import LinkedIn from "../../img/linkedin.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
	return (
		<div className="footer">
			<img className="wave_img" src={Wave} alt="" style={{ width: "100%" }} />
			<div className="f-content">
				<span>biplap.neupane2020@gmail.com</span>
				<div className="f-icons">
					<a
						href="https://www.instagram.com/biplap11"
						rel="noreferrer"
						target={"_blank"}
					>
						<Insta color="white" size={"3rem"} />
					</a>
					{/* <a href="https://www.facebook.com/login/"  rel="noreferrer" target={"_blank"}>
						{" "}
						<Facebook color="white" size={"3rem"} />
					</a> */}
					<a
						href="https://www.linkedin.com/in/biplap12/"
						rel="noreferrer"
						target={"_blank"}
					>
						<AiFillLinkedin color="white" size={"3rem"} />
					</a>
					<a
						href="https://github.com/biplap12"
						rel="noreferrer"
						target={"_blank"}
					>
						<Gitub color="white" size={"3rem"} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
