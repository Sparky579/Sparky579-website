<template>
  <div style="display: flex; justify-content: center">
    <div class="login-container">

      <el-card class="login-card" shadow="hover">
        <div class="container">
          <el-text class="mx-1" size="large">登录</el-text>
          <el-input v-model="username" placeholder="请输入账号"></el-input>
          <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
          <el-button type="primary" @click="submitForm">提交</el-button>
        </div>
        <router-link class="bottom-left-text" to="/register">注册账号</router-link>
        <div class="bottom-right-text">忘记密码</div>
      </el-card>

    </div>
    <div class="alert-container">
      <el-alert
          class="alert"
          style="width: 100%"
          title="Login error"
          type="error"
          :description=alert_des
          v-show="alert_show"
          show-icon
      />
    </div>
  </div>
  <!--  <el-alert title="warning alert" type="warning" />-->
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {postLogin} from "@/interacts/account";
import {useRouter} from "vue-router";
import {getCookie, getSessionId} from "@/components/Cookie.vue";
import {postCookies} from "@/interacts/cookies";

const username = ref('');
const password = ref('');
const alert_des = ref('more text description')
const alert_show = ref(false)
const router = useRouter();

const submitForm = async () => {
  // console.log('用户名:', username.value);
  // console.log('密码:', password.value);
  const result = await postLogin(username.value, password.value)
  if (result === 'ok') {
    await postCookies(username.value, password.value);
    router.push('/')
  }
  else {
    alert_show.value = true
    alert_des.value = result
  }
  // 在这里可以执行提交逻辑，例如发送数据到服务器
};
</script>


<style scoped>
.container * {
  margin-top: 15px;
}

.login-container {
  text-align: center;
  display: flex;
  align-items: center; /* 设置文本垂直居中 */
  justify-content: center;
//height: 90%; /* 确保元素高度充满其容器 */ flex-direction: column;
}

.login-card {
  width: 320px; /* 设置卡片的宽度 */
  padding: 20px; /* 设置内边距 */
  text-align: center; /* 文本居中 */
  position: relative;
}

.bottom-left-text {
  position: absolute;
  bottom: 15px; /* 距离底部的距离 */
  left: 15px; /* 距离左侧的距离 */
  color: #888; /* 文本颜色 */
  font-size: 14px; /* 文本大小 */
}

.alert {

}

.alert-container {
  position: fixed;
  bottom: 5%;
  left: 4%;
  z-index: 9999;
}

.bottom-right-text {
  position: absolute;
  bottom: 15px; /* 距离底部的距离 */
  right: 15px; /* 距离左侧的距离 */
  color: #888; /* 文本颜色 */
  font-size: 14px; /* 文本大小 */
}
</style>
