import React, { useEffect, useState } from "react";
import LOGO_TEXT from "../assets/logo_text.png";
import { Link } from "react-router-dom";

const Header = () => {
	const aHrefStyle = "mr-6 text-[15px] font-bold";
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
			console.log("pehan", window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
	}, []);
	return (
		<main className="flex w-full gap-6 md:items-center flex-col">
			<nav className="flex w-full items-center justify-between md:px-4 py-5">
				<div className="flex w-8/12 md:w-4/12">
					<img alt="logo" src={LOGO_TEXT} className="w-full md:w-96" />
				</div>
				{width > 701 ? (
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
						<Link
							to="/signin"
							className="py-1 px-4 text-[15px] border-gray-400 border-2 font-bold rounded-l-full rounded-r-full"
						>
							Sign In!
						</Link>
					</div>
				) : (
					<div className="w-4/12">
						<Link
							to="/signin"
							className="py-1 px-4 text-[15px] border-gray-400 border-2 font-bold rounded-l-full rounded-r-full"
						>
							Sign In!
						</Link>
					</div>
				)}
			</nav>
		</main>
	);
};

export default Header;
