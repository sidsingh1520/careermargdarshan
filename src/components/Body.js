import React from "react";
import ElementScroll from "./HomeComponents/ElementScroll";
import HelpCustomCard from "./HomeComponents/HelpCustomCard";
import "./styles/Body.css";
import StudentBenefits from "./HomeComponents/StudentBenefits";
import SupportPackage from "./HomeComponents/SupportPackage";

const Body = () => {
	return <React.Fragment>
		<ElementScroll />
		<HelpCustomCard />
		<StudentBenefits />
		<SupportPackage />
		<div className="w-full mb-6 mt-6"><h1>df</h1></div>
	</React.Fragment>
};

export default Body;
