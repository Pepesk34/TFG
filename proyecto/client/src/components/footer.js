import React from 'react';
import './cabecera.css';
import twitter from "./imagenes/twitter.png";
import youtube from "./imagenes/youtube.png";
import instagram from "./imagenes/instagram.png";
const Footer = () => {
    return (
        <div>
            <div id="filaFooter" class="row">
                <div class="col-xl-6">
                    <div id="contactos" >
                        <h5>Contactos</h5>
                        <h6>
                            <br/>
                            <ul class="list-unstyled">
                                <li>+34 644 98 04 84</li>
                                <li>greenboydhouse@gmail.com</li>
                            </ul>
                        </h6>


                    </div>
                </div>
                <div class="col-xl-6">
                    <div id="redes">
                        <h5>Siguenos</h5>
                        <h6>
                            <br />
                            
                                <div id="iconos">
                                <a href='https://twitter.com/HouseBoyd61754'><img id="twitter" src={twitter}></img></a>
                                <a href='https://www.youtube.com/channel/UCtu69_nm6WnRX64XQRFvwaQ'><img id="youtube" src={youtube}></img></a>
                                <img id="instagram" src={instagram}></img>
                                </div>
                            
                        </h6>


                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;