<script setup lang="ts"></script>

<template>
  <button
    class="flex items-center justify-center w-full px-6 py-2 text-white transition-opacity duration-300 bg-red-600 rounded-lg cursor-pointer hover:opacity-95"
  >
    <slot />
  </button>
</template>
