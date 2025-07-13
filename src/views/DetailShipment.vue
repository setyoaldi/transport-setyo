<script setup>
import { onMounted, computed, watch, ref } from "vue";
import Loading from "../components/Loading.vue";
import { useShipmentStore } from "../store/useShipmentStore";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const shipmentStore = useShipmentStore();
const selectedTransporter = ref("");
const showError = ref(false);

onMounted(() => {
  shipmentStore.loadShipmentById(props.id);
  shipmentStore.loadTransporters();
});

watch(
  () => shipmentStore.selectedShipment,
  (shipment) => {
    selectedTransporter.value = shipment?.assignedTransporter?.id ?? "";
  },
  { immediate: true }
);

const statusClass = computed(() => {
  const status = shipmentStore.selectedShipment?.status;
  return (
    {
      Assigned: "bg-green-100 text-green-800",
      "Not Assigned": "bg-red-100 text-red-800",
    }[status] ?? "bg-gray-100 text-gray-800"
  );
});

function handleAssign() {
  if (!selectedTransporter.value) {
    showError.value = true;
    return;
  }

  showError.value = false;
  shipmentStore.assignTransporterToShipment(selectedTransporter.value);
}
</script>

<template>
  <div class="p-4">
    <div
      v-if="shipmentStore.loading"
      class="flex justify-center items-center min-h-[300px]"
    >
      <Loading />
    </div>
    <div
      v-else-if="shipmentStore.selectedShipment"
      class="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-md mt-10"
    >
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">Shipment Detail</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DetailField
          label="Shipment ID"
          :value="shipmentStore.selectedShipment.id"
        />
        <DetailField label="Status">
          <span
            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
            :class="statusClass"
          >
            {{ shipmentStore.selectedShipment.status }}
          </span>
        </DetailField>

        <DetailField
          label="Origin"
          :value="shipmentStore.selectedShipment.origin"
        />
        <DetailField
          label="Destination"
          :value="shipmentStore.selectedShipment.destination"
        />

        <DetailField
          class="md:col-span-2"
          label="Route"
          :value="shipmentStore.selectedShipment.route"
        />

        <DetailField
          label="Vehicle Type"
          :value="shipmentStore.selectedShipment.vehicleType"
        />
        <DetailField
          label="Assigned Transporter"
          :value="
            shipmentStore.selectedShipment.assignedTransporter?.name || '-'
          "
        />
      </div>
      <div
        v-if="shipmentStore.transporters.length"
        class="mt-6 flex flex-col sm:flex-row gap-6"
      >
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Assign Transporter
          </label>
          <select
            v-model="selectedTransporter"
            :class="[
              'w-full px-4 py-2 text-sm bg-white border rounded-lg shadow-sm focus:outline-none transition',
              showError
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500',
            ]"
          >
            <option disabled value="">Select transporter</option>
            <option
              v-for="transporter in shipmentStore.transporters"
              :key="transporter.id"
              :value="transporter.id"
            >
              {{ transporter.name }}
            </option>
          </select>
          <p v-if="showError" class="text-sm text-red-600 mt-1">
            Transporter wajib dipilih.
          </p>
        </div>

        <div class="flex self-end gap-x-1">
          <button
            @click="handleAssign"
            class="inline-flex items-center px-4 py-1.5 text-sm font-medium text-white bg-green-600 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition cursor-pointer"
          >
            Assign
          </button>
          <button
            @click="$router.back()"
            class="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-red-500 mt-10">Shipment not found.</div>
  </div>
</template>

<script>
export default {
  components: {
    DetailField: {
      props: {
        label: String,
        value: String,
      },
      template: `
        <div :class="$attrs.class">
          <p class="text-sm text-gray-500">{{ label }}</p>
          <p class="text-base font-medium text-gray-900"><slot>{{ value }}</slot></p>
        </div>
      `,
    },
  },
};
</script>
