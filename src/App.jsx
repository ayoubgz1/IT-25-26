import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import { timeContext } from './timeContext.jsx'
import { useState } from 'react'
import Snackbars from './Snackbars.jsx'
import  { CursorProvider, Cursor, CursorFollow } from './components/animate-ui/components/animate/cursor.jsx'
import {HexagonBackground} from './components/animate-ui/components/backgrounds/hexagon.jsx'
import Footer from './Footer'
function App() {
const [open, setOpen] =useState(false);
const[cursorText,setCursorText]=useState('MAWAKIT')
const [timeList, setTime] = useState({
    Fajr:'4:30',
    Dhuhr:'12:45',
    Asr:'16:26',
    Maghrib:'19:27',
    Isha:'20:55',
});






  return (
    
    <>
    <HexagonBackground />



     <timeContext.Provider value={{timeList,setTime}}>
     <Navbar open={open} setOpen={setOpen} setCursorText={setCursorText} />
     <Hero  setCursorText={setCursorText}/>
     </timeContext.Provider>
    <Snackbars open={open} setOpen={setOpen}  />

    <CursorProvider>
    <Cursor />
    <CursorFollow>{cursorText}</CursorFollow>
    </CursorProvider>

    <Footer setCursorText={setCursorText}/>
    </>
  )
}

export default App
