<script setup lang="ts">
import { useField } from "vee-validate";

interface Props {
  value?: string;
  label?: string;
  name: string;
  placeholder?: string;
}

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

    <textarea
      :id="name"
      :name="name"
      :value="inputValue"
      rows="3"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
      class="w-full px-2 py-1 border border-gray-400 rounded"
      :class="{ 'border-red-600': Boolean(errorMessage) }"
    />

    <p v-if="errorMessage" class="p-2 text-red-400">
      {{ errorMessage }}
    </p>
  </label>
</template>
