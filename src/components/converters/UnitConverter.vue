<script setup>
import {
  CONVERSION_RATIO,
  UNIT_CONVERSION_GROUP,
  UNIT_CONVERSION_TYPES,
} from '@/constants'
import { convertTemperature } from '@/utils'
import { computed, reactive, ref, watch } from 'vue'
import PlainInput from '../form/PlainInput.vue'
import SelectInput from '../form/SelectInput.vue'

let unitGroup = ref('')
let conversionType = ref('')
let conversionInfo = reactive({
  from: 0,
  to: 0,
  conversion_ratio: 0,
})

let fromVal = ref(0)

// Reset conversion type input when the conversion group changes
watch(unitGroup, async () => {
  conversionType.value = ''
})

watch(conversionType, () => {
  // Reseting the from value when the conversion type changes
  fromVal.value = ''

  if (conversionType.value) {
    updateConversionInfo()
  }
})

function updateConversionInfo() {
  const selectedConversionGroupArr = UNIT_CONVERSION_GROUP[unitGroup.value]

  if (!selectedConversionGroupArr) return

  const selectedConversion = selectedConversionGroupArr.find(
    el => el.value === conversionType.value,
  )

  if (selectedConversion) {
    const { from, to } = selectedConversion
    conversionInfo.from = from
    conversionInfo.to = to
    conversionInfo.conversion_ratio =
      CONVERSION_RATIO[conversionType.value] || 0
  }
}

const calculatedVal = computed(() => {
  if (unitGroup.value === 'temperature') {
    const TEMPERATURE_CALCULATION = convertTemperature(
      Number(fromVal.value),
      conversionType.value,
    )
    return TEMPERATURE_CALCULATION.toFixed(2)
  }
  
  const OTHER_CALCULATION =
    Number(fromVal.value) * Number(conversionInfo.conversion_ratio)
  return OTHER_CALCULATION.toFixed(2)
})
</script>

<template>
  <div class="p-2 py-5">
    <div>
      <h3
        class="bg-green-200 w-fit p-1 sm:py-2 px-4 rounded-full text-[14px] font-semibold text-neutral-600"
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
          <PlainInput
            :label="conversionInfo.from"
            v-model="fromVal"
            type="number"
          />
        </div>

        <div>
          <label class="block text-[13px] text-neutral-600 mb-1" for="label">
            Value in {{ conversionInfo.to }}
          </label>
          <div class="rounded bg-neutral-900 p-2 text-white w-max">
            <span class="text-[30px] mr-1 font-bold text-neutral-300">
              {{ calculatedVal }}
            </span>
            <span class="text-[15px] sm:text-[20px] italic">{{
              conversionInfo.to
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
