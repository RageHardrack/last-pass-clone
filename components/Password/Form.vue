<script setup lang="ts">
import { v4 } from "uuid";
import { Form as ValidationForm } from "vee-validate";

import { PasswordSchema } from "~~/schemas";

const { closeModal } = useModal();

const handleSubmit = async (values) => {
  try {
    await useFetch("/api/new-password-card", {
      method: "POST",
      body: {
        id: v4(),
        url: values.url,
        name: values.name,
        username: values.username,
        password: values.password,
      },
    });
    closeModal();
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <ValidationForm
    @submit="handleSubmit"
    :validation-schema="PasswordSchema"
    class="flex flex-col space-y-4 overflow-hidden bg-white"
  >
    <header
      class="flex items-center justify-between w-full px-3 py-2 text-white bg-red-600"
    >
      <p class="text-sm">New Password</p>

      <h2 class="text-3xl hidden md:block">LastPass</h2>

      <button @click.prevent="closeModal">
        <IconCrossSvg class="w-6 h-6 text-white" />
      </button>
    </header>

    <section class="flex flex-col flex-1 px-4 space-y-4">
      <Input label="URL:" name="url" placeholder="Add the website here" />

      <Input label="Name:" name="name" placeholder="Website's name" />

      <Input label="Username:" name="username" placeholder="Your username" />

      <InputPassword
        label="Password:"
        name="password"
        placeholder="Create a password"
      />

      <PasswordOptions />
    </section>

    <footer class="flex justify-end w-full gap-4 p-2">
      <ButtonOutlined @click.prevent="closeModal" type="button">
        Cancel
      </ButtonOutlined>
      <Button type="submit">Save</Button>
    </footer>
  </ValidationForm>
</template>
