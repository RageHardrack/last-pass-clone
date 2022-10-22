<script setup lang="ts">
import { useField } from "vee-validate";

interface Props {
  value?: string;
  label?: string;
  name: string;
  placeholder?: string;
}

const isShowPassword = ref(false);

const props = defineProps<Props>();
const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField<string>(name, "", {
  initialValue: props.value,
});
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
        @input="handleChange"
        @blur="handleBlur"
        class="w-full px-2 py-1 border border-gray-400 rounded"
        :class="{ 'border-red-600': Boolean(errorMessage) }"
      />

      <button
        v-if="isShowPassword"
        @click.prevent="isShowPassword = !isShowPassword"
      >
        <IconHideSvg class="w-8 h-8 text-gray-400" />
      </button>
      <button v-else @click.prevent="isShowPassword = !isShowPassword">
        <IconShowSvg class="w-8 h-8 text-gray-400" />
      </button>
    </span>

    <p v-if="errorMessage" class="p-2 text-red-400">
      {{ errorMessage }}
    </p>
  </label>
</template>
