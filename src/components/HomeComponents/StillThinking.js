import React from "react";
import ss from "../../assets/chat_ss.jpeg";

const StillThinking = () => {
	return (
		<React.Fragment>
			<div className="w-12/12 mt-8 pt-8 mb-[50px]">
				<p className="text-4xl text-center mb-[80px] font-bold">
					Still Thinking Whether Your Should Enroll Or Not?
				</p>
				<div className="flex flex-wrap  justify-center px-8 mx-4">
					{Array.from({ length: 3 }, (items, index) => (
						<div className="w-full md:w-3/12 mr-2 mb-8 py-2 px-4 border-2 bg-green-300 border-black rounded-lg">
							{/* <img src={ss} alt="no_image" className="h-[450px] w-[auto]" /> */}
							{/* <video src="" alt="no-video-found" /> */}
							<iframe
								width="auto"
								height="450"
								src="https://www.youtube.com/embed/yMplFSCpqko?si=k5VqFF516RdvypeC"
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
