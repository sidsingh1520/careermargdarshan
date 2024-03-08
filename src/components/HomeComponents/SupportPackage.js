import React, { memo } from "react";

const headingStyle = "text-3xl font-extrabold text-center text-[#005B45] mt-2";
const bulletPointStyle = "flex-column mt-6"
const bulletPointParaStyle = "text-base font-bold"
const counsellingSupportPackage = [
    {
        "heading": <p className={headingStyle}>JOSAA <br />Counselling</p>,
        "bullet_point": <div className={bulletPointStyle}>
            <p className={bulletPointParaStyle}>College Report</p>
            <p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
            <p className={bulletPointParaStyle}>Branch Wise Report</p>
            <p className={bulletPointParaStyle}>Expert Counselling</p>
        </div>
    },
    {
        "heading": <p className={headingStyle}>CSAB <br />Counselling</p>,
        "bullet_point": <div className={bulletPointStyle}>
            <p className={bulletPointParaStyle}>College Report</p>
            <p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
            <p className={bulletPointParaStyle}>Branch Wise Report</p>
            <p className={bulletPointParaStyle}>Expert Counselling</p>
        </div>
    },
    {
        "heading": <p className={headingStyle}>JOSAA <br />FOR IIT’S</p>,
        "bullet_point": <div className={bulletPointStyle}>
            <p className={bulletPointParaStyle}>College Report</p>
            <p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
            <p className={bulletPointParaStyle}>Branch Wise Report</p>
            <p className={bulletPointParaStyle}>Expert Counselling</p>
        </div>
    },
    {
        "heading": <p className={headingStyle}>JAC DELHI <br />Counselling</p>,
        "bullet_point": <div className={bulletPointStyle}>
            <p className={bulletPointParaStyle}>College Report</p>
            <p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
            <p className={bulletPointParaStyle}>Branch Wise Report</p>
            <p className={bulletPointParaStyle}>Expert Counselling</p>
        </div>
    },
    {
        "heading": <p className={headingStyle}>JOSAA <br />Counselling</p>,
        "bullet_point": <div className={bulletPointStyle}>
            <p className={bulletPointParaStyle}>College Report</p>
            <p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
            <p className={bulletPointParaStyle}>Branch Wise Report</p>
            <p className={bulletPointParaStyle}>Expert Counselling</p>
        </div>
    },
    {
        "heading": <p className={headingStyle}>JOSAA <br />Counselling</p>,
        "bullet_point": <div className={bulletPointStyle}>
            <p className={bulletPointParaStyle}>College Report</p>
            <p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
            <p className={bulletPointParaStyle}>Branch Wise Report</p>
            <p className={bulletPointParaStyle}>Expert Counselling</p>
        </div>
    },
    {
        "heading": <p className={headingStyle}>LAST <br />Counselling</p>,
        "bullet_point": <div className={bulletPointStyle}>
            <p className={bulletPointParaStyle}>College Report</p>
            <p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
            <p className={bulletPointParaStyle}>Branch Wise Report</p>
            <p className={bulletPointParaStyle}>Expert Counselling</p>
        </div>
    },
    {
        "heading": <p className={headingStyle}>JOSAA <br />Counselling</p>,
        "bullet_point": <div className={bulletPointStyle}>
            <p className={bulletPointParaStyle}>College Report</p>
            <p className={bulletPointParaStyle}>Choice Filling Prefrence</p>
            <p className={bulletPointParaStyle}>Branch Wise Report</p>
            <p className={bulletPointParaStyle}>Expert Counselling</p>
        </div>
    }
]

const SupportPackage = () => {
    return <React.Fragment>
        <div className="w-12/12 mt-8 pt-8">
            <p className="text-4xl text-center mb-8 font-bold">Students Benefited in the Past!</p>
            <div className="relative mt-10 overflow-x-hidden w-full px-2 flex">

                <div className="flex bg-transparent support-package-scroll-animation z-20">
                    {
                        counsellingSupportPackage.map((items, index) => (
                            <div className="flex-column min-w-[224px] min-h-[250px] max-h-[250px] support-package-card mx-4 px-4 py-2 z-0">
                                {items.heading}
                                {items.bullet_point}
                               <p className="text-center customSpan z-40">
                                <span className="border-2 px-8 py-2">#{index+1}</span>
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default SupportPackage