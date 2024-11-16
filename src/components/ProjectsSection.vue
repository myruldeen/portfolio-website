<template>
  <section id="projects" class="section py-16 bg-gray-50">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
      <p class="mb-8">Here are some of the projects that I builds.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(project, index) in projects" 
             :key="index"
             class="bg-white rounded-lg shadow-md p-6">
          <img :src="project.image" 
               :alt="project.title"
               class="rounded-lg mb-4 w-full h-48 object-cover" />
          
          <h3 class="text-lg font-bold text-gray-800">{{ project.title }}</h3>
          <p class="text-gray-600">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of the project and its features.',
    image: '/api/placeholder/400/300'
  },
  {
    title: 'Project 2',
    description: 'A brief description of the project and its features.',
    image: '/api/placeholder/400/300'
  },
  {
    title: 'Project 3',
    description: 'A brief description of the project and its features.',
    image: '/api/placeholder/400/300'
  }
]
</script>