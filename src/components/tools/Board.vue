<template>
  <div style="display: flex; justify-content: center;">
  <div style="width: 80%; display: flex; align-items: center; justify-content: center; flex-direction: column">
    <h1>留言板</h1>
    <div class="message-container">
      <div v-for="message in messages" :key="message.id" class="message-card">
        <div class="message-content">
          <p>{{ message.sender }}</p>
          <p>{{ message.text }}</p>
        </div>
        <div class="reply-container">
          <div v-for="reply in message.replies" :key="reply.id" class="reply-card">
            <p>{{ reply.sender }}</p>
            <p>{{ reply.text }}</p>
          </div>
        </div>
        <el-form :model="newReply" class="reply-form" @submit.prevent="addReply(message.id)">
          <el-form-item>
            <el-input v-model="newReply.text" placeholder="回复留言"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit">发送回复</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-form class="message-form" @submit.prevent="addMessage">
      <el-form-item>
        <el-input v-model="newMessage.sender" placeholder="请输入您的姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="newMessage.text" placeholder="请输入留言内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">发送留言</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([]);
const newMessage = ref({ sender: '', text: '' });
const newReply = ref({ text: '' });

const addMessage = () => {
  const message = {
    id: Date.now(),
    sender: newMessage.value.sender,
    text: newMessage.value.text,
    replies: []
  };
  messages.value.push(message);
  newMessage.value.sender = '';
  newMessage.value.text = '';
};

const addReply = (messageId) => {
  const reply = {
    id: Date.now(),
    sender: '回复人',
    text: newReply.value.text
  };
  const message = messages.value.find(message => message.id === messageId);
  message.replies.push(reply);
  newReply.value.text = '';
};
</script>

<style>
.message-container {
  display: flex;
  flex-wrap: wrap;
}

.message-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 300px;
}

.reply-container {
  margin-top: 10px;
}

.reply-card {
  border: 1px solid #eee;
  padding: 5px;
  margin-top: 5px;
}

.reply-form {
  margin-top: 10px;
}

.message-form {
  margin-top: 20px;
}
</style>