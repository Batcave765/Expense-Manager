import { Link } from "react-router-dom";
import React from "react";
import logo from "./transaction.png";

function NavBar() {
	return (
		<div className="navbar">
			<img src={logo} alt="Logo" />
			<Link to={"/"}>
				<button className="nav-link">HOME</button>
			</Link>
			<Link to={"/history"}>
				<button className="nav-link">HISTORY</button>
			</Link>
		</div>
	);
}

export default NavBar;
