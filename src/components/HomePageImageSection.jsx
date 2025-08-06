import React from 'react'
import {assets} from '../assets/assets'
import {motion} from "motion/react"
const HomePageImageSection = () => {
  return (
      <motion.div
      initial={{ y:100,
        opacity:0.2
       }}
       whileInView={{ 
        y:0,
        opacity:1
        }}
        transition={{ duration:1,delay:0.2 }}
        viewport={{ once:true }}

      className='relative overflow-hidden rounded-3xl my-[30px]'>
         <img src={assets.openlaptop} alt=""   className=' w-full sm:h-[600px] bg-center object-fit' />
         <div className='absolute h-full w-full bg-black/50 top-0 left-0 '>
          <motion.h1 
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.5,duration:1 }}
          className='text-center text-stone-200 sm:text-[80px] text-[40px] tracking-widest'>blo<span className='text-orange-500' >g</span></motion.h1>
         <motion.p
         initial={{ opacity:0,y:100 }}
         animate={{ opacity:1,y:0 }}
         transition={{ delay:0.4,duration:0.6 }}
         className='text-center text-neutral-300 font-thin '>Behind the Words</motion.p>
         </div>
       </motion.div>
  )
}

export default HomePageImageSection
