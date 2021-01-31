import React, { useReducer } from 'react';
import WorkContext from './WorkContext';
import WorkReducer from './WorkReducer';

const WorkState = props => {
    const initialState = {
        tareas: []
    }

    //CREAR DISPATCH Y STATE

    const [ state, dispatch ] = useReducer(WorkReducer, initialState);

    return (
        <WorkContext.Provider>
            {props.children}
        </WorkContext.Provider>
    )
}

export default WorkState;