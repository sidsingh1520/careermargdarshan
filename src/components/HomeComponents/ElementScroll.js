const cardsData1 = [
	{
		collegeName: "IIT Bombay",
		query: "#1 Engineering College In india",
	},
	{
		collegeName: "IIT Kanpur",
		query: "Innovative research hub",
	},
	{
		collegeName: "IIT Kharagpur",
		query: "Alumni pride, global impact",
	},
	{
		collegeName: "IIT Roorkee",
		query: "Heritage engineering institution",
	},
	{
		collegeName: "IIT Delhi",
		query: "Cutting-edge research, industry collaborations",
	},
	{
		collegeName: "IIIT Hyderabad",
		query: "Tech innovation epicenter",
	},
	{
		collegeName: "NSIT, Delhi",
		query: "Tech talent hub",
	},
	{
		collegeName: "IIT BHU",
		query: "Engineering tradition stronghold",
	},
	{
		collegeName: "IIEST Shibpur",
		query: "Engineering excellence heritage",
	},
	{
		collegeName: "IIT Indore",
		query: "Emerging research powerhouse",
	},
	{
		collegeName: "IIT Bombay",
		query: "#1 Engineering College In india",
	},
	{
		collegeName: "IIT Kanpur",
		query: "Innovative research hub",
	},
	{
		collegeName: "IIT Kharagpur",
		query: "Alumni pride, global impact",
	},
	{
		collegeName: "IIT Roorkee",
		query: "Heritage engineering institution",
	},
	{
		collegeName: "IIT Delhi",
		query: "Cutting-edge research, industry collaborations",
	},
	{
		collegeName: "IIIT Hyderabad",
		query: "Tech innovation epicenter",
	},
	{
		collegeName: "NSIT, Delhi",
		query: "Tech talent hub",
	},
	{
		collegeName: "IIT BHU",
		query: "Engineering tradition stronghold",
	},
	{
		collegeName: "IIEST Shibpur",
		query: "Engineering excellence heritage",
	},
	{
		collegeName: "IIT Indore",
		query: "Emerging research powerhouse",
	},
];
const cardsData2 = [
	{
		collegeName: "NIT Delhi",
		query: "Growing technical expertise",
	},
	{
		collegeName: "NIT TRICHY",
		query: "Engineering excellence hub",
	},
	{
		collegeName: "NIT WARANGAL",
		query: "Eastern India's tech beacon.",
	},
	{
		collegeName: "NIT ROURKELA",
		query: "Eastern Innovation Epicenter",
	},
	{
		collegeName: "NIT PATNA",
		query: "Emerging Bihar's technical hub",
	},
	{
		collegeName: "MNIT Allahabad",
		query: "Northern India's Tech Oasis",
	},
	{
		collegeName: "NIT Calicut",
		query: "Coastal engineering brilliance",
	},
	{
		collegeName: "NIT Silchar",
		query: "Northeastern India's Engineering Nexus",
	},
	{
		collegeName: "NIT Jalandhar",
		query: "Northern India's Tech Catalyst",
	},
	{
		collegeName: "NIT Jaipur",
		query: "Western India's Engineering Jewel",
	},
	{
		collegeName: "NIT Delhi",
		query: "Growing technical expertise",
	},
	{
		collegeName: "NIT TRICHY",
		query: "Engineering excellence hub",
	},
	{
		collegeName: "NIT WARANGAL",
		query: "Eastern India's tech beacon.",
	},
	{
		collegeName: "NIT ROURKELA",
		query: "Eastern Innovation Epicenter",
	},
	{
		collegeName: "NIT PATNA",
		query: "Emerging Bihar's technical hub",
	},
	{
		collegeName: "MNIT Allahabad",
		query: "Northern India's Tech Oasis",
	},
	{
		collegeName: "NIT Calicut",
		query: "Coastal engineering brilliance",
	},
	{
		collegeName: "NIT Silchar",
		query: "Northeastern India's Engineering Nexus",
	},
	{
		collegeName: "NIT Jalandhar",
		query: "Northern India's Tech Catalyst",
	},
	{
		collegeName: "NIT Jaipur",
		query: "Western India's Engineering Jewel",
	},
];
const cardsData3 = [
	{
		collegeName: "BITS PILANI",
		query: "Global technology breeding ground",
	},
	{
		collegeName: "JADAVPUR UNIVERSITY",
		query: "Bengal’s Engineering Pride",
	},
	{
		collegeName: "PEC CHANDIGARH",
		query: "Chandigarh's Engineering Gem",
	},
	{
		collegeName: "IIIT LUCKNOW",
		query: "Tech innovation spark",
	},
	{
		collegeName: "DTU, Delhi",
		query: "Capital's engineering beacon",
	},
	{
		collegeName: "ICT Mumbai",
		query: "Chemical engineering pioneer",
	},
	{
		collegeName: "VIT Vellore",
		query: "Vibrant Innovation Hub",
	},
	{
		collegeName: "MIT, Manipal",
		query: "Cutting-edge technical excellence",
	},
	{
		collegeName: "IIIT Allahabad",
		query: "UP’s Digital innovation nexus",
	},
	{
		collegeName: "IIIT Jabalpur",
		query: "Technical talent incubator",
	},
	{
		collegeName: "BITS PILANI",
		query: "Global technology breeding ground",
	},
	{
		collegeName: "JADAVPUR UNIVERSITY",
		query: "Bengal’s Engineering Pride",
	},
	{
		collegeName: "PEC CHANDIGARH",
		query: "Chandigarh's Engineering Gem",
	},
	{
		collegeName: "IIIT LUCKNOW",
		query: "Tech innovation spark",
	},
	{
		collegeName: "DTU, Delhi",
		query: "Capital's engineering beacon",
	},
	{
		collegeName: "ICT Mumbai",
		query: "Chemical engineering pioneer",
	},
	{
		collegeName: "VIT Vellore",
		query: "Vibrant Innovation Hub",
	},
	{
		collegeName: "MIT, Manipal",
		query: "Cutting-edge technical excellence",
	},
	{
		collegeName: "IIIT Allahabad",
		query: "UP’s Digital innovation nexus",
	},
	{
		collegeName: "IIIT Jabalpur",
		query: "Technical talent incubator",
	},
];
const ElementScroll = () => {
	return (
		<div>
			<h3 className="text-center font-bold my-8  text-3xl">
				We Have Helped 11000+ Students Get Into Top Colleges
			</h3>

			<div className="relative  overflow-x-hidden w-full flex-col justify-end gap-2 bg-gradient-to-b from-white via-green-100 to-white px-2 flex">
				<div className="flex flex-row gap-2 bg-transparent custom">
					{cardsData1.map((item) => (
						<div className="flex min-w-[224px] min-h-[192px]  bg-transparent flex-col justify-center gap-1 rounded-2xl border-2 border-green-200 bg-white p-3">
							<span>
								<svg
									className="mb-2 h-9 w-9 rounded-full bg-green-500 p-2"
									fill="none"
									stroke="white"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
									></path>
								</svg>
							</span>
							<span className="text-xs font-bold text-green-600 ">
								{item.collegeName}
							</span>
							<span className="text-[8px] text-xs text-gray-700">
								{item.query}
							</span>
						</div>
					))}
				</div>
				<div className="flex flex-row gap-2 bg-transparent custom1">
					{cardsData3.map((item) => (
						<div className="flex min-w-[224px] min-h-[192px]  bg-transparent flex-col justify-center gap-1 rounded-2xl border-2 border-green-200 bg-white p-3">
							<span>
								<svg
									className="mb-2 h-9 w-9 rounded-full bg-green-800 p-2"
									fill="none"
									stroke="white"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
									></path>
								</svg>
							</span>
							<span className="text-xs font-bold text-green-600 ">
								{item.collegeName}
							</span>
							<span className="text-[8px] text-xs text-gray-700">
								{item.query}
							</span>
						</div>
					))}
				</div>
				<div className="flex flex-row gap-2 bg-transparent custom2">
					{cardsData2.map((item) => (
						<div className="flex min-w-[224px] min-h-[192px]  bg-transparent flex-col justify-center gap-1 rounded-2xl border-2 border-green-200 bg-white p-3">
							<span>
								<svg
									className="mb-2 h-9 w-9 rounded-full bg-green-500 p-2"
									fill="none"
									stroke="white"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
									></path>
								</svg>
							</span>
							<span className="text-xs font-bold text-green-600 ">
								{item.collegeName}
							</span>
							<span className="text-[8px] text-xs text-gray-700">
								{item.query}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ElementScroll;
