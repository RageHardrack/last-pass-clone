<script setup lang="ts">
</script>

<template>
  <Teleport to="body">
    <Overlay>
      <div
        class="fixed z-50 w-11/12 overflow-hidden max-w-7xl"
      >
        <slot />
      </div>
    </Overlay>
  </Teleport>
</template>
