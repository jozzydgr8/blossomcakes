import { SendOutlined } from "@ant-design/icons"

export const About = ()=>{
    return(
        <section id="about">
            <div className="container-fluid">
                <h3>About</h3>
                <div className="row" style={{margin:'0'}}>
                    <div className="col-md-6 cakeBackground aboutgrid">

                    </div>
                    <div className="col-md-6 aboutgrid"style={{color:'white',padding:'3%',background:'black', display:"flex", gap:'20px', justifyContent:'center', flexDirection:'column'}}>
                        <h4>Blossom cakes is your number one plug for cakes in Ajah</h4>
                        <p>
                            At Blossom cakes we offer an array of freshly baked cakes,
                            with various flavor such as vanilla, chocolate, butterscotch, strawberry,
                            cocunut, banana, Irish cream, and more.
                            We provide the option of choosing from different shapes, colors, sizes,
                            characters and creative designs, tailored to meet the unique needs of our
                            esteemed customers. 
                            
                        </p>
                        <br/>
                        <button className="btn btn-lg btn-danger">Contact Us Now <SendOutlined/></button>
                    </div>
                </div>
            </div>
        </section>
    )
}