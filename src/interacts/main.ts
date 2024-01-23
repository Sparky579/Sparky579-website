import axios from 'axios'

export async function postLogin(userName: string, password: string) {
    try {
        const data = {
            username: userName,
            password: password
        };
        const url =`${import.meta.env.VITE_APP_FLASK_URL}/login`;
        const res = await axios.post(url, data)
        if (res.status === 200) {
            console.log('login ok')
            return true
        }
        else {
            console.error('login error')
            return false
        }
    }
    catch (error) {
        console.error('login error', error)
        return false
    }
}