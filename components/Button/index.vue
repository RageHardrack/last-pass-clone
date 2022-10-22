<script setup lang="ts">
const emits = defineEmits(["pressButton"]);

const clicked = () => emits("pressButton");
</script>

<template>
  <button
    @click="clicked"
    class="flex items-center justify-center px-6 py-2 text-white transition duration-300 bg-red-600 rounded-lg cursor-pointer hover:opacity-80"
  >
    <slot />
  </button>
</template>
