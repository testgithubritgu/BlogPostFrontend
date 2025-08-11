import React, { useState } from 'react'
import axios from "axios"

import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CreateBlogPostFormData from './SubComponents/CreateBlogPostFormData';
const CreateBlogPost = () => {
  const [blogdata,setblogdata] = useState({})
  const [border,setborder] = useState(false)
  const navigat = useNavigate()
  const  [controlPublish,setcontrolPublish] = useState(true)
  //handle form submit
  const formOnSubmit = async (e)=>{
    
        e.preventDefault()
        if(e.target.title.value === "" || e.target.content.value === "" || e.target.file === ""){
          if(e.target.file.files.length === 0){
            toast.warning("image😅 required")
             setcontrolPublish(true)
            return 
          }
    
          if(e.target.file === ""){
            toast.warning("image😅 required")
             setcontrolPublish(true)
            return
          }
            setborder(true)
            return
        }
          const formData = new FormData()
          formData.append("title",blogdata.title)   
          formData.append("content",blogdata.content)   
          formData.append("file",blogdata.file)   
               formData.append("requrl",window.location.href)
        try {
          setcontrolPublish(false)
          const result = await axios.post("http://localhost:5001/blog/post",formData,{headers:{"Content-Type":"multipart/form-data", "authorization":"Bearer "+localStorage.getItem("token")}})
         setcontrolPublish(true)
          toast.success("Created successfully!!!", {position: "top-center",autoClose: 3000,hideProgressBar: false,pauseOnHover: true,draggable: true,})
         setcontrolPublish(true)
          setTimeout(() => {
            navigat("/")
          }, 2000);
  } catch (error) {console.log(error)}}

  
return (
    <>
    <ToastContainer/>
      <form onSubmit={(e)=>formOnSubmit(e)} className='min-h-fit mt-2 rounded-lg '>
        <CreateBlogPostFormData controlPublish={controlPublish} setcontrolPublish={setcontrolPublish} border={border} blogdata={blogdata}  setblogdata={setblogdata}/>
      </form>
    </>
  )
}

export default CreateBlogPost
