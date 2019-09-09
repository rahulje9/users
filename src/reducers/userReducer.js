import * as types from '../constants/constants'
const initialState = {
    userData: '',
    userDataError: ''
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_USERS_SUCCESS: {
            return {
                ...state,
                userData: action.payload,
                userDataError: false
            }
        }
        case types.GET_USERS_FAILED: {
            return {
                ...state,
                userData: '',
                userDataError: true
            }
        }
        default: {
            return state
        }
    }
}