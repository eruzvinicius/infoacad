import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED
} from '../actions/actionTypes'

const initialState = {
    name: null,
    email: null,
    cpf: null,
    categoria: null,
    curso: null,
    isLoading: false,
    token: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                cpf: action.payload.cpf,
                categoria: action.payload.categoria,
                curso: action.payload.curso,
                token: action.payload.token,
            }
        case USER_LOGGED_OUT:
            return {
                ...initialState
            }
        case LOADING_USER:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

export default reducer