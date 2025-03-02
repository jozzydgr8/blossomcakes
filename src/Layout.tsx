import { Contact } from "./Component/Contact"
import { Footer } from "./Component/Footer"
import Navbar from "./Component/Navbar"
import { About } from "./Pages/About"
import { Header } from "./Pages/Header"
import { Product } from "./Pages/Product"

export const LayOut = ()=>{
    return(
        <>
        <Navbar/>
        <Header/>
        <Contact/>
        <Product/>
        <About/>
        <Footer/>
        </>
    )
}