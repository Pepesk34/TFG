import React from 'react';
import '../estilos/comunidad-estilo.css';
import Card from 'react-bootstrap/Card';

const Comunidad = () => {

    return (
        <div id='div-comunidad'>
            <div className="container mt-4 mb-4">
                <div id='top-tabla'>
                    <h5>
                        TOP VOLUNTARIOS
                    </h5>
                </div>
                <table className="table" id="tabla-com">
                    <thead>
                        <tr>
                            <th scope="col" id='tabla-pos'>Posición</th>
                            <th scope="col" id='tabla-usu'>Usuario</th>
                            <th scope="col" id='tabla-nr'>Nº Recolectas Unidas</th>
                            <th scope="col" id='tabla-kgs'>KGs Recogidos</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider" id='tabla-contenido'>
                        <tr>
                            <th scope="row" id='tabla-contenido'>1</th>
                            <td id='tabla-contenido'>Pablo</td>
                            <td id='tabla-contenido'>29</td>
                            <td id='tabla-contenido'>127</td>
                        </tr>
                        <tr>
                            <th scope="row" id='tabla-contenido'>2</th>
                            <td id='tabla-contenido'>Andrew Tate</td>
                            <td id='tabla-contenido'>26</td>
                            <td id='tabla-contenido'>126</td>
                        </tr>
                        <tr>
                            <th scope="row" id='tabla-contenido'>3</th>
                            <td id='tabla-contenido'>Mohamed</td>
                            <td id='tabla-contenido'>22</td>
                            <td id='tabla-contenido'>101</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="container mt-4 mb-4">
                <div id='top-tabla'>
                    <h5>
                        TOP AGRICULTORES
                    </h5>
                </div>
                <table className="table" id="tabla-com">
                    <thead>
                        <tr>
                            <th scope="col" id='tabla-pos'>Posición</th>
                            <th scope="col" id='tabla-usu'>Usuario</th>
                            <th scope="col" id='tabla-nr'>Nº Recolectas Creadas</th>
                            <th scope="col" id='tabla-kgs'>KGs Donados</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider" id='tabla-contenido'>
                        <tr>
                            <th scope="row" id='tabla-contenido'>1</th>
                            <td id='tabla-contenido'>Pepe</td>
                            <td id='tabla-contenido'>35</td>
                            <td id='tabla-contenido'>2.500</td>
                        </tr>
                        <tr>
                            <th scope="row" id='tabla-contenido'>2</th>
                            <td id='tabla-contenido'>Antonio</td>
                            <td id='tabla-contenido'>18</td>
                            <td id='tabla-contenido'>1.970</td>
                        </tr>
                        <tr>
                            <th scope="row" id='tabla-contenido'>3</th>
                            <td id='tabla-contenido'>Juan</td>
                            <td id='tabla-contenido'>17</td>
                            <td id='tabla-contenido'>1.850</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="container mt-4 mb-4">
                <div className='row mt-4 mb-4'>
                    <div className='col-3'>
                        <Card bg='success' text='white'>
                            <Card.Header>Agricultor</Card.Header>
                            <Card.Body>
                                <Card.Title>Juan Pérez</Card.Title>
                                <Card.Text>
                                    En una recolecta de tomates, organicé el equipo y disfruté compartiendo historias sobre agricultura.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card bg='danger' text='white'>
                            <Card.Header>Voluntario</Card.Header>
                            <Card.Body>
                                <Card.Title>Ana García</Card.Title>
                                <Card.Text>
                                    Ayudé a clasificar manzanas y me divertí aprendiendo con mis compañeros sobre diferentes variedades de frutas.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card bg='success' text='white'>
                            <Card.Header>Agricultor</Card.Header>
                            <Card.Body>
                                <Card.Title>Carlos Rodríguez</Card.Title>
                                <Card.Text>
                                    Dirigí una cosecha de zanahorias y disfruté enseñando técnicas de recolección a los voluntarios.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card bg='danger' text='white'>
                            <Card.Header>Voluntario</Card.Header>
                            <Card.Body>
                                <Card.Title>María Fernández</Card.Title>
                                <Card.Text>
                                    Colaboré en la recolección de fresas y pasé un gran día haciendo nuevos amigos en el campo.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-3'>
                        <Card bg='success' text='white'>
                            <Card.Header>Agricultor</Card.Header>
                            <Card.Body>
                                <Card.Title>José Sánchez</Card.Title>
                                <Card.Text>
                                    Recolecta de naranjas, enseñé a los voluntarios a identificar las frutas maduras y disfruté viendo cómo aprendían.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card bg='danger' text='white'>
                            <Card.Header>Voluntario</Card.Header>
                            <Card.Body>
                                <Card.Title>Lucía Martínez</Card.Title>
                                <Card.Text>
                                    Participé en una recolecta de lechugas y me divertí mucho trabajando en equipo y disfrutando del aire libre.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card bg='success' text='white'>
                            <Card.Header>Agricultor</Card.Header>
                            <Card.Body>
                                <Card.Title>Pedro López</Card.Title>
                                <Card.Text>
                                    En una recolecta de patatas, mostré a los voluntarios cómo cosechar de manera eficiente y me encantó ver su entusiasmo.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card bg='danger' text='white'>
                            <Card.Header>Voluntario</Card.Header>
                            <Card.Body>
                                <Card.Title>Sofía González</Card.Title>
                                <Card.Text>
                                    Ayudé en una recolecta de pepinos y disfruté aprendiendo sobre el cultivo y cuidado de las plantas.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Comunidad;