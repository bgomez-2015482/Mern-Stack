import React, { Fragment, useContext } from 'react';

import Homework from './Homework';
import ProjectContext from '../../context/projects/ProjectContext';


const ListHomeworks = () => {

    //Obtener el state del formulario

    const projectsContext = useContext(ProjectContext);
    const { proyecto, eliminarProyecto } = projectsContext; 

    //Si no hay proyecto seleccionado

    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    //Array destructuring para extraer el proyecto actual

    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataformas de pago', estado: false },
        { nombre: 'Elegir Hosting', estado: true }
    ];

    //Eliminar un proyecto

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">  
            {tareasProyecto.length === 0
                ? (<li className="tarea"><p>No hay tareas</p></li>)
                : tareasProyecto.map(tarea => (
                    <Homework 
                        tarea={tarea}
                    />
                ))
            }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}
 
export default ListHomeworks;