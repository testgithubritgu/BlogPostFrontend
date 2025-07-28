import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

const Navbar = () => {
    const [showUnderlineOnPathName,setshowUnderlineOnPathName] = useState(0)
    const navLinkOnclickFunction = (e,i)=>{
setshowUnderlineOnPathName(i)
navigate(`${e.path}`)
    }
  const navLinks = [
    {pathName:"home",path:"/"},
    {pathName:"about",path:"/about"},
    {pathName:"contact",path:"/contact"}
   
  ]
    const { user } = useContext(AppContext);
  const [profile, setprofile] = useState(false);
  const { setshowLogin } = useContext(AppContext);
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
        <div className="align-text-bottom space-x-4   px-2  ">
            {navLinks.map((e,i)=>(
                
                    <span  onClick={() => navLinkOnclickFunction(e,i)}
            className={`text-neutral-500 md:text-xl tracking-wide text-sm border-gray-800 relative cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${showUnderlineOnPathName ===i ? "border-b border-black":""}`}>{e.pathName}</span>
               
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
          <div className="flex items-center gap-2 sm:gap-5">
            <button
              onClick={() => setshowLogin(true)}
              className="py-2 px-10 cursor-pointer bg-black text-white rounded-full "
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
