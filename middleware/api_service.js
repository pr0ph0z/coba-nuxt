import axios, * as others from 'axios'

export default () => {
  return axios.create({
    baseURL: '' // ganti jangan lupa oke
  })
}