import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MdDelete, MdDeleteForever, MdEdit } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AppContext } from "../../context/AppContextProvider";

import LikeDislikes from "./LikeDislikes";
const UserCommentSubComponent = ({
  setshowupdate,
  checkAuthor,
  getblogs,
  setcheckAuthor,
}) => {
  const [comments, setcomments] = useState([]);
  const userName = JSON.parse(localStorage.getItem("user"));
  const [textfield,settextfield] = useState(false)
  const {isAdmin} = useContext(AppContext)


  // const deletcomment = async(i)=>{

  //   const res = await axios.delete(`https://blogpostbackend-v0uv.onrender.com/blog/deletcomments/${id}`,formdata,{headers:{"authorization":"Bearer "+localStorage.getItem("token")}})
  //   console.log(console.log(res))

  // }
  const navigat = useNavigate();
  const { id } = useParams();
  const deletPost = async () => {
    const reconfirm = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (reconfirm) {
      await axios.delete(`https://blogpostbackend-v0uv.onrender.com/blog/delet/${id}`, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      });
      toast.success("delete successfully", {
        position: "top-center",
        hideProgressBar: false,
        pauseOnHover: true,
      });
      setTimeout(() => {
          navigat(`/`)
       }, 1000);
    }
  };

  const getcomments = async (e) => {
    e.preventDefault();
    if((e.target.text.value).trim() === ''){
settextfield(true)

return
    }
    
    const text = e.target.text.value;
  const requrl = window.location.href
    try {
      const res = await axios.post(
        `https://blogpostbackend-v0uv.onrender.com/blog/addcomments/${id}`,
        { text ,requrl},
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      e.target.reset();
      window.location.reload()
      
      
    } catch (error) {
      console.log(error);
    }
  };
  const deletcomments = async (i) => {
    try {
      const res = await axios.delete(
        `https://blogpostbackend-v0uv.onrender.com/blog/deletcomments/${id}/${i}`,
        {
          headers: { "authorization": "Bearer " + localStorage.getItem("token") },
        }
      );
      navigat(`/users_posts/${id}`)
      window.location.reload()
     
    } catch (er) {
      alert("internal server error")
    }
  };

  useEffect(() => {
    const getcomments = async () => {
      try {
        const res = await axios.get(
          `https://blogpostbackend-v0uv.onrender.com/blog/comments/${id}`,
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setcomments(res.data.comment);
     
      } catch (er) {
        console.log(er);
      }
    };
    getcomments();
  }, []);
  return (
    <>
      <ToastContainer />
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

        {checkAuthor || isAdmin ? (
          <div className="w-full flex place-content-end my-4 space-x-3 text-3xl ">
            <MdEdit
              onClick={() => setshowupdate(true)}
              className="cursor-pointer"
            />
            <MdDeleteForever
              onClick={() => deletPost()}
              className="cursor-pointer text-red-500"
            />
          </div>
        ) : (
          ""
        )}
        <div className="flex">
          <p className="text-neutral-600 flex gap-4">
            {" "}
            <img
              src={`https://blogpostbackend-v0uv.onrender.com/images/${getblogs.blogImage}`}
              className="h-[480px] w-[400px] object-fill grayscale bg-cover rounded-xl "
              alt=""
            />
            {getblogs.content}{" "}
          </p>
        </div>
        <br />

        <LikeDislikes/>
        <form action="" onSubmit={(e) => getcomments(e)}>

          <textarea
            name="text"
            className={`font-mono text-sm block text-neutral-500 w-full outline-none mx-auto border ${textfield ? "border-red-500":"border-stone-500"} rounded-xl px-3 py-2`}
            placeholder="whats on your mind?"
          />
          <button
            type="submit"
            className="mx-auto block py-3 px-5 active:scale-[0.94] bg-blue-500 text-white rounded-lg mt-3 cursor-pointer"
          >
            add comment
          </button>
        </form>
        {comments.length >0 
          ? comments.map((elm, i) => (
              <div
                key={i}
                className="h-fit  bg-stone-200 rounded-2xl p-2 text-neutral-800 my-3"
              >
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">{elm.user}</span>
                  <span>{elm.Date.slice(0, 10)}</span>

                  {userName  ? (
                    userName.name === elm.user  || isAdmin? (
                      <MdDelete
                        onClick={() => deletcomments(i)}
                        className="text-red-700 cursor-pointer"
                      />
                    ) : (
                      "👍🏻"
                    )
                  ) : (
                    ""
                  )}
                </div>
                {elm.text}
              </div>
            ))
          : (<div className="h-fit text-center italic   bg-stone-200 rounded-2xl p-2 text-neutral-400 my-3">
            <p>Looks like no one has commented yet. Want to be the first?🥹</p>
          </div>)}
      </div>
    </>
  );
};

export default UserCommentSubComponent;
