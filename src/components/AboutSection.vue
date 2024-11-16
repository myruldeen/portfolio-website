<template>
  <section id="about" class="section py-16 bg-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
      
      <p class="mb-12 max-w-3xl mx-auto">
        Strong background in IT support and customer service, I specialize in providing efficient 
        and effective solutions to technical issues that users encounter. My role involves 
        troubleshooting hardware and software problems, ensuring system stability, and helping 
        users make the most of the technology available to them.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Education Section with Timeline -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-gray-800 mb-8">
            <i class="fas fa-graduation-cap mr-2 text-indigo-600"></i>
            Education
          </h3>
          
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-600"></div>

            <!-- Timeline Items -->
            <div class="space-y-12">
              <!-- Degree -->
              <div class="relative timeline-item">
                <!-- Timeline Icon -->
                <div class="absolute left-8 -translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white flex items-center justify-center">
                  <i class="fas fa-user-graduate text-xs text-white"></i>
                </div>
                
                <!-- Content -->
                <div class="ml-16">
                  <span class="text-sm text-indigo-600 font-semibold">
                    <i class="far fa-calendar-alt mr-1"></i>
                    2020 - 2023
                  </span>
                  <h4 class="text-lg font-semibold text-gray-800 mt-1">
                    Bachelor In Information Technology (Hons)
                  </h4>
                  <p class="text-gray-600">
                    <i class="fas fa-university mr-1"></i>
                    University of Selangor
                  </p>
                  <div class="mt-2 bg-indigo-50 rounded-lg px-3 py-1 inline-block">
                    <i class="fas fa-award text-indigo-600 mr-1"></i>
                    <span class="text-sm font-semibold text-indigo-600">CGPA 3.59</span>
                  </div>
                  <ul class="list-disc ml-4 mt-2 text-left text-gray-600">
                    <li>Dean's List recipient</li>
                    <li>Specialized in Software Development</li>
                    <li>Final Year Project: IoT-based Smart Home System</li>
                  </ul>
                </div>
              </div>

              <!-- Diploma -->
              <div class="relative timeline-item">
                <!-- Timeline Icon -->
                <div class="absolute left-8 -translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white flex items-center justify-center">
                  <i class="fas fa-scroll text-xs text-white"></i>
                </div>
                
                <!-- Content -->
                <div class="ml-16">
                  <span class="text-sm text-indigo-600 font-semibold">
                    <i class="far fa-calendar-alt mr-1"></i>
                    2016 - 2020
                  </span>
                  <h4 class="text-lg font-semibold text-gray-800 mt-1">
                    Diploma In Information Technology
                  </h4>
                  <p class="text-gray-600">
                    <i class="fas fa-university mr-1"></i>
                    University of Selangor
                  </p>
                  <div class="mt-2 bg-indigo-50 rounded-lg px-3 py-1 inline-block">
                    <i class="fas fa-award text-indigo-600 mr-1"></i>
                    <span class="text-sm font-semibold text-indigo-600">CGPA 3.54</span>
                  </div>
                  <ul class="list-disc ml-4 mt-2 text-left text-gray-600">
                    <li>Academic Excellence Award</li>
                    <li>IT Club Vice President</li>
                    <li>Participated in various tech competitions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Section with Timeline -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-gray-800 mb-8">
            <i class="fas fa-briefcase mr-2 text-indigo-600"></i>
            Job Experience
          </h3>
          
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-600"></div>

            <!-- Timeline Items -->
            <div class="space-y-12">
              <!-- Current Job -->
              <div class="relative timeline-item">
                <!-- Timeline Icon -->
                <div class="absolute left-8 -translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white flex items-center justify-center">
                  <i class="fas fa-code text-xs text-white"></i>
                </div>
                
                <!-- Content -->
                <div class="ml-16">
                  <span class="text-sm text-indigo-600 font-semibold">
                    <i class="far fa-calendar-alt mr-1"></i>
                    June 2021 - Present
                  </span>
                  <h4 class="text-lg font-semibold text-gray-800 mt-1">
                    <i class="fas fa-laptop-code mr-1"></i>
                    Software Developer
                  </h4>
                  <p class="text-gray-600">
                    <i class="fas fa-building mr-1"></i>
                    XYZ Tech Company
                  </p>
                  <ul class="list-disc ml-4 mt-2 text-left text-gray-600">
                    <li>Developed and maintained web applications using React and Node.js</li>
                    <li>Collaborated with cross-functional teams to design and implement new features</li>
                    <li>Improved application performance by optimizing front-end and back-end code</li>
                  </ul>
                </div>
              </div>

              <!-- Previous Job -->
              <div class="relative timeline-item">
                <!-- Timeline Icon -->
                <div class="absolute left-8 -translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white flex items-center justify-center">
                  <i class="fas fa-laptop text-xs text-white"></i>
                </div>
                
                <!-- Content -->
                <div class="ml-16">
                  <span class="text-sm text-indigo-600 font-semibold">
                    <i class="far fa-calendar-alt mr-1"></i>
                    May 2020 - August 2020
                  </span>
                  <h4 class="text-lg font-semibold text-gray-800 mt-1">
                    <i class="fas fa-code mr-1"></i>
                    Frontend Developer Intern
                  </h4>
                  <p class="text-gray-600">
                    <i class="fas fa-building mr-1"></i>
                    ABC Digital Solutions
                  </p>
                  <ul class="list-disc ml-4 mt-2 text-left text-gray-600">
                    <li>Worked on improving the UI of client websites using HTML, CSS, and JavaScript</li>
                    <li>Assisted in building responsive layouts and mobile-first designs</li>
                    <li>Contributed to weekly sprint meetings and code reviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Previous styles remain the same */

/* Add icon hover effect */
.timeline-item:hover .w-8.h-8 {
  transform: rotate(360deg);
  transition: transform 0.5s ease;
}

/* Adjust icon size for better visibility */
.timeline-item .w-8.h-8 {
  transition: all 0.3s ease;
}

.timeline-item:hover .w-8.h-8 {
  background-color: #4338ca; /* Darker indigo on hover */
}

/* Gradient timeline line */
.w-0\.5 {
  background: linear-gradient(to bottom, #4f46e5 0%, #818cf8 100%);
}
</style>