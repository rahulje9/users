import * as types from '../constants/constants'
import axios from 'react-native-axios'

const initialState = {
    loginData: '',
    loginSuccess: false,
    loginError: false
}
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case types.ON_LOGIN_SUCCESS: {
            console.log('loginData', action.payload)
            window.axios = axios.create({
                headers: {
                    'Authorization': action.payload.token
                }
            });
            window.axios.defaults.headers.common['Authorization'] = action.payload.token;
            return {
                ...state,
                loginSuccess: true,
                loginData: action.payload
            }
        }
        case types.ON_LOGIN_FAILED: {
            return {
                ...state,
                loginSuccess: false,
                loginData: '',
                loginError: true
            }
        }
        default:
            return state
    }
}