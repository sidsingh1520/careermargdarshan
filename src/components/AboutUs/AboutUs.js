import React from "react";
import aboutUSImage from "../../assets/about_us.png";
import "./AboutUs.css";
import Footer from "../Footer";
import Header from "../Header";

const AboutUs = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col gap-14 pb-6 items-center bg-gradient-to-t from-white via-green-200 to-white">
				<Header />
				<div className="flex flex-row flex-wrap w-11/12 mb-[80px]">
				{/* <div className="grid grid-cols-1 md:grid-cols-1 gap-4"> */}
					<p className="text-[28px] md:text-[33px] font-bold text-center md:text-start md:mt-[100px] mb-[60px] md:mb-[0px] w-full md:w-7/12">
						Helping engineering aspirants to get into the best possible college
						as per their score & profiling.
					</p>
					<img src={aboutUSImage} alt="no-img" className="mx-auto" />
				</div>
			</div>
			<div className="about_us_card_parent mt-[40px] mb-[80px] mx-auto w-full md:w-8/12">
				<div className="flex flex-col gap-14 about_us_card_child py-[40px] px-[30px] md:px-[80px]">
					<p className="text-2xl font-semibold md:mt-[20px]">
						With a steadfast commitment since 2017, Career Margdarshan has
						guided over 11,000 students to secure coveted spots in premier
						institutions such as IITs, NITs, GFTIs, and other esteemed
						engineering colleges across India. Our mission is rooted in ensuring
						that every aspiring student attains their rightful place in
						academia.
					</p>

					<p className="text-2xl font-semibold mt-[20px]">
						Today, we proudly stand as India’s pioneering AI-led platform,
						harnessing cutting-edge technology to address students' challenges
						in college research, information dissemination, choice filling, and
						counseling.
					</p>

					<p className="text-[32px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-500 text-3xl">
						Team Career Margdarshan
					</p>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default AboutUs;
