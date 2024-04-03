import React from "react";
import LOGO_TEXT from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="shadow-lg w-[20%] bg-black text-white">
			<div className="flex mx-auto md:w-3/12 justify-center items-center h-[20%]">
				<img alt="logo" src={LOGO_TEXT} className="w-16" />
				<p className="text-base font-semibold">
					Career <br /> Margdarshan
				</p>
			</div>
			<div className="flex flex-col h-[80%] justify-between">
				<div>
					<Link to="/dashboard">
						<p className="hover:bg-gray-500 text-sm w-full py-2 px-2">
							College Report
						</p>
					</Link>
					<Link to="/dashboard/update">
						<p className="hover:bg-gray-500 text-sm  w-full py-2 px-2">
							Updates
						</p>
					</Link>
					<p className="hover:bg-gray-500 text-sm  w-full py-2 px-2">Message</p>
					<p className="hover:bg-gray-500 text-sm  w-full py-2 px-2">
						Choice Filling
					</p>
					<p className="hover:bg-gray-500 text-sm  w-full py-2 px-2">
						Branch Wise College Report
					</p>
					<p className="hover:bg-gray-500 text-sm  w-full py-2 px-2">
						Career Margdarshan AI
					</p>
				</div>
				<div className="my-4">
					<p className="hover:bg-gray-500 text-sm  w-full py-2 px-2">Profile</p>
					<p className="hover:bg-gray-500 text-sm  w-full py-2 px-2">Logout</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
