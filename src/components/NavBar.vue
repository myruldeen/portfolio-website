<template>
  <div class="fixed top-4 left-0 right-0 z-50">
    <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
      <nav class="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-xl transition-colors duration-200 shadow-sm">
        <div class="px-6 lg:px-8">
          <div class="flex items-center justify-between h-14">
          <!-- Logo -->
          <a href="#hero" class="flex items-center gap-2.5 group">
            <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-500 text-neutral-950 font-display font-bold text-sm">AR</span>
            <span class="text-lg font-display font-bold tracking-tight text-neutral-100 group-hover:text-emerald-500 transition-colors">Amirul.</span>
          </a>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a v-for="item in menuItems"
               :key="item.link"
               :href="item.link"
               class="text-sm font-medium text-neutral-400 hover:text-neutral-100 transition duration-300">
              {{ item.text }}
            </a>
          </div>

          <!-- CTA + Mobile Menu Button -->
          <div class="flex items-center gap-2">
            <a href="#contact"
               class="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium bg-emerald-500 text-neutral-950 rounded-xl hover:bg-emerald-400 transition duration-300">
              Get in Touch
            </a>
            <button @click="isMenuOpen = !isMenuOpen"
                    class="md:hidden text-neutral-400 hover:text-neutral-100 transition duration-300 p-2"
                    aria-label="Toggle menu">
              <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-4 scale-95"
    >
      <div v-show="isMenuOpen" 
           class="md:hidden absolute left-0 right-0 top-full mt-2 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg py-4 overflow-hidden origin-top">
        <div class="flex flex-col space-y-4 px-6">
          <a v-for="item in menuItems" 
             :key="item.link"
             :href="item.link"
             @click="closeMenu"
             class="text-base font-medium text-neutral-400 hover:text-neutral-100 transition duration-300">
            {{ item.text }}
          </a>
        </div>
      </div>
    </transition>
    </div>
  </div>
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

// Close menu
const closeMenu = () => {
  isMenuOpen.value = false
}

// Handle clicks outside of the menu
const handleClickOutside = (event) => {
  const navbarContainer = event.target.closest('.fixed.top-4')
  const isHamburgerButton = event.target.closest('button')
  
  if (isMenuOpen.value && !navbarContainer && !isHamburgerButton) {
    closeMenu()
  }
}

// Handle window resize
const handleResize = () => {
  if (window.innerWidth >= 768) {
    closeMenu()
  }
}

// Initialize
onMounted(() => {
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
</style>