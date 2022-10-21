<script setup lang="ts">
const { isOpen, openModal } = useModal();
console.log(isOpen);

const { data: cards } = await useFetch("/api/password-cards", {
  watch: [isOpen],
});
</script>

<template>
  <main class="container mx-auto py-8">
    <h1 class="text-2xl font-bold">LastPass Clone</h1>

    <section class="grid grid-cols-3 gap-4 p-4">
      <Card v-for="card in cards" :card="card" :key="card.id" />
    </section>

    <button @click="openModal">Add</button>

    <Form v-if="isOpen" />
  </main>
</template>
