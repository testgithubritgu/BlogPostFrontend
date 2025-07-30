import React, { useState } from 'react'
import { assets } from '../../assets/assets'
const CreateBlogPostFormData = ({setblogdata}) => {
  const [imgcontroller,setimgcontroler] = useState(assets.blog)
  const onChangeinput = (e)=>{
          const val  =( e.target.name === "file")? e.target.files[0] : e.target.value
          setblogdata(prev => ({...prev,[e.target.name]:val}))
        }
  return (
    <>
     <div className='md:w-[80%] w-screen  mx-auto '>
       <img src={imgcontroller} className='md:h-[500px] h-[200px] md:w-full w-[100%]  bg-cover rounded-xl object-cover' alt="" />
        <input type='file' onChange={(e)=>onChangeinput(e)} placeholder='' name='file' className='py-2 px-4  mx-auto block cursor-pointer text-neutral-800 font-normal  rounded-full text-sm mt-2'/>
        <input onChange={(e)=>onChangeinput(e)} type="text" name='title' className='text-neutral-500 block w-full my-3 outline-none mx-auto border border-stone-200 rounded-xl px-3 py-2' placeholder='title' />
        <textarea onChange={(e)=>onChangeinput(e)} name='content'  className='block text-neutral-500 w-full outline-none mx-auto border border-stone-200 rounded-xl px-3 py-2' placeholder='Tell Your Story' />
        <button type='submit' className='mx-auto block py-3 px-5  bg-blue-500 text-white rounded-lg mt-3 cursor-pointer'>publish</button>
     </div>
    
  
    </>
  )
}

export default CreateBlogPostFormData
