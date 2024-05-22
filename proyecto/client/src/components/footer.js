import React from 'react';
import './estilo.css';
import twitter from "./imagenes/twitter.png";
import youtube from "./imagenes/youtube.png";
import instagram from "./imagenes/instagram.png";

const Footer = () => {
    return (
        <div>
            <div id="filaFooter" className="row">
                <div className="col-xl-6">
                    <div id="contactos" >
                        <h5>Contactos</h5>
                        <h6>
                            <br/>
                            <ul className="list-unstyled">
                                <li>+34 644 98 04 84</li>
                                <li>greenboydhouse@gmail.com</li>
                            </ul>
                        </h6>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div id="redes">
                        <h5>Siguenos</h5>
                        <h6>
                            <br />
                            <div id="iconos">
                                <a target='blank' href='https://twitter.com/HouseBoyd61754'><img id="twitter" src={twitter} alt="twitter" /></a>
                                <a target='blank' href='https://www.youtube.com/channel/UCtu69_nm6WnRX64XQRFvwaQ'><img id="youtube" src={youtube} alt="youtube" /></a>
                                <a target='blank'><img id="instagram" src={instagram} alt="instagram" /></a>
                            </div>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
