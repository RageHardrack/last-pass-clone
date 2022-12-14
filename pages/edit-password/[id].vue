<script setup lang="ts">
import { PasswordSchema } from "~~/schemas";
import { Form as ValidationForm } from "vee-validate";
import { useDatabaseStore } from "~~/stores/database";

const route = useRoute();
const router = useRouter();

definePageMeta({
  layout: "edit",
});

const id = route.params.id as string;
const store = useDatabaseStore();

const isFavoriteCard = ref(store.getPasswordCardById(id).isFav);

const handleCancel = () => {
  router.back();
};

const handleRemove = () => {
  store.removePasswordCard(id);
  router.push("/");
};

const handleSubmit = (values) => {
  const body = {
    id,
    url: values.url,
    name: values.name,
    username: values.username,
    password: values.password,
    notes: values.notes,
    isFav: isFavoriteCard.value,
  };
  store.updatePasswordCard(body);
  router.push("/");
};
</script>

<template>
  <ValidationForm
    @submit="handleSubmit"
    :validation-schema="PasswordSchema"
    :initialValues="store.getPasswordCardById(id)"
    class="flex flex-col w-full max-w-lg space-y-4 overflow-hidden bg-white border border-gray-400"
  >
    <header
      class="flex items-center justify-between w-full px-3 py-2 text-white bg-red-600"
    >
      <p class="text-sm">Edit Password</p>

      <h2 class="hidden text-3xl md:block">LastPass</h2>
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

    <footer class="flex justify-between w-full gap-2 p-2">
      <div class="flex gap-2">
        <button
          title="Add Favorite"
          @click.prevent="isFavoriteCard = !isFavoriteCard"
        >
          <IconSolidStarSvg
            v-if="isFavoriteCard"
            class="w-8 h-8 text-yellow-600"
          />
          <IconEmptyStarSvg v-else class="w-8 h-8 text-yellow-600" />
        </button>

        <button title="Delete" @click.prevent="handleRemove">
          <IconTrashSvg class="w-8 h-8 text-red-600" />
        </button>
      </div>

      <div class="flex gap-2">
        <ButtonOutlined @click.prevent="handleCancel" type="button">
          Cancel
        </ButtonOutlined>
        <Button type="submit">Save</Button>
      </div>
    </footer>
  </ValidationForm>
</template>
