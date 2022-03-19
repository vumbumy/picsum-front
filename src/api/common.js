import axios from 'axios'
import path from '@/config/path'

export const Api = axios.create({
  baseURL: path.baseURL,
  headers: {
    'Content-type': 'application/json',
    'Authorization': `Bearer ${localStorage.accessToken}`
  }
})
