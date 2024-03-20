import React, { useState } from "react";
import "./Price.css";
import IconImg from "../../assets/icon.png";
import emailImage from "../../assets/mail.png";
import callImage from "../../assets/call.png";
import Header from "../Header";
import Footer from "../Footer";

const Price = () => {
	const customPTag = "text-2xl mb-6";

	return (
		<React.Fragment>
			<div className="contact_bg">
				<Header />
				<p className="text-[32px] text-start font-[700] mt-[100px] ml-[150px]">
					{`Pricing $`}
				</p>
			</div>
			<div className="flex-row mt-[50px] w-full mb-[60px]">
				<div className="border-2 border-black rounded-[30px] px-[40px] py-[50px] w-[70%] mx-auto">
					<p className={customPTag}>
						Get Your College Possibility Report Based On Your Jee Score.
					</p>
					<p className={customPTag}>
						Get The Perfect Choice Filling Ordering For Your Counselling.
					</p>
					<p className={customPTag}>
						Get Your Branch Wise College Possibility Report.
					</p>
					<p className={customPTag}>
						Get Exact College Information With Career Margdarshan AI (24*7).
					</p>
					<p className={customPTag}>
						Expert Counsellors Will Help You Get Into The Best Possible College.
					</p>
					<p className={customPTag}>
						Live Whatsapp Support For Your Queries, Choice Filling & Comparison.
					</p>
				</div>
			</div>

			<div className="mx-auto w-[70%] text-center">
				<p className="text-3xl font-bold line-through text-center text-teal-500">
					Rs. 20000/-
				</p>
				<p className="text-[36px] font-[800] text-center mt-8 bg-clip-text text-transparent bg-gradient-to-t from-green-600 to-black">
					Rs. 2999/- Only
				</p>
				{/* <button className="text-3xl font-[800] text-center mt-8 bg-green-400 px-[20px] py-[10px] rounded-[30px] w-full mx-auto mb-[80px]">
					ENROLL NOW!
				</button> */}
				<button className="text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-xl font-bold w-full rounded-xl border-[1px] px-4 py-2 my-10 hover:text-black">
					ENROLL NOW!
				</button>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Price;
