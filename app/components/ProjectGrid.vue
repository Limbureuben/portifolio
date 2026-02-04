<template>
  <div class="project-grid">
    <ProjectCard 
      v-for="(project, index) in projects" 
      :key="index"
      :image="project.image"
      :title="project.title"
      :description="project.description"
      :link="project.link"
      class="animate-slide-up"
      :style="{ animationDelay: `${index * 0.1}s` }"
    />
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'MEDIA PRODUCTION UI/UX Design',
    image: '/creativemedia.png',
    description: '',
    link: 'https://www.figma.com/design/hpZt2jazAndcCcygTOKS9S/lanix.technology?node-id=0-1&t=jOQTwz1qbqlVQqKB-1'
  },
  {
    title: 'Lanix Website UI/UX Design',
    image: '/laniximage.png',
    description: '',
    link: 'https://www.figma.com/design/hpZt2jazAndcCcygTOKS9S/lanix.technology?node-id=0-1&t=jOQTwz1qbqlVQqKB-1'
  },
  {
    title: 'Creative website design',
    image: '/mediaproduction.png',
    description: '',
    link: '#'
  },
  {
    title: 'Visualmax production design',
    image: '/visualimage.png',
    description: '',
    link: 'https://www.figma.com/design/JBWc9lf3Ib861AppLDbK0a/Reuben-Projects?node-id=0-1&t=2DN8VvIo78Ox1xLT-1'
  },
  {
    title: 'Jerusalem Website',
    image: '/jerusalem.png',
    description: '',
    link: 'https://www.figma.com/design/JBWc9lf3Ib861AppLDbK0a/Reuben-Projects?node-id=0-1&t=2DN8VvIo78Ox1xLT-1'
  },
  {
    title: 'Afromack website',
    image: '/afromack.png',
    description: '',
    link: 'https://www.figma.com/design/hpZt2jazAndcCcygTOKS9S/lanix.technology?node-id=0-1&t=jOQTwz1qbqlVQqKB-1'
  },
  {
    title: 'Afromack Alternate Design',
    image: '/afromack2.png',
    description: '',
    link: 'https://www.figma.com/design/zrXYDrTLZ4WpOpI5LjZCMS/Afromark-Website?node-id=2-4&p=f&t=PJB34wEBOlYYSfXt-0'
  }
]
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* Responsive grid */
  gap: 3rem;
  padding: 3rem;
  flex: 1;
}

@media (max-width: 1024px) {
  .project-grid {
    grid-template-columns: 1fr; /* Single column on smaller screens */
    padding: 2rem;
  }
}
</style>
