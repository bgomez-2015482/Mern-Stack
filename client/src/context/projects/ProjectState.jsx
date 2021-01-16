import React, { useReducer } from 'react';

import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';

const ProjectState = props => {
    const initialState = {
        newProject : false
    }

    //Dispach para ejecutar las acciones

    const [state, dispatch] = useReducer(ProjectReducer, initialState)

    //Serie de funciones para el CRUD

    return (
        <ProjectContext.Provider
            value={{
                newProject: state.newProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;