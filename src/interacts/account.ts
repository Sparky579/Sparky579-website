import axios from 'axios'
import {getCookie, getSessionId} from "@/components/Cookie.vue";

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
            return "ok"
        }
        else {
            console.error('login error')
            return "Unknown Error"
        }
    }
    catch (error) {
        console.error('login error', error)
        if (error.toString().match(/401/i))
            return 'Wrong username or password!'
        return error.toString()
    }
}

export async function postRegister(userName: string, password: string, mail: string, code: string) {
    try {
        const data = {
            username: userName,
            password: password,
            mail: mail,
            code: code,
            cookie: getCookie()
        };
        console.log(data)
        const url =`${import.meta.env.VITE_APP_FLASK_URL}/register`;
        const res = await axios.post(url, data)
        if (res.status === 200 || res.status === 201) {
            console.log('register ok');
            return "ok";
        }
        else {
            console.log(res.data)
            console.error('register error');
            return "error1";
        }
    } catch (error) {
        console.error('register error', error);
        return error.response.data.message;
    }
}

export async function postSendCode(mail: string){
    try {
        const data = {
            cookie: getCookie(),
            mail: mail
        }
        const url =`${import.meta.env.VITE_APP_FLASK_URL}/send_mail`;
        const res = await axios.post(url, data)
        if (res.status === 200 || res.status === 201) {
            console.log('register ok');
            return "ok";
        }
        else {
            console.log(res.data)
            console.error('register error');
            return "error1";
        }
    } catch (error) {
        console.error('register error', error);
        return error.response.data.message;
    }
}

export async function getAccount() {
    try {
        const data = {
            cookie: getSessionId()
        }
        const url =`${import.meta.env.VITE_APP_FLASK_URL}/get_account`;
        const res = await axios.post(url, data)
        if (res.status === 200 || res.status === 201) {
            console.log(res.data);
            return res.data.message;
        }
        else {
            return "未登录";
        }
    } catch (error) {
        console.error('register error', error);
        return "未登录";
    }
}