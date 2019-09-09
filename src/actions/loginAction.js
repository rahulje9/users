import * as types from '../constants/constants'
import { Login } from '../services/authentication'


export const onLogin = (params) => {
    return (dispatch) => {
        return Login.loginAPI(params).then(response => {
            // console.log({ response })
            if (response.status === 200) {
                dispatch(onLoginSuccess(response.data))
            }
            if (response.status === 400) {
                console.log({ response })
            }

        }).catch(err => {
            // console.log('log error', err)
            dispatch(onLoginFailed(err))
        })
    }
}

export const onLoginSuccess = (data) => {
    return {
        type: types.ON_LOGIN_SUCCESS,
        payload: data
    }
}

export const onLoginFailed = (err) => {
    return {
        type: types.ON_LOGIN_FAILED,
        payload: err
    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch({
            type: types.LOGOUT
        })
    }
}