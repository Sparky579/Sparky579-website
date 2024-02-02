<template>
  <div style="display: flex; justify-content: center">
  <div class="login-container">

    <el-card class="login-card" shadow="hover">
      <div class="container">
        <el-text class="mx-1" size="large">注册</el-text>
        <el-input v-model="username" placeholder="请输入账号"></el-input>
        <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
        <el-input v-model="password2" placeholder="请确认密码" type="password"></el-input>
        <el-input v-model="mail" placeholder="请输入邮箱" class="mail-input"></el-input>
        <div class="mail-code-row">
          <el-input v-model="code" placeholder="请输入验证码" class="mail-input"></el-input>
          <el-button type="primary" @click="sendCode" :disabled="!enableSend">{{ enableSend ? "发送" : countdown + "秒" }}</el-button>
        </div>
        <el-button type="primary" @click="submitForm">注册</el-button>
      </div>
      <router-link class="bottom-left-text" to="/login">登录</router-link>
      <div class="bottom-right-text">忘记密码</div>
    </el-card>
  </div>
  <div class="alert-container">
    <el-alert
        class="alert"
        style="width: 100%"
        title="Register error"
        type="error"
        :description=alert_des
        v-show="alert_show"
        show-icon
    />
  </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {postLogin, postRegister, postSendCode} from "@/interacts/account";
import {getSessionId, useSessionStore} from "@/components/Cookie.vue";
import {useRouter} from "vue-router";
import {postCookies} from "@/interacts/cookies";

const username = ref('');
const password = ref('');
const password2: any = ref('');
const mail = ref('');
const code = ref('');
const alert_des = ref('more text description')
const alert_show = ref(false)
const router = useRouter();
const enableSend = ref(true)
const countdown = ref(60)

const setAlert = (description: string) => {
  console.log("alert")
  alert_show.value = true;
  alert_des.value = description;
}
let countdownTimer: any = null
const startCountdown = () => {
  if (countdownTimer) {
    // 如果已经有一个定时器在运行，则直接返回
    return;
  }

  enableSend.value = false;
  countdown.value = 60;

  countdownTimer = setInterval(() => {
    countdown.value--;

    if (countdown.value === 0) {
      clearInterval(countdownTimer);
      countdownTimer = null; // 清除定时器引用
      enableSend.value = true;
    }
  }, 1000);
};

const submitForm = async () => {
  // 在这里执行提交操作
  if (password2.value != password.value) {
    setAlert("两次输入的密码不一样！");
    return;
  }
  if (password2.value.length < 6) {
    setAlert("密码长度需要至少为6！");
    return;
  }
  const value = await postRegister(username.value, password.value, mail.value, code.value);
  if (value !== "ok") setAlert(value);
  else {
    await postCookies(username.value, password.value)
    router.push("/")
  }
  // 在这里可以执行提交逻辑，例如发送数据到服务器
};

const sendCode = () => {
  if (!(mail.value.includes("@") && mail.value.includes("."))) {
    setAlert("邮箱格式不正确！");
    return;
  }
  postSendCode(mail.value).then(x => {
        if (x === "ok") {

        } else {
          setAlert("发送失败，请检查你的邮箱是否正确！");
        }
        startCountdown();
      }
  )
}
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
.alert-container {
  position: fixed;
  bottom: 5%;
  left: 4%;
  z-index: 9999;
}
.mail-code-row {
  display: flex;
  align-items: center; /* 确保元素垂直居中 */
}

.mail-input {
  flex-grow: 1; /* 使邮箱输入框占据多余空间 */
  margin-right: 10px; /* 在按钮前添加一些间距 */
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
