import React, { Fragment, useState, useContext } from 'react';

import ProjectContext from '../../context/projects/ProjectContext';

const NewProject = () => {

    //Obtener el state del formulario

    const projectsContext = useContext(ProjectContext);
    const { form, errorFormulario, showForm, agregarProyecto, mostrarError } = projectsContext; 

    //state de proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //Extraer nombre de proyecto

    const { nombre } = proyecto;

    //Lee los contenidos del input

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    }

    //cuando el usuario envia un proyecto

    const  onSubmitProyecto = e => {
        e.preventDefault();

        //validar el proyecto

        if(nombre === ''){
            mostrarError();
            return;
        }

        //agregar al state

        agregarProyecto(proyecto)

        //reiniciar el form

        guardarProyecto({
            nombre: ''
        })
    } 

    return (
        <Fragment>
        <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={() => showForm()}
        >Nuevo Proyecto</button>

        { form ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />
        
                        <input
                            type="submit"
                            className="btn bnt-primario btn-block"
                            value="Agregar proyecto"
                        />
                    </form>
                ) : null }

        { errorFormulario ?
                <p className="mensaje error">
                    El nombre del proyecto es obligatorio
                </p>
                : null }
        </Fragment>
    );
}
 
export default NewProject;