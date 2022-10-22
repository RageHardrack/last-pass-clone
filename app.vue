<script setup lang="ts">
const { isOpen, openModal } = useModal();

const { data: cards } = await useFetch("/api/password-cards", {
  watch: [isOpen],
});


</script>

<template>
  <main class="container py-8 mx-auto">
    <h1 class="text-2xl font-bold">LastPass Clone</h1>

    <section class="grid grid-cols-3 gap-4 p-4">
      <Card v-for="card in cards" :card="card" :key="card.id" />
    </section>

    <RoundedButton @click="openModal" />

    <Modal v-if="isOpen">
      <Form />
    </Modal>
  </main>
</template>
