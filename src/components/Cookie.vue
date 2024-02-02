<script lang="ts">
import { createPinia , defineStore } from "pinia";

const pinia = createPinia();
export default {
  name: 'Cookie',
  // 其他组件选项...
}
const useSessionStore = defineStore('session', {
  state: () => ({
    sessionId: ''
  }),
  actions: {
    generateSessionId() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let sessionId = '';
      for (let i = 0; i < 32; i++) {
        sessionId += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      this.sessionId = sessionId;
      if (getCookie() == '') setCookie(import.meta.env.VITE_APP_COOKIE_NAME, sessionId)
    }
  }
});
const getSessionId = () => {
  // const store = useSessionStore();
  // return store.sessionId;
  return getCookie();
}
const getCookie = () => {
    const name = import.meta.env.VITE_APP_COOKIE_NAME;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return '';
}
const randomCookie = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let sessionId = '';
  for (let i = 0; i < 32; i++) {
    sessionId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return sessionId
}
const setCookie = (name='', value='') => {
  const date = new Date();
  const days = 1
  if (!value) {
    name = import.meta.env.VITE_APP_COOKIE_NAME;
    value = randomCookie();
  }
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
export { useSessionStore, pinia, getSessionId, getCookie, setCookie };
</script>

<template>

</template>

<style scoped>

</style>