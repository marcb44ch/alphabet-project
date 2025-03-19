<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/CarbonFootprint">Petjada de carboni</RouterLink>
      <RouterLink to="/ClimaticChange">Canvi climatic</RouterLink>
    </nav>
  </header>
  
  <RouterView />
  
  <footer>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/CarbonFootprint">Petjada de carboni</RouterLink>
      <RouterLink to="/ClimaticChange">Canvi climatic</RouterLink>
    </nav>
  </footer>
</template>

<style scoped>
:root {
  --primary-color: #4CAF50;
  --secondary-color: #FFFFFF;
  --text-color: #ffffff;
  --hover-color: #66BB6A;
  --border-radius: 8px;
}

header, footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--secondary-color);
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  position: fixed;
  width: 100%;
  left: 0;
}

header {
  top: 0;
}

footer {
  bottom: 0;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  color: var(--text-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  background: var(--primary-color);
  transition: background 0.3s ease, transform 0.2s ease;
}

nav a:hover {
  background: var(--hover-color);
  transform: translateY(-2px);
}

nav a.router-link-exact-active {
  background: var(--hover-color);
}

@media (min-width: 1024px) {
  header, footer {
    padding: 1.5rem 4rem;
  }

  nav {
    gap: 2rem;
  }
}

/* Agregar margen al contenido para evitar que quede oculto por el header y el footer */
RouterView {
  margin-top: 80px;
  margin-bottom: 80px;
  display: block;
}
</style>
