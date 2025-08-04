import React, { useContext, useEffect, useState } from 'react'
import dummy from "../../assets/blog.jpg"
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { AppContext } from '../../context/AppContextProvider'
import { assets } from '../../assets/assets'
const AllBlogData = () => {
  const [handleloader,sethandleloader] = useState()
  const [userdata,setuserdata] = useState([])
 
    const loggedUser = JSON.parse(localStorage.getItem("user"))
  const {setcheckBlogIsPostedByUser,checkBlogIsPostedByUser} = useContext(AppContext)
  const navigat = useNavigate()
  const blogOnclickFunction = (e)=>{
        if(e.author === loggedUser._id){
          setcheckBlogIsPostedByUser(true)
        }else{
          setcheckBlogIsPostedByUser(false)
        }
        navigat(`/users_posts/${e._id}`)
  }
  useEffect(()=>{
    const getBolgesData = async ()=>{
      const res = await axios.get("https://blogpostbackend-v0uv.onrender.com/blog/get")
      sethandleloader("hidden")
      setuserdata(res.data.blog)
    }
    getBolgesData()
  },[])
  return (
    <div className='text-left relative  w-full flex justify-center sm:px-4 items-center flex-wrap gap-4' >
      {
        userdata && userdata.map((e,i)=>(
          <div key={i} onClick={()=>blogOnclickFunction(e)} className='p-2 min-h-[400px] cursor-pointer  w-[300px] text-neutral-500 border border-stone-200 rounded-lg  text-left hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-2xl'>
         
                <div className='mb-1 '>
                    <img src={`https://blogpostbackend-v0uv.onrender.com/images/${e.blogImage}`} className='h-[200px] w-full'  alt="" />
                </div>
               
                <h1 className='text-stone-700 text-center'>{e.categeries}</h1>
                <p className='text-left'>Author:{e.authorName}</p>
                <h1 className='text-stone-700 font-semibold text-lg my-2 '>{e.title?(e.title.length>40?e.title.slice(0,40)+"...":e.title):"swapnil"}</h1>
                <p className='mt-2 text-left'>
                    {e.content.length>60?e.content.slice(0,60)+"...":e.content}
                </p>
                </div>
        ))
      }
    <div className={`w-full ${handleloader} ` }>
      <img src={assets.penguin} className='h-[200px] mx-auto' alt="" />
    </div>
      

    </div>
  )
}

export default AllBlogData