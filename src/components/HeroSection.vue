<template>
  <section class="min-h-screen relative overflow-hidden transition-colors duration-700"
           :class="isDark ? 'bg-gradient-to-b from-gray-900 to-gray-700' : 'bg-gradient-to-b from-blue-200 to-blue-400'">
    <!-- Meteor Shower (Dark Mode) -->
    <div v-if="isDark" class="meteor-shower">
      <div v-for="n in 20" :key="`meteor-${n}`" 
           class="meteor"
           :style="{ 
             '--delay': `${Math.random() * 10}s`,
             '--top': `${Math.random() * 90}%`,
             '--left': `${Math.random() * 100}%`,
           }">
      </div>
    </div>

    <!-- Moving Clouds (Light Mode) -->
    <div v-else class="clouds-container">
      <div v-for="n in 8" :key="`cloud-${n}`" 
           class="cloud"
           :style="{
             '--delay': `${Math.random() * 10}s`,
             '--duration': `${20 + Math.random() * 10}s`,
             '--top': `${Math.random() * 60}%`,
             '--scale': `${0.5 + Math.random() * 0.5}`
           }">
      </div>
    </div>

    <!-- Stars (Dark Mode) -->
    <div v-if="isDark" class="stars-container">
      <div v-for="n in 50" :key="`star-${n}`" 
           class="star"
           :style="{ 
             top: `${Math.random() * 100}%`,
             left: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 5}s`
           }">
      </div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 relative z-10 h-screen flex items-center justify-center">
      <div class="text-center">
        <!-- Profile Image -->
        <div class="mb-6 relative inline-block">
          <div class="absolute inset-0 rounded-full blur-md opacity-50"
               :class="isDark ? 'bg-indigo-500' : 'bg-white'"></div>
          <img 
            src="https://via.placeholder.com/150" 
            alt="Muhammad Amirul Rashideen"
            class="w-32 h-32 rounded-full relative z-10 shadow-xl transform transition duration-300 
                   hover:scale-110"
            :class="isDark ? 'border-4 border-white/30' : 'border-4 border-white'"
          />
        </div>

        <!-- Name and Title -->
        <h2 class="text-4xl font-extrabold mb-4 transition-colors duration-300"
            :class="isDark ? 'text-white' : 'text-gray-800'">
          Hi, I'm Muhammad Amirul Rashideen
        </h2>

        <p class="mt-4 text-xl mb-8 transition-colors duration-300"
           :class="isDark ? 'text-gray-300' : 'text-gray-600'">
          IT enthusiast interest in IoT, Software and Hardware
        </p>

        <!-- Social Links -->
        <div class="mt-6 flex justify-center space-x-4">
          <a v-for="social in socialLinks"
             :key="social.title"
             :href="social.link" 
             :title="social.title" 
             target="_blank"
             class="w-10 h-10 rounded-full flex items-center justify-center shadow-lg 
                    transform transition duration-300 hover:scale-110"
             :class="isDark ? 'bg-white/10 backdrop-blur-sm text-white hover:bg-indigo-500' : 
                              'bg-white text-gray-600 hover:bg-indigo-500 hover:text-white'">
            <i :class="social.icon"></i>
          </a>
        </div>

        <!-- Contact Button -->
        <a href="#contact" 
           class="mt-8 inline-block px-6 py-3 rounded-lg shadow-lg 
                  transform transition duration-300 hover:scale-105"
           :class="isDark ? 'bg-indigo-600/80 backdrop-blur-sm text-white hover:bg-indigo-500' : 
                           'bg-indigo-500 text-white hover:bg-indigo-600'">
          Get in Touch
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
         :class="isDark ? 'text-white/70' : 'text-gray-600'">
      <i class="fas fa-chevron-down"></i>
    </div>
  </section>
</template>

<script setup>
import { useThemeStore } from '../stores/themeStore'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

const socialLinks = [
  {
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/yourusername',
    icon: 'fab fa-linkedin-in'
  },
  {
    title: 'Github',
    link: 'https://github.com/yourusername',
    icon: 'fab fa-github'
  },
  {
    title: 'Resume',
    link: 'resume.pdf',
    icon: 'fas fa-file-alt'
  }
]
</script>

<style scoped>
/* Dark mode animations */
@keyframes meteor {
  0% {
    transform: rotate(215deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(215deg) translateX(-500px);
    opacity: 0;
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Light mode animations */
@keyframes float {
  0% {
    transform: translateX(-100%) translateY(0);
  }
  100% {
    transform: translateX(100vw) translateY(0);
  }
}

/* Meteor styles */
.meteor-shower {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.meteor {
  position: absolute;
  top: var(--top);
  left: var(--left);
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, white, transparent);
  animation: meteor 3s linear infinite;
  animation-delay: var(--delay);
  transform-origin: right;
  opacity: 0;
}

.meteor::before {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: white;
  right: 0;
  top: -1px;
}

/* Cloud styles */
.clouds-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.cloud {
  position: absolute;
  top: var(--top);
  left: -200px;
  width: 200px;
  height: 60px;
  background: white;
  border-radius: 50px;
  opacity: 0.8;
  transform: scale(var(--scale));
  animation: float var(--duration) linear infinite;
  animation-delay: var(--delay);
}

.cloud::before,
.cloud::after {
  content: '';
  position: absolute;
  background: white;
  border-radius: 50%;
}

.cloud::before {
  width: 80px;
  height: 80px;
  top: -30px;
  left: 30px;
}

.cloud::after {
  width: 100px;
  height: 100px;
  top: -40px;
  left: 90px;
}

/* Star styles */
.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: white;
  border-radius: 50%;
  opacity: 0.3;
  animation: twinkle 2s infinite;
}

/* Ensure smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>