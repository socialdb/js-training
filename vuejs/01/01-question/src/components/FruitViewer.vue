<script setup>
defineProps({
  fruits: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <p v-if="!fruits.length">
    未選択
  </p>
  <ul v-else>
    <li
      v-for="f in fruits"
      :key="f"
    >
      {{ f }}
    </li>
  </ul>
</template>

