import React, { useState } from "react";
import "./Price.css";
import Header from "../Header";
import Footer from "../Footer";

const Price = () => {
	const customPTag = "text-xl mb-6";

	return (
		<React.Fragment>
			<div className="contact_bg">
				<Header />
				<p className="text-[32px] text-start font-[700] mt-[100px] ml-[150px]">
					{`Pricing $`}
				</p>
			</div>
			<div className="flex-row mt-[50px] w-full mb-[60px] mx-auto">
				<p className="text-3xl font-bold text-center">Pricing Made Easy</p>
				<p className="allotment-separator mx-auto"></p>
				<br />
				<div className="border-2 border-black rounded-[30px] px-[20px] md:px-[40px] sm:px-[40px] py-[30px] w-[90%] md:w-[70%] sm:w-[70%] mx-auto">
					<p className="text-2xl md:text-3xl sm:text-3xl font-bold text-center">
						Complete Counselling Package
					</p>

					<p className="text-2xl font-bold text-center my-10 mx-auto price_value">
						<span className="line-through text-red-600 block sm:inline mb-6 md:mb-0 sm:mb-0">Rs. 20000/-</span>
						<span className="text-[38px] font-[800] text-center mt-8 ml-2">
							Rs. 6499/- Only
						</span>
					</p>

					<li className={customPTag}>
						Get Your College Possibility Report Based On Your Jee Score (Exact colleges you are getting through different counsellings)
					</li>
					<li className={customPTag}>
						Get Your choice filling done perfectly by the experts for best allotment
					</li>
					<li className={customPTag}>
						Get Your Branch Wise College Possibility Report.
					</li>
					<li className={customPTag}>
						Get Exact College Information With Career Margdarshan AI (24*7).
					</li>
					<li className={customPTag}>
						Dedicated One One One Counselling From Experts Counsellors To get You into The Best College.
					</li>
					<li className={customPTag}>
						One One One Support For Your Queries, Choice Filling & College Comparison doubts.
					</li>

					<div className="mx-auto text-center">
						<button onClick={()=>{
							window.open("https://pages.razorpay.com/pl_Nw6kzIHKYnrkfG/view","_self")
						}} className="text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-xl font-bold w-full rounded-xl border-[1px] px-4 py-2 mt-10 hover:text-black">
							ENROLL NOW!
						</button>
					</div>
				</div>


			</div>


			<Footer />
		</React.Fragment>
	);
};

export default Price;

//41F7CB