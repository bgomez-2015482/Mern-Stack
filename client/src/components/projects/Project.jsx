import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';

const Project = ({proyecto}) => {
    //Obtener el state del proyectos

    const projectsContext = useContext(ProjectContext);
    const { proyectoActual }
    = projectsContext; 

    return (
        <li>
           <button
            type="button"
            className="btn btn-blank"
            onClick={ () => proyectoActual (proyecto.id)}
           >{proyecto.nombre}</button> 
        </li>
    );
}
 
export default Project;