<script setup lang="ts">
interface Props {
  modelValue: string;
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const val = ref(props.modelValue);

const handleInput = () => emit("update:modelValue", val.value);
</script>

<template>
  <label :for="name" v-if="label" class="flex flex-col w-full">
    <p class="font-semibold">{{ label }}</p>

    <input
      :id="name"
      :type="type || 'text'"
      :name="name"
      v-model="val"
      @input="handleInput"
      :placeholder="placeholder"
      class="w-full px-2 py-1 border border-gray-400 rounded"
    />

    <p v-if="error" class="p-2 text-red-400">
      {{ error }}
    </p>
  </label>
</template>
