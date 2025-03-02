import { Contact } from "./Component/Contact"
import { Footer } from "./Component/Footer"
import Navbar from "./Component/Navbar"
import { About } from "./Pages/About"
import { Header } from "./Pages/Header"
import { Product } from "./Pages/Product"
import { Slogan } from "./Pages/Slogan"

export const LayOut = ()=>{
    return(
        <>
        <Navbar/>
        <Slogan/>
        <Header/>
        <Contact/>
        <Product/>
        <About/>
        <Footer/>
        <a className='whatsappIcon' href='https://wa.link/o2oy0h' target='_blank'>
        <img src='https://cdn-icons-png.flaticon.com/128/3670/3670051.png' />
        </a>
        </>
    )
}