import React from 'react';
import './estilos/footer-estilo.css';
import twitter from "./imagenes/twitter.png";
import youtube from "./imagenes/youtube.png";
import instagram from "./imagenes/instagram.png";
const Footer = () => {
    return (
        <div className='container'>
            <div id="filaFooter" class="row">
                <div class="col-xl-6">
                    <div >
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
                    <div>
                        <h5>Siguenos</h5>
                        <h6>
                            <br />
                                <div >
                                <a target='blank' href='https://twitter.com/HouseBoyd61754'><img id="twitter" src={twitter}></img></a>
                                <a target='blank' href='https://www.youtube.com/channel/UCtu69_nm6WnRX64XQRFvwaQ'><img id="youtube" src={youtube}></img></a>
                                <a target='blank' href='https://www.instagram.com/greenboydhouse/'><img id="instagram" src={instagram}></img></a>
                                </div>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;