import {  createContext, useState } from "react";


export const AppContext = createContext()

const AppContextProvider =({children})=>{
    const token = localStorage.getItem("token")
    const [user,setuser] = useState(null)
    const [showLogin,setshowLogin]  = useState(token? false:true)
    return (
        <AppContext.Provider value={{ showLogin,setshowLogin ,user,setuser}}>
                {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider


