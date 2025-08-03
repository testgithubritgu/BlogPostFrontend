import {  createContext, useState } from "react";


export const AppContext = createContext()

const AppContextProvider =({children})=>{
    const token = localStorage.getItem("token")
    const checkrole =  JSON.parse(localStorage.getItem("user"))
    const [showuseraccount,setshowuseraccount] =useState(false)
    const [userName,setuserName] = useState(checkrole? checkrole.name:"")
        const [user,setuser] = useState(null)
    const [isAdmin,setisAdmin] = useState(checkrole && checkrole.role ==="admin")

    const [showLogin,setshowLogin]  = useState(token? false:true)
    const [checkBlogIsPostedByUser,setcheckBlogIsPostedByUser] = useState(false)
    return (
        <AppContext.Provider value={{ showLogin,setuserName,userName,setshowuseraccount,showuseraccount,isAdmin,setshowLogin ,user,setuser,checkBlogIsPostedByUser,setcheckBlogIsPostedByUser}}>
                {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider


