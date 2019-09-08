import * as types from "../constants/constants";

const initialState = {
    regFlag: false,
    registrationData: ''
}

export default function registrationReducer(state = initialState, action) {
    switch (action.type) {
        case types.DO_REGISTRATION_SUCCESSFULL: {
            return {
                ...state,
                regFlag: true,
                registrationData: action.payload
            }
        }
        case types.DO_REGISTRATION_FAILED: {
            return {
                ...state,
                regFlag: false,
                registrationData: ''
            }
        }
        default:
            return { ...state }
    }
}