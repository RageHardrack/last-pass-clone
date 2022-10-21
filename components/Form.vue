<script setup lang="ts">
import {v4} from 'uuid'
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
  newCard.id = v4()
  const {data} = await useFetch("/api/password-cards", {
    method: "POST",
    body: newCard,
  });
  closeModal()
};
</script>

<template>
  <section>
    <h2>Nueva Contraseña</h2>

    <div>
      <div class="flex flex-col">
        <label for="">URL:</label>
        <input
          type="text"
          v-model="newCard.url"
          placeholder="Add the website here"
        />
      </div>

      <div class="flex flex-col">
        <label for="">Name:</label>
        <input
          type="text"
          v-model="newCard.name"
          placeholder="Website's name"
        />
      </div>

      <div class="flex flex-col">
        <label for="">Username:</label>
        <input
          type="text"
          v-model="newCard.username"
          placeholder="Your username"
        />
      </div>

      <div class="flex flex-col">
        <label for="">Password:</label>
        <input
          type="password"
          v-model="newCard.password"
          placeholder="Create a password"
        />
      </div>
    </div>

    <button @click.prevent="closeModal" type="button">Cancel</button>
    <button @click="handleSubmit">Save</button>
  </section>
</template>
