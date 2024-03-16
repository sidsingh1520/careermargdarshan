import React from "react";
import LOGO_TEXT from "../assets/logo_text.png";

const Header = () => {
    const aHrefStyle = "mr-6 text-[15px] font-bold";

    return <main className="flex max-w-[80%] w-full gap-6 items-center flex-col">
        <nav className="flex w-full items-center justify-between px-4 py-5">
            <div className="flex">
                <img alt="logo" src={LOGO_TEXT} className="w-96" />
            </div>
            <div className="">
                <a href="./" className={aHrefStyle}>Home</a>
                <a href="./aboutus" className={aHrefStyle}>About Us</a>
                <a href="./allotmentletter" className={aHrefStyle}>Allotment Letters</a>
                <a href="./price" className={aHrefStyle}>Pricing</a>
                <a href="./contact" className={aHrefStyle}>Contact Us</a>
                {/* <a href="./signup" className={aHrefStyle}>Signup</a> */}
                <button className="py-1 px-4 text-[15px] border-gray-400 border-2 font-bold rounded-l-full rounded-r-full">
                    Sign In!
                </button>
            </div>
        </nav>
    </main>
}


export default Header