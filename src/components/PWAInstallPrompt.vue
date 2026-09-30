<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-6"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-6"
  >
    <div
      v-show="showInstallPrompt"
      class="fixed bottom-20 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm z-50
             bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl
             p-4 flex items-center gap-4"
      role="dialog"
      aria-label="Install this app"
    >
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-neutral-100">Install deno solution</p>
        <p class="text-xs text-neutral-400 mt-0.5">Add it to your home screen for quick access.</p>
      </div>

      <div class="flex items-center gap-2 shrink-0">
        <button
          class="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-neutral-100 transition duration-300"
          @click="dismiss"
        >
          Later
        </button>
        <button
          class="px-3.5 py-1.5 text-xs font-medium bg-brand-500 text-white rounded-lg hover:bg-brand-400 transition duration-300"
          @click="install"
        >
          Install
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const DISMISS_KEY = 'deno-install-dismissed'
const showInstallPrompt = ref(false)
let deferredPrompt = null

const dismiss = () => {
  showInstallPrompt.value = false
  localStorage.setItem(DISMISS_KEY, 'true')
}

const install = async () => {
  if (!deferredPrompt) return

  deferredPrompt.prompt()
  const { outcome } = await deferredPrompt.userChoice
  deferredPrompt = null
  showInstallPrompt.value = false

  if (outcome === 'accepted') {
    localStorage.setItem(DISMISS_KEY, 'true')
  }
}

const handleBeforeInstallPrompt = (event) => {
  event.preventDefault()
  deferredPrompt = event

  if (!localStorage.getItem(DISMISS_KEY)) {
    showInstallPrompt.value = true
  }
}

const handleAppInstalled = () => {
  deferredPrompt = null
  showInstallPrompt.value = false
  localStorage.setItem(DISMISS_KEY, 'true')
}

onMounted(() => {
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  window.addEventListener('appinstalled', handleAppInstalled)
})

onUnmounted(() => {
  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  window.removeEventListener('appinstalled', handleAppInstalled)
})
</script>
