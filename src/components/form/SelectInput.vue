<script setup>
const inputProp = defineProps(['label', 'modelValue', 'options'])

const emit = defineEmits(['update:modelValue'])

const updateValue = e => {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <div>
    <label class="block text-[13px] text-neutral-600 mb-1" for="label">{{
      inputProp.label
    }}</label>

    <div class="border p-2 rounded border-neutral-300 sm:w-[300px]">
      <select
        name=""
        id=""
        class="outline-none text-neutral-700 text-[13px] w-full bg-inherit"
        :value="modelValue"
        @input="updateValue"
      >
        <option value="" disabled>Select</option>
        <option v-for="option in inputProp.options" :value="option.value">
          {{ option.name }}
        </option>
      </select>
    </div>
  </div>
</template>
