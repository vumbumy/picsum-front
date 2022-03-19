import axios from 'axios'
import path from '@/config/path'

console.log("path.baseURL", path.baseURL)

export const Api = axios.create({
  baseURL: path.baseURL,
  headers: {
    'Content-type': 'application/json',
    'Authorization': `Bearer ${localStorage.accessToken}`
  }
})
