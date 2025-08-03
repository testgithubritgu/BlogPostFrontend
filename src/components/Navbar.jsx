import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";
import { IoExitOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { setshowLogin,userName } = useContext(AppContext);
   const {showuseraccount,setshowuseraccount} =useContext(AppContext)
    const [showUnderlineOnPathName,setshowUnderlineOnPathName] = useState(0)
    const urlpathName = window.location.pathname
   const {showLogin} = useContext(AppContext)
  
   const logout =()=>{

    localStorage.removeItem("user")
    localStorage.removeItem("token")

    setshowLogin(true)

   }
    const navLinkOnclickFunction = (e,i)=>{
setshowUnderlineOnPathName(i)
navigate(`${e.path}`)
    }
  const navLinks = [
    {pathName:"home",path:"/",icon:<FaHome />},
    {pathName:"about",path:"/about",icon:<CgProfile />},
    {pathName:"contact",path:"/contact",icon:<FaPhoneAlt />}
  


   
  ]
    const { user } = useContext(AppContext);
  const [profile, setprofile] = useState(false);
  const navigate = useNavigate();
  const showLogoutFeatur = () => {
    setprofile(!profile);
  };
  return (
    <div className="flex justify-between items-center pt-4">
      <Link to="/">
        <span className="text-2xl sm:text-4xl  text-stone-500 tracking-wider">
          blo<span className="text-orange-500 ">g</span>
        </span>
      </Link>
        <div className="align-text-bottom space-x-4 flex  px-2  ">
            {navLinks.map((e,i)=>(
              <div key={i}>

              <span  onClick={() => navLinkOnclickFunction(e,i)}
              className={`hidden sm:block text-neutral-500 md:text-xl tracking-wide text-sm border-gray-800 relative cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${urlpathName ===e.path ? "border-b border-black":""}`}>{e.pathName}</span>
              <span className="visible sm:hidden text-neutral-700 text-1xl">
                {e.icon}
              </span>
              </div>
               
            ))}
        </div>
      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <p className="text-gray-600 max-sm:hidden pl-4">Hii,boss</p>
            <div onClick={showLogoutFeatur} className="relative ">
              <img
                src={assets.profile_icon}
                className="w-10 drop-shadow"
                alt=""
              />
              <div
                className={`absolute ${
                  profile ? "block" : "hidden"
                } top-0 right-0 z-10 text-black rounded pt-12`}
              >
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex relative items-center  gap-2 sm:gap-5">
            <div onClick={()=>setshowuseraccount(!showuseraccount)} className="flex justify-center group items-center italic gap-4 cursor-pointer">
              <img src={assets.dummy} className="h-7" alt="" />
              <h1>{`Welcome ${userName}😇`}</h1>
           
         { showuseraccount &&  <button
              onClick={() => logout()}
              className=" absolute -bottom-12  py-2 px-10 cursor-pointer bg-gray-900 text-white rounded-full "
              >
              logout
              
              </button>}
              </div>
            <IoExitOutline  onClick={() => logout()} className="block sm:hidden text-2xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
