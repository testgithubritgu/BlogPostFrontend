import React from 'react'
import {assets} from '../assets/assets'
const HomePageImageSection = () => {
  return (
      <div className='relative overflow-hidden rounded-3xl my-[30px]'>
         <img src={assets.openlaptop} alt=""   className=' w-full sm:h-[600px] bg-center object-fit' />
         <div className='absolute h-full w-full bg-black/50 top-0 left-0 '>
          <h1 className='text-center text-stone-200 sm:text-[80px] text-[40px] tracking-widest'>blo<span className='text-orange-500' >g</span></h1>
         <p className='text-center text-neutral-300 font-thin '>Behind the Words</p>
         </div>
       </div>
  )
}

export default HomePageImageSection
