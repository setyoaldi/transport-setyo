<script setup>
import { FlexRender } from "@tanstack/vue-table";
defineProps({ table: Object });
</script>

<template>
  <thead>
    <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
      <th
        v-for="header in headerGroup.headers"
        :key="header.id"
        scope="col"
        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        :class="{ 'cursor-pointer select-none': header.column.getCanSort() }"
        @click="header.column.getToggleSortingHandler()?.($event)"
      >
        <FlexRender
          :render="header.column.columnDef.header"
          :props="header.getContext()"
        />
        {{ { asc: " ↑", desc: "↓" }[header.column.getIsSorted()] }}
      </th>
    </tr>
  </thead>
</template>
