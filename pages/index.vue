<script setup lang="ts">
import { useDatabaseStore } from "~~/stores/database";

const store = useDatabaseStore();

const cards = computed(() => store.getPasswordCards);
</script>

<template>
  <section class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
    <PasswordCard v-for="card in cards" :card="card" :key="card.id" />
  </section>
</template>
