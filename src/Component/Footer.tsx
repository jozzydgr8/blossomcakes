import {EnvironmentOutlined, SendOutlined}from '@ant-design/icons';
import { WhatsAppOutlined } from '@ant-design/icons';
import { InstagramOutlined } from '@ant-design/icons';
import { FacebookOutlined } from '@ant-design/icons';
import { XOutlined } from '@ant-design/icons';
export const Footer = ()=>{
    return(
        <section id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                    <h4>Our Locations</h4>
                        <EnvironmentOutlined/> 63 Our first Location, Bustop, State <br/><br/>
                        <EnvironmentOutlined/> 65 Our Second Location, Bustop, State <br/><br/>
                    </div>

                    <div className="col-md-4">
                        <h4>Contact Section</h4>
                        Phone No: <a href='tel:08026992881'>+234 802 699 2881</a><br/><br/>
                        Phone No: <a href='tel:09114108461'>+234 911 410 8461</a><br/><br/>
                        Phone No: <a href='tel:08025590852'>+234 802 559 0852</a><br/><br/>
                        Email: <a href='#'>Blossomexampleemail@email.com</a><br/><br/>
                    </div>
                        
                    <div className="col-md-4">
                        <h4>Quick Links</h4>
                        <a href='tel:09114108561'>Call us now: +234 911 410 8561 </a>
                        <br/> <br/>
                        <a href='https://wa.link/o2oy0h'>Send Us a message on Whatsapp <SendOutlined/></a><br/> <br/>
                        <a href='#'>Our Cakes</a><br/><br/>
                    </div>
                </div>
                <br/> <br/>
                <div className='footer-icons'>
                    <a><WhatsAppOutlined/></a>
                    <a><InstagramOutlined/></a>
                    <a><FacebookOutlined/></a>
                    <a><XOutlined/></a>
                </div>
                <br/> <br/>
                <small>© Blossomcakes 2025</small>
            </div>
        </section>
    )
}