import React, { useEffect, useMemo, useState } from "react";
import BLOCK from "../assets/block.png";
import Header from "./Header";

const MainContainer = () => {
	const initialList = useMemo(
		() => ["IIT", "NIT", "IIIT", "Engineering College"],
		[]
	);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentItem, setCurrentItem] = useState(initialList[0]);

	useEffect(() => {
		// Function to change the current item after a specified interval
		const changeItemInterval = setInterval(() => {
			const newIndex = (currentIndex + 1) % initialList.length;
			setCurrentIndex(newIndex);
			setCurrentItem(initialList[newIndex]);
		}, 2000); // Interval in milliseconds (e.g., 2000 milliseconds = 2 seconds)

		// Clear the interval when the component unmounts or if needed
		return () => clearInterval(changeItemInterval);
	}, [currentIndex, initialList]);

	return (
		<div className="flex flex-col gap-14 pb-6 items-center ">
			<div className="w-full flex flex-col items-center bg-gradient-to-t from-white via-green-200 to-white">
				<Header />

				<div className="flex flex-col text-center items-center pt-16 font-bold gap-3 text-5xl">
					<div>
						Get into the Best{" "}
						<span className="text-green-500">{currentItem}</span>
					</div>
					<div>Possible on your Rank</div>
				</div>
				<div className="flex flex-col items-center gap-4 text-center  text-gray-600 text-lg">
					<img src={BLOCK} className="w-96" alt="institution" />
					<p className="text-center text-base">26,000+ people already singup</p>
				</div>
			</div>
		</div>
	);
};

export default MainContainer;
