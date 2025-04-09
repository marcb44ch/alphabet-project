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
            <select v-model="locale">
            <option value="es">Castellà</option>
            <option value="ca">Català</option>
          </select>
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
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

.hero {
  background: linear-gradient(to right, #1e293b, #0f172a);
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.text-success {
  color: #2e856e !important;
}

.btn-success, .bg-success {
  background-color: #2e856e !important;
  border-color: #2e856e !important;
}

.btn-outline-success {
  color: #2e856e !important;
  border-color: #2e856e !important;
}

.btn-outline-success:hover {
  background-color: #2e856e !important;
  color: white !important;
}
</style>