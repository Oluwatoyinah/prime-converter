<script setup>
import ConverterBox from './components/ConverterBox.vue'
</script>

<template>
  <main class="p-3 h-screen w-screen bg-[#10190a]">
    <div>
      <h1 class="font-bold text-[30px] -tracking-[1px]">
        <span class="text-white italic">Prime</span
        ><span class="text-neutral-400">Converter.</span>
      </h1>
    </div>

    <div
      class="min-h-[70vh] border border-white rounded bg-white converter-content"
    >
      <ConverterBox />
    </div>
  </main>
</template>
