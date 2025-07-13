<script setup>
const modelValue = defineModel();
</script>

<template>
  <div class="my-4 relative max-w-sm">
    <input
      type="text"
      class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Search shipment..."
      v-model="modelValue"
    />
  </div>
</template>
