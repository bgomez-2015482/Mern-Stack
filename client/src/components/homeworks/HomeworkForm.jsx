import React, { useContext } from 'react';

import ProjectContext from '../../context/projects/ProjectContext';

const FormTarea = () => {

    //Extraer proyectos del state inicial

    const projectsContext = useContext(ProjectContext);
    const { proyecto } = projectsContext; 
    
    //Si no hay proyecto seleccionado
    
    if (!proyecto) return null;
    
    //Array destructuring para extraer el proyecto actual
    
    const [proyectoActual] = proyecto;

    return (
        <div className="formulario">
            <form>

                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="button"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar tarea"
                    />
                </div>

            </form>
        </div>
    );
}
 
export default FormTarea;