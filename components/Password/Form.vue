<script setup lang="ts">
import { v4 } from "uuid";
import { Form as ValidationForm } from "vee-validate";
import { useDatabaseStore } from "~~/stores/database";

import { PasswordSchema } from "~~/schemas";

const { closeModal } = useModal();
const store = useDatabaseStore();
const router = useRouter();

const isFavoriteCard = ref(false);

const handleSubmit = async (values) => {
  try {
    const body = {
      id: v4(),
      url: values.url,
      name: values.name,
      username: values.username,
      password: values.password,
      notes: values.notes,
      isFav: isFavoriteCard.value,
    };
    store.addPasswordCard(body);
    closeModal();
    router.push("/");
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

      <h2 class="hidden text-3xl md:block">LastPass</h2>

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

      <InputTextarea label="Notes:" name="notes" placeholder="Write here" />

      <PasswordOptions />
    </section>

    <footer class="flex items-center justify-between w-full p-2">
      <div class="flex gap-4">
        <button title="Add Favorite" @click.prevent="isFavoriteCard = !isFavoriteCard">
          <IconSolidStarSvg
            v-if="isFavoriteCard"
            class="w-8 h-8 text-yellow-600"
          />
          <IconEmptyStarSvg v-else class="w-8 h-8 text-yellow-600" />
        </button>
      </div>

      <div class="flex gap-4">
        <ButtonOutlined @click.prevent="closeModal" type="button">
          Cancel
        </ButtonOutlined>
        <Button type="submit">Save</Button>
      </div>
    </footer>
  </ValidationForm>
</template>
