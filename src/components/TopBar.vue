
<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-menu-item index="0" @click.native="$router.push('/')">
            <img style="width: 30px" src="./icons/sparky.jpg" alt="Element logo" />
        </el-menu-item>
        <el-text type="primary" style="margin-left: 20px; margin-right: 10px;">Sparky327的个人网页</el-text>
        <el-menu-item index="1" @click.native="$router.push('/game')">小游戏</el-menu-item>
        <el-menu-item index="2" @click.native="$router.push('/work')">工作区</el-menu-item>
        <el-menu-item index="3" @click.native="$router.push('/about')">
            友链
        </el-menu-item>
        <div class="flex-grow" />
      <el-menu-item index="4" @click="() => {if (username !== '未登录') logout();}">
        <template v-if="username === '未登录'">
          <router-link to="/login">登录/注册</router-link>
        </template>
        <template v-else>
          <router-link to="/">登出</router-link>
        </template>
      </el-menu-item>
      <el-text type="success" style="margin-left: 20px; margin-right: 20px; margin-bottom: 4px">{{ username }}</el-text>
        <!-- <div class="flex-grow" />
      <el-menu-item index="1">Processing Center</el-menu-item> -->
        <!-- <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu> -->
    </el-menu>
</template>
  
<script lang="ts" setup>
import {getCurrentInstance, onBeforeMount, onMounted, ref} from 'vue'
import {getAccount} from "@/interacts/account";
import {setCookie} from "@/components/Cookie.vue";

const activeIndex = ref('0')
const username = ref('未登录')
const updateAccount = () => {
  getAccount().then(name => username.value = name)
}
onBeforeMount(() => {
  const instance = getCurrentInstance();
  if (instance && instance.appContext.config.globalProperties.$router) {
    instance.appContext.config.globalProperties.$router.afterEach(() => {
      updateAccount();
    });
  }
});
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const logout = () => {
  setCookie();
  window.location.reload()
}
</script>
  
<style>
.flex-grow {
    flex-grow: 1;
}
</style>