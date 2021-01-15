import React from 'react';

import Project from './Project';

const ListProjects = () => {

    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Internet'},
        {nombre: 'Diseño de sitio web'}
    ]

    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto =>(
                <Project
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}
 
export default ListProjects;