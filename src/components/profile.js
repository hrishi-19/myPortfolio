import React from "react";
import profile from '../static/profile.jpg';
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {SiGmail}  from 'react-icons/si';
import '../App.css';
const Profile = () => {

    return (
        <div className="container md:w-1/5 w-1/5 h-4/6 sm:block sm:max-lg:hidden hidden">
            <div className=" info-wrapper w-full h-1/2 font-mono flex flex-col justify-center items-center">

                <img className=" w-24 h-24 rounded-md " src={profile} alt="profile" />
                <span className="flex h-3 w-3 relative left-12 bottom-2 rounded-full">
                    <span className="animate-ping  absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>

                <div className="font-sans font-semibold tracking-wide flex flex-col  items-center">
                    <p className="text-md text-gray-300">Hrishikesh Kamath</p>
                    <p className="text-sm text-gray-500">Web Developer | Flutter Developer</p>
                    <p className="text-sm text-gray-500">Devops Enthusiast</p>
                </div>
            </div>
            <div className="content-wrapper w-full h-1/2 font-sans font-semibold tracking-wide flex flex-col justify-between ">
                <div className="flex flex-col justify-between items-start mx-auto py-3">
                    <p className="text-sm text-gray-300 py-2">Location: Bengaluru,KA</p>
                    <p className="text-sm text-gray-300 py-2">Specialization: Computer Science</p>
                    <p className="text-sm text-gray-300 py-2">Education:BMSIT&M,Bengaluru</p>
                </div>
                <div className="link-wrapper h-1/5 w-full flex justify-evenly items-center ">
                <IconContext.Provider value={{ color: " white", size: "1.25em" }}>
                            <div className="p-2 rounded-full bg-blue-700/70">
                                <a href="https://www.linkedin.com/in/hrishikeshkamath/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: "black", size: "1.25em" }}>
                        <div className="p-2 rounded-full bg-white">
                            <a href="https://github.com/hrishi-19" target="_blank" rel="noreferrer"><FaGithub /></a>
                        </div>
                   </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", size: "1.25em" }}>
                            <div className="p-2 rounded-full bg-red-600">
                                <a href="mailto:hrishikeshkamath999@gmail.com" target="_blank" rel="noreferrer"><SiGmail/></a>
                            </div>
            </IconContext.Provider>
                        
                </div>
            </div>


        </div>
    )
}
export default Profile