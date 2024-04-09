import React, { useEffect, useState } from "react";
import LOGO_TEXT from "../assets/logo_text.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	const aHrefStyle = "mr-6 text-[15px] font-bold";
	const bHrefStyle = "mr-6 text-[15px] font-bold underline underline-offset-8";
	const [width, setWidth] = useState(window.innerWidth);
	const [showSideNav, setShowSideNav] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
	}, []);

	const handleMenuClick = () => {
		setShowSideNav(true)
	}

	return (
		<main className="flex w-full gap-6 md:items-center flex-col">
			<nav className="flex w-full items-center justify-between md:px-4 py-5 ">
				<div className="flex w-8/12 md:w-4/12">
					<img alt="logo" src={LOGO_TEXT} onClick={()=>window.open("https://careermargdarshan.org/","_self")} className="w-full md:w-96 cursor-pointer" />
				</div>
				{width > 701 ? (
					<div className="">
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? bHrefStyle : aHrefStyle)}
						>
							Home
						</NavLink>
						<NavLink
							to="/aboutus"
							className={({ isActive }) => (isActive ? bHrefStyle : aHrefStyle)}
						>
							About Us
						</NavLink>
						<NavLink
							to="/allotmentletter"
							className={({ isActive }) => (isActive ? bHrefStyle : aHrefStyle)}
						>
							Allotment Letters
						</NavLink>
						<NavLink
							to="/price"
							className={({ isActive }) => (isActive ? bHrefStyle : aHrefStyle)}
						>
							Pricing
						</NavLink>
						<NavLink
							to="/contact"
							className={({ isActive }) => (isActive ? bHrefStyle : aHrefStyle)}
						>
							Contact Us
						</NavLink>
						{/* <a href="./signup" className={aHrefStyle}>Signup</a> */}
						{/* <Link
							to="/signin"
							className="py-1 px-4 text-[15px] border-gray-400 border-2 font-bold rounded-l-full rounded-r-full"
						>
							Sign In!
						</Link> */}
					</div>
				) : (
					showSideNav ? <div className="bg-white z-30">
						<div className="flex-column">
							<NavLink
								to="/"
								className={({ isActive }) => (isActive ? bHrefStyle : aHrefStyle)}
							>
								Home
							</NavLink>
							<NavLink
								to="/aboutus"
								className={({ isActive }) => (isActive ? bHrefStyle : aHrefStyle)}
							>
								About Us
							</NavLink>
							<NavLink
								to="/allotmentletter"
								className={({ isActive }) => (isActive ? bHrefStyle : aHrefStyle)}
							>
								Allotment Letters
							</NavLink>
							<NavLink
								to="/price"
								className={({ isActive }) => (isActive ? bHrefStyle : aHrefStyle)}
							>
								Pricing
							</NavLink>
							<NavLink
								to="/contact"
								className={({ isActive }) => (isActive ? bHrefStyle : aHrefStyle)}
							>
								Contact Us
							</NavLink>

						</div>
					</div> : <div className="w-4/12 flex justify-end pr-8" >
						<svg xmlns="http://www.w3.org/2000/svg"
							width="36"
							height="36"
							fill="currentColor"
							onClick={handleMenuClick}
							className="bi bi-list"
							viewBox="0 0 16 16"
						>
							<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
						</svg>
					</div>
				)}
			</nav>
		</main>
	);
};

export default Header;
