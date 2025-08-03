import React from 'react'
import {assets} from "../assets/assets"
import { Link } from 'react-router-dom'
const Notfound404 = () => {
  return (
    <div className='h-fit  bg-white w-full relative'>
        <img src={assets.cavman} className='h-[700px] mx-auto  block  '  alt="" />

        <div className=' absolute top-0 bottom-0 left-0 right-0'>
        <h1 className='text-9xl text-center mt-3 '>404</h1>

              <div className='absolute top-[80%] text-center w-full'>
                  <h1 className='   tracking-widest font-blogFont text-5xl  text-neutral-500 '>Look's like you're lost </h1>
                    <p className='text-neutral-500 text-sm mt-2'>the page you are looking is not found</p>
                    <button className='text-4xl  mt-4 cursor-pointer '><Link to={"/"}>🏡</Link></button>
              </div>

        </div>
    </div>
  )
}

export default Notfound404
