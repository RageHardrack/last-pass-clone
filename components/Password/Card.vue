<script setup lang="ts">
import { IPassword } from "~~/interfaces";

interface Props {
  card: IPassword;
}

const router = useRouter();

const { card } = defineProps<Props>();
</script>

<template>
  <article
    class="relative flex flex-col p-4 space-y-4 transition-all duration-300 ease-in-out border border-gray-400 rounded-lg shadow-lg cursor-pointer hover:scale-105"
    @click="router.push(`edit-password/${card.id}`)"
  >
    <IconSolidStarSvg
      v-if="card.isFav"
      class="absolute w-6 h-6 text-yellow-500 right-2 top-2"
    />

    <section class="flex items-center justify-center flex-1">
      <IconLaptopSvg class="w-16 h-16 text-gray-500" />
    </section>

    <footer class="flex flex-col gap-y-1">
      <h3 class="font-semibold">{{ card.name }}</h3>
      <p class="font-light text-gray-600">{{ card.username }}</p>
    </footer>
  </article>
</template>
