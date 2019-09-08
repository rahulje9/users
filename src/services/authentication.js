import apiMethod from "./apiMethod";

const BASE_URL = 'https://reqres.in/api/'
const REGISTRATION_URL = `${BASE_URL}register`
const LOGIN_URL = `${BASE_URL}login`
const GET_USERS = `${BASE_URL}users`

export const doRegistrationAPI = (data) => {
    return apiMethod.post(REGISTRATION_URL, data)
}

export const loginAPI = (data) => {
    return apiMethod.post(LOGIN_URL, data)
}

export const getUsersAPI = () => {
    return apiMethod.get(GET_USERS + '?per_page=12')
}

const Registration = {
    doRegistrationAPI
}

const Login = {
    loginAPI
}

const Users = {
    getUsersAPI
}

export { Registration, Login, Users }