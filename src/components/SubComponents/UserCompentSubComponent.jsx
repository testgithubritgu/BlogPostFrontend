import axios from 'axios'
import React from 'react'
import { MdDelete, MdDeleteForever, MdEdit } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const UserCommentSubComponent = ({setshowupdate,checkAuthor,getblogs}) => {
  const navigat = useNavigate()
  const {id} = useParams()
  const deletPost = async()=>{
  const reconfirm =  window.confirm("Are you sure you want to delete this blog?")
  if(reconfirm){
    await axios.delete( `http://localhost:5001/blog/delet/${id}`,{headers:{"authorization":"Bearer "+localStorage.getItem("token")}})
    toast.success("delete successfully",{position:"top-center",hideProgressBar:false,pauseOnHover:true})
    setTimeout(() => {
      navigat("/")
    }, 1000);
  }
  }
  return (
    <>
    <ToastContainer/>
     <div className="min-h-fit mt-2 rounded-lg ">
          <h1 className="text-center text-3xl font-semibold text-stone-800 my-3">
            {getblogs.title}
          </h1>
          <div className="flex my-4 justify-between text-neutral-400 font-blogFont items-center">
            <span>
              Author:{" "}
              <span className="text-stone-500">{getblogs.authorName}</span>
            </span>
            <span>{getblogs?.createdAt?.slice(0, 10)}</span>
          </div>

          {checkAuthor ? (
            <div className="w-full flex place-content-end my-4 space-x-3 text-3xl ">
              <MdEdit
                onClick={() => setshowupdate(true)}
                className="cursor-pointer"
              />
              <MdDeleteForever onClick={()=>deletPost()} className="cursor-pointer text-red-500" />
            </div>
          ) : (
            ""
          )}
          <div className="flex">
            <p className="text-neutral-600 flex gap-4">
              {" "}
              <img
                src={`http://localhost:5001/images/${getblogs.blogImage}`}
                className="h-[500px] w-[400px] object-fill grayscale bg-cover rounded-xl "
                alt=""
              />
              {getblogs.content}{" "}
            </p>
          </div>
          <br />
          <textarea
            name="content"
            className="font-mono text-sm block text-neutral-500 w-full outline-none mx-auto border border-stone-200 rounded-xl px-3 py-2"
            placeholder="whats on your mind?"
          />
          <button
            type="submit"
            className="mx-auto block py-3 px-5  bg-blue-500 text-white rounded-lg mt-3 cursor-pointer"
          >
            add comment
          </button>
          {Array(5)
            .fill("")
            .map(() => (
              <div className="h-fit  bg-stone-200 rounded-2xl p-2 text-neutral-800 my-3">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">
                    justin bieber {Date.now()}
                  </span>
                  <MdDelete className="text-stone-700 cursor-pointer" />
                </div>
                very nice blog
              </div>
            ))}
        </div>
    </>
  )
}

export default UserCommentSubComponent
