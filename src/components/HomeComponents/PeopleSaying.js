import React from "react";
import ss from "../../assets/chat_ss.jpeg"

const PeopleSaying = () => {
    return <React.Fragment>
        <div className="w-12/12 mt-8 pt-8 people-saying-section">
            <p className="text-4xl text-center mb-[80px] font-bold">See What People Are Saying About Us!</p>
            <div className="flex flex-wrap justify-center px-8 mx-4">
                {
                    Array.from({ length: 6 }, (items, index) => (
                        <div className="w-3/12 border mr-2 mb-8 py-2 px-4 bg-white people-saying-border">
                            <img src={ss} alt="no_image" className="h-[450px] w-[auto]" />
                        </div>
                    ))
                }
            </div>

        </div>
    </React.Fragment>
}

export default PeopleSaying