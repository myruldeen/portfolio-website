<template>
  <section id="about" class="section py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        <i class="fas fa-user text-indigo-600 mr-2"></i> 
        About Me
      </h2>
      
      <p class="mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Strong background in IT support and customer service, I specialize in providing efficient 
        and effective solutions to technical issues that users encounter. My role involves 
        troubleshooting hardware and software problems, ensuring system stability, and helping 
        users make the most of the technology available to them.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Education Section -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            <i class="fas fa-graduation-cap mr-2 text-indigo-600 dark:text-indigo-400"></i>
            Education
          </h3>
          
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-600 dark:bg-indigo-400"></div>

            <!-- Timeline Items -->
            <div class="space-y-12">
              <div v-for="(edu, index) in education" 
                   :key="index"
                   class="relative timeline-item">
                <!-- Timeline Icon -->
                <div class="absolute left-8 -translate-x-1/2 w-8 h-8 bg-indigo-600 dark:bg-indigo-400 
                            rounded-full border-4 border-white dark:border-gray-800 
                            flex items-center justify-center">
                  <i :class="edu.icon" class="text-xs text-white"></i>
                </div>
                
                <!-- Content -->
                <div class="ml-16">
                  <span class="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                    <i class="far fa-calendar-alt mr-1"></i>
                    {{ edu.period }}
                  </span>
                  <h4 class="text-lg font-semibold text-gray-800 dark:text-white mt-1">
                    {{ edu.degree }}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-300">
                    <i class="fas fa-university mr-1"></i>
                    {{ edu.school }}
                  </p>
                  <div class="mt-2 bg-indigo-50 dark:bg-indigo-900 rounded-lg px-3 py-1 inline-block">
                    <i class="fas fa-award text-indigo-600 dark:text-indigo-400 mr-1"></i>
                    <span class="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      CGPA {{ edu.cgpa }}
                    </span>
                  </div>
                  <ul class="list-disc ml-4 mt-2 text-left text-gray-600 dark:text-gray-300">
                    <li v-for="(achievement, achIndex) in edu.achievements" 
                        :key="achIndex">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Section -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            <i class="fas fa-briefcase mr-2 text-indigo-600 dark:text-indigo-400"></i>
            Job Experience
          </h3>
          
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-600 dark:bg-indigo-400"></div>

            <!-- Timeline Items -->
            <div class="space-y-12">
              <div v-for="(job, index) in experience" 
                   :key="index"
                   class="relative timeline-item">
                <!-- Timeline Icon -->
                <div class="absolute left-8 -translate-x-1/2 w-8 h-8 bg-indigo-600 dark:bg-indigo-400 
                            rounded-full border-4 border-white dark:border-gray-800 
                            flex items-center justify-center">
                  <i :class="job.icon" class="text-xs text-white"></i>
                </div>
                
                <!-- Content -->
                <div class="ml-16">
                  <span class="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                    <i class="far fa-calendar-alt mr-1"></i>
                    {{ job.period }}
                  </span>
                  <h4 class="text-lg font-semibold text-gray-800 dark:text-white mt-1">
                    <i :class="job.roleIcon" class="mr-1"></i>
                    {{ job.role }}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-300">
                    <i class="fas fa-building mr-1"></i>
                    {{ job.company }}
                  </p>
                  <ul class="list-disc ml-4 mt-2 text-left text-gray-600 dark:text-gray-300">
                    <li v-for="(responsibility, respIndex) in job.responsibilities" 
                        :key="respIndex">
                      {{ responsibility }}
                    </li>
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

<script setup>
// Education Data
const education = [
  {
    period: '2020 - 2023',
    degree: 'Bachelor In Information Technology (Hons)',
    school: 'University of Selangor',
    cgpa: '3.59',
    icon: 'fas fa-user-graduate',
    achievements: [
      "Dean's List recipient",
      'Specialized in Software Development'
    ]
  },
  {
    period: '2016 - 2020',
    degree: 'Diploma In Information Technology',
    school: 'University of Selangor',
    cgpa: '3.54',
    icon: 'fas fa-scroll',
    achievements: [
      'Best Final Year Project Proposal',
      'Participated in various tech competitions'
    ]
  }
]

// Experience Data
const experience = [
  {
    period: 'February 2024 - Present',
    role: 'Technical Support Analyst',
    company: 'JOS Malaysia Sdn Bhd',
    icon: 'fas fa-laptop',
    roleIcon: 'fas fa-laptop',
    responsibilities: [
      'Support Infra team on daily task basis on client site at PAPAMY (Panasonic Appliances Air-Conditioning Malaysia Sdn Bhd) and Tasco Berhad.',
      'Install and upgrade latest EDR, ApexOne agent and virus pattern.',
      'Install and troubleshoot Microsoft O365 and Teams for common issues.',
      'Setup and configure Zebra scanner and thermal printer for warehouse operation at Tasco Bhd.',
      'Configure copier machine and install driver for desktop and laptop.',
      'Maintain Infra hardware and software such as server, printer, PC and network appliance such as router, switch and AP.'
    ]
  },
  {
    period: 'August 2023 - November 2023',
    role: 'IT Support Technician (Intern)',
    company: 'Panasonic Manufacturing Malaysia Berhad',
    icon: 'fas fa-laptop',
    roleIcon: 'fas fa-laptop-code',
    responsibilities: [
      'Support Infra team on daily task basis.',
      'Maintain and upgrade existing Macro Enable Excel project with VBA and MSSQL.',
      'Upgrade, support and maintain existing web application using VB.net and MSSQL.',
      'Handle ad-hoc task automation using Powershell and VB.'
    ]
  },
  {
    period: 'August 2019 - November 2020',
    role: 'Backend Developer (Intern)',
    company: 'Grab Haulier Sdn Bhd',
    icon: 'fas fa-code',
    roleIcon: 'fas fa-code',
    responsibilities: [
      'Develop, design and maintain pricelist microservices',
      'Develop, design and maintain web automation.'
    ]
  }
]
</script>

<style scoped>
/* Timeline item animations */
.timeline-item {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.5s ease forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animation delays for items */
.timeline-item:nth-child(1) {
  animation-delay: 0.2s;
}

.timeline-item:nth-child(2) {
  animation-delay: 0.4s;
}

/* Hover effects */
.timeline-item {
  transition: all 0.3s ease;
}

.timeline-item:hover {
  transform: translateX(5px);
}

.timeline-item:hover .w-8.h-8 {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(79, 70, 229, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
  }
}
</style>