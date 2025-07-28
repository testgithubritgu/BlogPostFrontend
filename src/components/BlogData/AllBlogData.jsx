import React from 'react'
import dummy from "../../assets/blog.jpg"
import { useNavigate } from 'react-router-dom'
const AllBlogData = () => {
  const navigat = useNavigate()
  return (
    <div className='  w-[100%] flex justify-start sm:px-4 items-center flex-wrap gap-4' >
      {
        Array(5).fill("").map((e,i)=>(
            <div onClick={()=>navigat(`/users_posts/${i}`)} className='min-h-[300px] cursor-pointer  w-[300px] text-neutral-500 border border-stone-200 rounded-lg  text-center'>
                <div className='mb-1'>
                    <img src={dummy} alt="" />
                </div>
                <h1 className='text-stone-700'>All</h1>
                <h1 className='text-stone-900 text-lg'>Testing Blog</h1>
                <p>Author:swapnil raut</p>
                <p className='mb-2'>
                    random text....
                </p>
                </div>
        ))
      }
    </div>
  )
}

export default AllBlogData
