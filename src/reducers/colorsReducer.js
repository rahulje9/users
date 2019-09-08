import * as types from '../constants/constants'
const initialState = {
    getColorFlag: false,
    getColorData: ''
}

export default function colorsReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_COLORS_SUCCESS: {
            return {
                ...state,
                getColorFlag: true,
                getColorData: action.payload
            }
        }
        case types.GET_COLORS_FAILED: {
            return {
                ...state,
                getColorData: '',
                getColorFlag: false
            }
        }
        default: {
            return state
        }
    }
}