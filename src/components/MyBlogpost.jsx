import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets";

const MyBlogpost = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [myBlogs, setmyBlogs] = useState([]);
  const blogData = (blogId)=>{
navigate(`/users_posts/${blogId}`)
  }
  useEffect(() => {
    async function getMyBlogs() {
    try {
        const res = await axios.post(
          `https://blogpostbackend-v0uv.onrender.com/blog/userblogs`,
          null,
          {
            headers: {
              authorization:
                "Bearer " +
                (localStorage.getItem("token") &&
                  localStorage.getItem("token")),
            },
          }
        );
        setmyBlogs(res.data.myblogs[0].blg);
    } catch (error) {
        console.log('error in blogposts')
    }
   
    }
    getMyBlogs();
  }, []);
  return (
    <>
      <div className="min-h-fit w-full py-7 px-12 bg-white my-8">
       <div className="min-w-fit min-h-fit">
        <h1 className="text-center text-4xl my-3 text-neutral-600 font-blogFont">My Blogs😎</h1>
         {myBlogs.length > 0
          ? myBlogs.map((e, i) => (
              <div onClick={()=>blogData(e._id)} className="h-fit  cursor-pointer hover:scale-[1.005] transition-all duration-100 bg-stone-100 w-[60%] py-4 px-9 mx-auto flex gap-3 my-4  rounded-2xl border border-stone-700">
                <img src={`https://blogpostbackend-v0uv.onrender.com/images/${e.blogImage}`} alt="" className="rounded-2xl h-24 grayscale-0 w-40" />
                <div>
                  <h1>title:-{e.title}</h1>
                  <h1>content:- {e.content.length>40?e.content.slice(0,80)+".....":e.content}</h1>
                </div>
              </div>
            ))
          : ""}
       </div>
      </div>
    </>
  );
};

export default MyBlogpost;
