import React from 'react';

const Comunidad = () => {

    return (
        <div>
            <div class="container mt-4 mb-4">
                <div id='toptabla'>
                    <h5>
                        TOP VOLUNTARIOS
                    </h5>
                </div>
                <table class="table" id="tablacom">
                    <thead>
                        <tr>
                            <th scope="col">Posición</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Nº Recolectas Unidas</th>
                            <th scope="col">KGs Recogidos</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>29</td>
                            <td>127</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>26</td>
                            <td>126</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mohamed</td>
                            <td>22</td>
                            <td>101</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="container mt-4 mb-4">
                <div id='toptabla'>
                    <h5>
                        TOP AGRICULTORES
                    </h5>
                </div>
                <table class="table" id="tablacom">
                    <thead>
                        <tr>
                            <th scope="col">Posición</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Nº Recolectas Creadas</th>
                            <th scope="col">KGs Donados</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>Pepe</td>
                            <td>35</td>
                            <td>2.500</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Antonio</td>
                            <td>18</td>
                            <td>1.970</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Juan</td>
                            <td>17</td>
                            <td>1.850</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Comunidad;