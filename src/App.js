import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";
import "./index.css";
import AboutUs from "./components/AboutUs/AboutUs";
import NoPage from "./components/NoPage";
import ContactUs from "./components/ContactUs/ContactUs";
import AllotmentLetter from "./components/Allotment/AllotmentLetter";
import Price from "./components/Price/Price";
import SignIn from "./components/SignIn/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";
import CollegeReport from "./components/Dashboard/CollegeReport";
import TermsAndCond from "./components/Privacy/TermsAndCond";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicy";
import RefundPolicy from "./components/Privacy/RefundPolicy";

function App() {
	return (
		<div>
			{/* <MainContainer />
			<Home />
			<Footer /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/allotmentletter" element={<AllotmentLetter />} />
				<Route path="/price" element={<Price />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/dashboard/*" element={<Dashboard />} />
				<Route path="/TermsAndCondition" element={<TermsAndCond />} />
				<Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
				<Route path="/RefundPolicy" element={<RefundPolicy />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
		</div>
	);
}

export default App;
