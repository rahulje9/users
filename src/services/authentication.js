import apiMethod from "./apiMethod";

const BASE_URL = 'https://reqres.in/api/'
const REGISTRATION_URL = `${BASE_URL}register`

export const doRegistrationAPI = (data) => {
    return apiMethod.post(REGISTRATION_URL, data)
}

const Registration = {
    doRegistrationAPI
}

export { Registration }