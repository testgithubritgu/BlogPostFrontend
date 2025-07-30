import React from 'react'
import CreateBlogNavigationBar from './BlogData/CreateBlogNavigationBar'
import AllBlogData from './BlogData/AllBlogData'

const BlogRoutes = () => {
  return (
    <div className='min-h-fit flex justify-between items-top flex-col '>
        <CreateBlogNavigationBar/>
        <AllBlogData/>
      
    </div>
  )
}

export default BlogRoutes
