    import {  createContext, useEffect, useState } from "react";

    export const LogContext=createContext()
    export function LogProvider({children}) {
        const [Log,setLog]=useState(null)
        useEffect(()=>{
            setLog(JSON.parse(localStorage.getItem("token")));
            
        },[]);
        // logout functon to clear state and lcalstorage
        const logout=()=>{
            setLog(null);
            
            localStorage.removeItem("token");
            
        };

    return(
        <LogContext.Provider value={{Log,setLog,logout}}>{children}</LogContext.Provider>
    );
    }