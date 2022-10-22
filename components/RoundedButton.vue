<script setup lang="ts">
const emits = defineEmits(["pressButton"]);

const clicked = () => emits("pressButton");
</script>

<template>
  <button
    @click="clicked"
    class="flex items-center justify-center p-2 text-white transition-opacity duration-300 bg-red-700 rounded-full cursor-pointer hover:opacity-95"
    title="Add new Password"
  >
    <IconPlusSvg class="w-8 h-8 text-white" />
  </button>
</template>
