<script setup lang="ts">
import {IPassword} from '~~/interfaces'

interface Props {
  card: IPassword
}

const { card } = defineProps<Props>();
</script>

<template>
  <article
    class="flex flex-col p-4 space-y-4 border border-gray-400 rounded-lg shadow-lg"
  >
    <section class="flex-1">hello</section>
    
    <footer class="flex gap-2">
      <h3>{{ card.name }}</h3>
      <p>{{ card.username }}</p>
    </footer>
  </article>
</template>
