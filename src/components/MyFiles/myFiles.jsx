import React from "react";
import "./myFiles.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Biplap from "../../img/Biplap.jpg";
import Prime from "../../img/prime_boys.jpg";
import Biplapp from "../../img/biplapp.jpg";

const myFiles = () => {
	return (
		<>
			<div className="Mygalary">
				<span> College Welcome program </span>
			</div>

			<div className="myFile">
				<Carousel>
					<Carousel.Item>
						<img className="d-block" src={Biplap} alt="First slide" />
						<Carousel.Caption>
							{/* <h3>This is the first slide!</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block " src={Prime} alt="Second slide" />
						<Carousel.Caption>
							{/* <h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block" src={Biplapp} alt="Third slide" />
						<Carousel.Caption>
							{/* <h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p> */}
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</>
	);
};

export default myFiles;
