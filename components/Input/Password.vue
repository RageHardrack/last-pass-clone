<script setup lang="ts">
interface Props {
  modelValue: string;
  label?: string;
  name: string;
  placeholder?: string;
  error?: string;
}

const isShowPassword = ref(false);

const { modelValue } = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const val = ref(modelValue);

const handleInput = () => emit("update:modelValue", val.value);
</script>

<template>
  <label :for="name" v-if="label" class="flex flex-col w-full">
    <p class="font-semibold">{{ label }}</p>

    <span class="flex gap-1">
      <input
        :id="name"
        :type="isShowPassword ? 'text' : 'password'"
        :name="name"
        v-model="val"
        @input="handleInput"
        :placeholder="placeholder"
        class="w-full px-2 py-1 border border-gray-400 rounded"
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

    <p v-if="error" class="p-2 text-red-400">
      {{ error }}
    </p>
  </label>
</template>
