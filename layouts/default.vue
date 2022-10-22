<script setup lang="ts">
const { isOpen, openModal } = useModal();

useHead({
  title: "LastPass Clone",
});
</script>

<template>
  <section class="flex flex-col justify-between min-h-screen">
    <Nav />

    <main class="container flex-1 py-4 overflow-hidden md:py-8">
      <slot />

      <Modal v-if="isOpen">
        <Form />
      </Modal>
    </main>

    <footer class="flex justify-end p-8">
      <RoundedButton @click="openModal" />
    </footer>
  </section>
</template>
