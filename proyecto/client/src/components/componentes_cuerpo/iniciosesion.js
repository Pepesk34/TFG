import React from 'react';

const InicioSesion = () => {

    return (
        <div>
            <div id="pregunta_rol">
                <h1>INICIA SESIÓN</h1>
            </div>
            <div className="row justify-content-center" id='forminiciosesion'>
                <div className="col-md-6 col-lg-4">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Correo electrónico</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InicioSesion;