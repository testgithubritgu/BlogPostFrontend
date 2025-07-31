import React, { useState } from 'react'
import axios from "axios"

import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CreateBlogPostFormData from './SubComponents/CreateBlogPostFormData';
const CreateBlogPost = () => {
  const [blogdata,setblogdata] = useState({})
  const navigat = useNavigate()

  //handle form submit
  const formOnSubmit = async (e)=>{
        e.preventDefault()
        const title = e.target.title.value
        const content = e.target.content.value    
        try {
          const result = await axios.post("https://blogpostbackend-v0uv.onrender.com/blog/post",blogdata,{headers:{"Content-Type":"multipart/form-data", "authorization":"Bearer "+localStorage.getItem("token")}})
          toast.success("Created successfully!!!", {position: "top-center",autoClose: 3000,hideProgressBar: false,pauseOnHover: true,draggable: true,})
          setTimeout(() => {
            navigat("/")
          }, 2000);
  } catch (error) {console.log(error)}}

  
return (
    <>
    <ToastContainer/>
      <form onSubmit={(e)=>formOnSubmit(e)} className='min-h-fit mt-2 rounded-lg '>
        <CreateBlogPostFormData blogdata={blogdata}  setblogdata={setblogdata}/>
      </form>
    </>
  )
}

export default CreateBlogPost
