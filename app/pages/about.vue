<template>
  <div class="page-container animate-fade-in">
    <div class="content">
      <h1>About Me</h1>
      <p class="intro">
        Hello! I'm <strong>REUBEN LIMBU</strong>, a creative UX Designer aimed at creating usable digital products.
      </p>
      <p>
        With a background in media production and design, I specialize in crafting intuitive user experiences that bridge the gap between aesthetics and functionality.
      </p>
      <div class="stats">
        <div class="stat-item">
          <span class="number">1</span>
          <span class="label">Year Experience</span>
        </div>
        <div class="stat-item">
          <span class="number">10+</span>
          <span class="label">Projects Completed</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 4rem;
  max-width: 800px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: 700;
}

p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

.stats {
  display: flex;
  gap: 4rem;
  margin-top: 4rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
}

.label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
