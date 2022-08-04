<script setup>
import {ref} from "vue";
import MyCheckboxes from "./components/MyCheckboxes.vue";
import FruitViewer from "./components/FruitViewer.vue";

const fruits = ["りんご", "バナナ", "ぶどう"]
const checkedFruits = ref([]);

</script>

<template>
  <h3>フルーツを選択</h3>
  <MyCheckboxes
    v-model="checkedFruits"
    :options="fruits"
  />
  <h3>選択されたフルーツ</h3>
  <FruitViewer :fruits="checkedFruits" />
</template>
