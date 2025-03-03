import { useState } from "react";
import { Cakes } from "../Data";
import {DownOutlined, UpOutlined} from '@ant-design/icons'


export const Product = ()=>{
    const [increase, setIncrease] = useState(false);
    const openCakes = ()=>{
        setIncrease(prev=> !prev)
    }
    var sliceValue = increase ? Cakes.length : 8
    return(
        <section>
            <div className="container-fluid">
                <h3 >Cakes</h3>
                <div className="productgrid">
                {
                    Cakes.slice(0,sliceValue).map((cake,index)=>(
                        <div key={index} >
                            <div  className="cakeDisplay" style={{background:`url(${cake.image})`, backgroundPosition:'center center', backgroundSize:'cover'}}>
                        </div>
                        <p>{cake.name}</p>
                        </div>
                        
                    ))
                }
                
                </div>
               {!increase ? <button onClick={openCakes} className="btn btn-danger">View More <DownOutlined/> </button> :<button onClick={openCakes} className="btn btn-danger">View Less <UpOutlined/> </button>}
                
            </div>
        </section>
    )
}