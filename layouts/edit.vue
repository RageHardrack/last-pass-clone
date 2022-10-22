<script setup lang="ts">

useHead({
  title: "LastPass Clone - Edit Password",
});
</script>

<template>
  <section class="flex flex-col justify-between min-h-screen">
    <Nav />

    <main class="container flex items-center justify-center flex-1 py-4 overflow-hidden md:py-8">
      <slot />
    </main>
  </section>
</template>
