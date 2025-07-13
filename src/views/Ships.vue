<script setup>
import { onMounted, h } from "vue";
import Loading from "../components/Loading.vue";
import { format } from "date-fns";
import DetailButton from "../components/DetailButton.vue";
import TableData from "../components/table/TableData.vue";
import { useShipmentStore } from "../store/useShipmentStore";

const shipmentStore = useShipmentStore();

const columnsShipment = [
  {
    accessorKey: "id",
    header: "ID",
    enableSorting: false,
  },
  {
    accessorFn: (row) => `${row.origin} - ${row.destination}`,
    header: "Origin / Destination",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "createdAt",
    header: "Created at",
    cell: (info) => format(new Date(info.getValue()), "d MMM, yyyy"),
  },
  {
    accessorKey: "view",
    header: "",
    cell: ({ row }) => {
      console.log("🚨 Row Data:", row.original);
      return h(DetailButton, { id: row.original.id });
    },
  },
];

onMounted(() => {
  shipmentStore.loadShipments();
});
</script>

<template>
  <div class="p-4">
    <div
      v-if="shipmentStore.loading"
      class="flex justify-center items-center min-h-[300px]"
    >
      <Loading />
    </div>

    <TableData
      v-else
      :data="shipmentStore.shipments"
      :columns="columnsShipment"
    />
  </div>
</template>
