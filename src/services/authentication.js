import apiMethod from "./apiMethod";

const BASE_URL = 'https://reqres.in/api/'
const REGISTRATION_URL = `${BASE_URL}register`
const LOGIN_URL = `${BASE_URL}login`

export const doRegistrationAPI = (data) => {
    return apiMethod.post(REGISTRATION_URL, data)
}

export const loginAPI = (data) => {
    return apiMethod.post(LOGIN_URL, data)
}

const Registration = {
    doRegistrationAPI
}

const Login = {
    loginAPI
}

export { Registration, Login }