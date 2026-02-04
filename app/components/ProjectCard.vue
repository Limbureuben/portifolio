<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="project-card">
    <div class="image-wrapper">
      <img :src="image" :alt="title" loading="lazy" />
    </div>
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <div class="view-project">
        <span>View Project</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </div>
    </div>
    <p v-if="description" class="description">{{ description }}</p>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  title: string
  description?: string
  link?: string
}>()
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5px);
}

.image-wrapper {
  background-color: var(--bg-secondary);
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
  position: relative;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  object-fit: contain;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.project-card:hover .image-wrapper img {
  transform: scale(1.02);
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  flex: 1;
}

.view-project {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.project-card:hover .view-project {
  opacity: 1;
  transform: translateX(0);
}

.description {
  font-size: 0.9rem;
  color: var(--text-secondary);
}
</style>
