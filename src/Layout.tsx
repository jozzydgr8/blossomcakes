import { Outlet } from "react-router-dom"
import { Footer } from "./Component/Footer"
import Navbar from "./Component/Navbar"


export const LayOut = ()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <a className='whatsappIcon' href='https://wa.link/o2oy0h' target='_blank'>
        <img src='https://cdn-icons-png.flaticon.com/128/3670/3670051.png' />
        </a>
        </>
    )
}