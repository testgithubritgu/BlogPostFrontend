import React from 'react'

import HomePageImageSection from '../components/HomePageImageSection'
import BlogRoutes from '../components/BlogRoutes'
import Costomers from "../components/Costomers"
import AllBlogData from '../components/BlogData/AllBlogData'

const Home = () => {
  return (
    <div className='min-h-screen '>
      
      
     <HomePageImageSection/>
      {/* <BlogRoutes/> */}
      <div className='mt-14'></div>
      <AllBlogData/>


<Costomers/>
    </div>
  )
}

export default Home
