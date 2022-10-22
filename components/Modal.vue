<script setup lang="ts">
</script>

<template>
  <Teleport to="body">
    <Overlay>
      <div
        class="fixed z-50 w-11/12 max-w-lg overflow-hidden"
      >
        <slot />
      </div>
    </Overlay>
  </Teleport>
</template>
