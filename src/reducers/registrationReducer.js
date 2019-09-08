import * as types from "../constants/constants";
import axios from 'react-native-axios'
import AsyncStorage from '@react-native-community/async-storage'
const initialState = {
    regFlag: false,
    registrationData: '',
    regError: false
}

export default function registrationReducer(state = initialState, action) {
    switch (action.type) {
        case types.DO_REGISTRATION_SUCCESSFULL: {
            window.axios = axios.create({
                headers: {
                    'Authorization': action.payload.token
                }
            });
            window.axios.defaults.headers.common['Authorization'] = action.payload.token;
            AsyncStorage.setItem('isLoggedIn', JSON.stringify(true))
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
                registrationData: '',
                regError: true
            }
        }
        default:
            return { ...state }
    }
}