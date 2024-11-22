<template>
  <section id="hero" class="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-700 dark:from-black dark:to-gray-900">
    <!-- Meteor Shower -->
    <div class="meteor-shower">
      <div v-for="n in 20" :key="n" 
           class="meteor"
           :style="{ 
             '--delay': `${Math.random() * 10}s`,
             '--top': `${Math.random() * 90}%`,
             '--left': `${Math.random() * 100}%`,
           }">
      </div>
    </div>

    <!-- Stars Background -->
    <div class="stars-container">
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
          <div class="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-50"></div>
          <img 
            src="../assets/myself.png" 
            alt="Muhammad Amirul Rashideen"
            class="w-32 h-32 rounded-full relative z-10 border-4 border-white/30 
                   shadow-xl transform transition duration-300 
                   hover:scale-110 hover:border-indigo-400/50"
          />
        </div>

        <!-- Name and Title -->
        <h2 class="text-4xl font-extrabold text-white mb-4 
                   animate-fadeIn [animation-delay:200ms]">
          Hi, I'm Muhammad Amirul Rashideen
        </h2>

        <p class="mt-4 text-gray-300 text-xl mb-8
                  animate-fadeIn [animation-delay:400ms]">
          IT enthusiast interest in IoT, Software and Hardware
        </p>

        <!-- Social Links -->
        <div class="mt-6 flex justify-center space-x-4 
                    animate-fadeIn [animation-delay:600ms]">
          <a href="https://linkedin.com/in/muhd-amirul-rashideen-zaidi-65682015a/" 
             title="LinkedIn" 
             target="_blank"
             class="w-10 h-10 bg-white/10 backdrop-blur-sm text-white rounded-full 
                    flex items-center justify-center shadow-lg 
                    hover:bg-indigo-500 hover:scale-110 
                    transform transition duration-300">
            <i class="fab fa-linkedin-in"></i>
          </a>
          
          <a href="https://github.com/myruldeen" 
             title="Github" 
             target="_blank"
             class="w-10 h-10 bg-white/10 backdrop-blur-sm text-white rounded-full 
                    flex items-center justify-center shadow-lg 
                    hover:bg-indigo-500 hover:scale-110 
                    transform transition duration-300">
            <i class="fab fa-github"></i>
          </a>
          
          <a href="https://drive.google.com/file/d/1exSnCRh-O1PAFCi9pynZsNdiZAg_OLmX/view" 
             title="Resume" 
             target="_blank"
             class="w-10 h-10 bg-white/10 backdrop-blur-sm text-white rounded-full 
                    flex items-center justify-center shadow-lg 
                    hover:bg-indigo-500 hover:scale-110 
                    transform transition duration-300">
            <i class="fas fa-file-alt"></i>
          </a>
        </div>

        <!-- Contact Button -->
        <a href="#contact" 
           class="mt-8 inline-block px-6 py-3 bg-indigo-600/80 backdrop-blur-sm 
                  text-white rounded-lg shadow-lg hover:bg-indigo-500 
                  transform transition duration-300 hover:scale-105 
                  animate-fadeIn [animation-delay:800ms]">
          Get in Touch
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                animate-bounce text-white/70 cursor-pointer z-10">
      <i class="fas fa-chevron-down"></i>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>

<style scoped>
/* Animation keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

/* Stars */
.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: white;
  border-radius: 50%;
  opacity: 0.3;
  animation: twinkle 2s infinite;
}

/* Meteor shower */
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

/* Fade in animation classes */
.animate-fadeIn {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

/* Optional: Add glow effect to profile image */
.profile-glow {
  filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.5));
}
</style>