import React from "react";
import "./myFiles.css";
import Prime from "../../img/prime_boys.jpg";

const myFiles = () => {
	return (
		<>
			<div>
				<h1>College Welcome program</h1>
				<img className="myImg" src={Prime} alt="prime welcome program" />
			</div>
		</>
	);
};

export default myFiles;
