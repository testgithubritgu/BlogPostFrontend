import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateBlogNavigationBar = () => {
    const navigate = useNavigate()
    const categeries = [
        {name:"All categeries"},
        {name:"Music"},
        {name:"Movies"},
        {name:"Fashion"},
        {name:"Sports"},
        {name:"Tech"}
    ]
  return (
    <div className='flex flex-col items-center justify-between  gap-3 h-fit w-[20%]' >
      <button onClick={()=>navigate("/user_create_blog/")} className='py-2   bg-blue-500 px-16 rounded-2xl cursor-pointer text-white font-medium text-[18px] tracking-widest  hover:bg-blue-300 hover:text-blue-500 transition-all duration-300'>CREATE BLOG</button>
    <div className='flex w-full  flex-col justify-center items-start text-left   '>
        {
            categeries.map((e,i)=>(
                <button className='py-3 rounded-md w-full text-left px-3  border border-stone-300'>{e.name}</button>
            ))
        }
    </div>
    </div>
  )
}

export default CreateBlogNavigationBar
