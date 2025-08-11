import React, { useEffect } from 'react'
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { CgProfile } from 'react-icons/cg';
import { FaLock } from 'react-icons/fa';
import { IoPencilOutline } from 'react-icons/io5';
const AccountForm = () => {
    const id = localStorage.getItem("user")&& JSON.parse(localStorage.getItem("user"))._id
   
  return (
    <>
                <div className='h-full w-fit py-20 px-12 '>
                <h1 className='text-slate-600 text-2xl'>Account Setting</h1> 

              <form action="" className='py-4 min-w-fit '>
                <div  className='w-full' >
                  <div className='flex  items-center gap-16 w-full'>

                  <div className='flex flex-col gap-2 text-slate-500' >
                    <span>First name</span>
                    <input className='px-4 py-3 outline-none border bg-transparent border-slate-500 rounded-lg ' placeholder='swapnil' type="text" />
                  </div>
                  <div className='flex flex-col gap-2 text-slate-500'><span>Last name</span>
                   <input className='px-4 py-3 outline-none border bg-transparent border-slate-500 rounded-lg ' placeholder='swapnil' type="text" /></div>
                  
                  </div>
                </div>
                <div  className='w-full my-6' >
                  <div className='flex  items-center gap-16 w-full'>

                  <div className='flex flex-col gap-2 text-slate-500' >
                    <span>old Password</span>
                    <input className='px-4 py-3 outline-none border bg-transparent border-slate-500 rounded-lg ' placeholder='swapnil' type="text" />
                  </div>
                  <div className='flex flex-col gap-2 text-slate-500'><span>new Password</span>
                   <div className='relative'> <input className='px-4 py-3 outline-none border bg-transparent border-slate-500 rounded-lg ' placeholder='swapnil' type="text" /><IoPencilOutline className='absolute top-[40%] right-2' /></div></div>
                  
                  </div>
                </div>
                <div  className='w-full' >
                  <div className='flex  items-center gap-16 w-full'>

                  <div className='flex flex-col gap-2 text-slate-500' >
                    <span>E-mail</span>
                   <div className='relative'> <input className='px-4 py-3 outline-none border bg-transparent border-slate-500 rounded-lg ' placeholder='swapnil' type="text" /><IoPencilOutline className='absolute top-[40%] right-2' /></div>
                  </div>
                  <div className='flex flex-col gap-2 text-slate-500'><span>Phone number</span>
                       <div className='relative'> <input className='px-4 py-3 outline-none border bg-transparent border-slate-500 rounded-lg ' placeholder='xxxx798' type="text" /><IoPencilOutline className='absolute top-[40%] right-2' /></div></div>
                  
                  </div>
                </div>

                <div className='mt-8'>
                  <button type='button' className='px-12 font-normal tracking-widest py-2 rounded-full  bg-sky-400 text-white'>
                    Save 
                  </button>
                  <button type='button' className='text-sky-400 ml-7'>Cancel</button>
                </div>
              </form>
            </div>
    </>
  )
}

export default AccountForm
