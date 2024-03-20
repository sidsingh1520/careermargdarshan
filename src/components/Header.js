import React from "react";
import LOGO_TEXT from "../assets/logo_text.png";
import { Link } from "react-router-dom";

const Header = () => {
	const aHrefStyle = "mr-6 text-[15px] font-bold";

	return (
		<main className="flex w-full gap-6 items-center flex-col">
			<nav className="flex w-full items-center justify-between px-4 py-5">
				<div className="flex">
					<img alt="logo" src={LOGO_TEXT} className="w-96" />
				</div>
				<div className="">
					<Link to="/" className={aHrefStyle}>
						Home
					</Link>
					<Link to="/aboutus" className={aHrefStyle}>
						About Us
					</Link>
					<Link to="/allotmentletter" className={aHrefStyle}>
						Allotment Letters
					</Link>
					<Link to="/price" className={aHrefStyle}>
						Pricing
					</Link>
					<Link to="/contact" className={aHrefStyle}>
						Contact Us
					</Link>
					{/* <a href="./signup" className={aHrefStyle}>Signup</a> */}
					<button className="py-1 px-4 text-[15px] border-gray-400 border-2 font-bold rounded-l-full rounded-r-full">
						Sign In!
					</button>
				</div>
			</nav>
		</main>
	);
};

export default Header;
