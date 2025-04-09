<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n(); // Variable la qual conté l'idioma actual
</script>

<template>
  <div class="app-wrapper">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="/">
          <i class="bi bi-globe-americas text-accent me-2"></i>
          <span class="fw-bold">Projecte Alfabet</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div>
          <select v-model="locale">
            <option value="es">Castellà</option>
            <option value="ca">Català</option>
          </select>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Inici</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/CarbonFootprint">CarbonFootprint</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/ClimaticChange">ClimaticChange</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <main>
      <RouterView />
    </main>
    <footer class="footer bg-dark-accent py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="footer-brand d-flex align-items-center mb-3">
              <i class="bi bi-globe-americas text-accent me-2"></i>
              <span class="h5 mb-0 text-white">Projecte Alfabet</span>
            </div>
            <p class="text-light-50 mb-4">Treballant per un futur més sostenible i conscienciant sobre el canvi climàtic.</p>
            <div class="social-links d-flex gap-3">
              <a href="#" class="social-link"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="social-link"><i class="bi bi-twitter"></i></a>
              <a href="#" class="social-link"><i class="bi bi-instagram"></i></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <h6 class="text-accent mb-3">Navegació</h6>
            <ul class="footer-links">
              <li><a href="/">Inici</a></li>
              <li><a href="/CarbonFootprint">Carbon Footprint</a></li>
              <li><a href="/ClimaticChange">Canvi Climàtic</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6">
            <h6 class="text-accent mb-3">Contacte</h6>
            <ul class="footer-links">
              <li><i class="bi bi-geo-alt me-2"></i>Barcelona, Catalunya</li>
              <li><i class="bi bi-envelope me-2"></i>info@projectealfabet.cat</li>
              <li><i class="bi bi-phone me-2"></i>+34 93 XXX XX XX</li>
            </ul>
          </div>
          <div class="col-lg-3">
            <h6 class="text-accent mb-3">Subscriu-te</h6>
            <p class="text-light-50 mb-3">Rep les últimes novetats sobre sostenibilitat</p>
            <div class="input-group mb-3">
              <input type="email" class="form-control bg-dark border-dark text-light" placeholder="El teu email">
              <button class="btn btn-accent" type="button">Enviar</button>
            </div>
          </div>
        </div>
        <hr class="border-secondary my-4">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0 text-light-50">&copy; 2025 Projecte Alfabet - Tots els drets reservats</p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <a href="#" class="text-light-50 text-decoration-none me-3">Privacitat</a>
            <a href="#" class="text-light-50 text-decoration-none">Termes d'ús</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
  --accent-color: #10b981;
  --dark-bg: #111827;
  --dark-secondary2: #1f2937;
}

html, body {
  margin: 0;
  padding: 0;
  background-color: var(--dark-bg);
  font-family: 'Poppins', sans-serif;
  color: var(--dark-bg);
  overflow-x: hidden;
  scroll-behavior: smooth;
}


.navbar {
  background-color: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.navbar-brand {
  font-size: 1.25rem;
}

.navbar .bi {
  font-size: 1.5rem;
}

.text-accent {
  color: var(--accent-color) !important;
}

.nav-link {
  color: #e5e7eb;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--accent-color);
  transform: translateY(-2px);
}


/* main {
  padding-top: 76px;
} */


.bg-dark-accent {
  background-color: var(--dark-secondary) !important;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--dark-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--accent-color);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #059669;
}
.footer {
  background-color: var(--dark-secondary2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: #e5e7eb;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: var(--accent-color);
  padding-left: 5px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--accent-color);
  color: #fff;
  transform: translateY(-3px);
}

.text-light-50 {
  color: rgba(255, 255, 255, 0.5);
}

.form-control {
  border-radius: 8px 0 0 8px;
}

.form-control:focus {
  box-shadow: none;
  border-color: var(--accent-color);
}

.btn-accent {
  border-radius: 0 8px 8px 0;
}

hr.border-secondary {
  opacity: 0.1;
}

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
</style>