import Axios from 'axios';
import '../estilos/iniciosesion-estilo.css';
import React, { useState, useContext, useRef, useEffect } from "react";
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';



const InicioSesion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('');
    const [error, setError] = useState('');

  const { setUserRole, setUserLoggedIn, setUserId } = useContext(UserContext);

  const navigate = useNavigate();


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRolChange = (event) => {
        setRol(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await Axios.post('http://localhost:3001/login', {
                email: email,
                password: password,
                rol: rol
            });

            // Aquí puedes manejar la respuesta del backend, por ejemplo, almacenar el token JWT
            console.log('Respuesta del backend:', response.data);

            // Limpiar los campos después de enviar los datos
            setEmail('');
            setPassword('');
            setRol('');
            setUserId(response.data.filaUsuario.id);
            setUserLoggedIn(true);
            setUserRole(response.data.rol)
            navigate('/recolecta');
        } catch (err) {
            console.error('Error al iniciar sesión:', err);
            setError(err.response.data.message);
        }
    };

    return (
        <div className='container'>
            <div className='row mb-5' id="pregunta-rol">
                <div className='col-12'>
                    <h1>INICIA SESIÓN</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-4">
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
                        <div className="form-floating mb-4">
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
                        <div className="form-floating mb-4">
                            <select
                                className="form-select"
                                id="floatingSelect"
                                aria-label="Seleccionar rol"
                                value={rol}
                                onChange={handleRolChange}
                            >
                                <option value="">Seleccionar rol</option>
                                <option value="A">Agricultor</option>
                                <option value="V">Voluntario</option>
                            </select>
                            <label htmlFor="floatingSelect">Rol</label>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <button type="submit" className="btn btn-primary">Aceptar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InicioSesion;
