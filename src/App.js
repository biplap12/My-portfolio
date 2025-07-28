// import Navbar from "./components/Navbar/Navbar";
// import Intro from "./components/Intro/Intro";
// import Services from "./components/Services/Services";
// import "./App.css";
// import Experience from "./components/Experience/Experience";
// import Works from "./components/Works/Works";
// // import MyFiles from "./components/MyFiles/myFiles";
// import Portfolio from "./components/Portfolio/Portfolio";
// //import Testimonial from "./components/Testimonials/Testimonial";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import { useContext } from "react";
// import { themeContext } from "./Context";
// import { Toaster } from "react-hot-toast";
// import BackToTop from "./components/backToTop/backToTop";
// import { Helmet } from "react-helmet-async";

// function App() {
// 	const theme = useContext(themeContext);
// 	const darkMode = theme.state.darkMode;
	
// 	return (
// 		<>
// 		<Helmet>
//   <title>Biplap Neupane || Full Stack Developer || Software Engineer</title>

//   {/* Basic SEO */}
//   <meta name="description" content="Official portfolio of Biplap Neupane. Explore skills, experience, and projects." />
//   <meta name="keywords" content="Biplap Neupane, Web Developer, Full-Stack, React, Node.js, JavaScript, Portfolio, Frontend, Backend, Modern Web Design" />
//   <link rel="canonical" href="https://www.biplapneupane.com.np" />

//   <meta property="og:title" content="Biplap Neupane || Full Stack Developer || Software Engineer" />
//   <meta property="og:description" content="Explore my work and skills as a web developer. I specialize in React, NextJs, Node.js, and modern web design." />
//   <meta property="og:image" content="https://www.biplapneupane.com.np/static/media/me.663cc6ab950f2b9c54cd.png" />
//   <meta property="og:url" content="https://www.biplapneupane.com.np" />
//   <meta property="og:type" content="website" />

//   <meta name="twitter:card" content="summary_large_image" />
//   <meta name="twitter:title" content="Biplap Neupane || Full Stack Developer || Software Engineer" />
//   <meta name="twitter:description" content="Explore my work and skills as a web developer. I specialize in React, NextJs, Node.js, and modern web design." />
//   <meta name="twitter:url" content="https://x.com/biplapneupane" />
//   <meta name="twitter:image" content="https://www.biplapneupane.com.np/static/media/me.663cc6ab950f2b9c54cd.png" />

//   <meta name="google-site-verification" content="google67faf6dbbf5fedfd.html" />
// </Helmet>

// 		<div
// 			className="App"
// 			style={{
// 				background: darkMode ? "black" : "",
// 				color: darkMode ? "white" : "",
// 			}}
// 		>   
// 			<Navbar />
// 			<Intro />
// 			<Services />
// 			<Works />
// 			<Experience />
// 			{/* <MyFiles /> */}
// 			<Portfolio />
// 			{/* <Testimonial /> */}
// 			<Contact />
// 			<Footer />
// 			<BackToTop	/>
// 			<Toaster position="top-right" />
// 		</div>
// 		</>
// 	);
// }

// export default App;



import React,{ useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import AllProjects from "./components/Portfolio/AllProjects";
import ProjectDetails from "./components/Portfolio/ProjectDetails";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/backToTop/backToTop";

import { themeContext } from "./Context";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import "./App.css";


function HomePage() {
  return (
    <>
      <Intro />
      <Services />
      <Works />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
}

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
     <Helmet>
   <title>Biplap Neupane || Full Stack Developer || Software Engineer</title>

   {/* Basic SEO */}
   <meta name="description" content="Official portfolio of Biplap Neupane. Explore skills, experience, and projects." />
   <meta name="keywords" content="Biplap Neupane, Web Developer, Full-Stack, React, Node.js, JavaScript, Portfolio, Frontend, Backend, Modern Web Design" />
   <link rel="canonical" href="https://www.biplapneupane.com.np" />

   <meta property="og:title" content="Biplap Neupane || Full Stack Developer || Software Engineer" />
   <meta property="og:description" content="Explore my work and skills as a web developer. I specialize in React, NextJs, Node.js, and modern web design." />
   <meta property="og:image" content="https://www.biplapneupane.com.np/static/media/me.663cc6ab950f2b9c54cd.png" />
   <meta property="og:url" content="https://www.biplapneupane.com.np" />
   <meta property="og:type" content="website" />

   <meta name="twitter:card" content="summary_large_image" />
   <meta name="twitter:title" content="Biplap Neupane || Full Stack Developer || Software Engineer" />
   <meta name="twitter:description" content="Explore my work and skills as a web developer. I specialize in React, NextJs, Node.js, and modern web design." />
   <meta name="twitter:url" content="https://x.com/biplapneupane" />
   <meta name="twitter:image" content="https://www.biplapneupane.com.np/static/media/me.663cc6ab950f2b9c54cd.png" />

   <meta name="google-site-verification" content="google67faf6dbbf5fedfd.html" />
</Helmet>

      <BrowserRouter>
        <div
          className="App"
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
          }}
        >
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio/all-projects" element={<AllProjects />} />
            <Route path="/portfolio/:slug" element={<ProjectDetails />} />
          </Routes>

          <Footer />
          <BackToTop />
          <Toaster position="top-right" />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
