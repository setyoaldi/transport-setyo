import { defineStore } from "pinia";
import { ref } from "vue";
import { getShipById, getShips } from "../services/ships";
import { getTransporters } from "../services/transporter";
import { useToast } from "vue-toast-notification";

const toast = useToast();

export const useShipmentStore = defineStore("shipment", () => {
  const shipments = ref([]);
  const transporters = ref([]);
  const selectedShipment = ref(null);
  const loading = ref(false);

  async function loadShipments() {
    loading.value = true;
    try {
      const result = await getShips();
      console.log("🚚 Shipments received:", result);
      shipments.value = result;
    } catch (error) {
      console.error("❌ Error fetching shipments:", error);
    } finally {
      loading.value = false;
    }
  }

  async function loadShipmentById(id) {
    loading.value = true;
    try {
      selectedShipment.value = await getShipById(id);
    } finally {
      loading.value = false;
    }
  }

  async function loadTransporters() {
    transporters.value = await getTransporters();
  }

  async function assignTransporterToShipment(transporterId) {
    if (!selectedShipment.value) return;

    const transporter = transporters.value.find((t) => t.id === transporterId);
    if (!transporter) return;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const isSuccess = Math.random() < 0.7;

    if (isSuccess) {
      selectedShipment.value.assignedTransporter = transporter;
      selectedShipment.value.status = "Assigned";
      toast.success("Transporter successfully assigned!");
    } else {
      toast.error("Failed to assign transporter. Please try again.");
    }
  }

  return {
    shipments,
    transporters,
    selectedShipment,
    loading,
    loadShipments,
    loadShipmentById,
    loadTransporters,
    assignTransporterToShipment,
  };
});
