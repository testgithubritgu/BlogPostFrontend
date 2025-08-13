import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const LikeDislikes = () => {
    const [like,setlike] = useState(0)
    const {id} = useParams()
    const token = localStorage.getItem("token")
    const getlikes = async()=>{
        try {
            const response = await axios.put(`https://blogpostbackend-v0uv.onrender.com/blog/put/${id}`,null,{headers:{"authorization":"Bearer "+(token&& token)}})
            setlike(response.data.likes)
        } catch (error) {
            console.log(error)
         
        }
    }
    useEffect(()=>{
            getlikes()
    },[])
  return (<>

    <div className="text-3xl text-white flex justify-center my-2 mb-4 gap-7">
          
<div onClick={()=>getlikes()} className="flex items-center  bg-stone-400 cursor-pointer rounded-full py-2 px-4">

     <AiFillLike />
  <span>{like}</span>

 
</div>

<div className="flex items-center bg-red-400 cursor-pointer rounded-full py-2 px-4">

<AiFillDislike />
3
</div>
        </div>
        
        </>
  )
}

export default LikeDislikes
