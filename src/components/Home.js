import React from "react";
import ElementScroll from "./HomeComponents/ElementScroll";
import HelpCustomCard from "./HomeComponents/HelpCustomCard";
import "./styles/Body.css";
import StudentBenefits from "./HomeComponents/StudentBenefits";
import SupportPackage from "./HomeComponents/SupportPackage";
import AIPlatform from "./HomeComponents/AIPlatform";
import PeopleSaying from "./HomeComponents/PeopleSaying";
import StillThinking from "./HomeComponents/StillThinking";
import MainContainer from "./MainContainer";
import Footer from "./Footer";
import Header from "./Header";

const Body = () => {
	return (
		<React.Fragment>
			<Header />
			<MainContainer />
			<ElementScroll />
			<HelpCustomCard />
			<StudentBenefits />
			<SupportPackage />
			<AIPlatform />
			<PeopleSaying />
			<StillThinking />
			<Footer />
		</React.Fragment>
	);
};

export default Body;
