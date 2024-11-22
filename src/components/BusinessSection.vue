<template>
  <section id="business" class="section py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        <i class="fas fa-briefcase text-indigo-600 mr-2"></i> 
        Business Services</h2>
      <p class="mb-8 text-gray-600 dark:text-gray-300">Here are some of the business I made.</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="(service, index) in services" 
             :key="index"
             class="bg-white dark:bg-gray-800 rounded-lg shadow-md 
                    hover:shadow-xl transition duration-300 
                    group hover:transform hover:-translate-y-1">
          <div class="p-6 text-center">
            <div class="text-4xl text-indigo-600 dark:text-indigo-400 mb-4 
                        group-hover:scale-110 transform transition duration-300">
              <i :class="service.icon"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Web Development',
    icon: 'fas fa-laptop-code',
    description: 'Custom websites tailored to your business needs. From e-commerce platforms to personal blogs, I offer responsive and scalable solutions.'
  },
  {
    title: 'Networking & Infrastructure',
    icon: 'fas fa-server',
    description: 'Designing, deploying, and maintaining robust network and infrastructure systems to ensure seamless connectivity, security, and scalability.'
  },
  {
    title: 'Laptop Repairing',
    icon: 'fas fa-laptop',
    description: 'Providing expert repair and maintenance services for all laptop brands, including hardware fixes, software troubleshooting, and performance optimization.'
  },
  {
    title: 'IoT Development',
    icon: 'fas fa-microchip',
    description: 'Designing and developing custom Internet of Things (IoT) solutions to connect and automate devices, enabling real-time data collection and analysis.'
  }
]
</script>