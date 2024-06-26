import React from "react";
import call from "../assets/call.png";
import youtube from "../assets/youtube.png";
import mail from "../assets/mail.png";

const columnDivStyle = "flex-column pr-4 pl-[50px] md:py-6 py-4";
const columnHeadingStyle = "text-2xl font-bold mb-[20px]";
const columnAnchorStyle = "text-base font-bold block";

const Footer = () => {
	return (
		<React.Fragment>
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:px-8 bg-gradient-to-r from-white via-green-200 to-white">
				<div className={columnDivStyle}>
					<p className={columnHeadingStyle}>Services</p>
					<a href="#" className={columnAnchorStyle}>
						College Report
					</a>
					<a href="#" className={columnAnchorStyle}>
						Choice Preferences
					</a>
					<a href="#" className={columnAnchorStyle}>
						24*7 AI Assistant
					</a>
					<a href="#" className={columnAnchorStyle}>
						Branch Wise Report
					</a>
				</div>
				<div className={columnDivStyle}>
					<p className={columnHeadingStyle}>Core Unique Features</p>
					<a href="#" className={columnAnchorStyle}>
						Live Whatsapp Support
					</a>
					<a href="#" className={columnAnchorStyle}>
						Expert Counsellor Assistance
					</a>
					<a href="#" className={columnAnchorStyle}>
						Realtime Updates
					</a>
				</div>
				<div className={columnDivStyle}>
					<p className={columnHeadingStyle}>Company</p>
					<a href="../TermsAndCondition" className={columnAnchorStyle}>
						Terms & Conditions
					</a>
					<a href="../PrivacyPolicy" className={columnAnchorStyle}>
						Privacy Policy
					</a>
					<a href="../contact" className={columnAnchorStyle}>
						Contact Us
					</a>
					<a href="../RefundPolicy" className={columnAnchorStyle}>
						Cancellation/Refund Policy
					</a>
				</div>
				<div className={columnDivStyle + " md:text-center"}>
					<p className={columnHeadingStyle}>Social</p>
					<div className="flex md:justify-center">
						<img
							src={youtube}
							alt="no-img"
							onClick={() => {
								window.open("https://www.youtube.com/@careermargdarshan2490")
							}}
							className="footer-social-media-img cursor-pointer"
						/>
						<img src={mail} alt="no-img"
							onClick={() => {
								window.open("mailto:support@careermargdarshan.org")
							}}
							className="footer-social-media-img cursor-pointer"
						/>
						<img src={call} alt="no-img" className="footer-social-media-img cursor-pointer" />
					</div>
					{/* <p className="text-base font-semibold sm:mt-6">Helpline - +919703116355</p> */}
					<a href="tel:+919703116355" className="text-base font-semibold sm:mt-6">+919703116355</a>
				</div>
			</div>
			<div className="text-center w-full py-2 bg-green-500 text-white">
				<p className="text-xl  font-semibold">Made With ❤️ In India</p>
			</div>
		</React.Fragment>
	);
};

export default Footer;
