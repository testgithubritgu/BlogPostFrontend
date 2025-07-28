import React from 'react'
import { assets } from '../assets/assets'
import { MdDelete } from "react-icons/md";
const UserCommentsPage = () => {
    const formOnSubmit = (e)=>{
        e.preventDefault()
        console.log(e.target.content.value)
    }
  return (
    <>
      <div className='min-h-fit mt-2 rounded-lg '>
        <img src={assets.blog} className='h-[500px] w-full bg-cover rounded-xl object-cover' alt="" />
       <h1 className='text-center text-3xl font-semibold text-stone-500 my-3'>This is music Blog</h1>
       <div className='flex justify-between text-neutral-400 font-blogFont items-center'>
        <span >Author: <span>swapnil</span></span>
        <span>{Date.now()}</span>
       </div>
       <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, minus id nesciunt deserunt minima recusandae reprehenderit sit laudantium debitis beatae? Labore laudantium praesentium delectus, cum quia dolorem cumque porro adipisci.</p>
       </div>
       <br />
        <textarea name='content'  className='font-mono text-sm block text-neutral-500 w-full outline-none mx-auto border border-stone-200 rounded-xl px-3 py-2' placeholder='whats on your mind?' />
        <button type='submit' className='mx-auto block py-3 px-5  bg-blue-500 text-white rounded-lg mt-3 cursor-pointer'>add comment</button>
        {
          Array(5).fill("").map(()=>(
            <div className='h-fit w-full bg-stone-200 rounded-2xl p-2 text-neutral-800 my-3'>
            <div className='flex justify-between items-center'>
                <span className='text-neutral-500'>justin bieber {Date.now()}</span>
            <MdDelete className='text-stone-700 cursor-pointer' />
            </div>
          
            very nice blog
        </div>
          ))
        }
      </div>
    </>
  )
}

export default UserCommentsPage