<template>
  <section id="contact" class="section py-16 bg-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
      <p class="mb-8">
        Feel free to reach out to me via any of the contact methods below. I'm always open to 
        discussing new opportunities, ideas, or collaborations.
      </p>

      <div class="flex justify-center space-x-8">
        <a href="https://wa.me/1234567890" 
           target="_blank" 
           title="WhatsApp"
           class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-green-600 transition">
          <i class="fab fa-whatsapp text-xl"></i>
        </a>
        
        <a href="mailto:yourname@example.com" 
           title="Email"
           class="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-600 transition">
          <i class="fas fa-envelope text-xl"></i>
        </a>
        
        <a href="tel:+1234567890" 
           title="Phone"
           class="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-700 transition">
          <i class="fas fa-phone text-xl"></i>
        </a>
      </div>
    </div>
  </section>
</template>