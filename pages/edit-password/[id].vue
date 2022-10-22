<script setup lang="ts">
import { PasswordSchema } from "~~/schemas";
import { Form as ValidationForm } from "vee-validate";

const route = useRoute();
const router = useRouter();

definePageMeta({
  layout: "edit",
});

const { id } = route.params;
const {
  data: cardValues,
  pending,
  refresh,
} = await useLazyAsyncData("cardValue", () =>
  $fetch(`/api/password-card/${id}`)
);

const handleCancel = () => {
  router.back();
  refresh();
};

const handleSubmit = async (values) => {
  try {
    await useFetch(`/api/password-card/${id}`, {
      method: "PUT",
      body: {
        url: values.url,
        name: values.name,
        username: values.username,
        password: values.password,
      },
    });
    router.push("/");
    refresh();
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div>
    <h2 v-if="pending">Loading...</h2>

    <ValidationForm
      v-else
      @submit="handleSubmit"
      :validation-schema="PasswordSchema"
      :initialValues="cardValues"
      class="flex flex-col space-y-4 overflow-hidden bg-white border border-gray-400 max-w-lg w-full"
    >
      <header
        class="flex items-center justify-between w-full px-3 py-2 text-white bg-red-600"
      >
        <p class="text-sm">Edit Password</p>

        <h2 class="text-3xl hidden md:block">LastPass</h2>
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
        <ButtonOutlined @click.prevent="handleCancel" type="button">
          Cancel
        </ButtonOutlined>
        <Button type="submit">Save</Button>
      </footer>
    </ValidationForm>
  </div>
</template>
