import React from 'react'
import { assets } from '../assets/assets'
const CreateBlogPost = () => {
    const formOnSubmit = (e)=>{
        e.preventDefault()
        console.log(e.target.content.value)
    }
  return (
    <>
      <form onSubmit={(e)=>formOnSubmit(e)} className='min-h-fit mt-2 rounded-lg '>
        <img src={assets.blog} className='h-[500px] w-full bg-cover rounded-xl object-cover' alt="" />
        <button type='button' className='py-2 px-4 cursor-pointer text-neutral-800 font-normal  bg-stone-400 rounded-full text-sm mt-2'>Add image</button>
        <input type="text" name='title' className='text-neutral-500 block  outline-none mx-auto border border-stone-200 rounded-xl px-3 py-2' placeholder='title' />
        <textarea name='content'  className='block text-neutral-500 w-full outline-none mx-auto border border-stone-200 rounded-xl px-3 py-2' placeholder='Tell Your Story' />
        <button type='submit' className='mx-auto block py-3 px-5  bg-blue-500 text-white rounded-lg mt-3 cursor-pointer'>publish</button>
      </form>
    </>
  )
}

export default CreateBlogPost
