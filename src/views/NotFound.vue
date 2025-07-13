<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8"
  >
    <img
      src="https://illustrations.popsy.co/gray/web-error.svg"
      alt="Not Found"
      class="w-72 mb-6"
    />
    <h1 class="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h1>
    <p class="text-gray-600 mb-6">
      Sorry, the page you are looking for doesn't exist.
    </p>
    <router-link
      to="/"
      class="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
    >
      Go to Home
    </router-link>
  </div>
</template>
