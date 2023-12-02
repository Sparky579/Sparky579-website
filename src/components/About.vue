<template>
    <div class="center-text1">
      <h1>友链：百度</h1>
      <p>百度是中国最大的搜索引擎和互联网科技公司之一，提供各种在线服务，包括搜索、新闻、地图、贴吧等。</p>
      <p>你可以点击下面的按钮访问百度网站：</p>
      <a href="https://www.baidu.com" target="_blank" class="baidu-link">访问百度</a>
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
  