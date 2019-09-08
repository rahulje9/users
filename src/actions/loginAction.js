import * as types from '../constants/constants'
import { Login } from '../services/authentication'


export const onLogin = () => {
    let params = {
        "email": "george.bluth@reqres.in",
        "password": "pistol"
    }
    return (dispatch) => {
        return Login.loginAPI(params).then(response => {
            console.log({ response })
            if (response.status === 200) {
                dispatch(onLoginSuccess(response.data))
            }

        }).catch(err => {
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