<template>
  <aside class="sidebar animate-fade-in">
    <div class="profile-image-container">
      <img src="/profileimage.jpeg" alt="Reuben Limbu" class="profile-image" />
    </div>
    <div class="profile-info">
      <h1 class="name">REUBEN LIMBU</h1>
      <p class="bio">
        I'm a UX designer. I'm passionate about creating usable digital products. I have worked with incredibly talented people across different companies.
      </p>
      <div class="social-links">
        <a href="#" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>
    </div>
    
    <nav class="navigation">
      <ul>
        <li><NuxtLink to="/" active-class="active">Home</NuxtLink></li>
        <li><NuxtLink to="/about" active-class="active">About</NuxtLink></li>
        <li><NuxtLink to="/contact" active-class="active">Contact</NuxtLink></li>
        <li><a href="#">Resume</a></li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 320px;
  height: 200vh;
  position: sticky;
  top: 0;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
  border-right: 1px solid transparent; /* Optional divider */
}

.profile-image-container {
  margin-bottom: 2rem;
  width: 250px;
  height: 350px; /* Increased height as requested */
  border-radius: 4px;
  overflow: hidden;
  background-color: #eee;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%); /* B&W effect from reference */
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.bio {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.social-links {
  margin-bottom: 4rem;
}

.navigation ul {
  list-style: none;
}

.navigation li {
  margin-bottom: 1rem;
}

.navigation a {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.navigation a.active,
.navigation a:hover {
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    padding: 2rem;
  }
  
  .social-links {
    margin-bottom: 2rem;
  }
}
</style>
