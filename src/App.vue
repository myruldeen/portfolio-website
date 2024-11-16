<template>
  <div class="min-h-screen bg-gray-100">
    <NavBar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <BusinessSection />
    <ContactSection />
    <FooterSection />
    <BackToTopButton />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import BusinessSection from './components/BusinessSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import BackToTopButton from './components/BackToTopButton.vue'
</script>