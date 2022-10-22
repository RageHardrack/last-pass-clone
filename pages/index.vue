<script setup lang="ts">
const { isOpen } = useModal();

const { data: cards } = await useFetch("/api/password-cards", {
  watch: [isOpen],
});
</script>

<template>
  <section class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
    <PasswordCard v-for="card in cards" :card="card" :key="card.id" />
  </section>
</template>
