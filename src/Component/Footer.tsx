import {EnvironmentOutlined, SendOutlined}from '@ant-design/icons'
export const Footer = ()=>{
    return(
        <section id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                    <h4>Our Locations</h4>
                        <EnvironmentOutlined/> 63 Our first Location, Bustop, State <br/><br/>
                        <EnvironmentOutlined/> 65 Our Second Location, Bustop, State <br/>
                    </div>

                    <div className="col-md-4">
                        <h4>Contact Section</h4>
                        Phone No: <a href='tel:08026992881'>+234 802 699 2881</a><br/><br/>
                        Phone No: <a href='tel:08189042085'>+234 818 904 2085</a><br/><br/>
                        Email: <a href='#'>Blossomexampleemail@email.com</a>
                    </div>

                    <div className="col-md-4">
                        <h4>Quick Links</h4>
                        <a href='tel:08026992881'>Call us now: +234 818 904 2085 </a>
                        <br/> <br/>
                        <a href='#'>Send Us a message on Whatsapp <SendOutlined/></a><br/> <br/>
                        <a href='#'>Our Cakes</a>
                    </div>
                </div>
            </div>
        </section>
    )
}