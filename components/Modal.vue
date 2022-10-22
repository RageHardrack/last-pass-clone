<script setup lang="ts">
</script>

<template>
  <Teleport to="body">
    <Overlay>
    <transition name="fade">
      <div
        class="fixed z-50 w-11/12 overflow-hidden max-w-7xl"
      >
        <slot />
      </div>
    </transition>
    </Overlay>
  </Teleport>
</template>
