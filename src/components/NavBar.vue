<template>
    <nav class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-200">
      <div class="container mx-auto px-2 py-2 flex items-center justify-between">
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Amirul</h1>
        </div>
  
        <div class="flex items-center space-x-4">
          <a v-for="item in menuItems" 
             :key="item.link"
             :href="item.link"
             class="px-3 py-1 rounded-full hover:bg-indigo-600 hover:text-white 
                    dark:text-gray-300 dark:hover:text-white 
                    transition duration-300">
            {{ item.text }}
          </a>
          
          <!-- Dark Mode Toggle -->
          <button @click="toggleDarkMode" 
                  class="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                         transition duration-300"
                  :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <!-- Sun icon for light mode -->
            <i class="fas fa-sun text-yellow-500 text-xl" v-if="isDark"></i>
            <!-- Moon icon for dark mode -->
            <i class="fas fa-moon text-gray-600 text-xl" v-else></i>
          </button>
  
          <a href="https://github.com/myruldeen" 
             target="_blank"
             class="ml-4 text-gray-600 dark:text-gray-400 
                    hover:text-indigo-600 dark:hover:text-indigo-400 
                    transition duration-300">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const menuItems = [
    { text: 'About', link: '#about' },
    { text: 'Projects', link: '#projects' },
    { text: 'Contact', link: '#contact' }
  ]
  
  // Dark mode state
  const isDark = ref(false)
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    // Update document class
    document.documentElement.classList.toggle('dark')
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDark.value ? 'dark' : 'light')
  }
  
  // Initialize dark mode based on user preference
  onMounted(() => {
    // Check localStorage first
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode) {
      isDark.value = savedMode === 'dark'
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      }
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      }
    }
  })
  </script>