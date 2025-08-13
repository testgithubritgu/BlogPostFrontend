import React, { useEffect, useState } from 'react'
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { CgProfile } from 'react-icons/cg';
import { FaLock } from 'react-icons/fa';
import { IoPencilOutline } from 'react-icons/io5';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
const AccountForm = () => {
  const [ispassMismatch,setispassMismatch] = useState(false)
  const [settingData, setsettingData] = useState({})
    const userData = localStorage.getItem("user")&& JSON.parse(localStorage.getItem("user"))

    const onchangedata = (e)=>{
      const val = e.target.value
      setsettingData(prev => ({...prev,[e.target.name]:val}))
      
    }
    const onformsubmit = async(e)=>{
      e.preventDefault()
      
      try {
        const res = await axios.put(`https://blogpostbackend-v0uv.onrender.com/auth/updateaccount`,settingData,{headers:{"authorization":"Bearer "+(localStorage.getItem("token") && localStorage.getItem("token"))}})
        setispassMismatch(false)
        toast.success("Account Updated Succesfully")
        setTimeout(() => {
          localStorage.removeItem("token")
          localStorage.removeItem("user")
          window.location.reload()
        }, 2000);
      } catch (error) {
        setispassMismatch(true)
        console.log(error)
      }
    }
       
  return (
    <>
                <div className='h-full w-fit py-20 px-12 '>
               {ispassMismatch &&  <h1 className='text-center text-sm text-red-700 italic '>password is mismatch😒</h1>}
                <h1 className='text-slate-600 text-2xl'>Account Setting</h1> 
              <ToastContainer  />
              <form onSubmit={(e)=>onformsubmit(e)} action="" className='py-4 min-w-fit '>
                <div  className='w-full' >
                  <div className='flex  items-center gap-16 w-full'>

                  <div className='flex flex-col gap-2 text-slate-500' >
                    <span>First name</span>
                    <input  name='firstname' onChange={(e)=>onchangedata(e)} className='px-4 py-3 outline-none border bg-transparent border-slate-500 rounded-lg ' placeholder={`${userData?.name}`} type="text" />
                  </div>
                  <div className='flex flex-col gap-2 text-slate-500'><span>Last name</span>
                   <input name='lastname' onChange={(e)=>onchangedata(e)} className='px-4 py-3 outline-none border bg-transparent border-slate-500 rounded-lg ' placeholder='not provided' type="text" /></div>
                  
                  </div>
                </div>
                <div  className='w-full my-6' >
                  <div className='flex  items-center gap-16 w-full'>

                  <div className='flex  flex-col gap-2 text-slate-500' >
                    <span>old Password</span>
                    <input onChange={(e)=>onchangedata(e)} name='oldpass' className={`px-4 py-3 outline-none border bg-transparent ${ispassMismatch?"border-red-700":"border-slate-500"} rounded-lg `} placeholder='*****' type="password" />
                  </div>
                  <div className='flex flex-col gap-2 text-slate-500'><span>new Password</span>
                   <div className='relative'> <input onChange={(e)=>onchangedata(e)} name='newpass' className={`px-4 py-3 outline-none border bg-transparent ${ispassMismatch?"border-red-700":"border-slate-500"} rounded-lg`}  placeholder='*****' type="password" /><IoPencilOutline className='absolute top-[40%] right-2' /></div></div>
                  
                  </div>
                </div>
                <div  className='w-full' >
                  <div className='flex  items-center gap-16 w-full'>

                  <div className='flex flex-col gap-2 text-slate-500' >
                    <span>E-mail</span>
                   <div className='relative'> <input onChange={(e)=>onchangedata(e)} name='email'   className='px-4 py-3 outline-none border bg-transparent border-slate-500 rounded-lg ' placeholder={`${userData?.email}`} type="email" /><IoPencilOutline className='absolute top-[40%] right-2' /></div>
                  </div>
                  <div className='flex flex-col gap-2 text-slate-500'><span>Phone number</span>
                       <div className='relative'> <input onChange={(e)=>onchangedata(e)} name='phonenumber' className='px-4 py-3 outline-none border bg-transparent border-slate-500 rounded-lg ' placeholder='xxxx798' type="tel" /><IoPencilOutline className='absolute top-[40%] right-2' /></div></div>
                  
                  </div>
                </div>

                <div className='mt-8'>
                  <button type='submit' className='px-12 font-normal tracking-widest py-2 rounded-full  bg-sky-400 text-white'>
                    Save 
                  </button>
                  <button type='reset' className='text-sky-400 ml-7'>Cancel</button>
                </div>
              </form>
            </div>
    </>
  )
}

export default AccountForm
