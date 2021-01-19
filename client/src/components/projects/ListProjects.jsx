import React, { useContext, useEffect } from 'react';

import Project from './Project';

import ProjectContext from '../../context/projects/ProjectContext';

const ListProjects = () => {

    //Extraer proyectos de state inicial

    const projectsContext = useContext(ProjectContext);
    const { proyectos, getProjects } = projectsContext;

    //Obtener proyectos cuando carga el componente
    useEffect(() => {
        getProjects();
    }, []);

    //Revisar si proyectos tiene contenidos

    if(proyectos.length === 0) return null;

    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto =>(
                <Project
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}
 
export default ListProjects;