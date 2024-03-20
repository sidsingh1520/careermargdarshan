import React from "react";
import studentImg from "../../assets/Ritick_image.jpg";

const studentBioData = [
	{
		image_url: studentImg,
		student_name: "Saksham Srivastava",
		college: "IIIT Lucknow",
		bio: `Career Margdarshan significantly aided me during my counseling days, assisting with college selection,
         choice filling, and more. Thanks to their guidance, I secured admission into CSE at IIIT Lucknow.
          Now, I've received a job offer of 43 lakhs from a tech company in Bangalore.`,
	},
	{
		image_url: studentImg,
		student_name: "Shaswat Singh",
		college: "IIIT Nagpur",
		bio: `With Career Margdarshan's invaluable support during JOSSA and CSAB counseling, despite my 30K JEE Mains rank,
         I secured admission into my dream college, IIIT Nagpur, for CSE. I highly recommend Career Margdarshan.`,
	},
	{
		image_url: studentImg,
		student_name: "Akhand Pratap Singh",
		college: "IIT Bombay",
		bio: `When I mentioned the traffic growth on their website and a few other things at the start of the
         conversation the founder got ready to have the next conversation with me. That resulted in getting a 
         full-time job as a Product Manager even after being a fresher.`,
	},
	{
		image_url: studentImg,
		student_name: "Akhand Pratap Singh",
		college: "IIT Bombay",
		bio: `When I mentioned the traffic growth on their website and a few other things at the start of the 
        conversation the founder got ready to have the next conversation with me. That resulted in getting a
        full-time job as a Product Manager even after being a fresher.`,
	},
	{
		image_url: studentImg,
		student_name: "Saksham Srivastava",
		college: "IIIT Lucknow",
		bio: `Career Margdarshan significantly aided me during my counseling days, assisting with college selection,
         choice filling, and more. Thanks to their guidance, I secured admission into CSE at IIIT Lucknow.
          Now, I've received a job offer of 43 lakhs from a tech company in Bangalore.`,
	},
	{
		image_url: studentImg,
		student_name: "Saksham Srivastava",
		college: "IIIT Lucknow",
		bio: `Career Margdarshan significantly aided me during my counseling days, assisting with college selection,
         choice filling, and more. Thanks to their guidance, I secured admission into CSE at IIIT Lucknow.
          Now, I've received a job offer of 43 lakhs from a tech company in Bangalore.`,
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
					<div className="w-3/12 border mr-2 mb-8 px-4 py-2 bg-white student-benefit-custom-border">
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
