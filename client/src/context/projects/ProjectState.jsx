import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';

import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM } from '../../types';


const ProjectState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Internet' },
        { id: 3, nombre: 'Diseño de sitio web' }
    ]
    
    const initialState = {
        proyectos : [],
        form : false,
        errorFormulario: false
    }

    //Dispach para ejecutar las acciones

    const [state, dispatch] = useReducer(ProjectReducer, initialState)

    //Serie de funciones para el CRUD

    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    //Obtener proyectos

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: proyectos
        })
    }

    //Agregar nuevo proyecto

    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4();

        //Insertar el proyecto en el state
        dispatch({
            type: ADD_PROJECT,
            payload: proyecto
        })
    }

    //Validar el formulario por errores
    const mostrarError= () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    return (
        <ProjectContext.Provider
            value={{
                proyectos: state.proyectos,
                form: state.form,
                errorFormulario: state.errorFormulario,
                mostrarError,
                showForm,
                getProjects,
                agregarProyecto
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;