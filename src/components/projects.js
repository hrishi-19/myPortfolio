import React from "react";
import { IconContext } from "react-icons";
import { FaGithub } from 'react-icons/fa';
import { projects } from "../data/projectData";
import { RiLiveFill } from 'react-icons/ri';
function Projects() {
    return (
        <div className=" content sm:w-2/3  sm:max-lg:w-4/5 w-5/6 h-auto overflow-auto font-sans pb-32">
            <p className="sm:text-4xl text-2xl text-white font-extrabold py-4 relative pseudo-line">Projects</p>
            <p className="sm:text-2xl text-xl text-gray-300 font-light">Here are a few pojects </p>
            {
                projects.map((project, index) => {
                    return (
                        <div className="w-full mt-4  ">

                            <div className="skill-box sm:w-4/5 w-full p-5 ">

                                <p className="sm:text-4xl text-2xl text-red-400 font-extrabold pseudo-line">{project.title}</p>
                                <div className="flex w-full sm:flex-row flex-col-reverse">
                                    <div className="basis-1/2 flex flex-col justify-between">
                                        <p className="text-xl  py-3 text-gray-500 hover:text-gray-400">{project.content}</p>
                                        <div className="w-full  flex  ">
                                            <button className="flex items-center sm:p-2 p-1 bg-white rounded-md hover:-translate-y-1 ease-in duration-200 sm:ml-3 ml-1">
                                                <IconContext.Provider value={{ color: "black", size: "2em" }}>

                                                    <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /></a>

                                                </IconContext.Provider>
                                                <p className="sm:px-4 px-1 font-semibold">Github</p>
                                            </button>
                                            {project.live && <button className="flex items-center sm:p-2 p-1 bg-red-500 rounded-md hover:-translate-y-1 ease-in duration-200 sm:ml-3 ml-1">
                                                <IconContext.Provider value={{ color: "white", size: "2em" }}>

                                                    <a href={project.live} target="_blank" rel="noreferrer"><RiLiveFill /></a>

                                                </IconContext.Provider>
                                                <p className="sm:px-4 px-1 font-semibold text-white">Demo</p>
                                            </button>}
                                        </div>
                                    </div>
                                    <div className="basis-1/2 p-3 rounded-md  ">
                                        <img src={project.imgUrl} alt={project.title} />
                                    </div>
                                </div>
                            </div>




                        </div>
                    )
                })
            }
        </div>




    )
}
export default Projects