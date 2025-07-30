import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { IoMdClose } from 'react-icons/io';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
const UpdateBloge = ({textareaRef,handleinput,settextchange,textchange,getblogs,setshowupdate}) => {
    const [blogdata,setblogdata] = useState({})
    const [handetitle,settitle] = useState(getblogs?.title)
        const [statusUpdate,setstatusUpdate] = useState(false)
    const {id} = useParams()
    const oninputchange = (e)=>{
        const val  = e.target.name === "file"? e.target.files[0]: e.target.value
        setblogdata(prev =>({...prev,[e.target.name]:val}))

    }
    const onformSubmit =async (e)=>{
            e.preventDefault()
            const title = e.target.title.value
            const content = e.target.content.value
            const fileData = e.target.file.files[0]
            //use this for multipartform data............
            const formData = new FormData()
            formData.append("title",title)
            formData.append("content",content)
            if(fileData){

                formData.append("file",fileData)
            }
       
            try {
                const responce = await axios.put(`http://localhost:5001/blog/update/${id}`,formData,{headers:{"Content-Type":"multipart/form-data","authorization":"Bearer "+localStorage.getItem("token")}})
                toast.success("update successfully",{position: "top-center",autoClose: 3000,hideProgressBar: false,pauseOnHover: true,draggable: true,})
                
                setTimeout(() => {
                setstatusUpdate(false)
                setshowupdate(false)
                window.location.reload()
                }, 2000);
            } catch (error) {
                setstatusUpdate(true)
            }
        }
  return (
    <>
    <ToastContainer/>
      <div className="fixed h-screen w-screen bg-black/20 top-0 right-0 left-0 bottom-0 backdrop-blur-sm  flex justify-center items-center">
          <form
          onSubmit={(e)=>onformSubmit(e)}
            action=""
            className="relative bg-white p-10 w-[70%] min-h-[70%] rounded-xl text-slate-500 "
          >
           {statusUpdate &&  <p className='text-red-500 text-center'>pls select any image😅*</p>}
            <IoMdClose onClick={()=>setshowupdate(false)} className="absolute right-4 text-xl font-semibold cursor-pointer top-4" />
            <h1 className="text-center font-blogFont text-4xl tracking-widest mb-3">
              blo<span className="text-orange-300">g</span>
            </h1>
            {/* <h1 className="text-center text-2xl text-neutral-700 font-medium">
                          {state}
                        </h1> */}
            <p className="text-sm text-center">
              Welcome back! if you want to update continue
            </p>

            <div className="border px-6 py-2 flex justify-center items-center gap-2 rounded-full mt-5">
              {/* <img src={assets.profile_icon} width={14} alt="" /> */}
              <input
                name="title"
                value={handetitle}
                onChange={(e)=>settitle(e.target.value)}
                className="text-sm outline-none text-center w-[500px]"
                type="text"
                placeholder=""
              />
            </div>
            <div className="border px-6 py-2 flex items-center gap-2 rounded-md mt-4">
              {/* <img src={assets.email_icon} width={14} alt="" /> */}
              <textarea
                name="content"
                ref={textareaRef}
                onInput={handleinput}
                onChange={(e) => settextchange(e.target.value)}
                value={textchange}
                className="text-sm outline-none w-full min-h-[50px] resize-none overflow-hidden"
                type="text"
                placeholder=""
              />
            </div>
            <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
              <img src={assets.lock_icon} width={14} alt="" />
              <input
                name="file"
                className="text-sm outline-none"
                type="file"
                placeholder=""
              />
            </div>
            {/* <p className="text-sm text-blue-600 mb-4 mt-1 cursor-pointer">
                          Forgot password?
                        </p> */}
            <button

              type="submit"
              className="w-full bg-blue-600 my-3 text-white py-2 rounded-full"
            >
              update
            </button>

            {/* <p  className="mt-5 text-center">
                            Don't have an account?{" "}
                            <span className="text-blue-600 cursor-pointer">Sign Up</span>
                          </p>
                    
                          <p  className="mt-5 text-center">
                            Already have an account?{" "}
                            <span className="text-blue-600 cursor-pointer">login</span>
                          </p> */}
          </form>
        </div>
    </>
  )
}

export default UpdateBloge
