<template>
  <Transition name="fade">
    <div
      class="fixed inset-0 z-30 flex flex-col items-center justify-center overflow-hidden"
    >
      <div class="fixed inset-0 z-40 w-screen h-screen bg-black/70" />

      <slot />
    </div>
  </Transition>
</template>
