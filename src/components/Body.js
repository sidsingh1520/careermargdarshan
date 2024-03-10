import React from "react";
import ElementScroll from "./HomeComponents/ElementScroll";
import HelpCustomCard from "./HomeComponents/HelpCustomCard";
import "./styles/Body.css";
import StudentBenefits from "./HomeComponents/StudentBenefits";
import SupportPackage from "./HomeComponents/SupportPackage";
import AIPlatform from "./HomeComponents/AIPlatform";
import PeopleSaying from "./HomeComponents/PeopleSaying";
import StillThinking from "./HomeComponents/StillThinking";

const Body = () => {
	return <React.Fragment>
		<ElementScroll />
		<HelpCustomCard />
		<StudentBenefits />
		<SupportPackage />
		<AIPlatform />
		<PeopleSaying />
		<StillThinking />
	</React.Fragment>
};

export default Body;
