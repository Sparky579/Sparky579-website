<template>
  <div class="center-text2">
    <div v-for="(card, index) in games" :key="index" class="center-text2">
      <el-card class="box-card" style="margin-top: 20px;">
        <template #header>
          <div class="card-header">
            <span style="color: darkblue;">{{ card.title }}</span>
            <el-button class="button" text @click="startGame(card.url)">开始游戏</el-button>
          </div>
        </template>
        <div class="game-content" v-html="card.content">
        </div>
        <template #footer><span style="color: brown;">打分：</span>
          <el-rate v-model="card.rate" size="large"/>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router';

const value = ref(null);
// const router = useRouter();

const games: any = ref([{
  title: 'DeepS翻译器',
  content: '<p>使用Deep<span style="color: red;">Sparky</span>翻译器，<br/><span style="color: #333;">轻松将文本翻译成您喜欢的语言。</span></p>\n',
  url: '/tools/translate'
}])
const router = useRouter();
const startGame = (targetPage: string) => {
  // 使用 router.push 导航到指定页面
  if (targetPage.startsWith('/')) router.push(targetPage);
  else window.location.href = targetPage;
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

.game-content {
  height: 13vh;
  overflow-y: auto;
}
</style>