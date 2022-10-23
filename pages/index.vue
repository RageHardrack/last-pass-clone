<script setup lang="ts">
import { useDatabaseStore } from "~~/stores/database";

const store = useDatabaseStore();
const search = ref("");
const isLoading = ref(true);
const filter = ref<"all" | "favs">("all");

const handleFilterChange = (option: "all" | "favs") => (filter.value = option);

const cards = computed(
  () =>
    store.getPasswordCards
      .filter((card) => {
        return card.name.toLowerCase().includes(search.value.toLowerCase());
      })
      .filter((card) => {
        if (filter.value === "favs") {
          return card.isFav;
        }
        return card;
      }) ?? store.getPasswordCards
);

setTimeout(() => {
  isLoading.value = false;
}, 2000);
</script>

<template>
  <section class="flex flex-col space-y-6">
    <header
      class="flex flex-col items-center justify-between gap-4 md:flex-row"
    >
      <InputSearch v-model="search" placeholder="Search my vault" />

      <div class="flex overflow-hidden border border-gray-400 rounded">
        <button
          :class="`w-20 ${filter === 'all' ? 'text-white bg-red-600' : ''}`"
          @click="handleFilterChange('all')"
        >
          All
        </button>
        <button
          :class="`w-20 ${filter === 'favs' ? 'text-white bg-red-600' : ''}`"
          @click="handleFilterChange('favs')"
        >
          My Favs
        </button>
      </div>
    </header>

    <h2 v-if="isLoading">Loading...</h2>

    <TransitionGroup
      v-else
      tag="section"
      name="fade"
      class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"
    >
      <PasswordCard v-for="card in cards" :card="card" :key="card.id" />
    </TransitionGroup>
  </section>
</template>
