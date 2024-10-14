<script setup>
import { UNIT_CONVERSION_GROUP, UNIT_CONVERSION_TYPES } from '@/constants'
import { ref } from 'vue'
import SelectInput from '../form/SelectInput.vue'

const unitGroup = ref('')
const conversionType = ref('')
</script>

<template>
  <div class="p-2">
    <div>
      <h3
        class="bg-green-200 w-fit p-2 px-3 rounded-full text-[14px] font-semibold text-neutral-600"
      >
        Unit Conversion
      </h3>
    </div>

    <div class="px-5">
      <div class="mt-5">
        <SelectInput
          label="What type of unit conversion do you want?"
          v-model="unitGroup"
          :options="UNIT_CONVERSION_TYPES"
        />
      </div>

      <div v-if="unitGroup" class="mt-5">
        <SelectInput
          label="Conversion Type"
          v-model="conversionType"
          :options="UNIT_CONVERSION_GROUP[unitGroup]"
        />
      </div>
    </div>
  </div>
</template>
