<script setup>

import Cards from "./Cards.vue";
import WhiteCard from "./WhiteCard.vue";
import pinia from "./store/store.js";
import basicNodes from "./store/basicStore.js";
let useStore = basicNodes(pinia);
const changeChoice = (index) => {
  useStore.choice = index;
};
</script>

<template>
  <div>
    <div v-for="(deck, index) in useStore.decks">
      <div class="circle" :class="{ 'blue': useStore.choice == index }" @click="changeChoice(index)"></div>
    </div>
  </div>
</template>

<style scoped>
.circle {
  width: 50px;
  height: 50px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
}

.blue {
  background-color: blue;
}
</style>