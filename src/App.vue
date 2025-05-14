<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const isMenuOpen = ref(false);
const showToast = ref(false);
const emailInput = ref('');

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function handleSubscribe() {
  if (emailInput.value) {
    showToast.value = true;
    emailInput.value = ''; // Netejar el camp
    setTimeout(() => {
      showToast.value = false;
    }, 3000); // El toast es tancarà després de 3 segons
  }
}
</script>

<template>

  <div class="app-wrapper">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container position-relative">
        <a class="navbar-brand d-flex align-items-center" href="/">
          <i class="bi bi-globe-americas text-accent me-2"></i>
          <span class="fw-bold">Projecte Alfabet</span>
        </a>
        
        <div class="sliding-menu" :class="{ 'is-open': isMenuOpen }">
          <button class="menu-close-btn" @click="toggleMenu">
            <i class="bi bi-x-lg"></i>
          </button>
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
            <li class="nav-item">
              <select v-model="locale" class="form-select">
                <option value="es">Castellà</option>
                <option value="ca">Català</option>
              </select>
            </li>
          </ul>
        </div>
        
        <button class="menu-toggle-btn" type="button" @click="toggleMenu">
          <i class="bi bi-list"></i>
        </button>
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
              <input 
                v-model="emailInput"
                type="email" 
                class="form-control bg-dark border-dark text-light" 
                placeholder="El teu email">
              <button 
                class="btn btn-accent" 
                type="button" 
                @click="handleSubscribe">
                Enviar
              </button>
            </div>

            <div 
              class="toast-message" 
              :class="{ 'show': showToast }">
              Gràcies per subscriure't!
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

.sliding-menu {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background: rgba(30, 41, 59, 0.95);
  transition: right 0.3s ease;
  padding-top: 80px;
  z-index: 1000;
}

.sliding-menu.is-open {
  right: 0;
}

.sliding-menu .menu-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.menu-close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.menu-close-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.sliding-menu .navbar-nav {
  flex-direction: column;
  padding: 1rem;
}

.sliding-menu .nav-item {
  margin: 0.5rem 0;
}

.sliding-menu .nav-link {
  color: white;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
}

.sliding-menu .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.sliding-menu select {
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 1rem;
  width: 100%;
}

.sliding-menu select option {
  background: #1e293b;
  color: white;
}

.menu-toggle-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1001;
  background: rgba(30, 41, 59, 0.95);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 1;
  visibility: visible;
}

.sliding-menu.is-open + .menu-toggle-btn,
.sliding-menu.is-open ~ .menu-toggle-btn {
  opacity: 0;
  visibility: hidden;
}

.menu-toggle-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.menu-toggle-btn i {
  font-size: 1.5rem;
}

@media (min-width: 992px) {
  .menu-toggle-btn {
    display: flex !important;
  }
}

.toast-message {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #2e856e;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(100%);
  transition: all 0.3s ease;
  z-index: 1000;
}

.toast-message.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
</style>