import React from "react";
import skills from "../data/skillData";

function Skill() {
    const programming = skills.slice(0, 4);
    const framework = skills.slice(4,)
    return (
        <div className=" content sm:w-2/3  sm:max-lg:w-4/5 w-5/6 overflow-auto font-sans pb-32">
            <p className="sm:text-4xl text-2xl text-white font-extrabold py-4 relative pseudo-line">Skills</p>
            <p className="sm:text-2xl text-xl text-gray-300 font-light">Here are some to the technologies that I have worked on</p>
            <p className="sm:text-lg text-md text-white font-semibold mt-5 py-3">GENERAL PROGRAMMING</p>
            <div className="flex justify-start sm:flex-row flex-col flex-wrap ">
                {
                    programming.map((item,index) => {
                        return (
                            <div  key={index} className="skill-box sm:w-min w-5/6  rounded-md flex justify-between items-center  py-1 px-2 text-gray-300 text-lg sm:mt-3 mt-5 ml-5">
                                <img className="no-select" src={item.url} alt={item.name} />
                                <p className=" no-select w-40 text-start px-5 font-thin">{item.name}</p>
                            </div>
                        )
                    })
                }

            </div>

            <p className="sm:text-lg text-md text-white font-semibold mt-5 py-3">FRAMEWORKS AND TOOLS</p>
            <div className="flex justify-start sm:flex-row flex-col flex-wrap ">
                {
                    framework.map((item,index) => {
                        return (
                            <div key={index}className="skill-box sm:w-min w-5/6  rounded-sm flex justify-between items-center  py-1 px-2 text-gray-300 text-lg sm:mt-3 mt-5 ml-5">
                                <img className="no-select" src={item.url} alt={item.name} />
                                <p className=" no-select w-40 text-start px-5 font-thin">{item.name}</p>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}
export default Skill