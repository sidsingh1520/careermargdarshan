import React from "react";

const CollegeReport = () => {
	return (
		<div className="flex flex-col w-full">
			<div className="flex justify-between items-center w-full h-32 border-b-2 border-gray-300 p-4 m-2">
				<p className="text-2xl">College Report</p>
				<div className="flex items-center">
					<input
						type="text"
						className="px-4 h-12 rounded-lg bg-gray-200"
						placeholder="Search"
					></input>
					<p className="text-lg mx-4 ">Bell Icon</p>
				</div>
			</div>
			<div>
				<div className="flex justify-between items-center mt-8 p-4 m-2">
					<p className="text-xl">Welcome Back, Shivam 👋</p>
					<button className="py-2 px-4 border-black border-2 rounded-lg">
						Download Report
					</button>
				</div>
			</div>
		</div>
	);
};

export default CollegeReport;
