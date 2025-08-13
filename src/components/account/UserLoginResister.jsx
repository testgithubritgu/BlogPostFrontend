import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { AppContext } from '../context/AppContext'
const UserLoginResister = () => {

  const [checkerror,setcheckerror] = useState(false)
  const navigate = useNavigate()
  const [state, setstate] = useState("login");
  
  const [userData,setuserData] = useState({})
  const oninputChange = (e)=>{
    const val = e.target.value
    setuserData(prev=>({...prev,[e.target.name]:val}))
  }
  

  const registerUser =async (e)=>{

    e.preventDefault()
    const {name,email,password} = userData
    
    try {
      const responce = await axios.post(`https://blogpostbackend-v0uv.onrender.com/auth/${state}`,{name,email,password},{headers:{"authorization":"Bearer "+localStorage.getItem("token")&& localStorage.getItem("token")}})
      if(state === 'login'){
        localStorage.setItem("token",responce.data.token)
        localStorage.setItem("user",JSON.stringify(responce.data.user))
      
        window.location.reload()
      }else{
        
        setstate("login")
      }
     

    } catch (error) {
      setcheckerror(true)
      console.log(error)
    }
  }
  return (
    <div className="fixed  top-0 left-0 right-0 bottom-0 z-10 bg-black/50 flex justify-center backdrop-blur-sm items-center">
      <form 
        
        onSubmit={(e)=>registerUser(e)}
        action=""
        className="relative bg-white p-10 rounded-xl text-slate-500 "
      >
        {checkerror && <p className="text-red-700 text-center">*invalid credintial*</p>}
        <h1 className="text-center font-blogFont text-4xl tracking-widest mb-3">blo<span className="text-orange-300">g</span></h1>
        {/* <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1> */}
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        {state !== "login" && (
          <>
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.profile_icon} width={14} alt="" />
            <input
            name="name"
            onChange={(e)=>oninputChange(e)}
              className="text-sm outline-none"
              type="text"
              placeholder="Full name"
            />
          </div>
         
          </>
        )}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} width={14} alt="" />
          <input 
          name="email"
            onChange={(e)=>oninputChange(e)}
            className="text-sm outline-none"
            type="email"
            placeholder="Email ID"
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} width={14} alt="" />
          <input
          name="password"
          onChange={(e)=>oninputChange(e)}
            className="text-sm outline-none"
            type="password"
            placeholder="Password"
          />
        </div>
        <p className="text-sm text-blue-600 mb-4 mt-1 cursor-pointer">
          Forgot password?
        </p>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full">
          {state === "login" ? "login" : "create account"}
        </button>
        {state === "login" ? (
          <p onClick={() => setstate("register")} className="mt-5 text-center">
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer">Sign Up</span>
          </p>
        ) : (
          <p onClick={() => setstate("login")} className="mt-5 text-center">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer">login</span>
          </p>
        )}
        {/* <img
          // onClick={() => setshowlogin(false)}
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt=""
        /> */}
      </form>
    </div>
  );
};

export default UserLoginResister;
