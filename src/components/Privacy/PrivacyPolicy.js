import React, { useState } from "react";
import "./Privacy.css";
import IconImg from "../../assets/icon.png";
import emailImage from "../../assets/mail.png";
import callImage from "../../assets/call.png";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact_no: "",
    });

    return (
        <React.Fragment>
            <div className="contact_bg">
                <Header />
                <p className="text-[32px] text-start font-[700] mt-[100px] ml-[150px]">
                    {`Privacy Policy `}
                </p>
            </div>
            <div className="flex-row mt-[50px] w-10/12 mx-auto border-2 px-[5%] mb-10">
                <div className="flex-col mx-auto items-center py-10 my-10">
                    <p className="text-[16px] font-[200] text-justify mb-8">
                        At Career Margdarshan, we are committed to protecting your privacy and ensuring the confidentiality of your personal information.
                         This privacy policy outlines how we collect, use, and safeguard your information when you use our services.
                    </p>
                    <div className="mb-10">
                        <p className="text-[16px] font-bold mb-5">
                            1. Information We Collect:
                        </p>

                        <p className="text-[16px]">
                            <b>Personal Information:</b> When you enroll in our programs or use our services, we may collect personal information such as
                             your name, contact details, educational background, and other relevant data necessary for providing our services.<br />
                            <b>Payment Information:</b> If you make payments for our services, we do not collect payment details such as credit card
                             information or other financial details.<br />
                            <b>Website Usage Information:</b> We may collect information about your interactions with our website, including but not
                             limited to your IP address, browser type, device information, and pages visited.
                        </p>
                    </div>
                    <div className="mb-10">
                        <p className="text-[16px] font-bold mb-5">
                            2. Use of Information:
                        </p>

                        <p className="text-[16px]">
                            <b>Providing Services:</b> We use the information collected to provide and personalize our services, including guiding you 
                            through the college admissions process, communicating with you about your progress, and delivering relevant educational content.<br/>
                            <b>Payment Processing:</b> Your payment information is used solely for processing payments for our services and is not stored 
                            on our servers after the transaction is complete.<br/>
                            <b>Improving Services:</b>  We may use aggregated and anonymized data for analytical purposes to improve our services, enhance 
                            user experience, and identify trends in college admissions.
                        </p>
                    </div>
                    <div className="mb-10">
                        <p className="text-[16px] font-bold">
                            3. Information Sharing:
                        </p>

                        <p className="text-[16px]">
                            <b>Third-Party Service Providers:</b> We may engage third-party service providers to assist us in delivering our services, 
                            processing payments, or conducting analytical activities. These service providers are contractually obligated to safeguard your 
                            information and are prohibited from using it for any other purpose.<br/>
                            <b>Legal Compliance:</b> We may disclose your information when required to comply with legal obligations, enforce our terms and 
                            conditions, or protect the rights, property, or safety of Career Margdarshan, our users, or others.
                        </p>
                    </div>
                    <div className="mb-10">
                        <p className="text-[16px] font-bold">
                            4. Data Security:
                        </p>

                        <p className="text-[16px]">
                            We employ industry-standard security measures to protect your personal information from unauthorized access, misuse, or alteration.
                            Despite our efforts to ensure data security, please note that no method of transmission over the internet or electronic storage 
                            is completely secure. Therefore, we cannot guarantee absolute security of your information.
                        </p>
                    </div>
                    <div className="mb-10">
                        <p className="text-[16px] font-bold">
                            5. Information We Collect:
                        </p>

                        <p className="text-[16px]">
                            You have the right to access, update, or delete your personal information held by us. You may also request restrictions on the 
                            processing of your data or object to certain processing activities.
                            To exercise your rights or inquire about your personal information, please contact us using the information provided below.
                        </p>
                    </div>
                    <div className="mb-10">
                        <p className="text-[16px] font-bold">
                            6. Information We Collect:
                        </p>

                        <p className="text-[16px]">
                            We reserve the right to update or modify this privacy policy at any time. Any changes will be effective immediately upon posting 
                            on our website. We encourage you to review this policy periodically for updates.
                        </p>
                    </div>
                    <div className="mb-10">
                        <p className="text-[16px] font-bold">
                            7. Information We Collect:
                        </p>

                        <p className="text-[16px]">
                            If you have any questions, concerns, or requests regarding our privacy practices or this privacy policy, please contact us at 
                            <a href="mailto:support@careermargdarshan.org"> support@careermargdarshan.org</a>.
                        </p>
                    </div>
                </div>
            </div >
            <Footer />
        </React.Fragment >
    );
};

export default PrivacyPolicy;


// 3. Information Sharing:

// Third-Party Service Providers: We may engage third-party service providers to assist us in delivering our services, processing payments, or conducting analytical activities. These service providers are contractually obligated to safeguard your information and are prohibited from using it for any other purpose.
// Legal Compliance: We may disclose your information when required to comply with legal obligations, enforce our terms and conditions, or protect the rights, property, or safety of Career Margdarshan, our users, or others.

// 4. Data Security:

// We employ industry-standard security measures to protect your personal information from unauthorized access, misuse, or alteration.
// Despite our efforts to ensure data security, please note that no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security of your information.

// 5. Your Rights:

// You have the right to access, update, or delete your personal information held by us. You may also request restrictions on the processing of your data or object to certain processing activities.
// To exercise your rights or inquire about your personal information, please contact us using the information provided below.

// 6. Changes to Privacy Policy:

// We reserve the right to update or modify this privacy policy at any time. Any changes will be effective immediately upon posting on our website. We encourage you to review this policy periodically for updates.

// 7. Contact Us:

// If you have any questions, concerns, or requests regarding our privacy practices or this privacy policy, please contact us at support@careermargdarshan.org.