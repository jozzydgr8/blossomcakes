import { Dessert } from "../Component/Dessert"
import { Fondant } from "../Component/Fondant"
import { Wedding } from "../Component/Wedding"
import { Cakes } from "../Data"

export const Product = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h3 >Cakes</h3>
                <div className="productgrid">
                {
                    Cakes.map((cake,index)=>(
                        <div key={index} className="">
                            <div  className="cakeDisplay" style={{background:`url(${cake.image})`, backgroundPosition:'center center', backgroundSize:'cover'}}>
                            {/* <img src={cake.image} alt="cake images-cake"/> */}
                        </div>
                        <p>{cake.name}</p>
                        </div>
                        
                    ))
                }
                </div>
                
                {/* <Dessert/>
                <Wedding/>
                <Fondant/> */}
            </div>
        </section>
    )
}