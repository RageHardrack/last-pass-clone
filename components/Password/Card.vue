<script setup lang="ts">
import { IPassword } from "~~/interfaces";

interface Props {
  card: IPassword;
}

const { card } = defineProps<Props>();
</script>

<template>
  <article
    class="flex flex-col p-4 space-y-4 border border-gray-400 rounded-lg shadow-lg transition-all hover:scale-105 duration-300 ease-in-out"
  >
    <section class="flex-1 flex items-center justify-center">
      <IconLaptopSvg class="w-16 h-16 text-gray-500" />
    </section>

    <footer class="flex flex-col gap-y-1">
      <h3 class="font-semibold">{{ card.name }}</h3>
      <p class="text-gray-600 font-light">{{ card.username }}</p>
    </footer>
  </article>
</template>
