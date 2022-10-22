<script setup lang="ts">
import { v4 } from "uuid";
import { IPassword } from "~~/interfaces";

const { closeModal } = useModal();
const newCard = reactive<IPassword>({
  id: "",
  url: "",
  name: "",
  username: "",
  password: "",
});

const handleSubmit = async () => {
  try {
    newCard.id = v4();
    await useFetch("/api/password-cards", {
      method: "POST",
      body: newCard,
    });
    closeModal();

    newCard.id = "";
    newCard.url = "";
    newCard.name = "";
    newCard.username = "";
    newCard.password = "";
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col space-y-4 overflow-hidden bg-white"
  >
    <header
      class="flex items-center justify-between w-full px-3 py-2 text-white bg-red-600"
    >
      <p class="text-sm">New Password</p>

      <h2 class="text-3xl">LastPass</h2>

      <button @click.prevent="closeModal"><IconCrossSvg class="w-6 h-6 text-white" /></button>
    </header>

    <section class="flex flex-col flex-1 p-4 space-y-4">
      <div class="flex flex-col w-full">
        <label for="url" class="font-semibold">URL:</label>
        <input
          id="url"
          type="text"
          v-model="newCard.url"
          placeholder="Add the website here"
          class="w-full px-2 py-1 border border-gray-400 rounded"
        />
      </div>

      <div class="flex flex-col">
        <label for="name" class="font-semibold">Name:</label>
        <input
          id="name"
          type="text"
          v-model="newCard.name"
          placeholder="Website's name"
          class="w-full px-2 py-1 border border-gray-400 rounded"
        />
      </div>

      <div class="flex flex-col">
        <label for="username" class="font-semibold">Username:</label>
        <input
          id="username"
          type="text"
          v-model="newCard.username"
          placeholder="Your username"
          class="w-full px-2 py-1 border border-gray-400 rounded"
        />
      </div>

      <div class="flex flex-col">
        <label for="password" class="font-semibold">Password:</label>
        <input
          id="password"
          type="password"
          v-model="newCard.password"
          placeholder="Create a password"
          class="w-full px-2 py-1 border border-gray-400 rounded"
        />
      </div>
    </section>

    <footer class="flex justify-end w-full gap-4 p-2">
      <ButtonOutlined @click.prevent="closeModal" type="button">
        Cancel
      </ButtonOutlined>
      <Button type="submit">Save</Button>
    </footer>
  </form>
</template>
