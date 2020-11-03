import React from "react";
import herobg from "../img/herobg.jpg";
import "../css/Home.css";

const Home = () => {
	return (
		<>
			<img className="hero__img" src={herobg} alt="" />
			<div className="hero__details">
				<h2 className="hero__title">Student Management System</h2>
				<p className="hero__description">Design and Develop With 💖 By <a href="https://kcsajan.com.np">Sajan Kc</a> </p>
			</div>
		</>
	);
};

export default Home;
