<template>
  <section id="hero" class="section bg-gray-50 text-center py-20">
    <div class="container mx-auto px-4">
      <!-- Profile Image -->
      <div class="mb-6">
        <img 
          src="../assets/myself.png" 
          alt="Muhammad Amirul Rashideen"
          class="w-32 h-32 rounded-full mx-auto shadow-md transform transition duration-300 hover:scale-110 hover:shadow-lg"
        />
      </div>

      <!-- Name and Title -->
      <h2 class="text-4xl font-extrabold text-gray-800">
        Hi, I'm Muhammad Amirul Rashideen
      </h2>

      <p class="mt-4">
        IT enthusiast interest in IoT, Software and Hardware
      </p>

      <!-- Social Links -->
      <div class="mt-6 flex justify-center space-x-4">
        <a href="https://linkedin.com/in/muhd-amirul-rashideen-zaidi-65682015a/" 
           title="LinkedIn" 
           target="_blank"
           class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-500">
          <i class="fab fa-linkedin-in"></i>
        </a>
        
        <a href="https://github.com/myruldeen" 
           title="Github" 
           target="_blank"
           class="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-700">
          <i class="fab fa-github"></i>
        </a>
        
        <a href="https://drive.google.com/file/d/1exSnCRh-O1PAFCi9pynZsNdiZAg_OLmX/view" 
           title="Resume" 
           target="_blank"
           class="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-green-500">
          <i class="fas fa-file-alt"></i>
        </a>
      </div>

      <!-- Contact Button -->
      <a href="#contact" 
         class="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-500">
        Get in Touch
      </a>
    </div>
  </section>
</template>

<script setup>
// No script needed for this version
</script>