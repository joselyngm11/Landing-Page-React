import React from "react";
import Navbar from "./Navbar.jsx";
import Container from "./Container.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar/>
			<Container/>
			<Footer/>
		</div>
	);
};

export default Home;
