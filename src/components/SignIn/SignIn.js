import React from "react";
import Header from "../Header";
import LOGO_TEXT from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
	const navigate = useNavigate();
	return (
		<div className="">
			<Header />
			<div className="mx-auto mt-16 w-[25%] py-12 flex-col border-2 border-black rounded-2xl ">
				<div className="flex mx-auto md:w-4/12 justify-center items-center">
					<img alt="logo" src={LOGO_TEXT} className="w-16" />
					<p className="text-xl font-semibold">
						Career <br /> Margdarshan
					</p>
				</div>
				<div className="text-center">
					<p className="mt-4 text-2xl font-bold">Welcome Back!</p>
					<p className="text-base font-semibold mt-2">
						Please enter your details to Sign In
					</p>
				</div>
				<div className="flex flex-col items-center mt-4">
					<input
						type="text"
						placeholder="Enter your name..."
						className="border-[1px] py-2 px-2 mt-4 border-black w-[80%] rounded-lg "
					></input>
					<input
						type="text"
						placeholder="Enter your email address..."
						className="border-[1px] py-2 px-2 mt-4 border-black w-[80%]  rounded-lg "
					></input>
					<button
						onClick={() => {
							navigate("/dashboard");
						}}
						className="w-[80%] py-2 mt-4 px-4 bg-green-400 rounded-lg font-bold"
					>
						Sign In
					</button>
					<p className="mt-4 mb-8 text-sm">
						New Here? | <span className="text-green-600">Signup Now</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
