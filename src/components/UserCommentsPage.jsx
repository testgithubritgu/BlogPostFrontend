import React, { useContext, useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { MdDelete, MdDeleteForever, MdEdit } from "react-icons/md";

import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import UpdateBloge from "./SubComponents/UpdateBloge";
import UserCommentSubComponent from "./SubComponents/UserCompentSubComponent";
const UserCommentsPage = () => {
  const [showupdate, setshowupdate] = useState(false);
  const [getblogs, setgetblogs] = useState(null);
  const [checkAuthor,setcheckAuthor] = useState(false)
  const [textchange, settextchange] = useState("");
  const textareaRef = useRef(null);
  const textinputchange = (e) => {
    const val = e.target.value;
    setgetblogs((prev) => ({ ...prev, [e.target.name]: val }));
  };
  const handleinput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };
  const { id } = useParams();
  // const { checkBlogIsPostedByUser } = useContext(AppContext);
  const loggedUser = JSON.parse(localStorage.getItem("user"));

  const formOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.content.value);
  };
  useEffect(() => {
    const getblogdata = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/blog/getbyid/${id}`);
        setgetblogs(res.data.blogs);
        setcheckAuthor(res.data.blogs.author === loggedUser._id);
        settextchange(res.data.blogs.content);
      } catch (error) {
        console.log(error);
      }
    };
    getblogdata();
  }, []);
  return (
    <>
      {getblogs ? <UserCommentSubComponent getblogs={getblogs} checkAuthor={checkAuthor} setshowupdate={setshowupdate}  /> : (
        <>
          <div className="h-screen flex justify-center items-center ">
            <img src={assets.loadingGif} className="h-[70px]" alt="" />
          </div>
        </>
      )}
      {showupdate && <UpdateBloge getblogs={getblogs} setshowupdate={setshowupdate} textareaRef={textareaRef} handleinput={handleinput} settextchange={settextchange} textchange={textchange} />}
    </>
  );
};

export default UserCommentsPage;
