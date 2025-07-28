// import React, { useContext } from "react";
// import "./Portfolio.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { themeContext } from "../../Context";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css/autoplay";
// import BNStore from "../../img/Bn store.png";
// import epm from "../../img/employeeMmanagementSystem.png";
// import portfolio from "../../img/portfolio.png";
// import hms from "../../img/hms.png";
// import nanofinance from "../../img/nanofinance.png";
// import BnEstate from "../../img/BnEstate.png";
// import imageSearchApp from "../../img/imageSearchApp.png";
// import shreeDharapaniSamaj from "../../img/shreedharapani.png";

// const Portfolio = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   return (
//     <div className="portfolio" id="portfolio">
//       {/* Heading */}
//       <div className="portfolio-header">
//         <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
//         <span>Portfolio</span>
//       </div>

//       {/* Swiper Slider */}
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={1}
//         grabCursor={true}
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 1000,
//           disableOnInteraction: false,
//         }}
//         speed={2000}
//         loop={true}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         modules={[Pagination, Autoplay]}
//         className="portfolio-slider"
//         style={{ color: darkMode ? "white" : "" }}>
//         <SwiperSlide>
//           <a
//             referrerPolicy="no-referrer"
//             rel="noreferrer"
//             target="_blank"
//             href="https://github.com/biplap12/ecommerce_grocery_store.git">
//             <img
//               src={BNStore}
//               alt="BN Store Project made with React.js and Tailwind CSS by Biplap Neupane"
//             />
//           </a>
//         </SwiperSlide>
//         <SwiperSlide>
//           <a
//             href="https://dharapani-neupane-samaj.biplapneupane.com.np/"
//             rel="noreferrer"
//             target="_blank"
//             referrerPolicy="no-referrer">
//             <img
//               src={shreeDharapaniSamaj}
//               alt="Shree Dharapani Samaj Project made with React.js and Tailwind CSS by Biplap Neupane"
//             />
//           </a>
//         </SwiperSlide>
//         <SwiperSlide>
//           <a
//             referrerPolicy="no-referrer"
//             rel="noreferrer"
//             target="_blank"
//             href="https://github.com/biplap12/Attendance-Management-using-Face-Recognition.git">
//             <img
//               src={epm}
//               alt="Employee Management System Project made with React.js and Tailwind CSS by Biplap Neupane"
//             />
//           </a>
//         </SwiperSlide>
//         <SwiperSlide>
//           <a
//             href="https://biplap-neupane.vercel.app/"
//             rel="noreferrer"
//             target="_blank"
//             referrerPolicy="no-referrer">
//             <img
//               src={portfolio}
//               alt="Portfolio Project made with React.js and Tailwind CSS by Biplap Neupane"
//             />
//           </a>
//         </SwiperSlide>
//         <SwiperSlide>
//           <a
//             href="https://hms-frontendbpbiplap.vercel.app/"
//             rel="noreferrer"
//             target="_blank"
//             referrerPolicy="no-referrer">
//             <img
//               src={hms}
//               alt="Hospital Management System Project made with React.js and Tailwind CSS by Biplap Neupane"
//             />
//           </a>
//         </SwiperSlide>
//         <SwiperSlide>
//           <a
//             href="https://github.com/biplap12/NanoFinance.git"
//             rel="noreferrer"
//             target="_blank"
//             referrerPolicy="no-referrer">
//             <img
//               src={nanofinance}
//               alt="Nanofinance Project made with React.js and Tailwind CSS by Biplap Neupane"
//             />
//           </a>
//         </SwiperSlide>
//         <SwiperSlide>
//           <a
//             href="https://bn-estate.vercel.app/"
//             rel="noreferrer"
//             target="_blank"
//             referrerPolicy="no-referrer">
//             <img
//               src={BnEstate}
//               alt="BnEstate Project made with React.js and Tailwind CSS by Biplap Neupane"
//             />
//           </a>
//         </SwiperSlide>
//         <SwiperSlide>
//           <a
//             href="https://github.com/biplap12/Image_Search_App.git"
//             rel="noreferrer"
//             target="_blank"
//             referrerPolicy="no-referrer">
//             <img
//               src={imageSearchApp}
//               alt="Images Search App Project made with React.js and Tailwind CSS by Biplap Neupane"
//             />
//           </a>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Portfolio;

import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { themeContext } from "../../Context";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import projects from "../../data/projects";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* Heading */}
      <div className="portfolio-header">
        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Portfolio</span>
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="portfolio-slider"
      >
        {projects.map(({ image, alt, slug }) => (
          <SwiperSlide key={slug}>
            <Link to={`/portfolio/${slug}`}>
              <img src={image} alt={alt} className="portfolio-image" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="portfolio-button-container">
        <Link
          to="/portfolio/all-projects"
          spy={true}
          smooth={true}
          aria-label="Contact Biplap Neupane Full Stack Developer to view all projects"
        >
          <button
            className="button n-button"
            aria-label="Contact button of Biplap Neupane Full Stack Developer to view all projects"
          >
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
