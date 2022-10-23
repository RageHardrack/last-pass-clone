<script setup lang="ts">
interface Props {
  modelValue: string;
  placeholder?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const val = ref(props.modelValue);

const handleInput = () => emit("update:modelValue", val.value);
</script>

<template>
  <div>
    <input type="search" @input="handleInput" :placeholder="placeholder" class="w-full px-2 py-1 border border-gray-400 rounded focus:border-gray-600" />
  </div>
</template>
