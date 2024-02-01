<template>
  <div class="center-text1">
    <h1>友链：洛谷</h1>
    <p>
      洛谷创办于2013年,致力于为参加noip、noi、acm的选手提供清爽、快捷的编程体验。它拥有在线测题系统、强大的社区、在线学习功能。很多教程内容由各位oiers提供的,内容广泛。</p>
    <p>你可以点击下面的按钮访问洛谷：</p>
    <a href="https://www.luogu.com.cn" target="_blank" class="baidu-link">访问洛谷</a>
  </div>
</template>

<style>
/* 可以在这里添加样式 */
h1 {
  color: #333;
}

.center-text1 {
  text-align: center;
  display: flex;
  align-items: center; /* 设置文本垂直居中 */
  justify-content: center;
  height: 100%; /* 确保元素高度充满其容器 */
  min-height: 99vh;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 30px;
}

p {
  font-size: 18px;
  margin-bottom: 20px;
}

.baidu-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3385ff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

.baidu-link:hover {
  background-color: #1e57d5;
}
</style>
<script setup lang="ts"></script>
<script>
export default {
  name: 'BaiduIntroduction',
};
</script>
  