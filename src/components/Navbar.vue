<script setup>
import logo from "../assets/jeje-logo.png";
</script>

<template>
  <nav class="bg-white border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between">
      <router-link
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          :src="logo"
          alt="Transport Shipment Tracker Logo"
          class="h-48 w-auto"
        />
      </router-link>
    </div>
  </nav>
</template>
