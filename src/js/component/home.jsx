import React from "react";
import Navbar from "./Navbar.jsx";
import Container from "./Container.jsx";

//create your first component
const Home = () => {
	return (
		<div class="container-fluid p-0">
			<Navbar/>
			<Container/>
		</div>
	);
};

export default Home;
