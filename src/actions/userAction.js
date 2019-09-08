import * as types from '../constants/constants'
import { Users } from '../services/authentication'

export const getUsers = () => {
    return (dispatch) => {
        return Users.getUsersAPI().then(response => {
            if (response.status === 200) {
                dispatch(getUsersSuccess(response.data))
            }
        }).catch(err => {
            dispatch(getUsersFailed(err))
        })
    }
}

export const getUsersSuccess = (data) => {
    return {
        type: types.GET_USERS_SUCCESS,
        payload: data
    }
}

export const getUsersFailed = (error) => {
    return {
        type: types.GET_USERS_FAILED,
        payload: error
    }
}