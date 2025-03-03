import { About } from "./Pages/About"
import { Header } from "./Pages/Header"
import { Product } from "./Pages/Product"
import { Slogan } from "./Pages/Slogan"
import { Contact } from "./Component/Contact"
export const Home = ()=>{
    return(
        <>
        <Slogan/>
        <Header/>
        <Contact/>
        <Product/>
        <About/>
        </>
    )
}