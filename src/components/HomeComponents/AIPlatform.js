import React from "react";
import openAiImg from "../../assets/open-ai.png";

const AIPlatform = () => {
	return (
		<React.Fragment>
			<div className="w-full mt-[5%] pt-8 bg-gradient-to-r from-green-100 via-white to-green-100 ai-platform-section pb-[5%] ">
				<p className="text-4xl text-center mb-8 font-bold">
					India’s First “AI Enabled Platform” For
					<br />
					Counselling & College Admissions
				</p>
				{/* <div className="mt-[50px] bg-white rounded-[50px] border-2 w-3/12 px-[20px] mx-4">
					<div className="flex justify-center mt-[25px]">
						<img
							src={openAiImg}
							alt="no-img"
							className="h-[60px] w-[auto] justify-center"
						/>
					</div>
					<p className="text-3xl font-bold text-center mt-6">
						Career Margdarshan AI
					</p>

					<p className="ml-[12px] mt-[25px] mb-[40px] leading-8">
						Ask Any College Information <br />
						Compare Colleges <br />
						Choice Filling Related Doubt <br />
						Placement Info Of Any College <br />
						24*7 Assistance
					</p>
				</div> */}
				<div className="relative mt-10 max-w-7xl mx-auto ">
					<div className="absolute -inset-2 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 rounded-lg blur opacity-25"></div>

					<div className="relative flex-col px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-3xl shadow-2xl leading-none items-top justify-start space-x-6">
						<div className="flex justify-center mt-[25px]">
							<img
								src={openAiImg}
								alt="no-img"
								className="h-[60px] w-[auto] justify-center"
							/>
						</div>
						<p className="text-3xl font-bold text-center mt-6">
							Career Margdarshan AI
						</p>

						<p className="ml-[12px] mt-[25px] mb-[40px] leading-8">
							Ask Any College Information <br />
							Compare Colleges <br />
							Choice Filling Related Doubt <br />
							Placement Info Of Any College <br />
							24*7 Assistance
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AIPlatform;
