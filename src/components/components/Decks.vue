<script setup>

import Cards from "./Cards.vue";
import {ref} from "vue";
import WelcomeItem from "./WelcomeItem.vue";
import WhiteCard from "./WhiteCard.vue";
import pinia from "./store/store.js";
import basicNodes from "./store/basicStore.js";
import {cows} from "./interacting.js";
let useStore = basicNodes(pinia);
const decks = ref([
    [12], [23, 34], [55], [77]
])
</script>

<template>
  <div>
    <div v-for="(deck, index) in useStore.decks">
      <div style="margin-top: 170px"></div>
      <div v-for="(card, index) in deck">
        <WhiteCard v-if="index !== deck.length - 1" style="margin-top: -180px"></WhiteCard>
      </div>
      <Cards :number="deck[deck.length - 1]" style="margin-top: -180px" :sum="deck.reduce((a, b) => a+cows(b), 0)"></Cards>
    </div>
  </div>
</template>

<style scoped>

</style>