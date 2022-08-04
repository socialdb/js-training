<script setup>
const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);

// ここを書きましょう！

</script>

<template>
  <div>
    ここを書きましょう！
  </div>
</template>
