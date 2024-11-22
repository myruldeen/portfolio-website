<template>
    <div v-if="showInstallPrompt" 
         class="fixed bottom-4 left-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 
                flex items-center justify-between z-50 
                transform transition-transform duration-300"
         :class="{ 'translate-y-0': showInstallPrompt, 'translate-y-full': !showInstallPrompt }">
      <div class="flex items-center space-x-4">
        <div class="text-indigo-600 dark:text-indigo-400">
          <i class="fas fa-download text-xl"></i>
        </div>
        <div>
          <h3 class="font-semibold text-gray-800 dark:text-white">Install App</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300">Add to your home screen for easy access</p>
        </div>
      </div>
      <div class="flex space-x-2">
        <button @click="hideInstallPrompt" 
                class="px-3 py-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
          Later
        </button>
        <button @click="installPWA" 
                class="px-4 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Install
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const showInstallPrompt = ref(false)
  let deferredPrompt = null
  
  const hideInstallPrompt = () => {
    showInstallPrompt.value = false
    localStorage.setItem('pwaPromptDismissed', 'true')
  }
  
  const installPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        showInstallPrompt.value = false
      }
      deferredPrompt = null
    }
  }
  
  const handleBeforeInstallPrompt = (e) => {
    e.preventDefault()
    deferredPrompt = e
    
    // Show prompt if not dismissed before
    if (!localStorage.getItem('pwaPromptDismissed')) {
      showInstallPrompt.value = true
    }
  }
  
  onMounted(() => {
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  })
  
  onUnmounted(() => {
    window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  })
  </script>