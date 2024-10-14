<script setup>
import { CONVERSION_OPTIONS } from '@/constants'
import { ref } from 'vue'
import SelectInput from './form/SelectInput.vue'
import UnitConverter from './converters/UnitConverter.vue'
import CurrencyConverter from './converters/CurrencyConverter.vue'
import LanguageConverter from './converters/LanguageConverter.vue'

const conversion_type = ref('units')

const CONVERTERS = {
  units: UnitConverter,
  currency: CurrencyConverter,
  language: LanguageConverter,
}
</script>

<template>
  <div class="h-full max-w-[1280px] mx-auto px-2">
    <div class="h-full flex flex-col lg:flex-row">
      <div
        class="xl:w-full xl:max-w-[500px] lg:h-full p-3 sm:p-10 grid lg:place-content-center"
      >
        <div class="mb-8">
          <h2 class="text-[26px] sm:text-[36px] font-bold">Welcome</h2>
          <p class="text-neutral-500 text-[13px]">Convert with ease.</p>
        </div>
        <div>
          <SelectInput
            label="What do you want to convert?"
            v-model="conversion_type"
            :options="CONVERSION_OPTIONS"
          />
        </div>
      </div>

      <div
        class="h-max lg:h-full py-3 flex-grow flex lg:items-center p-3 sm:px-10 lg:p-0"
      >
        <div
          class="border min-h-[400px] rounded md:border-neutral-400 flex-grow"
        >
          <component :is="CONVERTERS[conversion_type]" />
        </div>
      </div>
    </div>
  </div>
</template>
