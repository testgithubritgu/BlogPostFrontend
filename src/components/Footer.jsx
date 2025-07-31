import React from 'react'
import git from "../assets/github.png"
import linkdin from "../assets/linkdin.png"
import phone from "../assets/profile_icon.png"
export default function Footer() {
  return (
    <>
      <div className="text-center text-sm text-gray-700 bg-slate-100 mt-6 pt-24 min-h-[400px] ">
  <p className='text-sm my-4'>👨‍💻 Built with passion by <span className="font-semibold text-xl text-gray-700">Swapnil</span></p>
  <p>🚀 Sharing my web development journey, tips, and projects — one line of code at a time.</p>
  <p className="mt-2">&copy; {new Date().getFullYear()} Code with Swapnil. All rights reserved.</p>
  <div className="flex justify-center gap-4 mt-10">
  <a href="https://github.com/testgithubritgu" target="_blank" className="hover:text-blue-500 "><img src={git} className='h-11 ' alt="" /></a>
  <a href="https://www.linkedin.com/in/swapnil12/" target="_blank" className="hover:text-blue-500"><img src={linkdin} className='h-11' alt="" /></a>
  <a href="/contact" className="hover:text-blue-500"><img src={phone} className='h-11' alt="" /></a>
</div>
</div>
    </>
  )
}
