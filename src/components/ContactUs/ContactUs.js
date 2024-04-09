import React, { useState } from "react";
import "./ContactUs.css";
import IconImg from "../../assets/icon.png";
import emailImage from "../../assets/mail.png";
import callImage from "../../assets/call.png";
import Header from "../Header";
import Footer from "../Footer";

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		contact_no: "",
	});

	return (
		<React.Fragment>
			<div className="contact_bg">
				<Header />
				<div className="flex justify-start">

					<p className="text-[32px] font-[700] mt-[100px] w-[80%] mx-auto">
						{`Contact Us :)`}
					</p>
				</div>
			</div>
			<div className="flex-row mt-[50px] w-full md:w-full sm:w-full">
				<div className="flex-col mx-auto items-center">
					<p className="text-2xl font-[800] text-center">
						Get in touch with our friendly support team!
					</p>
					<p className="custom-separator mx-auto"></p>
				</div>
				<div className="flex-col md:flex-row sm:flex-row md:justify-between sm:justify-between w-[90%] md:w-[60%] sm:w-[60%] mx-auto mt-8">
					<div className="flex justify-end md:justify-end sm:justify-end"><img src={IconImg} alt="no-img" className="h-[125px]" /></div>
					<div className="mt-8">
						<p className="text-xl mt-8 mb-4">
							Our business hours are 10:00 AM to 6:00 PM
							<br />
							(Monday to Friday)
						</p>
						<br />
						<div className="flex mb-4">
							<img src={callImage} alt="" className="h-[25px] mr-4" />
							<p className="">+91 8787787654</p>
						</div>
						<div className="flex mb-4">
							<img src={emailImage} alt="" className="h-[22px] mr-4" />
							<p className="cursor-pointer" onClick={() => window.open("mailto:support@careermargdarshan.org")}>
								support@careermargdarshan.org
							</p>
						</div>
					</div>

				</div>
				<div className="flex-col w-[100%] md:w-[60%] sm:w-[60%] mx-auto mt-[50px]">
					<p className="text-2xl font-bold mb-6 text-center">
						Facing any issue with our product our service?
					</p>
					<div className="flex justify-center md:justify-start sm:justify-start">
						<button className="text-xl font-bold px-6 py-2 bg-green-400 rounded-full">
							Raise a ticket
						</button>
					</div>

				</div>
			</div>
			<div className="flex-col mt-[70px] w-full mb-[60px]">
				<div className="flex-col mx-auto items-center">
					<p className="text-2xl font-[800] text-center">
						For Business Enquiries
					</p>
					<p className="w-[40%] md:w-[10%] sm:w-[10%] mt-[20px] text-center mx-auto border-t-black border-2"></p>
				</div>

				<div className="mx-auto mb-8">
					<p className="text-xl md:text-2xl sm:text-2xl font-bold mt-[20px] text-center">
						Please enter your details to get in touch with our business team
					</p>
					<div className="flex-col w-full md:w-[40%] sm:w-[40%] mx-auto">
						<input
							type="text"
							placeholder="Enter your name..."
							value={formData.name}
							onChange={(e) => {
								setFormData({
									...formData,
									name: e.target.value,
								});
							}}
							className="inputField mx-auto mt-[20px]"
						/>

						<input
							type="text"
							placeholder="Enter your email address..."
							value={formData.email}
							onChange={(e) => {
								setFormData({
									...formData,
									email: e.target.value,
								});
							}}
							className="inputField mx-auto"
						/>

						<input
							type="text"
							placeholder="Enter your phone number..."
							value={formData.contact_no}
							onChange={(e) => {
								setFormData({
									...formData,
									contact_no: e.target.value,
								});
							}}
							className="inputField mx-auto"
						/>

						<input
							type="button"
							onClick={() => { }}
							className="inputField mx-auto bg-green-400 font-bold cursor-pointer"
							value="Submit"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default ContactUs;
