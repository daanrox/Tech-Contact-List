import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://daanrox-contact-list.onrender.com/',
  timeout: 5000
})