import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContextProvider'

const CreateBlogNavigationBar = () => {
  const [check,setcheck] = useState(0)
    const navigate = useNavigate()
    const {showLogin} = useContext(AppContext)
    const categeries = [
        {name:"All categeries"},
        {name:"Music"},
        {name:"Movies"},
        {name:"Fashion"},
        {name:"Sports"},
        {name:"Tech"}
    ]
  return (
    <div className='flex bg-green-100 py-4 my-4 flex-col items-center justify-between  gap-3 h-fit w-full' >
      <button onClick={()=>navigate("/user_create_blog/")} className='py-2   bg-blue-500 px-16 rounded-2xl cursor-pointer text-white font-medium text-[18px] tracking-widest  hover:bg-blue-300 hover:text-blue-500 transition-all duration-300'>CREATE BLOG📝</button>
    <div className='flex justify-center gap-2 w-full  items-start text-left   '>
        {
            categeries.map((e,i)=>(
                <button key={i} onClick={(e)=>setcheck(i)} className={`py-3 max-w-[200px] rounded-md w-full text-left px-3  border border-stone-300 ${check === i?"bg-blue-500 text-white":""} transition-all duration-300 hover:bg-blue-500 hover:text-white`}>{e.name}</button>
            ))
        }
    </div>
    {/* <div  className='h-[1px] cursor-pointer w-full bg-black'></div> */}
    </div>
  )
}

export default CreateBlogNavigationBar
