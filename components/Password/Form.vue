<script setup lang="ts">
import { v4 } from "uuid";
import { useField, useForm } from "vee-validate";

import { PasswordSchema } from "~~/schemas";

const { closeModal } = useModal();

const { handleSubmit, resetForm } = useForm({
  validationSchema: PasswordSchema,
});

const { value: url, errorMessage: urlError } = useField<string>("url", "", {
  initialValue: "",
});
const { value: name, errorMessage: nameError } = useField<string>("name", "", {
  initialValue: "",
});
const { value: username, errorMessage: usernameError } = useField<string>(
  "username",
  "",
  { initialValue: "" }
);
const { value: password, errorMessage: passwordError } = useField<string>(
  "password",
  "",
  { initialValue: "" }
);

const onSubmit = handleSubmit(async () => {
  try {
    await useFetch("/api/new-password-card", {
      method: "POST",
      body: {
        id: v4(),
        url: url.value,
        name: name.value,
        username: username.value,
        password: password.value,
      },
    });
    closeModal();
    resetForm({
      values: {
        id: "",
        url: "",
        name: "",
        username: "",
        password: "",
      },
    });
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <form
    @submit.prevent="onSubmit"
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
      <Input
        label="URL:"
        name="url"
        placeholder="Add the website here"
        v-model="url"
        :error="urlError"
      />

      <Input
        label="Name:"
        name="name"
        placeholder="Website's name"
        v-model="name"
        :error="nameError"
      />

      <Input
        label="Username:"
        name="username"
        placeholder="Your username"
        v-model="username"
        :error="usernameError"
      />

      <InputPassword
        label="Password:"
        name="password"
        placeholder="Create a password"
        v-model="password"
        :error="passwordError"
      />

      <PasswordOptions v-model="password" />
    </section>

    <footer class="flex justify-end w-full gap-4 p-2">
      <ButtonOutlined @click.prevent="closeModal" type="button">
        Cancel
      </ButtonOutlined>
      <Button type="submit">Save</Button>
    </footer>
  </form>
</template>
