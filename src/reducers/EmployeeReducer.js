import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    employees: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return { employees: action.payload } 
        default:
            return state
    }
} 