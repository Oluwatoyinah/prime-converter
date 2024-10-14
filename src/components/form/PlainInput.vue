<script setup>
const inputProp = defineProps(['label', 'modelValue'])

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
    <input
      type="text"
      class="border p-2 rounded outline-none border-neutral-300 text-neutral-700 text-[13px] w-full sm:w-[300px]"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>
