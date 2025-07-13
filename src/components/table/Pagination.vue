<script setup>
defineProps({ table: Object });
</script>

<template>
  <div class="flex items-center justify-between mt-8 flex-wrap gap-4">
    <div class="flex gap-2">
      <button
        class="cursor-pointer px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.setPageIndex(0)"
        :disabled="!table.getCanPreviousPage()"
      >
        ⏮ First
      </button>

      <button
        class="cursor-pointer px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.previousPage()"
        :disabled="!table.getCanPreviousPage()"
      >
        ◀ Prev
      </button>
    </div>

    <div class="text-sm text-gray-600">
      Page
      <span class="font-medium">{{
        table.getState().pagination.pageIndex + 1
      }}</span>
      of <span class="font-medium">{{ table.getPageCount() }}</span>
    </div>

    <div class="flex gap-2">
      <button
        class="cursor-pointer px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.nextPage()"
        :disabled="!table.getCanNextPage()"
      >
        Next ▶
      </button>

      <button
        class="cursor-pointer px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.setPageIndex(table.getPageCount() - 1)"
        :disabled="!table.getCanNextPage()"
      >
        Last ⏭
      </button>
    </div>
  </div>
</template>
