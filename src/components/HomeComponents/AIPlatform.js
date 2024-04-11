import React from "react";
import openAiImg from "../../assets/open-ai.png";

const AIPlatform = () => {
	return (
		<React.Fragment>
			<div className="w-full mt-[12%] md:mt-[5%] sm:mt-[5%] pt-8 bg-gradient-to-r from-green-100 via-white to-green-100 ai-platform-section pb-[15%] md:pb-[5%] sm:pb-[5%] ">
				<p className="text-2xl md:text-4xl sm:text-4xl text-center mb-8 font-bold w-10/12 md:w-[44%] sm:w-[44%]">
					India’s First “AI Enabled Platform” For
				
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
				<div className="relative mt-2 md:mt-10 sm:mt-10 w-10/12 md:w-[29%] sm:w-[29%] mx-auto">
					<div className="absolute -inset-2 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 rounded-lg blur opacity-25"></div>

					<div className="relative flex-col px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-3xl shadow-2xl leading-none items-top justify-start mx-center">
						<div className="flex justify-center mt-[15px] md:mt-[25px] sm:mt-[25px]">
							<img
								src={openAiImg}
								alt="no-img"
								className="h-[60px] w-[auto] justify-center"
							/>
						</div>
						<p className="text-2xl md:text-3xl sm:text-3xl font-bold text-center mt-6">
							Career Margdarshan AI
						</p>

						<p className="ml-[16px] md:ml-[25px] sm:ml-[25px] mt-[15px] md:mt-[25px] sm:mt-[25px] mb-[20px] md:mb-[40px] sm:mb-[40px] leading-8 mx-auto text-start">
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
