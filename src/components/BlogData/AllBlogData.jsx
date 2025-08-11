import React, { useContext, useEffect, useRef, useState } from 'react'
import dummy from "../../assets/blog.jpg"
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import axios from 'axios'
import { AppContext } from '../../context/AppContextProvider'
import { assets } from '../../assets/assets'
import CreateBlogNavigationBar from './CreateBlogNavigationBar'

//Swiper js
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AllBlogData = () => {
  const [filteredData, setFilteredData] = useState([])
    const prevRef =useRef(null)
  const nextRef =useRef(null)
  const {setblogs,blogs,filterName} = useContext(AppContext)
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
    // const requrl = window.location.href
    // const token  = localStorage.getItem("token")&& localStorage.getItem("token")
    const getBolgesData = async ()=>{
      const res = await axios.get("http://localhost:5001/blog/get")
      // const addhistory = await axios.post("https://blogpostbackend-v0uv.onrender.com/blog/allroutes",{requrl},{headers:{"authorization":"Bearer "+token}})
      sethandleloader("hidden")
      setuserdata(res.data.blog)
     setFilteredData(res.data.blog)
        if(filterName !== "All categeries"){
          
          setblogs(res.data.blog.filter(e=>e.categeries===filterName))
        }
        
      }
      getBolgesData()
    },[])
    useEffect(()=>{
      if (filterName !== "All categeries") {
    setFilteredData(userdata.filter(e => e.categeries === filterName));
  } else {
    setFilteredData(userdata);
  }
    },[filterName,userdata])

    // console.log(blogs)
    // console.log(filterName)
  return (
    <div className='text-left relative  w-full flex justify-center sm:px-4 items-center flex-wrap gap-4' >
      <CreateBlogNavigationBar/>
       <div
    ref={prevRef}
    className="absolute top-1/2  md:-left-[30px] sm:-left-[30px] hidden sm:block  transform -translate-y-1/2 z-50 cursor-pointer text-6xl text-neutral-500 hover:text-blue-700 transition"
  >
    ❮
  </div>

  {/* Right Arrow */}
  <div
    ref={nextRef}
    className="absolute top-1/2  md:-right-[50px] sm:-right-[50px] hidden sm:block  transform -translate-y-1/2 z-50 cursor-pointer  text-neutral-500 text-6xl hover:text-blue-700 transition"
  >
    ❯
  </div>
      <Swiper  key={filterName}  modules={[Navigation,Pagination]}

        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        onInit={(swiper)=>{
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()

        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 5 },
        }}>

   
      {
        filteredData && filteredData.map((e,i)=>(
          <SwiperSlide key={i} className='py-9 !w-auto'>
          <div key={i} onClick={()=>blogOnclickFunction(e)} className='p-2 min-h-[400px] cursor-pointer max-w-[300px] mx-auto  w-[300px] text-neutral-500 border border-stone-200 rounded-lg  text-left hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-2xl'>
         
                <div className='mb-1 '>
                    <img src={`http://localhost:5001/images/${e.blogImage}`} className='h-[200px] w-full'  alt="" />
                </div>
               
                <h1 className='text-stone-700 text-center'>{e.categeries}</h1>
                <p className='text-left'>Author:{e.authorName}</p>
                <h1 className='text-stone-700 font-semibold text-lg my-2 '>{e.title?(e.title.length>40?e.title.slice(0,40)+"...":e.title):"swapnil"}</h1>
                <p className='mt-2 text-left'>
                    {e.content.length>60?e.content.slice(0,60)+"...":e.content}
                </p>
                </div>
                </SwiperSlide>
        ))
      }
         </Swiper>
    <div className={`w-full ${handleloader} ` }>
      <img src={assets.penguin} className='h-[200px] mx-auto' alt="" />
    </div>
      

    </div>
  )
}

export default AllBlogData