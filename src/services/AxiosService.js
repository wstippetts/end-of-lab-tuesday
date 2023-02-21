import Axios from 'axios'
import { baseURL } from '../env'


export const api = Axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/",
  timeout: 8000
})

