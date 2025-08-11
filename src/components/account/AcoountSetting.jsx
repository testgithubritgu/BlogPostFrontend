import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { CgProfile } from 'react-icons/cg';
import { FaLock } from 'react-icons/fa';
import { IoPencilOutline } from 'react-icons/io5';
import AccountForm from './subComponentsOfAccount/AccountForm';

const AcoountSetting = () => {
  const [components,setcomponents] = useState("Account Setting")
  const settingMenu = [
    {icon:<IoMdSettings className='text-1xl ' />,settingName:"Account Setting",},
    {icon:<CgProfile className='text-1xl ' />,settingName:"Personal information"},
    {icon:<FaLock className='text-1xl ' />,settingName:" Privacy"},
    {icon:<IoIosNotifications className='text-1xl ' />,settingName:"Notification"},
  ]
  
  return (
    <>
    <div className='min-h-[80vh] relative my-8 flex items-center justify-center object-cover  bg-gray-200 rounded-2xl '>
        <div>
          <img src={assets.blogpen} className='h-[80vh] w-[100vw] object-fill'  alt="" />
        </div>
      <div className='absolute h-full w-full flex justify-center items-center rounded-lg top-0 left-0 bottom-0 bg-black/50 backdrop-blur-sm'>
          <div className='h-[80%] flex items-center  relative w-[80%] rounded-lg backdrop-blur-xl bg-white/80'>
          <div className=' bg-gray-400/75 h-full w-[400px]'>

                  <div className='min-h-fit w-full flex flex-col justify-center items-center py-[50px] gap-3  '>
                    <img src={assets.dummy} className='h-32 rounded-full' alt="" />
                    <h1 className='font-blogFont  text-neutral-900 '>swapnil raut</h1>
                  </div>
                  <div className='min-h-fit  px-6 text-slate-500 '>
                   
                    {
                      settingMenu?.map((e,i)=>(
                           <div onClick={()=>setcomponents(e.settingName)} className=' my-5 flex  items-center hover:text-blue-200 transition-all active:text-blue-200 duration-300 cursor-pointer  gap-5'>{e.icon}{e.settingName}</div>
                      ))
                    }
                  </div>
          </div>
          {components==="Account Setting"?<AccountForm/>:<div className='px-5'><h1 className='text-center'>Comming soon....🫠</h1></div>}

          </div>
          
      </div>

    </div>

    </>
  )
}

export default AcoountSetting
