import React from "react";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import CollegeReport from "./CollegeReport";
import Updates from "./Updates";

const Dashboard = () => {
	return (
		<div className="flex h-svh">
			<Sidebar />
			<Routes>
				<Route path="/" element={<CollegeReport />}></Route>
				<Route path="/update" element={<Updates />}></Route>
			</Routes>
		</div>
	);
};

export default Dashboard;
