import axios from 'axios';
export const authenticateToken = localToken => {
    return axios.get('/api/auth', {
        headers: {
            Authorization: localToken
        }
    })
}
export const getNewToken = () => {
    return axios.get('/api/token')
}