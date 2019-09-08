import axios from 'react-native-axios'

const get = (url = '', config = {}) => {
    return axios.get(url, config)
}

const post = (url = '', data = '', config = {}) => {
    return axios.post(url, data, config)
}

const apiMethod = {
    get, post
}
export default apiMethod