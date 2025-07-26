import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // Regular Expression for Email Validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[A-Za-z\s]+$/;

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    // Validate form fields
    if (!name || !email || !message) {
      return toast.error("Please fill all the fields");
    }
    if (!nameRegex.test(name)) {
      return toast.error("Name should contain only alphabetic characters");
    }
    if (name.length < 4) {
      return toast.error("Please Enter your Full Name!!");
    }    
    // Email validation
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email address");
    }
    if (message.length < 10) {
      return toast.error("Message should be at least 10 characters long");
    }
    try {
      setLoading(true);

      // Show the loading toast with a unique ID
      const toastId = toast.loading("Please wait...");

      // Send email via EmailJS
      emailjs
        .sendForm(
          "service_5zwzyae",
          "template_i4zx7bo",
          form.current,
          "xXwQyIQKNRqxTUZMp"
        )
        .then(
          (result) => {
            // Update the toast to success
            toast.success("Message Send Successfully!!", { id: toastId });
            form.current.reset(); // Reset the form
          },
          (error) => {
            // Update the toast to error
            toast.error(`Email sending failed: ${error.text}`, { id: toastId });
          }
        )
        .finally(() => {
          setLoading(false); // Reset loading state after email is sent or failed
        });

    } catch (error) {
      toast.error("Something went wrong, please try again later.");
      setLoading(false); // Reset loading in case of unexpected errors
    }
  };

  return (
    <>
    <Helmet>
      <title>
        Biplap Neupane || Full Stack Developer || Software Engineer
      </title>
      <meta name="description" content="Contact biplap neupane" />
      <meta
        name="keywords"
        content="Contact Full Stack Developer Biplap Neupane, Biplap Neupane Full Stack Developer, Biplap Neupane Software Engineer"
      />
      <meta name="author" content="Biplap Neupane Full Stack Developer" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ABF1FF" />

    </Helmet>
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
            placeholder=" Enter Your Full Name"
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            className="user"
            placeholder=" Enter Your Email"
            autoComplete="off"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            autoComplete="off"
          />
          <button
            type="submit"
            className="button"
            disabled={loading}
          >
            {loading ? (
              <div className="spinner"></div>
            ) : (
              "Send"
            )}
          </button>
          {/* Loading message */}
          {/* {loading && <span className="loading-text">Please Wait ...</span>} */}

          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
