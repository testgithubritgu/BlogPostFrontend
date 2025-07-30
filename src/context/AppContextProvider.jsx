import {  createContext, useState } from "react";


export const AppContext = createContext()

const AppContextProvider =({children})=>{
    const token = localStorage.getItem("token")
    const [user,setuser] = useState(null)
    const [showLogin,setshowLogin]  = useState(token? false:true)
    const [checkBlogIsPostedByUser,setcheckBlogIsPostedByUser] = useState(false)
    return (
        <AppContext.Provider value={{ showLogin,setshowLogin ,user,setuser,checkBlogIsPostedByUser,setcheckBlogIsPostedByUser}}>
                {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider


