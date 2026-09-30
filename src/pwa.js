import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    showUpdateToast(updateSW)
  },
  onOfflineReady() {
    console.log('deno solution is ready to work offline')
  }
})

function showUpdateToast(applyUpdate) {
  const existing = document.getElementById('sw-update-toast')
  if (existing) return

  const toast = document.createElement('div')
  toast.id = 'sw-update-toast'
  toast.className =
    'fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-[60] ' +
    'bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-4 ' +
    'flex items-center gap-4 text-sm text-neutral-200'

  toast.innerHTML = `
    <div class="flex-1 min-w-0">
      <p class="font-semibold text-neutral-100">Update available</p>
      <p class="text-xs text-neutral-400 mt-0.5">Reload to get the latest version.</p>
    </div>
    <div class="flex items-center gap-2 shrink-0">
      <button type="button" data-action="dismiss" class="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-neutral-100 transition">Later</button>
      <button type="button" data-action="update" class="px-3.5 py-1.5 text-xs font-medium bg-brand-500 text-white rounded-lg hover:bg-brand-400 transition">Reload</button>
    </div>
  `

  toast.querySelector('[data-action="dismiss"]').addEventListener('click', () => toast.remove())
  toast.querySelector('[data-action="update"]').addEventListener('click', () => applyUpdate(true))

  document.body.appendChild(toast)
}
