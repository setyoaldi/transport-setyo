<script setup>
import { ref } from "vue";
import {
  useVueTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/vue-table";
import Body from "./Body.vue";
import Header from "./Header.vue";

import Pagination from "./Pagination.vue";
import Search from "./Search.vue";

const props = defineProps({
  data: Array,
  columns: Array,
});

const data = ref(props.data);
const sorting = ref([]);
const filter = ref("");

const table = useVueTable({
  data: data.value,
  columns: props.columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  state: {
    get sorting() {
      return sorting.value;
    },
    get globalFilter() {
      return filter.value;
    },
  },
  onSortingChange: (updaterOrValue) => {
    sorting.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(sorting.value)
        : updaterOrValue;
  },
});
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <Search v-model="filter" />
          <table class="min-w-full divide-y divide-gray-300">
            <Header :table="table" />
            <Body :table="table" />
          </table>
        </div>
      </div>
      <div class="mt-8">
        Page {{ table.getState().pagination.pageIndex + 1 }} of
        {{ table.getPageCount() }} -
        {{ table.getFilteredRowModel().rows.length }} results
      </div>
      <Pagination :table="table" />
    </div>
  </div>
</template>
