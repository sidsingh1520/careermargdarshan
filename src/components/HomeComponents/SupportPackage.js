import React from "react";

const bulletPointStyle = "flex-column mt-6";
const bulletPointParaStyle = "text-base font-bold";
const counsellingSupportPackage = [
	{
		heading: (
			<p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-500 text-3xl font-bold">
				JOSAA <br />
				Counselling
			</p>
		),
		bullet_point: (
			<div className={bulletPointStyle}>
				<p className={bulletPointParaStyle}>College Report</p>
				<p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
				<p className={bulletPointParaStyle}>Branch Wise Report</p>
				<p className={bulletPointParaStyle}>Expert Counselling</p>
			</div>
		),
	},
	{
		heading: (
			<p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-500 text-3xl font-bold">
				CSAB <br />
				Counselling
			</p>
		),
		bullet_point: (
			<div className={bulletPointStyle}>
				<p className={bulletPointParaStyle}>College Report</p>
				<p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
				<p className={bulletPointParaStyle}>Branch Wise Report</p>
				<p className={bulletPointParaStyle}>Expert Counselling</p>
			</div>
		),
	},
	{
		heading: (
			<p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-500 text-3xl font-bold">
				JOSAA <br />
				FOR IIT’S
			</p>
		),
		bullet_point: (
			<div className={bulletPointStyle}>
				<p className={bulletPointParaStyle}>College Report</p>
				<p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
				<p className={bulletPointParaStyle}>Branch Wise Report</p>
				<p className={bulletPointParaStyle}>Expert Counselling</p>
			</div>
		),
	},
	{
		heading: (
			<p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-500 text-3xl font-bold">
				JAC DELHI <br />
				Counselling
			</p>
		),
		bullet_point: (
			<div className={bulletPointStyle}>
				<p className={bulletPointParaStyle}>College Report</p>
				<p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
				<p className={bulletPointParaStyle}>Branch Wise Report</p>
				<p className={bulletPointParaStyle}>Expert Counselling</p>
			</div>
		),
	},
	{
		heading: (
			<p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-500 text-3xl font-bold">
				MPDTE <br />
				Counselling
			</p>
		),
		bullet_point: (
			<div className={bulletPointStyle}>
				<p className={bulletPointParaStyle}>College Report</p>
				<p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
				<p className={bulletPointParaStyle}>Branch Wise Report</p>
				<p className={bulletPointParaStyle}>Expert Counselling</p>
			</div>
		),
	},
	{
		heading: (
			<p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-500 text-3xl font-bold">
				UPTAC <br />
				Counselling
			</p>
		),
		bullet_point: (
			<div className={bulletPointStyle}>
				<p className={bulletPointParaStyle}>College Report</p>
				<p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
				<p className={bulletPointParaStyle}>Branch Wise Report</p>
				<p className={bulletPointParaStyle}>Expert Counselling</p>
			</div>
		),
	},
	{
		heading: (
			<p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-500 text-3xl font-bold">
				JAC <br />
				Chandigarh
			</p>
		),
		bullet_point: (
			<div className={bulletPointStyle}>
				<p className={bulletPointParaStyle}>College Report</p>
				<p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
				<p className={bulletPointParaStyle}>Branch Wise Report</p>
				<p className={bulletPointParaStyle}>Expert Counselling</p>
			</div>
		),
	},
	{
		heading: (
			<p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-500 text-3xl font-bold">
				PTU <br />
				Counselling
			</p>
		),
		bullet_point: (
			<div className={bulletPointStyle}>
				<p className={bulletPointParaStyle}>College Report</p>
				<p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
				<p className={bulletPointParaStyle}>Branch Wise Report</p>
				<p className={bulletPointParaStyle}>Expert Counselling</p>
			</div>
		),
	},
	{
		heading: (
			<p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-500 text-3xl font-bold">
				HBTU <br />
				Counselling
			</p>
		),
		bullet_point: (
			<div className={bulletPointStyle}>
				<p className={bulletPointParaStyle}>College Report</p>
				<p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
				<p className={bulletPointParaStyle}>Branch Wise Report</p>
				<p className={bulletPointParaStyle}>Expert Counselling</p>
			</div>
		),
	},
	{
		heading: (
			<p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-500 text-3xl font-bold">
				MAHCET <br />
				Counselling
			</p>
		),
		bullet_point: (
			<div className={bulletPointStyle}>
				<p className={bulletPointParaStyle}>College Report</p>
				<p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
				<p className={bulletPointParaStyle}>Branch Wise Report</p>
				<p className={bulletPointParaStyle}>Expert Counselling</p>
			</div>
		),
	},
	{
		heading: (
			<p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-500 text-3xl font-bold">
				Other State <br />
				Counselling
			</p>
		),
		bullet_point: (
			<div className={bulletPointStyle}>
				<p className={bulletPointParaStyle}>College Report</p>
				<p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
				<p className={bulletPointParaStyle}>Branch Wise Report</p>
				<p className={bulletPointParaStyle}>Expert Counselling</p>
			</div>
		),
	},
];

const SupportPackage = () => {
	return (
		<React.Fragment>
			<div className="w-full mt-8 pt-8">
				<p className="text-3xl text-center mb-8 font-bold">
					All In One Counselling Support Package
				</p>
				<div className="relative mt-10 overflow-x-hidden w-full px-2 flex ">
					<div className="flex bg-transparent support-package-scroll-animation z-20">
						{counsellingSupportPackage.map((items, index) => (
							<div className="flex-column min-w-[224px] min-h-[250px] max-h-[250px] shadow-lg rounded-xl mx-4 px-4 py-2 z-0 border-2 border-teal-500">
								{items.heading}
								{items.bullet_point}
								<p className="text-center customSpan z-40">
									<span className="border-2 border-teal-500 rounded-md bg-white px-8 py-2">
										#{index + 1}
									</span>
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="flex justify-center mt-[5%]">
					<button className="text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-xl font-bold w-8/12 rounded-xl border-[1px] px-4 py-2">
						Enroll Now!
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SupportPackage;
