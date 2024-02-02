import axios from 'axios'
import {getCookie, getSessionId} from "@/components/Cookie.vue";
export async function postCookies(username: string | null, password: string | null) {
    const sessionId = getCookie();
    const url =`${import.meta.env.VITE_APP_FLASK_URL}/set_cookie`;
    const data = {
        cookie: sessionId,
        username: username,
        password: password
    }
    const res = await axios.post(url, data)
    if (res.status === 200) {
        console.log('post cookie ok')
        return "ok"
    }
    else {
        console.error('post cookie error')
        return "Unknown Error"
    }
}