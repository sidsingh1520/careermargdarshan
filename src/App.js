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
				<Route path="*" element={<NoPage />} />
			</Routes>
		</div>
	);
}

export default App;
