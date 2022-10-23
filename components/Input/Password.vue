<script setup lang="ts">
import { useField } from "vee-validate";

interface Props {
  label?: string;
  name: string;
  placeholder?: string;
}

const isShowPassword = ref(false);
const isPasswordCopied = ref(false);

const { newPassword, updateNewPassword } = useGeneratePassword();

const props = defineProps<Props>();
const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  setValue,
} = useField<string>(name, "", {
  initialValue: newPassword.value,
});

const onInputChange = (e: any) => {
  isPasswordCopied.value = false;
  updateNewPassword(e.target.value);
  handleChange(e);
};

const copyPassword = () => {
  if (newPassword.value.length < 6) return;

  navigator.clipboard.writeText(newPassword.value).then(() => {
    isPasswordCopied.value = true;
  });
};

watch(
  () => newPassword.value,
  () => {
    isPasswordCopied.value = false;
    setValue(newPassword.value);
  }
);
</script>

<template>
  <label :for="name" v-if="label" class="flex flex-col w-full">
    <p class="font-semibold">{{ label }}</p>

    <span class="flex gap-1">
      <input
        :id="name"
        :type="isShowPassword ? 'text' : 'password'"
        :name="name"
        :value="inputValue"
        :placeholder="placeholder"
        @input="onInputChange"
        @blur="handleBlur"
        class="w-full px-2 py-1 border border-gray-400 rounded"
        :class="{ 'border-red-600': Boolean(errorMessage) }"
      />

      <div class="flex gap-2">
        <button
          :title="`${isPasswordCopied ? 'Copied!' : 'Copy'}`"
          @click.prevent="copyPassword"
        >
          <IconPasteSvg
            :class="`w-8 h-8 ${
              isPasswordCopied ? 'text-green-600' : 'text-gray-400'
            }`"
          />
        </button>

        <button
          :title="`${isShowPassword ? 'Hide Password' : 'Show Password'}`"
          @click.prevent="isShowPassword = !isShowPassword"
        >
          <IconHideSvg v-if="isShowPassword" class="w-8 h-8 text-gray-400" />
          <IconShowSvg v-else class="w-8 h-8 text-gray-400" />
        </button>
      </div>
    </span>

    <p v-if="errorMessage" class="p-2 text-red-400">
      {{ errorMessage }}
    </p>
  </label>
</template>
