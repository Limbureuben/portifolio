<template>
  <div class="layout-container">
    <ProfileSidebar />
    <main class="main-content">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import ProfileSidebar from './components/ProfileSidebar.vue'
</script>

<style scoped>
.main-content {
  flex: 1;
  background-color: var(--bg-color);
  min-height: 100vh;
}
</style>
