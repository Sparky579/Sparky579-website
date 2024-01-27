<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TopBar from './components/TopBar.vue';
import {useSessionStore} from "@/components/Cookie.vue";
const store = useSessionStore();
store.generateSessionId();
</script>

<template>
  <TopBar class="top"></TopBar>
  <router-view class="content"></router-view>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.top {
  position: sticky; /* 使用粘性定位 */
  top: 0; /* 粘性元素距离顶部的距离，设置为0表示固定在最上方 */
  width: 100%; /* 占满整行 */
  padding: 10px 0; /* 可选的内边距，根据需要调整 */
  z-index: 100; /* 设置z-index以确保顶栏在其他内容之上 */
}
.content {
  height: calc(100vh - 70px);
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 4024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
