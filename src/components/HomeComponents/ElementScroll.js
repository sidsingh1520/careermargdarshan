const cardsData = [
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
	{
		collegeName: "NIT DELHI",
		query: "Can I get NIT Delhi at my marks?",
	},
];
const ElementScroll = () => {
	return (
		<div className="relative mt-10 overflow-x-hidden w-full flex-col justify-end gap-2 bg-gradient-to-t from-white via-green-200 to-white px-2 flex">
			<div className="flex flex-row gap-2 bg-transparent custom">
				{cardsData.map((item) => (
					<div className="flex min-w-[224px] min-h-[192px]  bg-transparent flex-col justify-center gap-1 rounded-2xl border border-green-200 bg-white p-3">
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
				{cardsData.map((item) => (
					<div className="flex min-w-[224px] min-h-[192px]  bg-transparent flex-col justify-center gap-1 rounded-2xl border border-green-200 bg-white p-3">
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
				{cardsData.map((item) => (
					<div className="flex min-w-[224px] min-h-[192px]  bg-transparent flex-col justify-center gap-1 rounded-2xl border border-green-200 bg-white p-3">
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
	);
};

export default ElementScroll;
