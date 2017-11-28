import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-builder-fee27.firebaseio.com/'
})

export default instance
