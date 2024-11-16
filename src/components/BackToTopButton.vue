<template>
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-10 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-10 opacity-0"
    >
      <button 
        v-show="showButton"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full 
               bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400
               shadow-lg hover:shadow-xl 
               flex items-center justify-center
               transform transition-all duration-300 
               hover:scale-110 hover:-translate-y-1
               focus:outline-none focus:ring-2 focus:ring-indigo-500
               group border border-indigo-100 dark:border-gray-700">
        
        <!-- Progress Circle -->
        <svg class="absolute w-full h-full -rotate-90">
          <circle
            :stroke-dasharray="`${progressPercent} 100`"
            class="text-indigo-600 dark:text-indigo-400"
            stroke-width="2"
            stroke="currentColor"
            fill="transparent"
            r="18"
            cx="24"
            cy="24"
          />
        </svg>
  
        <!-- Arrow Icon -->
        <i class="fas fa-chevron-up text-lg relative z-10 
                  group-hover:-translate-y-1 transition-transform duration-300"></i>
        
        <!-- Tooltip -->
        <span class="absolute -top-8 left-1/2 -translate-x-1/2 
                     bg-gray-800 dark:bg-gray-700 text-white 
                     px-2 py-1 rounded text-xs
                     opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300
                     whitespace-nowrap">
          Back to top
        </span>
      </button>
    </transition>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  
  const showButton = ref(false)
  const scrollThreshold = 300
  const scrollProgress = ref(0)
  
  // Calculate scroll progress percentage
  const progressPercent = computed(() => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    return ((window.scrollY / docHeight) * 100).toFixed(0)
  })
  
  const handleScroll = () => {
    showButton.value = window.scrollY > scrollThreshold
    scrollProgress.value = window.scrollY
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
  circle {
    transition: stroke-dasharray 0.3s ease;
  }
  </style>