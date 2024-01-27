<script setup lang="ts">
</script>
<template>
<el-carousel height="60vh">
      <el-carousel-item :key="1">
        <img src="./backgrounds/b1.png" alt="Image 1" style="width: 100%; height: 100%; clip-path: inset(0 20% 0 20%);" >
      </el-carousel-item>
      <el-carousel-item :key="2">
        <img src="./backgrounds/a.avif" alt="Image 1" style="width: 100%; height: 100%; clip-path: inset(0 20% 0 20%);" >
      </el-carousel-item>
    </el-carousel>
<div class="center-text">
<p style="font-family: 'XiYuan'; font-size: 70px;">欢迎来到 <span style="color: purple;">Sparky327</span> 的网站！</p>

<p style="font-family: 'XiYuan'; margin-top: -10px; color: green;">现在的时间是：{{ formatChineseDate() }}</p>
<p style="font-family: 'XiYuan'; margin-top: -10px; color: blue;">你来自{{ deviceType }}设备</p>
</div>
</template>

<script>
export default {
    data() {
    return {
      deviceType: '', // 用于存储设备类型的数据
    };
  },
  created() {
    // 在组件创建时检测用户的设备类型
    this.detectDeviceType();
  },
  methods: {
    formatChineseDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // 自定义中文格式
      const chineseDate = `${year}年${month}月${day}日 ${this.padZero(hours)}时${this.padZero(minutes)}分${this.padZero(seconds)}秒`;
      
      return chineseDate;
    },
    // @ts-ignore
    padZero(value) {
      return value < 10 ? `0${value}` : value;
    },
    detectDeviceType() {
      const userAgent = navigator.userAgent;
      if (userAgent.match(/Android/i)) {
        this.deviceType = 'Android 手机';
      } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
        this.deviceType = 'iOS 设备';
      } else if (userAgent.match(/Windows/i)) {
        this.deviceType = 'Windows 电脑';
      } else if (userAgent.match(/Mac/i)) {
        this.deviceType = 'Mac 电脑';
      } else if (userAgent.match(/Linux/i)) {
        this.deviceType = 'Linux 电脑';
      }
      else this.deviceType = '未知'
    },
  },
};
</script>

<style scoped>
/* @import url('@/assets/main.css'); */
.demonstration {
  color: var(--el-text-color-secondary);
}

.center-text {
  text-align: center; 
  display: flex;
  align-items: center; /* 设置文本垂直居中 */
  justify-content: center;
  height: 30vh; /* 确保元素高度充满其容器 */
  min-height: 30vh;
  flex-direction: column;
}


.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>
