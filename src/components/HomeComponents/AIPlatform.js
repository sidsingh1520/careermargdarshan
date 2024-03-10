import React from "react";
import openAiImg from "../../assets/open-ai.png"

const AIPlatform = () => {
    return <React.Fragment>
        <div className="w-full mt-[5%] pt-8 ai-platform-section pb-[5%] ">
            <p className="text-4xl text-center mb-8 font-bold">India’s First “AI Enabled Platform” For
                <br />Counselling & College Admissions</p>
            <div className="mt-[50px] bg-white rounded-[50px] border-2 w-3/12 px-[20px] mx-4">
                <div className="flex justify-center mt-[25px]">
                    <img src={openAiImg} alt="no-img" className="h-[60px] w-[auto] justify-center" />

                </div>
                <p className="text-3xl font-bold text-center mt-6">Career  Margdarshan AI</p>

                <p className="ml-[12px] mt-[25px] mb-[40px] leading-8">
                    Ask Any College Information <br />
                    Compare Colleges <br />
                    Choice Filling Related Doubt <br />
                    Placement Info Of Any College <br />
                    24*7 Assistance
                </p>
                
            </div>
        </div>
    </React.Fragment>
}

export default AIPlatform