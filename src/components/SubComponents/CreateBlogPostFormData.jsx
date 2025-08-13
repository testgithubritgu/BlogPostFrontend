import React, { useRef, useState } from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { assets } from '../../assets/assets'
import EmojiPicker from 'emoji-picker-react';
const CreateBlogPostFormData = ({setblogdata,border,setcontrolPublish,controlPublish}) => {
  const [imgcontroller,setimgcontroler] = useState(assets.blog)
  const [showImagePicker,setshowImagePicker] = useState(false)
  const [getImageData,setgetImageData] = useState([])

  const textareaRef = useRef(null);
  const onChangeinput = (e)=>{

          const val  =( e.target.name === "file")? e.target.files[0] : e.target.value
          setblogdata(prev => ({...prev,[e.target.name]:val}))
     const file = e.target.name === "file" && e.target.files[0]
     if(file){
     setimgcontroler(URL.createObjectURL(file))

     }
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";

        }
  return (
    <>
     <div className='md:w-[80%] w-screen  mx-auto  relative'>
       <img src={imgcontroller} className='md:h-[500px] h-[200px] md:w-full w-[100%]  bg-contain  rounded-xl object-fill' alt="" />
        <input type='file' onChange={(e)=>onChangeinput(e)} placeholder='' name='file' className='py-2 px-4  mx-auto block cursor-pointer text-neutral-800 font-normal  rounded-full text-sm mt-2'/>
    
          <div className={`flex items-center  bg-white border ${border ? "border-red-500":"border-stone-200" }  rounded-xl my-4`}>
          <input onChange={(e)=>onChangeinput(e)} type="text" name='title' className='text-neutral-500 block w-full my-1 outline-none mx-auto   rounded-xl px-3 py-2' placeholder='title' />
          <MdOutlineEmojiEmotions onClick={()=>setshowImagePicker(!showImagePicker)} className='text-[30px] text-orange-500  cursor-pointer mr-3' />
          </div>
          {showImagePicker &&  <div className='w-full flex justify-end absolute'>
            <EmojiPicker   height={300} width={500} />
          </div>}
            <textarea ref={textareaRef} onChange={(e)=>onChangeinput(e)} name='content'  className={`block text-neutral-500 w-full outline-none mx-auto border ${border ? "border-red-500":"border-stone-200" } rounded-xl px-3 py-2`} placeholder='Tell Your Story' />
        <button  type={`${controlPublish?"submit":"button"}`} className='mx-auto block py-3 px-5 min-h-12 min-w-44 bg-blue-500 text-white rounded-lg mt-3 cursor-pointer'>{controlPublish?"publish":<><img src={assets.loader} className='h-5 block mx-auto' alt="" /></>}</button>
     </div>
    
  
    </>
  )
}

export default CreateBlogPostFormData
