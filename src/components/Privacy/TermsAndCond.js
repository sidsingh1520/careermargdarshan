import React, { useState } from "react";
import "./Privacy.css";
import IconImg from "../../assets/icon.png";
import emailImage from "../../assets/mail.png";
import callImage from "../../assets/call.png";
import Header from "../Header";
import Footer from "../Footer";

const TermsAndCond = () => {
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
						{`Terms & Conditions `}
					</p>
				</div>
			</div>
			<div className="flex-row mt-[50px] w-10/12 mx-auto border-2 px-[5%] mb-10">
				<div className="flex-col mx-auto items-center py-10 my-10">
					<p className="text-[16px] font-[200] text-justify mb-8">
						Welcome to Career Margdarshan! By accessing our services, you agree to comply with and be bound by the following terms and conditions.
						Please read these terms carefully before enrolling in any of our programs.
					</p>
					<div className="mb-10">
						<p className="text-[16px] font-bold mb-5">
							1. Enrollment and Refund Policy:
						</p>

						<p className="text-[16px]">
							Upon enrollment in any of our paid programs, please note that there is a strict no-refund policy. Once you have initiated the
							enrollment process and payment has been made, you are committed to the program for its entirety. We advise all prospective
							participants to consider this policy before making any payments.
						</p>
					</div>
					<div className="mb-10">
						<p className="text-[16px] font-bold mb-5">
							2. Admission Guarantees:
						</p>

						<p className="text-[16px]">
							While we strive to provide accurate predictions and guidance based on your scores and profiling, it's important to understand
							that we cannot guarantee admission to any specific college. Admission outcomes are subject to various factors including but not
							limited to annual ranks, availability of seats, and individual college admission policies. We provide guidance based on historical
							data and trends, but final admission decisions are made by respective colleges or institutions.
						</p>
					</div>
					<div className="mb-10">
						<p className="text-[16px] font-bold">
							3. Information Accuracy:
						</p>

						<p className="text-[16px]">
							We make every effort to ensure the accuracy and reliability of the information provided to you. However, we cannot guarantee the
							completeness, accuracy, or reliability of any information, content, or materials available on our platform. It is your
							responsibility to verify the information provided and make decisions accordingly.
						</p>
					</div>
					<div className="mb-10">
						<p className="text-[16px] font-bold">
							4. Personal Responsibility:
						</p>

						<p className="text-[16px]">
							Your success in college admissions ultimately depends on your efforts, preparation, and performance. While we provide guidance
							and support throughout the process, we cannot guarantee specific outcomes. It is your responsibility to actively participate
							in the program, follow the recommendations provided, and take ownership of your college admission journey.
						</p>
					</div>
					<div className="mb-10">
						<p className="text-[16px] font-bold">
							5. Confidentiality:
						</p>

						<p className="text-[16px]">
							We respect the privacy and confidentiality of our clients' information. Any personal data collected during the enrollment
							process or throughout the program will be treated with the utmost confidentiality and used only for the purpose of providing
							our services. We do not share or sell your personal information to third parties without your consent.
						</p>
					</div>
					<div className="mb-10">
						<p className="text-[16px] font-bold">
							6. Intellectual Property:
						</p>

						<p className="text-[16px]">
							All content, materials, and resources provided as part of our programs are protected by copyright and other intellectual
							property laws. You agree not to reproduce, distribute, or modify any content without prior written permission from Career Margdarshan.
						</p>
					</div>

					<div className="mb-10">
						<p className="text-[16px] font-bold">
							7. Modification of Terms:
						</p>

						<p className="text-[16px]">
							We reserve the right to modify these terms and conditions at any time without prior notice. Any changes will be effective
							immediately upon posting on our website. It is your responsibility to review these terms periodically for updates or changes.
						</p>
					</div>
					<div className="mb-10">
						<p className="text-[16px] font-bold">
							8. Governing Law:
						</p>

						<p className="text-[16px]">
							These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes
							arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in India.
						</p>
					</div>
					<div className="mb-10">

						<p className="text-[16px]">
							By enrolling in our programs, you acknowledge that you have read, understood, and agreed to these terms and conditions.
							If you have any questions or concerns, please contact us
							at &nbsp; <a href="mailto:support@careermargdarshan.org" className="text-blue-900">support@careermargdarshan.org</a>.
						</p>
					</div>
					<b>Last updated: May, 2024</b>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default TermsAndCond;


