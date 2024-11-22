<template>
  <nav class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-200">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400"> <a href="#hero">Amirul__</a></h1>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
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
            <i class="fas fa-sun text-yellow-500 text-xl" v-if="isDark"></i>
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

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" 
                  class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 
                         dark:hover:text-indigo-400 focus:outline-none p-2"
                  aria-label="Toggle menu">
            <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-xl"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-show="isMenuOpen" 
             class="md:hidden absolute left-0 right-0 top-16 bg-white dark:bg-gray-800 
                    shadow-lg rounded-b-lg py-2 border-t dark:border-gray-700">
          <div class="flex flex-col space-y-2 px-4">
            <a v-for="item in menuItems" 
               :key="item.link"
               :href="item.link"
               @click="closeMenu"
               class="py-2 px-4 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700
                      text-gray-700 dark:text-gray-300 hover:text-indigo-600
                      dark:hover:text-indigo-400 transition duration-300">
              {{ item.text }}
            </a>
            
            <div class="flex items-center justify-between py-2 px-4">
              <!-- Dark Mode Toggle in Mobile Menu -->
              <button @click="toggleDarkMode" 
                      class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                             transition duration-300 flex items-center"
                      :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
                <i class="fas fa-sun text-yellow-500" v-if="isDark"></i>
                <i class="fas fa-moon text-gray-600" v-else></i>
                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {{ isDark ? 'Light Mode' : 'Dark Mode' }}
                </span>
              </button>

              <!-- GitHub Link in Mobile Menu -->
              <a href="https://github.com/myruldeen" 
                 target="_blank"
                 class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700
                        text-gray-600 dark:text-gray-400 
                        hover:text-indigo-600 dark:hover:text-indigo-400 
                        transition duration-300 flex items-center">
                <i class="fab fa-github"></i>
                <span class="ml-2 text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuItems = [
  { text: 'About', link: '#about' },
  { text: 'Projects', link: '#projects' },
  { text: 'Skills', link: '#skills' },
  { text: 'Services', link: '#business' },
  { text: 'Contact', link: '#contact' }
]

// Menu state
const isMenuOpen = ref(false)

// Dark mode state
const isDark = ref(false)

// Toggle dark mode
const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('darkMode', isDark.value ? 'dark' : 'light')
}

// Close menu
const closeMenu = () => {
  isMenuOpen.value = false
}

// Handle clicks outside of the menu
const handleClickOutside = (event) => {
  const nav = event.target.closest('nav')
  const isHamburgerButton = event.target.closest('button')
  
  if (isMenuOpen.value && !nav && !isHamburgerButton) {
    closeMenu()
  }
}

// Handle window resize
const handleResize = () => {
  if (window.innerWidth >= 768) {
    closeMenu()
  }
}

// Initialize dark mode
onMounted(() => {
  // Dark mode initialization
  const savedMode = localStorage.getItem('darkMode')
  if (savedMode) {
    isDark.value = savedMode === 'dark'
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    }
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
    if (prefersDark) {
      document.documentElement.classList.add('dark')
    }
  }

  // Add event listeners
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  // Remove event listeners
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* Optional: Add backdrop blur for mobile menu */
.mobile-menu-backdrop {
  backdrop-filter: blur(4px);
}

/* Ensure smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>