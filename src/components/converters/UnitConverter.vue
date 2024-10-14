<script setup>
import { UNIT_CONVERSION_GROUP, UNIT_CONVERSION_TYPES } from '@/constants'
import { ref } from 'vue'
import SelectInput from '../form/SelectInput.vue'
import PlainInput from '../form/PlainInput.vue'

const unitGroup = ref('')
const conversionType = ref('')
</script>

<template>
  <div class="p-2 py-5">
    <div>
      <h3
        class="bg-green-200 w-fit p-1 sm:p-2 px-3 rounded-full text-[14px] font-semibold text-neutral-600"
      >
        Unit Conversion
      </h3>
    </div>

    <div class="sm:px-5">
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

      <div v-show="unitGroup && conversionType" class="mt-5">
        <div class="mb-3">
          <PlainInput label="inches" type="number" />
        </div>

        <div>
          <label class="block text-[13px] text-neutral-600 mb-1" for="label">
            Value in meters
          </label>
          <div class="rounded bg-neutral-900 p-2 text-white">
            <span class="text-[30px]"> 3000009 </span>
            <span class="text-[20px] italic">meters</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
