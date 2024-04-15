<template>
  <div class="translation-container">
    <h1 style="color: darkblue">问答</h1>
  </div>
  <div class="translation-container">
    <el-row :gutter="35" class="translation-inside">
      <el-col :span="12">
        <el-input
            :rows="6"
            type="textarea"
            style="font-size: 24px"
            v-model="sourceText"
            placeholder="请输入文本"
        ></el-input>
      </el-col>
      <el-col :span="12">
        <div style="background-color: white; height: 96%">
        <el-text
            :rows="6"
            placeholder="回答结果"
            style="font-size: 24px"
            readonly
        >
          <template v-for="(token, index) in tokens">
            <span :style="{color: gradientColor(probs[index])}">{{token}} </span>
          </template>

        </el-text>
        </div>
      </el-col>
    </el-row>
    <el-row>

    </el-row>
    <el-button type="primary" @click="translate">提问</el-button>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {fetchQuestion} from "@/components/tools/question-logic";
const sourceText = ref('');
const answerText = ref('');
const tokens = ref([]);
const probs = ref([]);

const translate = () => {
  const regex = /\S/;
  if (regex.test(sourceText.value))
    fetchQuestion(sourceText.value, tokens, probs)
        .then(() => console.log(tokens.value, probs.value));
};
function gradientColor(value: number) {
  var hue = value * 120; // 从红色到黄色再到绿色
  var saturation = 90; // 饱和度为 100%
  var lightness = 30; // 亮度为 50%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}


</script>

<style>
.translation-container {
  margin: 20px;
}

.translation-inside * {
  margin-bottom: 7px;
}
</style>
