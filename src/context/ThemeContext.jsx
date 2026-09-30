import { createContext, useState } from "react";

export const ThemeContext=createContext();

const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState(()=>{
        return localStorage.getItem("theme") || "light";
    })
   return(
    <ThemeContext.Provider>
        {children}
    </ThemeContext.Provider>
   )
}
export default ThemeProvider;