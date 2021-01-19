import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT } from '../../types/index';

export default (state, action) => {
    switch(action.type){
        
        case FORM_PROJECT:
            return {
                ...state,
                form: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                proyectos: action.payload
            }
        case ADD_PROJECT:
            return{
                ...state,
                proyectos: [...state.proyectos, action.payload],
                form: false
            }

        default:
            return state;
    }
}