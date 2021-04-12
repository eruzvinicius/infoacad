import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED
} from './actionTypes'
import axios from 'axios'
import { setMessage } from './message'

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyA_1GB34POYbfMvXCsj-OXUymxk_ki8dRk'

export const userLogged = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const createUser = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Usuário já existente no banco de dados. Por favor utilize outro e-mail.'
                }))
            })
            .then(res => {
                if (res.data.localId) {
                    axios.put(`/users/${res.data.localId}.json`, {
                        name: user.name,
                        cpf:user.cpf,
                        categoria: user.categoria,
                        curso: user.curso
                    })
                        .catch(err => {
                            dispatch(setMessage({
                                title: 'Erro',
                                text: 'Ocorreu um erro ao criar um novo usuário! Método PUT.'
                            }))
                        })
                        .then(() => {
                            dispatch(login(user))
                        })
                }
            })
    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Login ou senha incorretos. Por favor tente novamente.'
                }))
            })
            .then(res => {
                if (res.data.localId) {
                    user.token = res.data.idToken
                    axios.get(`/users/${res.data.localId}.json`)
                        .catch(err => {
                            dispatch(setMessage({
                                title: 'Erro',
                                text: 'Ocorreu um erro ao fazer o login. Método GET!'
                            }))
                        })
                        .then(res => {
                            delete user.password
                            user.name = res.data.name
                            user.categoria = res.data.categoria
                            user.cpf = res.data.cpf
                            user.curso = res.data.curso
                            dispatch(userLogged(user))
                            dispatch(userLoaded())
                        })
                }
            })
    }
}