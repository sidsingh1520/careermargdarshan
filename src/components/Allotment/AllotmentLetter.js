import React from "react";
import "./AllotmentLetter.css";
import ownerImg from "../../assets/owner.png";
import DashIconElement from "../../assets/icon.png";
import PaintIcon from "../../assets/paint_icon.png";
import Footer from "../Footer";
import Header from "../Header";
import one from "../../assets/allotment_letters/1.png"
import two from "../../assets/allotment_letters/2.png"
import three from "../../assets/allotment_letters/3.png"
import four from "../../assets/allotment_letters/4.png"
import five from "../../assets/allotment_letters/5.png"
import six from "../../assets/allotment_letters/6.png"
import seven from "../../assets/allotment_letters/7.png"
import eight from "../../assets/allotment_letters/8.png"
import nine from "../../assets/allotment_letters/9.png"
import ten from "../../assets/allotment_letters/10.png"
import eleven from "../../assets/allotment_letters/11.png"
import twelve from "../../assets/allotment_letters/12.png"
import thirteen from "../../assets/allotment_letters/13.png"
import fourteen from "../../assets/allotment_letters/14.png"
import fifteen from "../../assets/allotment_letters/15.png"
import sixteen from "../../assets/allotment_letters/16.png"
import seventeen from "../../assets/allotment_letters/17.png"
import eighteen from "../../assets/allotment_letters/18.png"
import nineteen from "../../assets/allotment_letters/19.png"
import twenty from "../../assets/allotment_letters/20.png"
// import twentyone from "../../assets/allotment_letters/21.png"
// import twentytwo from "../../assets/allotment_letters/22.png"


const allotment_letters = {
    0: one,
    1: two,
    2: three,
    3: four,
    4: five,
    5: six,
    6: seven,
    7: eight,
    8: nine,
    9: ten,
    10: eleven,
    11: twelve,
    12: thirteen,
    13: fourteen,
    14: fifteen,
    15: sixteen,
    16: seventeen,
    17: eighteen,
    18: nineteen,
    19: twenty,
    // 20: twentyone,
    // 21: twentytwo
};


const AllotmentLetter = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col gap-14 pb-6 items-center bg-gradient-to-t from-white via-green-200 to-white">
				<Header />
				<div className="flex w-[80%] mb-[50px] md:mb-[120px]">
					<p className="text-[20px] md:text-[33px] sm:text-[30px] font-bold mt-[15px] md:mt-[100px] mb-8 md:px-[140px]">
						We possess thousands of allotment letters from our previous students
						whom we've assisted in their counseling and admissions.
					</p>
				</div>
			</div>
			<div className="pt-[0px] md:pt-[60px]">
				<p className="text-center text-[30px] md:text-[36px] sm:text-[42px] font-[700] text-wrap w-full md:w-full sm:w-8/12 mx-auto">
					Allotment letters of previous years students
				</p>
				<div className="flex flex-wrap w-10/12 mt-[50px] mx-auto justify-between">
					{Array.from({ length: 20 }, (_, index) => {
						return (
							<div
								className="letter_parent_div mb-8 mx-auto"
								key={"allotment" + index}
							>
								<div className="letter_parent_child">
									<img
										src={allotment_letters[index]}
										alt="no-img"
										className="allotment-letter-image"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="pt-[60px] mb-[50px]">
				<p className="text-center text-[30px] md:text-[36px] sm:text-[42px] font-[800]">
					Message From The Team
				</p>
				<div className="flex flex-wrap w-11/12 mt-[50px] mx-auto">
					<div className="allotment-third-parent-div w-full">
						<div className="allotment-third-child-div py-[30px] md:py-[60px] px-[10px] mr-[10px] mt-[10px]">
							<div className="flex flex-wrap">
								<img
									src={DashIconElement}
									alt="no-img"
									className="h-[120px] md:h-[166px] mx-auto md:mx-0"
								/>
								<div className="w-full md:w-11/12 mx-auto">
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
										alt="no-img"
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
