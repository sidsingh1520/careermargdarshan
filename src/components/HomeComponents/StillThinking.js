import React from "react";
import ss from "../../assets/chat_ss.jpeg";

// const videoLinks = {
// 	0 : <iframe width="560" height="315" src="https://www.youtube.com/embed/pMKo3eQVLsE?si=tm1wb-gUuAsGOoBa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
// 	1: "https://youtube.com/shorts/KR-V2vcJRTI?si=O7RiZA8mimXB1bLL",
// 	2: ,
// 	3: ,
// 	4: ,
// 	5: ,
// 	6: ,
// 	7: ,
// 	8: ,
// 	9: ,
// };

const videoLinks = [
	"https://www.youtube.com/embed/pMKo3eQVLsE?si=tm1wb-gUuAsGOoBa",
	"https://youtube.com/embed/xrNMbWU5geY?si=h8gZg8uQ-hlVxibz",
	"https://youtube.com/embed/TazTdG5k-IM?si=LADx3IexJZN4lbrM",
	"https://youtube.com/embed/KR-V2vcJRTI?si=VZjp-jDRwe7phWGm",
	"https://youtube.com/embed/0zaLQkRn1jc?si=WKTBOpPE1UQVbJfg",
	"https://youtube.com/embed/3mI27fJRvYA?si=1G_j1jL68p8ZHkc0",
	"https://youtube.com/embed/8IUJbF1SOXg?si=b8mX5hIyMy9hSqGR",
	"https://www.youtube.com/embed/IUxp8mX7ujE?si=XPc5EVUQeyfaWnjt"
	// "https://www.youtube.com/embed/NC8J94HVhdk?si=h__tQvxjtTr2coKU"
]

const StillThinking = () => {
	return (
		<React.Fragment>
			<div className="w-12/12 mt-8 pt-8 mb-[50px]">
				<p className="text-3xl md:text-4xl mb-[80px] font-bold text-wrap text-center">
					Still Thinking Whether Your Should Enroll Or Not?
				</p>
				<div className="flex flex-wrap justify-between w-10/12 mx-auto">
					{Array.from({ length: 8 }, (items, index) => (
						<div className="w-full md:w-3/12 mx-auto mb-4 border-2 bg-green-300 border-black rounded-lg">
							<iframe
								width="auto"
								height="450"
								className="mx-auto"
								src={videoLinks[index]}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							></iframe>
						</div>
					))}
				</div>
			</div>
		</React.Fragment>
	);
};

export default StillThinking;
