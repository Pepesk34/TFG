import React from 'react';
import './cabecera.css';
const Footer = () => {
    return (
        <div>
            <div id="filaFooter" class="row">
                <div class="col-xl-6">
                    <div id="contactos" >
                        <h5>Contactos</h5>
                        <h6>
                            <br />
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
                            <ul class="list-unstyled">
                                <li>Youtube</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </h6>


                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;