import React, { useState } from "react";
import "./Privacy.css";
import IconImg from "../../assets/icon.png";
import emailImage from "../../assets/mail.png";
import callImage from "../../assets/call.png";
import Header from "../Header";
import Footer from "../Footer";

const RefundPolicy = () => {
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
						{`Cancellation/Refund Policy `}
					</p>
				</div>
			</div>
			<div className="flex-row mt-[50px] w-10/12 mx-auto border-2 px-[5%] mb-10">
				<div className="flex-col mx-auto items-center py-10 my-10">
					<p className="text-[16px] font-[200] text-justify mb-8">
						At Career Margdarshan, we strive to provide valuable services to our clients. Please review our cancellation and
						refund policy carefully before enrolling in any of our programs.
					</p>
					<div className="mb-10">
						<p className="text-[16px] font-bold mb-5">
							1. Refund Policy:
						</p>

						<p className="text-[16px]">
							Once you have enrolled in any of our paid programs, please note that we operate under a strict no-refund policy.
							This means that once the enrollment process is initiated and payment has been made, no refunds will be provided, regardless of the circumstances.
						</p>
					</div>
					<div className="mb-10">
						<p className="text-[16px] font-bold mb-5">
							2. Cancellation Policy:
						</p>

						<p className="text-[16px]">
							As a participant in our programs, you have the option to cancel your enrollment at any time. However, please be
							aware that cancellation does not entitle you to a refund. Once you have canceled your enrollment, you will no longer have access
							to the program or any associated materials.
						</p>
					</div>
					<div className="mb-10">
						<p className="text-[16px] font-bold">
							3. Exceptions:
						</p>

						<p className="text-[16px]">
							In rare cases of exceptional circumstances such as demonstrable technical issues on our end preventing access to
							the program, or if we are unable to deliver the promised services, we may consider providing a refund or alternative compensation.
							Any such requests will be reviewed on a case-by-case basis at the discretion of Career Margdarshan.
						</p>
					</div>
					<div className="mb-10">
						<p className="text-[16px] font-bold">
							4. Requesting Cancellation:
						</p>

						<p className="text-[16px]">
							To cancel your enrollment in any of our programs, please contact our customer support team at &nbsp;
							<a href="mailto:support@careermargdarshan.org" className="text-blue-900">support@careermargdarshan.org</a> and provide your enrollment details. We will process
							your cancellation request as soon as possible, but please note that it may take some time to complete the process.
						</p>
					</div>
					<div className="mb-10">
						<p className="text-[16px] font-bold">
							5. Changes to Policy:
						</p>

						<p className="text-[16px]">
							We reserve the right to update or modify this cancellation and refund policy at any time without prior notice. Any changes
							will be effective immediately upon posting on our website. It is your responsibility to review this policy periodically for
							updates or changes.
						</p>
					</div>
					<div className="mb-10">
						<p className="text-[16px] font-bold">
							6. Contact Us:
						</p>

						<p className="text-[16px]">
							If you have any questions or concerns regarding our cancellation and refund policy, please don't hesitate to contact us at &nbsp;
							<a href="mailto:support@careermargdarshan.org" className="text-blue-900">support@careermargdarshan.org</a>. Our team will be happy to assist you.
						</p>
					</div>
					<div className="mb-10">

						<p className="text-[16px]">
							By enrolling in our programs, you acknowledge that you have read, understood, and agreed to this cancellation and refund policy.
						</p>
					</div>
					<b>Last updated: May, 2024</b>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default RefundPolicy;
