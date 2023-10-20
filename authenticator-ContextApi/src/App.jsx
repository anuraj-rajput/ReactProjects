import UserContextProvider from "./context/UserContexProvider"
import Login from "./components/login"
import Profile from "./components/profile"  
import Card from "./components/Card"
import { Themeprovider, } from "./context/theme";
import { useEffect, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";



function App() {

  const [themeMode, setThemeMode] = useState("light")
  
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => { 
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])
 
  return (
    <>
      <Themeprovider value={{themeMode,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
            <ThemeBtn/>
            <div className="w-full max-w-sm mx-auto"></div>
            <Card/>
          </div>
        </div>
      </Themeprovider>
    </>
  );
}

export default App
