import {ForkOutlined} from '@ant-design/icons';
import heartIcon from '../assets/hearticon.png';
import priceTag from '../assets/pricetag.png';
import chefIcon from '../assets/cheficon.png'
const divStyle = {display:'flex', alignItems:'center', gap:'10px'}
export const Header:React.FC = ()=>{
    return(
        <section id="header-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className='divStyle'>
                            <img className='chefIcon' src={chefIcon} alt='chef icon'/>
                        <div >
                           
                            <h4> Exquisite Ingredients</h4>
                        
                        <p>
                        We use only the freshest, refined Ingredients
                        to ensure rich flavors and a moist texture in every
                        bite. No shortcuts-just pure, delicious goodness.
                        </p>
                        </div>
                        
                    </div>
                        </div>
                        
                    <div className="col-md-4">
                        <div className='divStyle'>
                        <img src={heartIcon} className='header-icons' alt='heart icon personal touch'/>
                        <div>
                            <h4>Personalised Touch</h4>
                            <p>
                            Personalized cakes tailored to your taste, theme,
                            and special occasions.
                            From elegant wedding cakes to fun birthday designs, We bring your
                            vision to life.
                            </p>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className='divStyle'>
                            <img className='header-icons'  src={priceTag} alt='price tag'/>
                            <div>
                                <h4>Affordable Pricing</h4>
                                <p>
                                Luxurious cakes at affordable prices offering excellent value for your money.
                                </p>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}