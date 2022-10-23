<script setup lang="ts">
const emits = defineEmits(["pressButton"]);

const clicked = () => emits("pressButton");
</script>

<template>
  <button
    @click="clicked"
    class="flex items-center justify-center p-2 text-white transition-all duration-300 bg-red-700 rounded-full cursor-pointer hover:opacity-80 shadow-lg hover:-translate-y-1"
    title="Add new Password"
  >
    <IconPlusSvg class="w-8 h-8 text-white" />
  </button>
</template>
