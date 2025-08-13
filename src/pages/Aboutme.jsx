import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
const Aboutme = () => {
  const requrl = window.location.href
  const formdata = new FormData()
  formdata.append("requrl",requrl)
  const token = localStorage.getItem("token") && localStorage.getItem("token")
  useEffect(()=>{
      const addHistory = async ()=>{
        try {
            const res = await axios.post("https://blogpostbackend-v0uv.onrender.com/blog/allroutes",{requrl},{headers:{"authorization":"Bearer "+token}})
        } catch (error) {
          console.log(error)
        }
      }
      addHistory()
  },[])
  return (
    <div>
            <div className='relative overflow-hidden rounded-3xl my-[30px]'>
               <img src={assets.aboutme} alt=""   className=' w-full sm:h-[600px] bg-center object-cover' />
               <div className='absolute h-full w-full bg-black/50 top-0 left-0 '>
                {/* <h1 className='text-center text-stone-200 sm:text-[80px] text-[40px] tracking-widest'>blo<span className='text-orange-500' >g</span></h1>
               <p className='text-center text-neutral-300 font-thin '>Behind the Words</p> */}
               </div>
             </div>
             <br />
             <h1 className='text-4xl text-neutral-700 '>Swapnil, <span className='text-lg font-extralight '>Founder of this blog website</span></h1>
            <br />
            <p className='text-stone-700 font-blogFont'>
                Hello and welcome! i am <span className='font-semibold'>swapnil</span>, the founder and creator of this blog.
                <br />
                <br />
                I started this platform with a simple vision to share meaningful content, real experiences, and useful insights that can help, inspire, or connect with others. THis blog isnt just a website its a place where ideas meet action.
                <br />
                <br />
                Whether you are heare to learn  something new, get inspired or just explore a fresh Perspective, im glad you have found your way here.
            </p>
    </div>
  )
}

export default Aboutme
