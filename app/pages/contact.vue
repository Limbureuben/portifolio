<template>
  <div class="page-container animate-fade-in">
    <div class="content">
      <h1>Get in Touch</h1>
      <p class="intro">
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>
      
      <div class="contact-methods">
        <div class="method">
          <h3>Email</h3>
          <a href="limbureubenn@gmail.com" class="link">limbureubenn@gmail.com.com</a>
        </div>
        
        <div class="method">
          <h3>Socials</h3>
          <div class="social-links">
            <a href="https://www.instagram.com/limbureuben?igsh=czJ0YnZmb2JhYm02" class="link">Instagram</a>
          </div>
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

.intro {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 4rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.link {
  font-size: 1.1rem;
  text-decoration: underline;
  margin-right: 2rem;
  color: var(--text-primary);
  display: inline-block;
}

.link:hover {
  opacity: 0.6;
}
</style>
