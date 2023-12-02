<template>
    <div class="center-text2">
    <el-card class="box-card" style="margin-top: 20px;">
      <template #header>
        <div class="card-header">
          <span style="color: green;">全部变A</span>
          <!-- <router-link to="src/components/sss6.html"> -->
          <el-button class="button" text @click="startGame('/src/components/sss6.html')">开始游戏</el-button>
        <!-- </router-link> -->
        </div>
      </template>
      <div>游戏目标：你的目标是将所有方块都变成字母"A"，但要在限定的步数内完成任务。<br>

点击方块：点击方块会改变它和周围方块的状态，每次点击都会改变一片区域的方块。你需要巧妙地点击方块，以达到最终目标。<br>

通关挑战：当所有方块都成功变成"A"时，恭喜你通关成功！挑战自己，看看你需要多少步才能完成游戏。享受这个简单而令人上瘾的益智小游戏吧！</div>
      <template #footer><span  style="color: brown;">打分：</span> <el-rate v-model="value" size="large" /></template>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px;">
      <template #header>
        <div class="card-header">
          <span style="color: rebeccapurple;">合成大马哈</span>
          <!-- <router-link to="src/components/sss6.html"> -->
          <el-button class="button" text @click="startGame('/src/components/hcdmh/index.html')">开始游戏</el-button>
        <!-- </router-link> -->
        </div>
      </template>
      <div>
在这个令人上瘾的游戏中，你将面对落下的各种小物体，通过巧妙地合并它们，逐步创建出更大、更强大的"大马哈"。<br>挑战自己的合成技巧，争取合成出史上最大的"大马哈"，成为合成大师！</div>
      <template #footer><span  style="color: brown;">打分：</span> <el-rate v-model="value" size="large" /></template>
    </el-card>
    </div>
  </template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const value = ref(null);
// const router = useRouter();

  const startGame = (targetPage: string) => {
    // 使用 router.push 导航到指定页面
    // router.push('/src/components/sss6.html');
    window.location.href = targetPage;
  };
</script>
  <!-- src/components/sss6.html -->
  
  <style>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .text {
    font-size: 14px;
  }
  .center-text2 {
  text-align: center; 
  display: flex;
  align-items: center; /* 设置文本垂直居中 */
  justify-content: center;
  height: 100%; /* 确保元素高度充满其容器 */
  min-height: 90vh;
  gap: 20px;
  /* flex-direction: column; */
    }
  
  .item {
    margin-bottom: 18px;
  }
  
  .box-card {
    width: 480px;
  }
  </style>