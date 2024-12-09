import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
	return (
		<div className="n-wrapper" id="Navbar">
			{/* left */}
			<div className="n-left">
				<div className="n-name">Biplap</div>
				<Toggle />
			</div>
			{/* right */}
			<div className="n-right">
				<div className="n-list">
					<ul style={{ listStyleType: "none" }}>
						<li className="active">
							<Link activeClass="active" to="Navbar" spy={true} smooth={true}>
								Home
							</Link>
						</li>
						<li>
							<Link to="services" spy={true} smooth={true}>
								Services
							</Link>
						</li>
						<li>
							<Link to="works" spy={true} smooth={true}>
								Experience
							</Link>
						</li>
						<li>
							<Link to="portfolio" spy={true} smooth={true}>
								Protfolio
							</Link>
<<<<<<< HEAD
						</li> 
						 {/* <li>
=======
						</li>
						{/* <li>
>>>>>>> 46672a81e239641e6893e8e15cce8a55bb4130c3
							<Link to="testimonial" spy={true} smooth={true}>
								Testimonial
							</Link>
						</li> */}
					</ul>
				</div>
				<Link to="contact" spy={true} smooth={true}>
					<button className="button n-button">Contact</button>
				</Link>
			</div>
		</div>
	);
};

export default navbar;
