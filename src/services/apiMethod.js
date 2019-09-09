import axios from 'react-native-axios'
axios.defaults.headers.common['Content-Type'] = 'application/json'

const get = (url = '', config = {

}) => {
    return axios.get(url, config)
}

const post = (url = '', data = '', config = {

}) => {
    return axios.post(url, data, config)
}

const apiMethod = {
    get, post
}
export default apiMethod