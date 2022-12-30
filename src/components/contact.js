import {React,useState} from "react";
import coffee from "../static/coffee-break.png"

function Contact() {

    const[formData,setformData]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })
    const[errMsg,seterrMsg]=useState(null)
    const[fields,setFields]=useState([])


    const handleSubmit=async(e)=>{
        e.preventDefault()
        const response=await fetch("https://mailhandler.onrender.com/api/email",
        {
        method:'POST',
            body:JSON.stringify(formData),
            headers:{
                'content-type':'application/json',
                'Access-Control-Allow-Origin': '*'
            }})
        const result=await response.json()
        if(!response.ok){
            if(response.status===500) seterrMsg(result.msg)
            if(response.status===400) {
                setFields(result.nameArray) 
                seterrMsg(result.msg)}
            
        }else{
           
            seterrMsg(null)
            setFields([])
            setformData({
            name:"",
            email:"",
            subject:"",
            message:""
        })
        }
        
       

    }
    const handleChange=(e)=>{
        
       
        setformData({...formData,
            [e.target.name]:e.target.value})
       
    }
    return (
        <div className=" content sm:w-2/3  sm:max-lg:w-4/5 w-5/6 h-auto overflow-auto font-sans pb-32">
            <p className="sm:text-4xl text-2xl text-white font-extrabold py-4 relative pseudo-line">Contact</p>
            <p className="sm:text-2xl text-xl text-gray-300 font-light">Get in touch</p>
            <div className="w-full sm:h-5/6 h-auto sm:p-3 p-0 flex sm:flex-row flex-col ">
                <div className="basis-1/2 h-3/4 flex justify-center items-center ">
                    <img src={coffee} alt="contact" />
                </div>
                <div className="basis-1/2 h-full flex justify-center ">
                    <form className="w-5/6 h-full sm:p-2 p-0 flex flex-col  text-slate-600" onSubmit={handleSubmit}>


                        <input type="text" name="name" className= {fields.includes("name")?"border-2 border-red-500/100 w-full mt-3 p-2 bg-slate-200  rounded-md outline-3 outline-cyan-600":"w-full mt-3 p-2 bg-slate-200  rounded-md outline-3 outline-cyan-600"} placeholder="Full name"  onChange={handleChange} value={formData.name} />
                        <input type="email" name="email" className= {fields.includes("email")?"border-2 border-red-500/100 w-full mt-3 p-2 bg-slate-200  rounded-md outline-3 outline-cyan-600":"w-full mt-3 p-2 bg-slate-200  rounded-md outline-3 outline-cyan-600"} placeholder="Your Email" onChange={handleChange} value={formData.email}/>
                        <textarea name="message" cols="30" rows="10" className= {fields.includes("message")?"border-2 border-red-500/100 w-full mt-3 p-2 bg-slate-200  rounded-md outline-3 outline-cyan-600":"w-full mt-3 p-2 bg-slate-200  rounded-md outline-3 outline-cyan-600"} resize="none" placeholder="Message" onChange={handleChange}  value={formData.message}></textarea>
                        <button className="w-full mt-3 text-slate-200 bg-red-500 rounded-md py-2 font-strong">Send Message</button>
                        {errMsg&&<div className="bg-red-700 text-white w-fit sm:text-xl text-md px-2 py-3 rounded-md  mt-5">{errMsg}</div>}
                    </form>
                    
                </div>
                

            </div>
            

        </div>
    )
}
export default Contact