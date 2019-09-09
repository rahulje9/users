
import { Registration } from '../services/authentication'
import * as types from '../constants/constants'

export const doRegistration = (params) => {

    return (dispatch) => {
        return Registration.doRegistrationAPI(params)
            .then(response => {
                console.log({ response })
                if (response.status === 200) {
                    dispatch(doRegistrationSuccess(response.data))
                }
            }).catch(err => {
                // console.log(err)
                dispatch(doRegistrationFailed(err))
            })
    }
}

export const doRegistrationSuccess = (res) => {
    return ({
        type: types.DO_REGISTRATION_SUCCESSFULL,
        payload: res
    })
}

export const doRegistrationFailed = (err) => {
    return {
        type: types.DO_REGISTRATION_FAILED,
        payload: err
    }
}
