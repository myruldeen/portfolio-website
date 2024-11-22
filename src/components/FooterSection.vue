<template>
  <footer class="bg-gray-800 text-white py-8 dark:bg-gray-900">
    <div class="container mx-auto px-4 text-center">
      <p>&copy; {{ currentYear }} Muhammad Amirul Rashideen. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>