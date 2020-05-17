import axios from 'axios'

axios.defaults.baseURL = 'http://129.204.240.85:2002/'
axios.defaults.withCredentials=true

export default axios