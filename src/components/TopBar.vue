
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
      <el-menu-item index="4" @click.native="$router.push('/login')">
        登录/注册
      </el-menu-item>
      <el-text type="success" style="margin-left: 20px; margin-right: 20px; margin-bottom: 4px">未登录</el-text>
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
import { ref } from 'vue'

const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
  
<style>
.flex-grow {
    flex-grow: 1;
}
</style>