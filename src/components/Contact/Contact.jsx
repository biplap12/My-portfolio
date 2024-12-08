import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { toast } from "react-hot-toast";
const Contact = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	const form = useRef();
	const [done, setDone] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();
		if(!e.target[0].value || !e.target[1].value || !e.target[2].value) return toast.error("Please fill all the fields");
		emailjs
			.sendForm(
				"service_5zwzyae",
				"template_i4zx7bo",
				form.current,
				"xXwQyIQKNRqxTUZMp"
			)
			.then(
				(result) => {
					setDone(true);
					toast.success("Form submitted successfully");
					form.reset();
				},
				(error) => {
					toast.error(error.text);
				}
			);
	};

	return (
		<div className="contact-form" id="contact">
			{/* left side copy and paste from work section */}
			<div className="w-left">
				<div className="awesome">
					{/* darkMode */}
					<span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
					<span>Contact me</span>
					<div
						className="blur s-blur1"
						style={{ background: "#ABF1FF94" }}
					></div>
				</div>
			</div>
			{/* right side form */}
			<div className="c-right">
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						className="user"
						placeholder=" Full Name"
						autoComplete="off"
						required
					/>
					<input
						type="email"
						name="email"
						className="user"
						placeholder="Email"
						autoComplete="off"
						required
					/>
					<textarea name="message" className="user" placeholder="Message" 
					autoComplete="off"
						required/>
					<input type="submit" value="Send" className="button" />
					{/* <span>{done && "Thanks for Contacting me"}</span> */}
					<div
						className="blur c-blur1"
						style={{ background: "var(--purple)" }}
					></div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
