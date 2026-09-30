<template>
  <div class="fixed top-4 left-0 right-0 z-50">
    <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
      <nav
        class="bg-neutral-900/80 backdrop-blur-md border rounded-xl shadow-sm transition-all duration-300"
        :class="scrolled ? 'border-neutral-800' : 'border-transparent bg-transparent backdrop-blur-0 shadow-none'"
      >
        <div class="px-6 lg:px-8">
          <div class="flex items-center justify-between h-14">
            <a href="#hero" class="flex items-center gap-2.5 group" aria-label="deno solution home">
              <img :src="mark.src" alt="" aria-hidden="true" width="34" height="19" class="w-[34px] h-auto shrink-0" />
              <span class="text-lg font-display font-bold tracking-tight text-neutral-100 group-hover:text-brand-300 transition-colors">
                deno<span class="text-brand-300">solution</span>
              </span>
            </a>

            <div class="hidden lg:flex items-center gap-7">
              <a
                v-for="item in menuItems"
                :key="item.link"
                :href="item.link"
                class="relative text-sm font-medium transition duration-300"
                :class="activeSection === item.link
                  ? 'text-brand-300'
                  : 'text-neutral-400 hover:text-neutral-100'"
              >
                {{ item.text }}
                <span
                  class="absolute -bottom-1 left-0 h-px bg-brand-400 transition-all duration-300"
                  :class="activeSection === item.link ? 'w-full' : 'w-0'"
                ></span>
              </a>
            </div>

            <div class="flex items-center gap-2">
              <a
                href="#contact"
                class="hidden lg:inline-flex items-center px-4 py-2 text-sm font-medium bg-brand-500 text-white rounded-xl hover:bg-brand-400 transition duration-300"
              >
                Get a Quote
              </a>
              <button
                class="lg:hidden text-neutral-400 hover:text-neutral-100 transition duration-300 p-2 -mr-2"
                :aria-expanded="isMenuOpen"
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
                @click="isMenuOpen = !isMenuOpen"
              >
                <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-4 scale-95"
    >
      <div
        v-show="isMenuOpen"
        id="mobile-menu"
        class="lg:hidden absolute left-0 right-0 top-full mt-2 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg py-4 overflow-hidden origin-top"
      >
        <div class="flex flex-col space-y-1 px-4">
          <a
            v-for="item in menuItems"
            :key="item.link"
            :href="item.link"
            class="px-3 py-2.5 rounded-lg text-base font-medium transition duration-300"
            :class="activeSection === item.link
              ? 'text-brand-300 bg-brand-500/15'
              : 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50'"
            @click="closeMenu"
          >
            {{ item.text }}
          </a>
          <a
            href="#contact"
            class="mt-2 px-3 py-2.5 text-center text-base font-medium bg-brand-500 text-white rounded-lg"
            @click="closeMenu"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navItems } from '../data/site.js'
import mark from '../assets/logo-mark.png'

const menuItems = navItems
const isMenuOpen = ref(false)
const activeSection = ref('#hero')
const scrolled = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleClickOutside = (event) => {
  const nav = event.target.closest('.fixed.top-4')
  const button = event.target.closest('button')

  if (isMenuOpen.value && !nav && !button) {
    closeMenu()
  }
}

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    closeMenu()
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 24
}

let observer

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  const links = menuItems.map((item) => item.link)
  const sections = links
    .map((link) => document.querySelector(link))
    .filter(Boolean)

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visible) {
        activeSection.value = `#${visible.target.id}`
      }
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
  )

  sections.forEach((section) => observer.observe(section))
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
  observer?.disconnect()
})
</script>
