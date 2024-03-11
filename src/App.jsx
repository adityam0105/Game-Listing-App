import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import { useEffect, useState } from 'react'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  const [theme,setTheme]=useState('light')
  useEffect(()=>{
    setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
  },[])
  return (
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
      <div className= {`${theme} ${theme=='dark'?'bg-[#040D12]':'bg-[#F8F6F4]'} min-h-[100vh]`}>
      <Header></Header>
      <Home></Home>
      </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
