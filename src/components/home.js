import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import AnimateText from "./textAnimator";

function Home() {
    return (
        <div className=" content sm:w-2/3  sm:max-lg:w-4/5 w-5/6 h-auto overflow-auto font-sans pb-32">
            <div className="skill-box w-full sm:p-5 p-2">
                <p className="sm:text-3xl text-xl text-fuchsia-500 font-bold">Hello, I am</p>
                <p className="sm:text-4xl text-2xl text-white font-extrabold py-4"> Hrishikesh Kamath</p>
                <AnimateText text={[
                    "Web Developer",
                    "Flutter Developer",
                    "Student",
                    "Python developer",
                    "Devops Enthusiast"
                ]}
                />

                <div className="w-full  sm:px-5 px-1 py-5 flex sm:flex-row flex-col ">
                    <button className=" no-select sm:w-auto w-1/2 text-white font-bold bg-orange-500 sm:px-3 py-2  px-0 rounded-sm sm:text-xl text-md ">Connect</button>
                    <div className="sm:px-5 px-1 sm:w-1/2 w-full  flex justify-evenly sm:mt-0 mt-4 items-center">
                    <IconContext.Provider value={{ color: "black", size: "2em" }}>
                            <div className="p-2 rounded-full bg-white hover:-translate-y-1  duration-200">
                                <a href="https://github.com/hrishi-19" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </div>
                       </IconContext.Provider>
                        <IconContext.Provider value={{ color: " white", size: "2em" }}>
                            <div className="p-2 rounded-full bg-blue-700/70 hover:-translate-y-1  duration-200">
                                <a href="https://www.linkedin.com/in/hrishikeshkamath/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: "white", size: "2em" }}>
                            <div className="p-2 rounded-full bg-blue-600 hover:-translate-y-1  duration-200">
                                <a href="https://www.facebook.com/hrishikesh.kamath.12/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: "white", size: "2em" }}>
                            <div className="p-2 rounded-full bg-sky-500 hover:-translate-y-1  duration-200">
                                <a href="https://twitter.com/kamath_hrishi" target="_blank" rel="noreferrer"> <FaTwitter /></a>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>

            </div>
           
            <div className="skill-box w-full sm:p-5 p-3 mt-5">
            <p className="sm:text-4xl text-2xl text-white font-extrabold py-4 relative pseudo-line">About</p>
            <p className="text-gray-500 text-xl  sm:px-3 sm:py-5 px-1 py-3">
                I enjoy creating things that live on the internet.
                I am a passionate Developer, with strong administrative and communication skills, good attention to details and ability to write efficient code.I am a community-driven person, loves building projects which would help tackle a real world problem. Currently I'm working as a Product Development Intern at Chipster.
            </p>
            </div>
            <div className="skill-box w-full sm:p-5 p-3 mt-5">
            <p className="sm:text-4xl text-2xl text-white font-extrabold py-4">Discover My Work Space</p>
            <AnimateText text={[
                "Covid Bed Allotment",
                "Mitra",
                "AnimeIo"
            ]}
            />
            <button className=" no-select text-2xl rounded-sm text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3"><NavLink to ="/work">Explore Now</NavLink></button>
            </div>
            
            
            
        </div>
    )
}
export default Home
