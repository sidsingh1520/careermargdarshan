import React from "react";
import Saksham from "../../assets/students_image/Saksham.png"
import Ananya from "../../assets/students_image/Ananya Verma.png"
import Shashwat from "../../assets/students_image/Shashwat.png"
import Rajeev from "../../assets/students_image/Rajeev Kumar.png"
import Neha from "../../assets/students_image/Neha Patel.png"
import Six from "../../assets/students_image/6.png"

const studentBioData = [
	{
		image_url: Saksham,
		student_name: "Saksham Srivastava",
		college: "IIIT Lucknow",
		bio: `Career Margdarshan significantly aided me during my counseling days, 
		assisting with college selection, choice filling, and more. Thanks to their 
		guidance, I secured admission into CSE at IIIT Lucknow. Now, I've received a 
		job offer of 43 lakhs from a tech company in Bangalore.`,
	},
	{
		image_url: Shashwat,
		student_name: "Shaswat Singh",
		college: "IIIT Nagpur",
		bio: `With Career Margdarshan's invaluable support during JOSSA and CSAB counseling, 
		despite my 30K JEE Mains rank, I secured admission into my dream college, IIIT Nagpur, 
		for CSE. I highly recommend Career Margdarshan`,
	},
	{
		image_url: Neha,
		student_name: "Neha Patel",
		college: "NIT Surat",
		bio: `Career Margdarshan played a pivotal role in my college selection process. 
		Their detailed college possibility report helped me understand my options better. 
		With their guidance, I secured admission into NIT Surat, which was my top choice. 
		I'm grateful for their assistance.`,
	},
	{
		image_url: Ananya,
		student_name: "Ananya Verma",
		college: "IIT Guwahati",
		bio: `I owe a huge debt of gratitude to Career Margdarshan for guiding me towards the 
		right college. Their continuous support, from college information to choice filling
		assistance, made the entire process seamless. Thanks to them, fulfilling my lifelong dream.`,
	},
	{
		image_url: Rajeev,
		student_name: "Yash",
		college: "NIT Kurukshetra",
		bio: `Career Margdarshan's assistance was indispensable in securing my admission into HBTU 
		Kanpur for Electronics and Communication Engineering. Their thorough understanding of the 
		counseling process and prompt support with my queries made all the difference. I highly 
		recommend their services to every JEE aspirant.`,
	},
	{
		image_url: Six,
		student_name: "Swapnil Sharma",
		college: "VIT Vellore",
		bio: `Career Margdarshan's personalized approach sets them apart. Their team's dedication 
		and expertise helped me secure admission into VIT Vellore for Computer Science, despite 
		stiff competition. Their commitment to student success is truly remarkable, and I'm glad 
		I chose to seek their guidance.`,
	},
];

const StudentBenefits = () => {
	return (
		<div className="w-12/12 mt-8 pt-8">
			<p className="text-3xl text-center mb-8 font-bold">
				Students Benefited in the Past!
			</p>
			<div className="flex flex-wrap justify-center student-benefit-custom-bg px-8">
				{studentBioData.map((items, index) => (
					<div className="w-full md:w-3/12 border mr-2 mb-8 px-4 py-2 bg-white student-benefit-custom-border">
						<div className="flex justify-between w-full pl-4 mt-4 mb-8">
							<img
								src={items.image_url}
								alt="no_image"
								className="student-rounded-image"
							/>
							<div className="flex-column w-10/12 ml-2 pl-8">
								<p className="text-lg font-semibold">{items.student_name}</p>
								<p className="text-base text-green-600 font-bold">
									{items.college}
								</p>
							</div>
						</div>
						<p className="text-sm text-wrap text-center">{items.bio}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default React.memo(StudentBenefits);
