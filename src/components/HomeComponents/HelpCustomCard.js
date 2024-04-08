import React from "react";
import img from "../../assets/Badge.png";

const data = [
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				class="bi bi-star-fill"
				viewBox="0 0 16 16"
			>
				<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
			</svg>
		),
		message: "Get Your College Possibility Report Based On Your Jee Score (Exact colleges you are getting through different counsellings).",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				class="bi bi-star-fill"
				viewBox="0 0 16 16"
			>
				<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
			</svg>
		),
		message: "Get Your choice filling done perfectly by the experts for best allotment.",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				class="bi bi-star-fill"
				viewBox="0 0 16 16"
			>
				<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
			</svg>
		),
		message: "Get Your Branch Wise College Possibility Report.",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				class="bi bi-star-fill"
				viewBox="0 0 16 16"
			>
				<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
			</svg>
		),
		message: "Get Exact College Information With Career Margdarshan AI (24*7).",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				class="bi bi-star-fill"
				viewBox="0 0 16 16"
			>
				<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
			</svg>
		),
		message:
			"Dedicated One One One Counselling From Experts Counsellors To get You into The Best College.",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				class="bi bi-star-fill"
				viewBox="0 0 16 16"
			>
				<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
			</svg>
		),
		message:
			"One One One Support For Your Queries, Choice Filling & College Comparison doubts.",
	},
];

const HelpCustomCard = () => {
	return (
		<div className="flex flex-col text-center items-center pt-16 font-bold gap-3 text-3xl help-custom-card-bg">
			<p className="text-3xl sm:px-12">
				#1 All India Engineering Counselling & Admission Support Platform
			</p>
			<div className="rounded-2xl w-full md:w-10/12 bg-green-300 mt-8">
				<div className="rounded-2xl shadow-lg border-2 mt-2 mr-4 p-2 text-center items-center jusitfy-center bg-white">
					<p className="text-2xl mt-[50px]">How Exactly Career Margdarshan is going to help you?</p>
					<img className="block md:hidden mt-4 mx-auto" src={img} alt="no-img" height={40} width={"auto"}/>
					<div className="flex md:align-middle">
						<div className="text-start my-8 md:pt-8 md:ml-8 md:pl-8 pb-8 w-10/12">
							{data.map((items, idx) => (
								<div key={idx} className="flex md:align-center ml-8">
									{items.icon}
									<p className="text-lg font-light ml-8 antialiased tracking-wide">
										{items.message}
									</p>
								</div>
							))}
						</div>
						<img className="my-auto hidden md:block" src={img} alt="no-img" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(HelpCustomCard);
