<template>
  <section id="skills" class="section py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
        <i class="fas fa-tools text-indigo-600 dark:text-indigo-400 mr-2"></i> 
        Skills
      </h2>
      <p class="mb-8 text-gray-600 dark:text-gray-300">
        Here are some of the technologies and tools I work with regularly.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(category, index) in skillCategories" 
             :key="index"
             class="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 
                    shadow-md border border-gray-300 dark:border-gray-600 
                    transform transition duration-300 
                    hover:shadow-xl hover:scale-105 
                    hover:border-indigo-600 dark:hover:border-indigo-400">
          <div class="text-3xl text-indigo-600 dark:text-indigo-400 mb-4">
            <i :class="category.icon"></i>
          </div>
          <h3 class="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            {{ category.title }}
          </h3>
          <ul class="space-y-2">
            <li v-for="skill in category.skills" 
                :key="skill.name"
                class="text-gray-700 dark:text-gray-300 flex items-center justify-center space-x-2 
                       group hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
              <i :class="skill.icon" class="text-indigo-500 dark:text-indigo-400 
                                          group-hover:text-indigo-600 dark:group-hover:text-indigo-300"></i>
              <span>{{ skill.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: 'fas fa-code',
    skills: [
      { name: 'HTML', icon: 'fab fa-html5' },
      { name: 'CSS', icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'React', icon: 'fab fa-react' }
    ]
  },
  {
    title: 'Backend Development',
    icon: 'fas fa-server',
    skills: [
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express.js', icon: 'fas fa-cogs' },
      { name: 'MySQL', icon: 'fas fa-database' },
      { name: 'MongoDB', icon: 'fas fa-database' }
    ]
  },
  {
    title: 'Other Tools',
    icon: 'fas fa-tools',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'GitHub', icon: 'fab fa-github' },
      { name: 'Version Control', icon: 'fas fa-code-branch' },
      { name: 'Cloud Services', icon: 'fas fa-cloud' }
    ]
  }
]
</script>

<style scoped>
/* Optional: Add smooth transition for color changes */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
</style>