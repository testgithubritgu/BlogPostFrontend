import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLoginResister from './components/account/UserLoginResister'
import { AppContext } from './context/AppContextProvider'
import Navbar from './components/Navbar'
import CreateBlog from './pages/CreateBlog'
import UserPost from './pages/UserPost'
import Aboutme from './pages/Aboutme'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import Contact from './components/Contact'
import AddEmoji from './Emoji/AddEmoji'
import Notfound404 from './pages/Notfound404'
import HistoryPage from './pages/HistoryPage'
import Allblogs from './pages/Allblogs'
import BlogData from './components/BlogData/BlogData'
import MyBlogpost from './components/MyBlogpost'
import AcoountSetting from './components/account/AcoountSetting'
const App = () => {
  const { showLogin } = useContext(AppContext)
  const { showuseraccount, setshowuseraccount } = useContext(AppContext)
  return (
    <div className='px-4  relative sm:px-10 md:px-14 lg:px-16 min-h-screen bg-[rgb(243,255,249)]'>
      <Navbar />
      {showLogin && <UserLoginResister />}
      <div onClick={() => setshowuseraccount(false)}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user_blogs' element={<BlogData />} />
          <Route path='/user_create_blog' element={<CreateBlog />} />
          <Route path='/users_posts/:id' element={<UserPost />} />
          <Route path='/about' element={<Aboutme />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/myblogPost' element={<MyBlogpost />} />
          <Route path='/myaccountsetting' element={<AcoountSetting />} />
        {/* from s1 branch */}
        {/* from feature s4 */}
        {/* from feature main */}
          <Route path='*' element={<Notfound404 />} />
        </Routes>
        <AddEmoji />
        <Footer />
      </div>
    </div>
  )
}

export default App
