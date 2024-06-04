import React, { useState } from 'react';

const InicioSesion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRolChange = (event) => {
        setRol(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar el envío de los datos
        console.log({ email, password, rol });
    };

    return (
        <div>
            <div id="pregunta_rol" className='mt-5 mb-5'>
                <h1>INICIA SESIÓN</h1>
            </div>
            <div className="row justify-content-center" id='forminiciosesion'>
                <div className="col-md-6 col-lg-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input 
                                type="email" 
                                className="form-control" 
                                id="floatingInput" 
                                placeholder="name@example.com" 
                                value={email} 
                                onChange={handleEmailChange} 
                            />
                            <label htmlFor="floatingInput">Correo electrónico</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="floatingPassword" 
                                placeholder="Password" 
                                value={password} 
                                onChange={handlePasswordChange} 
                            />
                            <label htmlFor="floatingPassword">Contraseña</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select 
                                className="form-select" 
                                id="floatingSelect" 
                                aria-label="Seleccionar rol" 
                                value={rol} 
                                onChange={handleRolChange}
                            >
                                <option value="">Seleccionar rol</option>
                                <option value="agricultor">Agricultor</option>
                                <option value="voluntario">Voluntario</option>
                            </select>
                            <label htmlFor="floatingSelect">Rol</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Aceptar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InicioSesion;
