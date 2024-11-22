<template>
  <section id="projects" class="section py-16 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="section-header text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-white flex items-center justify-center gap-3">
          <i class="fas fa-project-diagram text-indigo-600 mr-2"></i>
          Projects
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mt-4">
          Here are some of the projects that I builds.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(project, index) in projects" 
             :key="index"
             class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden
                    hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
          <!-- Project Image -->
          <div class="relative overflow-hidden group h-48">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition duration-300 
                     group-hover:scale-110"
            />
            <!-- Overlay with links -->
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4
                        opacity-0 group-hover:opacity-100 transition duration-300">
              <a :href="project.liveLink" 
                 target="_blank"
                 class="p-2 bg-white rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white
                        transition duration-300"
                 title="View Live">
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a :href="project.githubLink" 
                 target="_blank"
                 class="p-2 bg-white rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white
                        transition duration-300"
                 title="View Code">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ project.description }}
            </p>
            <!-- Technologies Used -->
            <div class="flex flex-wrap gap-2">
              <span v-for="(tech, techIndex) in project.technologies" 
                    :key="techIndex"
                    :class="tech.class"
                    class="px-3 py-1 rounded-full text-sm">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Projects data
const projects = [
  {
    title: 'Smart Agriculture & Data Analytics',
    description: 'Monitor soil temperature, humidity and moisture in real-time',
    image: '/projects/smart-agriculture/1.png',
    liveLink: '#',
    githubLink: 'https://github.com/myruldeen/smart-agriculture',
    technologies: [
      { 
        name: 'Ionic', 
        class: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
      },
      { 
        name: 'Angular', 
        class: 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300'
      },
      { 
        name: 'Node.js', 
        class: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
      },
      { 
        name: 'MongoDB', 
        class: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300'
      }
    ]
  },
  {
    title: 'Mobile App Solar Monitoring',
    description: 'Monitor solar DC voltage, current, ambient, temperature & humidity in real-time',
    image: '/projects/solar-monitoring/2.png',
    liveLink: '#',
    githubLink: 'https://github.com/myruldeen/solar-monitoring',
    technologies: [
    { 
        name: 'Ionic', 
        class: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
      },
      { 
        name: 'Angular', 
        class: 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300'
      },
      { 
        name: 'Node.js', 
        class: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
      },
      { 
        name: 'MongoDB', 
        class: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300'
      }
    ]
  },
  {
    title: 'IoT Weather Station',
    description: 'Monitor weather using ESP32 and MQTT to display current value in real-time using Nodered and Grafana.',
    image: '/projects/weather-monitoring/1.png',
    liveLink: 'https://nodered.denoodev.com/ui',
    githubLink: 'https://github.com/myruldeen/soilmas-noderedflow',
    technologies: [
      { 
        name: 'Nodered', 
        class: 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300'
      },
      { 
        name: 'Grafana', 
        class: 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300'
      },
      { 
        name: 'InfluxDB', 
        class: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300'
      },
      
      { 
        name: 'Node.js', 
        class: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
      },
      
      { 
        name: 'Docker', 
        class: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
      },
    ]
  }
]
</script>

<style scoped>
/* Optional: Add image loading animation */
.project-image-loading {
  position: relative;
  overflow: hidden;
}

.project-image-loading::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>