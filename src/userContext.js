import React, { useState } from "react";
let UserContext= React.createContext();
export default UserContext;

//This will provide data to all its childrens
export const  UserProvider =({children})=>{
    let [userList,setuserList]=useState([])
    return <UserContext.Provider value={{userList,setuserList}}>
        {children}
    </UserContext.Provider>
}