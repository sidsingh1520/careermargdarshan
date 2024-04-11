import React from "react";
import one from "../../assets/chat_ss/1.png"
import two from "../../assets/chat_ss/2.png"
import three from "../../assets/chat_ss/3.png"
import four from "../../assets/chat_ss/4.png"
import five from "../../assets/chat_ss/5.png"
import six from "../../assets/chat_ss/6.png"
import seven from "../../assets/chat_ss/7.png"
import eight from "../../assets/chat_ss/8.png"
import nine from "../../assets/chat_ss/9.png"
import ten from "../../assets/chat_ss/10.png"
import eleven from "../../assets/chat_ss/11.png"


const chatData = {
	0 : one,
	1 : two,
	2 : three,
	3 : four,
	4 : five,
	5 : six,
	6 : seven,
	7 : eight,
	8 : nine,
	9 : ten,
	10 : eleven
}

const PeopleSaying = () => {
	return (
		<React.Fragment>
			<div className="w-12/12 mt-8 pt-8 people-saying-section">
				<p className="text-2xl md:text-4xl sm:text-4xl text-center font-bold w-10/12 md:w-full sm:w-full mx-auto">
					See What People Are Saying About Us!
				</p>
				<div className="mt-10 overflow-x-hidden w-12/12 px-2">
					<div className="flex bg-transparent support-package-scroll-animation z-20 w-full">
						{Array.from({ length: 11 }, (items, index) => (
							<div className="w-[300] mb-8 py-2 pr-2 bg-green-200 rounded-xl mr-2 rounded-l-none ">
								<img
									src={chatData[index]}
									alt="no_image"
									className="chat_screen_shot"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default PeopleSaying;
