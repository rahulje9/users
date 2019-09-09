import * as types from '../constants/constants'
import { Colors } from '../services/authentication'

export const getColors = () => {
    return (dispatch) => {
        return Colors.getColorsAPI().then((response) => {
            // console.log({ response })
            if (response.status === 200) {
                dispatch(getColorsSuccess(response.data))
            }
        }).catch(err => {
            dispatch(getColorsFailed(err))
        })
    }
}

export const getColorsSuccess = (data) => {
    return {
        type: types.GET_COLORS_SUCCESS,
        payload: data
    }
}

export const getColorsFailed = (err) => {
    return {
        type: types.GET_COLORS_FAILED,
        payload: err
    }
}