<template>
  <div class="login-container">

    <el-card class="login-card" shadow="hover">
      <div class="container">
        <el-text class="mx-1" size="large">注册</el-text>
        <el-input v-model="username" placeholder="请输入账号"></el-input>
        <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
        <el-input v-model="password2" placeholder="请确认密码" type="password"></el-input>
        <el-button type="primary" @click="submitForm">注册</el-button>
      </div>
      <a class="bottom-left-text" href="/login">登录</a>
      <div class="bottom-right-text">忘记密码</div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {postLogin} from "@/interacts/main";

const username = ref('');
const password = ref('');
const password2 = ref('');

const submitForm = async () => {
  // 在这里执行提交操作
  console.log('用户名:', username.value);
  console.log('密码:', password.value);
  await postLogin(username.value, password.value)
  // 在这里可以执行提交逻辑，例如发送数据到服务器
};
</script>


<style scoped>
.container *{
  margin-top: 15px;
}
.login-container {
  text-align: center;
  display: flex;
  align-items: center; /* 设置文本垂直居中 */
  justify-content: center;
//height: 90%; /* 确保元素高度充满其容器 */
  flex-direction: column;
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
.bottom-right-text {
  position: absolute;
  bottom: 15px; /* 距离底部的距离 */
  right: 15px; /* 距离左侧的距离 */
  color: #888; /* 文本颜色 */
  font-size: 14px; /* 文本大小 */
}
</style>
