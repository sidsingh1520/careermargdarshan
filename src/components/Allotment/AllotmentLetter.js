import React from "react";
import "./AllotmentLetter.css";
import ownerImg from "../../assets/owner.png";
import DashIconElement from "../../assets/icon.png";
import PaintIcon from "../../assets/paint_icon.png";
import Footer from "../Footer";
import Header from "../Header";

const AllotmentLetter = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col gap-14 pb-6 items-center bg-gradient-to-t from-white via-green-200 to-white">
				<Header />
				<div className="flex w-[80%] mb-[50px] md:mb-[120px]">
					<p className="text-[30px] md:text-[33px] font-bold mt-[15px] md:mt-[100px] mb-8 md:px-[140px]">
						We possess thousands of allotment letters from our previous students
						whom we've assisted in their counseling and admissions.
					</p>
				</div>
			</div>
			<div className="pt-[0px] md:pt-[60px]">
				<p className="text-center text-[25px] font-[700] text-wrap w-8/12 md:w-full mx-auto">
					Allotment letters of previous years students
				</p>
				<div className="flex flex-wrap w-10/12 mt-[50px] mx-auto justify-between">
					{Array.from({ length: 10 }, (_, index) => {
						return (
							<div
								className="letter_parent_div mb-8"
								key={"allotment" + index}
							>
								<div className="letter_parent_child">
									<img
										src={ownerImg}
										alt="no-image"
										className="allotment-letter-image"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="pt-[60px] mb-[50px]">
				<p className="text-center text-[25px] font-[800]">
					Message From The Team
				</p>
				<div className="flex flex-wrap w-11/12 mt-[50px] mx-auto">
					<div className="allotment-third-parent-div w-full">
						<div className="allotment-third-child-div py-[30px] md:py-[60px] px-[10px] mr-[10px] mt-[10px]">
							<div className="flex flex-wrap">
								<img
									src={DashIconElement}
									alt="no-image"
									className="h-[120px] md:h-[166px] mx-auto md:mx-0"
								/>
								<div className="mt-[20px] md:mt-[120px] w-full md:w-11/12 mx-auto">
									<p className="text-2xl md:text-3xl font-semibold mt-[20px] md:mt-[0px] mb-[60px] w-full md:w-10/12 mx-auto">
										Thousands of students have been allocated seats in numerous
										prestigious colleges across the country...
									</p>
									<p className="text-2xl md:text-3xl font-semibold mt-[20px] mb-[50px] w-full md:w-10/12 mx-auto">
										Our unwavering dedication drives us to assist the next
										thousands and lakhs of students, aiming to transform lives
										and create a lasting impact.
									</p>
									<p className="text-[26px] md:text-[32px] bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-500 font-bold">
										Team Career Margdarshan
									</p>
									<img
										src={PaintIcon}
										alt="no-image"
										className="mx-auto mt-6"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default AllotmentLetter;
