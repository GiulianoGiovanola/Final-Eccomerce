import React from 'react'
import { Footer as ContainerFooter } from './styled';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png'
import Facebook from '../../img/icons8-facebook-rodeado-de-círculo.svg'
import Instagram from '../../img/icons8-instagram.svg'
import Whatsapp from '../../img/whatsapp_white_24dp.svg'
import Legal from '../../img/description_white_24dp.svg'
import Send from '../../img/local_shipping_white_24dp.svg'


const Footer = () => {
    return (
        <ContainerFooter>
            <div className="logo">
                <img className="logo" src={Logo} alt="imgLogo" />
            </div>
            <nav>
                <h3>Encontranos en</h3>
                <ul>
                    <li><Link to={`/facebook`}><img className="imgSociales"  src={Facebook} alt="imgFacebook" />Coffee Station</Link></li>
                    <li><Link to={`/instagram`}><img className="imgSociales"  src={Instagram} alt="imgInstagram" />CoffeeStation</Link></li>
                    <li><Link to={`/whatsapp`}><img className="imgSociales" src={Whatsapp} alt="imgWhatsapp" />+54 11 2345-6789</Link></li>
                </ul>
            </nav>
            <nav>
                <h3>Te puede interesar</h3>
                <ul>
                    <li><Link to={`/legales`}><img className="imgSociales" src={Legal} alt="imgLegal" />Legales</Link></li>
                    <li><Link to={`/envio`}><img className="imgSociales" src={Send} alt="imgSend" />Metodos de envío</Link></li>
                </ul>
            </nav>
        </ContainerFooter>
    )
}

export default Footer
