<script setup lang="ts">
const emits = defineEmits(["pressButton"]);

const clicked = () => emits("pressButton");
</script>

<template>
  <button
    @click.prevent="clicked"
    class="flex items-center justify-center px-6 py-2 transition duration-300 border border-red-600 rounded-lg cursor-pointer hover:text-white hover:opacity-95 hover:bg-red-400"
  >
    <slot />
  </button>
</template>
