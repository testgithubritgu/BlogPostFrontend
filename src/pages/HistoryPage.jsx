import { BsThreeDotsVertical } from "react-icons/bs";
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const HistoryPage = () => {
    const [userdata,setuserdata] = useState([])
    const [controllLoader,setcontrollLoader] = useState(true)
    const userId = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))._id
    const date = new Date()
    useEffect(()=>{
        const gethistory = async()=>{
          try{
              const res = await axios.get(`http://localhost:5001/blog/history/${userId}`)
            setuserdata(res.data.history || [])
            setcontrollLoader(false)
          }catch (er){
            console.log(er)
          }
        }
        gethistory()
    },[])

  return (
    
    <div className='h-fit  rounded-lg text-neutral-700 font-medium text-2xl  py-3 px-5 w-[1000px]  mx-auto  bg-stone-100 '>
{
    userdata.length >0 ? userdata.map((e,i)=>(
        <div  className="my-4 py-7 px-4 bg-stone-200 rounded-xl">
         <div className=''>
                <h1>{`${e[0].date === date.getDate()?"Today-":e[0].date === date.getDate()-1?"Yesterday-":""}${e[0].day} ${e[0].date},${e[0].year}  `}</h1>
        </div>
       {e.map((elm,idx)=>(
 <div  className='mt-4 text-neutral-500'>
            <div className='flex justify-between items-center' >
                <div className="flex gap-3">
                    <input className="w-6 h-6 border-2 border-gray-600 rounded text-green-600 accent-green-600" type="checkbox"  />
                <span className="text-sm ">{elm.minAndHr}</span>
                </div>
                <div>
                   <h1 className="text-sm "><Link  to={`/${elm.visitedURL.slice(22)}`}>{elm.visitedURL}</Link></h1>
                </div>
<BsThreeDotsVertical className="cursor-pointer"/>
            </div>
        </div>
       ))}

       </div>
    )):(<>
   <div className="my-4 py-7 px-4 bg-stone-200 rounded-xl">
            <div className="p-4 text-neutral-500">
                <h1 className="italic tracking-wider text-center">there is no history</h1>
            </div>
   </div>
    </>)
}

  

   
    </div>
  )
}

export default HistoryPage
