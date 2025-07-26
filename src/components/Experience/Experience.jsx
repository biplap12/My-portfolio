import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import { Helmet } from "react-helmet-async";
const Experience = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	return (
		<>
			<Helmet>
				<title>Experience</title>
				<meta name="description" content="Experience biplap neupane" />
				<meta
					name="keywords"
					content="Experience Full Stack Developer Biplap Neupane"
				/>
				<meta name="author" content="Biplap Neupane Full Stack Developer" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#ABF1FF" />
				<link rel="canonical" href="https://www.biplapneupane.com.np" />
				<meta property="og:title" content="Experience biplap neupane" />
				<meta property="og:description" content="Experience biplap neupane" />
				<meta property="og:image" content="https://www.biplapneupane.com.np/static/media/me.663cc6ab950f2b9c54cd.png" />
				<meta property="og:url" content="https://www.biplapneupane.com.np" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Experience biplap neupane" />
				<meta name="twitter:description" content="Experience biplap neupane" />
				<meta name="twitter:url" content="https://www.biplapneupane.com.np" />
				<meta name="twitter:image" content="https://www.biplapneupane.com.np/static/media/me.663cc6ab950f2b9c54cd.png" />
				<meta name="twitter:site" content="@biplapneupane" />
				<meta name="twitter:creator" content="@biplapneupane" />
				<meta name="google-site-verification" content="google67faf6dbbf5fedfd.html" />
				
			</Helmet>
			<div className="experience" id="experience">
				<div className="achievement">
					{/* darkMode */}
					<div
						className="circle"
					style={{ color: darkMode ? "var(--orange)" : "" }}
				>
					1+
				</div>
				<span style={{ color: darkMode ? "white" : "" }}>Years </span>
				<span>Experience</span>
			</div>
			<div className="achievement">
				<div
					className="circle"
					style={{ color: darkMode ? "var(--orange)" : "" }}
				>
					20+
				</div>
				<span style={{ color: darkMode ? "white" : "" }}>completed </span>
				<span>Projects</span>
			</div>
			<div className="achievement">
				<div
					className="circle"
					style={{ color: darkMode ? "var(--orange)" : "" }}
				>
					3+
				</div>
				<span style={{ color: darkMode ? "white" : "" }}>companies </span>
				<span>Work</span>
			</div>
		</div>
		</>
	);
};

export default Experience;
