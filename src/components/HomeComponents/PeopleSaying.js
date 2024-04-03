import React from "react";
import ss from "../../assets/chat_ss.jpeg";

const PeopleSaying = () => {
	return (
		<React.Fragment>
			<div className="w-12/12 mt-8 pt-8 people-saying-section">
				<p className="text-4xl text-center mb-[80px] font-bold">
					See What People Are Saying About Us!
				</p>
				{/* <div className="relative mt-10 overflow-x-hidden w-full px-2 flex ">
					<div className="flex bg-transparent support-package-scroll-animation z-20">
						{Array.from({ length: 6 }, (items, index) => (
							<div className="w-full md:w-3/12 md:mx-4 mb-8 py-2 pr-2 bg-green-200 rounded-xl rounded-l-none ">
								<img
									src={ss}
									alt="no_image"
									className="h-[400px] w-[auto] aspect-video"
								/>
							</div>
						))}
					</div>
				</div> */}
				<div className="mt-10 overflow-x-hidden w-full px-2">
					<div className="flex bg-transparent support-package-scroll-animation z-20 w-full">
						{Array.from({ length: 6 }, (items, index) => (
							<div className="w-[300] mb-8 py-2 pr-2 bg-green-200 rounded-xl rounded-l-none ">
								<img
									src={ss}
									alt="no_image"
									className="h-[400px] w-[300px]"
								/>
							</div>
						))}
					</div>
				</div>
				{/* <div className="flex flex-wrap justify-center px-8 mx-4">
					{Array.from({ length: 6 }, (items, index) => (
						<div className="w-3/12 border mr-2 mb-8 py-2 px-4 bg-white people-saying-border">
							<img src={ss} alt="no_image" className="h-[450px] w-[auto]" />
						</div>
					))}
				</div> */}
			</div>
		</React.Fragment>
	);
};

export default PeopleSaying;
