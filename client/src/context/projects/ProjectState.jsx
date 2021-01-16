import React, { useReducer } from 'react';

import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';

import { FORM_PROJECT } from '../../types/index';

const ProjectState = props => {
    const initialState = {
        form : false
    }

    //Dispach para ejecutar las acciones

    const [state, dispatch] = useReducer(ProjectReducer, initialState)

    //Serie de funciones para el CRUD

    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    return (
        <ProjectContext.Provider
            value={{
                form: state.form,
                showForm
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;