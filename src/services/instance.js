import axios from 'react-native-axios'
import * as types from '../constants/constants'

const instance = axios.create({
    baseURL: types.baseURL,
    timeout: 2000,
    withCredentials: true,
})

