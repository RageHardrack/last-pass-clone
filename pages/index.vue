<script setup lang="ts">
const { isOpen } = useModal();

const { data: cards } = await useFetch("/api/password-cards", {
  watch: [isOpen],
});
</script>

<template>
  <section class="grid grid-cols-4 gap-4">
    <Card v-for="card in cards" :card="card" :key="card.id" />
  </section>
</template>
