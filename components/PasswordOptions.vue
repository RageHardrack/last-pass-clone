<script setup lang="ts">
const allowSpecialChars = ref(true);
const allowNumericChars = ref(true);
const passwordLength = ref(8);

const { generateNewPassword } = useGeneratePassword();

const handleGeneratePassword = () => {
  generateNewPassword({
    allowSpecialChars,
    allowNumericChars,
    passwordLength,
  });
};
</script>

<template>
  <section
    class="flex flex-col items-center justify-between w-full gap-4 md:flex-row"
  >
    <div class="flex flex-col items-start justify-center flex-1 space-y-4">
      <h2 class="text-xl font-semibold text-gray-700">Advanced Options</h2>

      <ul class="flex flex-col w-10/12 space-y-2 text-gray-700">
        <li>
          <input
            type="range"
            v-model="passwordLength"
            :min="6"
            :max="30"
            class="w-full"
          />
          <label class="flex items-center justify-center w-full p-1">
            <p class="flex-1 w-full font-semibold text-center">
              Password Length:
            </p>
            <input
              type="number"
              class="px-2 py-1 text-center border border-gray-400 rounded w-min"
              v-model.number="passwordLength"
              :min="6"
              :max="30"
            />
          </label>
        </li>

        <li>
          <label class="flex items-center space-x-2">
            <p class="font-semibold">Special Characters:</p>
            <input type="checkbox" v-model="allowSpecialChars" />
          </label>
        </li>

        <li>
          <label class="flex items-center space-x-2">
            <p class="font-semibold">Numeric Characters:</p>
            <input type="checkbox" v-model="allowNumericChars" />
          </label>
        </li>
      </ul>
    </div>

    <div class="flex items-center justify-center">
      <button
        @click.prevent="handleGeneratePassword"
        class="flex px-3 py-1 font-semibold text-white transition duration-500 ease-in-out bg-red-600 rounded-lg hover:bg-opacity-90"
      >
        Generate
      </button>
    </div>
  </section>
</template>
