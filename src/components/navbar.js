import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>{

    return(
        <div className="w-full mt-5">
        <nav className="flex justify-end px-10 w-full  text-slate-300 font-sans font-bold">
        <ul className="sm:w-1/6 md:w-1/2 w-full flex justify-between sm:text-2xl text-md">
        <li className="hover:text-slate-300/50"><NavLink to ="/home">Home</NavLink></li>
        <li className="hover:text-slate-300/50"><NavLink to ="/skills">Skills</NavLink></li>
        <li className="hover:text-slate-300/50"><NavLink to ="/work">Work</NavLink></li>
        <li className="hover:text-slate-300/50"><NavLink to ="/contact">Contact</NavLink></li>
        </ul>
        </nav>
        </div>
    )
}
export default Navbar;