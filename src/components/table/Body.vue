<script setup>
import { FlexRender } from "@tanstack/vue-table";

defineProps({ table: Object });
</script>

<template>
  <tbody class="divide-y divide-gray-200">
    <tr v-for="row in table.getRowModel().rows" :key="row.id">
      <td
        v-for="cell in row.getVisibleCells()"
        :key="cell.id"
        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
      >
        <FlexRender
          :render="cell.column.columnDef.cell"
          :props="cell.getContext()"
        />
      </td>
    </tr>
  </tbody>
</template>
