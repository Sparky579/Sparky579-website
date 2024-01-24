<template>
  <div class="translation-container">
    <h1 style="color: darkblue">翻译器 By Sparky</h1>
  </div>
  <div class="translation-container">
    <el-row :gutter="0" class="translation-inside">
      <div>
        <el-checkbox v-model="checked1" label="修复可能的错误" size="large" border />
        <el-checkbox v-model="checked2" label="通俗易懂的翻译" size="large" border />
      </div>
    </el-row>
    <el-row :gutter="35" class="translation-inside">
      <el-col :span="12">
        <el-select v-model="sourceLang" placeholder="请选择源语言">
          <el-option label="自动检测" value="auto"></el-option>
          <el-option label="中文" value="chinese"></el-option>
          <el-option label="英文" value="english"></el-option>
          <el-option label="日文" value="japanese"></el-option>
          <el-option label="法语" value="french"></el-option>
          <el-option label="德语" value="german"></el-option>
        </el-select>

      </el-col>
      <el-col :span="12">
        <el-select v-model="targetLang" placeholder="请选择目标语言">
          <el-option label="中文" value="chinese"></el-option>
          <el-option label="英文" value="english"></el-option>
          <el-option label="日文" value="japanese"></el-option>
          <el-option label="法语" value="french"></el-option>
          <el-option label="德语" value="german"></el-option>
        </el-select>

      </el-col>
    </el-row>
    <el-row :gutter="35" class="translation-inside">
    <el-col :span="12">
      <el-input
          :rows="6"
          type="textarea"
          v-model="sourceText"
          placeholder="请输入文本"
      ></el-input>
    </el-col>
    <el-col :span="12">
      <el-input
          :rows="6"
          type="textarea"
          v-model="translatedText"
          placeholder="翻译结果"
          readonly
      >

      </el-input>
    </el-col>
    </el-row>
    <el-row>

    </el-row>
    <el-button type="primary" @click="translate">翻译</el-button>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {fetchTranslate} from "@/components/tools/translate-logic";
const sourceLang = ref('auto');
const targetLang = ref('english');
const sourceText = ref('');
const translatedText = ref('');
const checked1 = ref(null);
const checked2 = ref(null);

const translate = () => {
  const regex = /\S/;
  if (regex.test(sourceText.value))
    fetchTranslate(sourceText.value, sourceLang.value, targetLang.value, translatedText, checked1.value, checked2.value);
};


</script>

<style>
.translation-container {
  margin: 20px;
}

.translation-inside * {
  margin-bottom: 7px;
}
</style>
