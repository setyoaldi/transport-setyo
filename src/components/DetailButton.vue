<script setup>
import { RouterNames } from "../constant/route";
import { EyeIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  id: Number,
});
</script>
<template>
  <router-link
    class="text-indigo-600 hover:text-indigo-500"
    :to="{
      name: RouterNames.DETAIL_SHIPMENT,
      params: { id: props.id },
    }"
    title="Detail Shipment"
  >
    <EyeIcon class="w-5 h-5 text-blue-500" />
  </router-link>
</template>
