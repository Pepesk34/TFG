import React from 'react';
import './estilo.css';
import logo from "./imagenes/logo1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import BotonCabecera from './botonCabecera';
import Button from 'react-bootstrap/Button';


//---------------------------------------------------------------------
//DESPLAZAR A DONDE QUIERAS EN LA PÁGINA AL PULSAR UN BOTÓN
const handleScrollToTop = () => {
    window.scrollTo({
        top: 190,
        behavior: 'smooth'
    });
};

const handleClick = () => {
    console.log('Botón clickeado');
    handleScrollToTop();
};

function Cabecera(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/inicio">
                    <img src={logo} alt="logo" width="120" height="120" className="d-inline-block align-top" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/inicio"> <Button variant="outline-secondary">Inicio</Button></Nav.Link>
                        <Nav.Link as={Link} to="/registrarse" onClick={handleClick}> <Button variant="outline-secondary">Registrase</Button></Nav.Link>
                        <Nav.Link as={Link} to="/iniciosesion"> <Button variant="outline-secondary">Iniciar Sesión</Button></Nav.Link>
                        <Nav.Link as={Link} to="/recolecta"> <Button variant="outline-secondary">Recolecta</Button></Nav.Link>
                        {props.tipoUser === "A" &&
                            <Nav.Link as={Link} to="/mi-perfil">MI PERFIL</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Cabecera;
