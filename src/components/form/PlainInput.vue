<script setup>
const inputProp = defineProps(['label', 'modelValue', 'type'])

const emit = defineEmits(['update:modelValue'])

const updateValue = e => {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <div>
    <label class="block text-[13px] text-neutral-600 mb-1" for="label">
      Value in {{ inputProp.label }}
    </label>
    <div class="flex">
      <input
        :type="inputProp.type || 'text'"
        class="border p-2 rounded-l outline-none border-neutral-300 text-neutral-700 text-[30px] w-full sm:w-[300px]"
        :value="modelValue"
        @input="updateValue"
      />
      <div class="bg-neutral-900 rounded-r text-white p-6">
        {{ inputProp.label }}
      </div>
    </div>
  </div>
</template>
