import React, { useEffect, useMemo, useState } from "react";
import BLOCK from "../assets/block.png";
import Typed from 'typed.js';
import { ReactTyped } from "react-typed";

const MainContainer = () => {
	const width = window.innerWidth;
	const mobileView = React.useRef(null);
	// const initialList = useMemo(
	// 	() => width > 701 ? ["IIT", "NIT", "IIIT", "Engineering College"] : ["IIT College", "NIT College", "IIIT College", "Engineering College"],
	// 	[]
	// );
	// const [currentIndex, setCurrentIndex] = useState(0);
	// const [currentItem, setCurrentItem] = useState(initialList[0]);

	// useEffect(() => {
		// // Function to change the current item after a specified interval
		// const changeItemInterval = setInterval(() => {
		// 	const newIndex = (currentIndex + 1) % initialList.length;
		// 	setCurrentIndex(newIndex);
		// 	setCurrentItem(initialList[newIndex]);
		// }, 2000); // Interval in milliseconds (e.g., 2000 milliseconds = 2 seconds)

		// // Clear the interval when the component unmounts or if needed
		// return () => clearInterval(changeItemInterval);
	// }, [currentIndex, initialList]);

	useEffect(() => {
		const typed = new Typed(mobileView.current, {
		  strings: ["IIT College", "NIT College", "IIIT College", "Engineering College"],
		  typeSpeed: 40,
		  loop: true,
		  showCursor:false
		});
	
		return () => {
		  // Destroy Typed instance during cleanup to stop animation
		  typed.destroy();
		};
	  }, []);	

	return (
		<div className="flex flex-col gap-14 pb-6 items-center ">
			<div className="w-full flex flex-col items-center bg-gradient-to-t from-white via-green-200 to-white">


				<div className="flex flex-col text-center items-center pt-16 font-bold">
					<p className="text-[28px] md:text-[48px] sm:text-[48px] leading-9 md:leading-relaxed sm:leading-6">
						Get into the Best{" "}
						{width > 701 &&
							<span
								className="text-green-500 text-[28px] md:text-[48px] sm:text-[48px] leading-9 md:leading-relaxed sm:leading-6" ref={mobileView} 
							>
								&nbsp;
							</span>}
					</p>
					{width < 701 && <span className="text-green-500 min-h-[40px] text-[28px] md:text-[48px] sm:text-[48px] leading-9 md:leading-relaxed sm:leading-6" ref={mobileView}>
					</span>}
					<p className="text-[28px] md:text-[48px] sm:text-[48px] leading-9 md:leading-relaxed sm:leading-6">Possible on your Rank</p>
				</div>
				<div className="flex flex-col items-center gap-4 text-center">
					<img src={BLOCK} className="w-96" alt="institution" />
					<p className="text-center text-base text-gray-600">
						26,000+ people already enrolled
					</p>
					{/* <button className="px-6 py-2 text-lg font-semibold rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
						Signup Now
					</button> */}
					<button className="px-6 py-2 bg-white text-lg font-semibold rounded-lg border-black border-2" onClick={() => {
						window.open("https://pages.razorpay.com/pl_Nw6kzIHKYnrkfG/view", "_self")
					}}>
						Enroll Now
					</button>
					{/* <p className="text-center text-base text-gray-600">
						Already Enrolled ?{" "}
						<span className="text-black font-bold">Sign In</span>
					</p> */}
				</div>
			</div>
		</div>
	);
};

export default MainContainer;
