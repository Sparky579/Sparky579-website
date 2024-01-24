<template>
    <div class="center-text">
      <head>
        <!-- 此处放置头部内容 -->
      </head>
      <body>
        <!-- Load page -->
        <div class="animationload">
          <div class="loader"></div>
        </div>
        <!-- End load page -->
  
        <!-- Content Wrapper -->
        <div id="wrapper">
          <div class="container">
            <!-- Switcher -->
            <!-- End Switcher -->
  
            <!-- Dark version -->
            <div id="dark" class="row text-center">
              <div class="info">
                <img src="//pkfrom.github.io/404/assets/img/404-dark.png" alt="404 error" />
              </div>
            </div>
            <!-- End Dark version -->
  
            <!-- Light version -->
            <div id="light" class="row text-center">
              <!-- Info -->
              <div class="info">
                <img src="//pkfrom.github.io/404/assets/img/404-light.gif" alt="404 error" />
                <!-- end Rabbit -->
                <p>The page you are looking for was moved, removed,<br />
                  renamed or might never existed.</p>
                <!--<a href="#" class="btn btn-brown">Contact Us</a>-->
              </div>
              <!-- end Info -->
            </div>
            <!-- End Light version -->
          </div>
          <!-- end container -->
        </div>
        <!-- end Content Wrapper -->
  
        <!-- Scripts -->
      </body>
    </div>
  </template>
  
  <style>
.center-text {
  text-align: center; 
  display: flex;
  align-items: center; /* 设置文本垂直居中 */
  justify-content: center;
  height: 100%; /* 确保元素高度充满其容器 */
  min-height: 30vh;
  flex-direction: column;
}
  </style>
  
  <script setup lang="ts">
  // 此处放置组件的逻辑
  </script>
  
  <script lang="ts">
  // 此处放置外部脚本的引用
//   import 'https://code.jquery.com/jquery-2.2.0.min.js';
//   import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js';
//   import 'https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.6.0/jquery.nicescroll.min.js';
  
  // 在Vue 3中，你可以在setup中使用外部脚本
  import { onMounted } from 'vue';
  
  onMounted(() => {
    // 在组件挂载后执行外部脚本
    // import('//pkfrom.github.io/404/assets/js/modernizr.custom.js');
    // import('//pkfrom.github.io/404/assets/js/404.min.js');
  });
  </script>
  