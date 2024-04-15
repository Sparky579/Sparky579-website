<script setup lang="ts">
import { ref } from 'vue';
import {fetchTranslate} from "@/components/tools/translate-logic";
import {fetchChat} from "@/components/tools/gpt-logic";
const input = ref("");
const output = ref("");
const send = () => {
  const regex = /\S/;
  if (regex.test(input.value))
    fetchChat(input.value, output);
    input.value = "";
};
</script>

<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <el-main style="min-height: 90%" class="column">
        <div style="font-size: 42px">
          机器人回复
        </div>
        <div style="font-size: 24px; color: black">
          {{ output }}
        </div>

      </el-main>
      <el-footer class="mid">
        <el-input v-model="input"  :autosize="{ maxRows: 2 }" size="large"  style="width: 80%" placeholder="Please input"
        type="textarea"/>
        <el-button type="primary" round style="margin-left: 20px;" @click="send">发送</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout{
  height: 100%;
}
.mid {
  display: flex;
  justify-content: center;
  align-items: center;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>