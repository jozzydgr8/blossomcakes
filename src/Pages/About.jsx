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
                        <h4>Blossom cakes is Your Go-To for Delicious Cakes in Lagos</h4>
                        <p>
                        At Blossom Cakes, we offer a variety of freshly baked cakes in irresistible flavors such as vanilla, chocolate, butterscotch, strawberry, coconut, banana, Irish cream, and more.

                        Choose from different shapes, colors, sizes, and creative designs,
                        all tailored to your preferences to create the perfect cake for any occasion.
                         Our goal is to provide a personalized experience,
                        ensuring that every cake is a masterpiece for our valued customers.
                                                    
                        </p>
                        <br/>
                        <a href='https://wa.link/o2oy0h'><button className="btn btn-danger">Contact Us Now <SendOutlined/></button></a>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}