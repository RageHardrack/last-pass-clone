<script setup lang="ts">
const allowSpecialChars = ref(true);
const allowNumericChars = ref(true);
const passwordLength = ref(8);

const isShowOptions = ref(false);

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
  <section class="flex flex-col items-center justify-between w-full gap-4 px-2">
    <header
      class="flex items-center gap-2 cursor-pointer"
      @click="isShowOptions = !isShowOptions"
    >
      <h2 class="text-xl font-semibold text-gray-700">Advanced Options</h2>

      <IconChevronSvg
        class="w-6 h-6 transition-all duration-300 rotate-180"
        v-if="isShowOptions"
      />
      <IconChevronSvg class="w-6 h-6" v-else />
    </header>

    <Transition name="from-above">
      <section
        v-show="isShowOptions"
        class="flex flex-col items-center justify-between w-full gap-4 md:flex-row"
      >
        <ul
          class="flex flex-col items-center justify-center flex-1 w-10/12 space-y-4 text-gray-700 md:items-start"
        >
          <li>
            <input
              type="range"
              v-model="passwordLength"
              :min="6"
              :max="30"
              class="w-full"
            />
            <label class="flex items-center justify-center w-full gap-4 p-1">
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

        <footer class="flex items-center justify-center">
          <button
            @click.prevent="handleGeneratePassword"
            class="flex px-3 py-1 font-semibold text-white transition duration-500 ease-in-out bg-red-600 rounded-lg hover:bg-opacity-90"
          >
            Generate
          </button>
        </footer>
      </section>
    </Transition>
  </section>
</template>
