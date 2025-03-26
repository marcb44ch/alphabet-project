<script setup>
  import Table from '@/components/Table.vue';
  import "bootstrap"
  import { ref } from 'vue'
  const headers = ref(['Nom', 'Cognoms', 'Adreça', 'Telefon'])
  const items = ref([
    {nom: "Anna", cognom: "Cussó", adreça: "Carrer Nou 1", telefon: "666666666"},
    {nom: "Anna", cognom: "Cussó", adreça: "Carrer Nou 1", telefon: "666666666"},
    {nom: "Anna", cognom: "Cussó", adreça: "Carrer Nou 1", telefon: "666666666"},
    {nom: "Marc", cognom: "Cussó", adreça: "Carrer Nou 1", telefon: "666666666"},
    {nom: "Anna", cognom: "Cussó", adreça: "Carrer Nou 1", telefon: "666666666"},
    {nom: "Anna", cognom: "Cussó", adreça: "Carrer Nou 1", telefon: "666666666"},
    {nom: "Anna", cognom: "Casas", adreça: "Carrer Nou 1", telefon: "666666666"},
    {nom: "Anna", cognom: "Cussó", adreça: "Carrer Nou 1", telefon: "666666666"}
  ])
</script>

<template>
  <div class="climate-page">
    <!-- Immersive hero section -->
    <section class="hero position-relative overflow-hidden">
      <div class="overlay"></div>
      <div class="container position-relative z-3">
        <div class="row min-vh-100 align-items-center">
          <div class="col-lg-7">
            <span class="badge bg-warning text-dark mb-3 px-3 py-2">URGÈNCIA GLOBAL</span>
            <h1 class="display-2 fw-bold text-white mb-4">Impacte empresarial en el<br><span class="text-accent">canvi climàtic</span></h1>
            <p class="lead text-light mb-5">
              Descobreix com les activitats empresarials afecten el nostre planeta i quines 
              solucions poden implementar-se per a un futur més sostenible.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <a href="#impactes" class="btn btn-accent btn-lg">
                <i class="bi bi-arrow-down-circle me-2"></i>Explorar solucions
              </a>
              <a href="#contactes" class="btn btn-outline-light btn-lg">
                <i class="bi bi-graph-up me-2"></i>Veure dades
              </a>
            </div>
          </div>
          <div class="col-lg-5 d-none d-lg-block">
            <div class="position-relative">
              <div class="hero-image-frame rounded-circle border border-accent border-4 p-1">
                <img src="https://images.unsplash.com/photo-1624982172881-478a8d7018c1?w=500&q=80" 
                     alt="Earth" class="img-fluid rounded-circle">
              </div>
              <div class="stat-bubble stat-bubble-1">
                <span class="stat-number text-danger">+1.5°C</span>
                <span class="stat-label">Previsió 2050</span>
              </div>
              <div class="stat-bubble stat-bubble-2">
                <span class="stat-number text-warning">51%</span>
                <span class="stat-label">Emissions industrials</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Animated background elements -->
      <div class="bg-element bg-element-1"></div>
      <div class="bg-element bg-element-2"></div>
      <div class="bg-element bg-element-3"></div>
    </section>

    <!-- Main content -->
    <section class="container py-6">
      <!-- Section divider -->
      <div class="divider my-5">
        <span class="divider-icon">
          <i class="bi bi-exclamation-triangle-fill"></i>
        </span>
      </div>
      
      <div class="row mb-6" id="impactes">
        <div class="col-12 text-center mb-5">
          <span class="badge bg-dark-accent px-3 py-2 mb-3">PROBLEMÀTICA</span>
          <h2 class="display-5 fw-bold mb-3">Impactes principals</h2>
          <p class="lead text-secondary mx-auto" style="max-width: 700px">Les empreses tenen un impacte significatiu sobre el canvi climàtic, i aquest impacte es manifesta de diverses maneres.</p>
        </div>
      </div>

      <!-- Impact cards with floating effect -->
      <div class="row g-4 mb-6">
        <div class="col-md-6 col-lg-3">
          <div class="impact-card card border-0 h-100 shadow-lg">
            <div class="card-body p-4">
              <div class="icon-wrapper mb-4 bg-danger-subtle rounded-circle">
                <i class="bi bi-cloud-haze2-fill text-danger"></i>
              </div>
              <h3 class="h4 fw-bold">Emissions de gasos</h3>
              <p class="card-text">Les activitats industrials generen emissions de CO₂ i altres gasos que contribueixen al canvi climàtic.</p>
              <div class="impact-meter mt-4">
                <div class="impact-level level-5"></div>
                <span class="impact-label">Impacte alt</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-6 col-lg-3">
          <div class="impact-card card border-0 h-100 shadow-lg">
            <div class="card-body p-4">
              <div class="icon-wrapper mb-4 bg-warning-subtle rounded-circle">
                <i class="bi bi-lightning-charge-fill text-warning"></i>
              </div>
              <h3 class="h4 fw-bold">Consum d'energia</h3>
              <p class="card-text">L'ús intensiu d'energia, especialment de fonts no renovables, augmenta la petjada de carboni.</p>
              <div class="impact-meter mt-4">
                <div class="impact-level level-4"></div>
                <span class="impact-label">Impacte significatiu</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-6 col-lg-3">
          <div class="impact-card card border-0 h-100 shadow-lg">
            <div class="card-body p-4">
              <div class="icon-wrapper mb-4 bg-primary-subtle rounded-circle">
                <i class="bi bi-tree-fill text-primary"></i>
              </div>
              <h3 class="h4 fw-bold">Desforestació</h3>
              <p class="card-text">Algunes empreses contribueixen a la desforestació, que redueix la capacitat d'absorció de CO₂.</p>
              <div class="impact-meter mt-4">
                <div class="impact-level level-3"></div>
                <span class="impact-label">Impacte moderat</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-6 col-lg-3">
          <div class="impact-card card border-0 h-100 shadow-lg">
            <div class="card-body p-4">
              <div class="icon-wrapper mb-4 bg-info-subtle rounded-circle">
                <i class="bi bi-trash-fill text-info"></i>
              </div>
              <h3 class="h4 fw-bold">Residus</h3>
              <p class="card-text">La generació de residus, especialment plàstics, afecta negativament els ecosistemes.</p>
              <div class="impact-meter mt-4">
                <div class="impact-level level-3"></div>
                <span class="impact-label">Impacte moderat</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider -->
      <div class="divider my-5">
        <span class="divider-icon">
          <i class="bi bi-lightbulb-fill"></i>
        </span>
      </div>

      <!-- Solutions section -->
      <div class="row mb-6">
        <div class="col-12 text-center mb-5">
          <span class="badge bg-accent px-3 py-2 mb-3">SOLUCIONS</span>
          <h2 class="display-5 fw-bold mb-3">Transformació empresarial</h2>
          <p class="lead text-secondary mx-auto" style="max-width: 700px">Les empreses poden jugar un paper crucial en la mitigació del canvi climàtic adoptant pràctiques sostenibles.</p>
        </div>
        
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="card bg-dark-accent border-0 h-100 shadow-lg transition-card">
            <div class="card-body p-4 p-lg-5">
              <h3 class="h3 fw-bold text-white mb-4">Estratègies immediates</h3>
              <ul class="solution-list">
                <li>
                  <div class="d-flex">
                    <div class="bullet">01</div>
                    <div>
                      <h4 class="h5 text-accent">Energia renovable</h4>
                      <p class="text-light">Invertir en fonts d'energia renovable com l'energia solar, eòlica i hidroelèctrica.</p>
                      <div class="d-flex align-items-center mt-2">
                        <div class="progress" style="height: 8px; width: 100px;">
                          <div class="progress-bar bg-accent" style="width: 85%"></div>
                        </div>
                        <span class="text-accent ms-3">85% efectivitat</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div class="bullet">02</div>
                    <div>
                      <h4 class="h5 text-accent">Reducció de residus</h4>
                      <p class="text-light">Implementar programes de reciclatge i reduir l'ús de materials no biodegradables.</p>
                      <div class="d-flex align-items-center mt-2">
                        <div class="progress" style="height: 8px; width: 100px;">
                          <div class="progress-bar bg-accent" style="width: 70%"></div>
                        </div>
                        <span class="text-accent ms-3">70% efectivitat</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="col-lg-6">
          <div class="card bg-dark-accent border-0 h-100 shadow-lg transition-card">
            <div class="card-body p-4 p-lg-5">
              <h3 class="h3 fw-bold text-white mb-4">Objectius a llarg termini</h3>
              <ul class="solution-list">
                <li>
                  <div class="d-flex">
                    <div class="bullet">03</div>
                    <div>
                      <h4 class="h5 text-accent">Responsabilitat social</h4>
                      <p class="text-light">Adoptar polítiques que promoguin la sostenibilitat ambiental i la responsabilitat social.</p>
                      <div class="d-flex align-items-center mt-2">
                        <div class="progress" style="height: 8px; width: 100px;">
                          <div class="progress-bar bg-accent" style="width: 65%"></div>
                        </div>
                        <span class="text-accent ms-3">65% efectivitat</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div class="bullet">04</div>
                    <div>
                      <h4 class="h5 text-accent">Innovació tecnològica</h4>
                      <p class="text-light">Desenvolupar tecnologies més netes i eficients que redueixin l'impacte ambiental.</p>
                      <div class="d-flex align-items-center mt-2">
                        <div class="progress" style="height: 8px; width: 100px;">
                          <div class="progress-bar bg-accent" style="width: 90%"></div>
                        </div>
                        <span class="text-accent ms-3">90% efectivitat</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Environmental facts section -->
      <div class="environmental-facts my-6 py-5 px-4 rounded-4">
        <div class="row text-center mb-4">
          <div class="col-12">
            <h3 class="h2 fw-bold text-white">Dades climàtiques rellevants</h3>
          </div>
        </div>
        <div class="row g-4 text-center">
          <div class="col-md-3">
            <div class="fact-item">
              <span class="fact-number">+1.1°C</span>
              <span class="fact-label">Augment temperatura<br>global des de 1900</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="fact-item">
              <span class="fact-number">416 ppm</span>
              <span class="fact-label">Nivell actual<br>de CO₂ atmosfèric</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="fact-item">
              <span class="fact-number">-13%</span>
              <span class="fact-label">Reducció gel<br>Àrtic per dècada</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="fact-item">
              <span class="fact-number">3.3 mm</span>
              <span class="fact-label">Augment nivell<br>del mar anual</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider -->
      <div class="divider my-5">
        <span class="divider-icon">
          <i class="bi bi-people-fill"></i>
        </span>
      </div>

      <!-- Contacts section -->
      <div class="row mb-5" id="contactes">
        <div class="col-12 text-center mb-5">
          <span class="badge bg-light text-dark px-3 py-2 mb-3">CONTACTES</span>
          <h2 class="display-5 fw-bold mb-3">Persones compromeses</h2>
          <p class="lead text-secondary mx-auto" style="max-width: 700px">Connecta amb professionals que treballen activament en solucions climàtiques.</p>
        </div>
      </div>
      
      <div class="card table-card border-0 shadow-lg">
        <div class="card-header bg-dark-accent p-4">
          <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <h3 class="h5 mb-0 text-white">Directori de contactes</h3>
            <div class="d-flex gap-2">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Cerca...">
                <button class="btn btn-accent" type="button">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body p-0 p-sm-4">
          <div class="table-responsive">
            <Table :headers="headers" :items="items" class="table table-dark table-hover align-middle"></Table>
          </div>
          <div class="d-flex justify-content-center mt-4">
            <button class="btn btn-outline-accent me-2">
              <i class="bi bi-download me-2"></i>Exportar CSV
            </button>
            <button class="btn btn-accent">
              <i class="bi bi-envelope-fill me-2"></i>Contactar tots
            </button>
          </div>
        </div>
      </div>

      <!-- Call to action section -->
      <div class="cta-section text-center my-6 py-5">
        <div class="cta-content p-4 p-md-5 rounded-4">
          <h2 class="display-6 fw-bold text-white mb-4">Uneix-te a la lluita contra el canvi climàtic</h2>
          <p class="lead text-light mb-4">Cada acció compta. Les empreses tenen la responsabilitat i l'oportunitat de liderar el canvi.</p>
          <button class="btn btn-lg btn-light px-4 py-3">
            <i class="bi bi-arrow-right-circle-fill me-2"></i>Demana una avaluació
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-4 border-top border-secondary">
      <div class="container text-center">
        <p class="text-secondary mb-0">© 2025 Projecte Alfabet - Tots els drets reservats</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* General styling */
.climate-page {
  font-family: 'Poppins', sans-serif;
  background-color: #111827;
  color: #e5e7eb;
}

p{
  color: #ffffff;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  color: #ffffff;
}

.py-6 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.my-6 {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.mb-6 {
  margin-bottom: 5rem;
}

/* Hero section styling */
.hero {
  background-color: #0f172a;
  background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.7) 100%);
  z-index: 2;
}

.hero-image-frame {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
  animation: pulse 3s infinite ease-in-out;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.stat-bubble {
  position: absolute;
  background-color: rgba(15, 23, 42, 0.9);
  border: 2px solid;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-align: center;
}

.stat-bubble-1 {
  border-color: #ef4444;
  top: 10%;
  right: 15%;
}

.stat-bubble-2 {
  border-color: #f59e0b;
  bottom: 20%;
  left: 10%;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  margin-top: 5px;
  line-height: 1.1;
}

.text-accent {
  color: #10b981 !important;
}

.btn-accent {
  background-color: #10b981;
  border-color: #10b981;
  color: #fff;
}

.btn-accent:hover {
  background-color: #059669;
  border-color: #059669;
  color: #fff;
}

.bg-accent {
  background-color: #10b981 !important;
}

.bg-dark-accent {
  background-color: #1e293b !important;
}

/* Animated background elements */
.bg-element {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  z-index: 1;
}

.bg-element-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(45deg, #10b981, #0ea5e9);
  top: -100px;
  right: -100px;
  animation: float 15s ease-in-out infinite;
}

.bg-element-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #ef4444, #f59e0b);
  bottom: 100px;
  left: -100px;
  animation: float 20s ease-in-out infinite reverse;
}

.bg-element-3 {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #8b5cf6, #ec4899);
  bottom: -50px;
  right: 30%;
  animation: float 12s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(30px, 20px) rotate(5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

/* Section divider */
.divider {
  position: relative;
  text-align: center;
  height: 40px;
}

.divider:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
}

.divider-icon {
  position: relative;
  background-color: #111827;
  padding: 0 20px;
  font-size: 1.5rem;
  color: #10b981;
}

/* Impact cards */
.impact-card {
  background-color: #1f2937;
  border-radius: 16px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.impact-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
}

.transition-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.transition-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
}

.bg-danger-subtle {
  background-color: rgba(239, 68, 68, 0.2);
}

.bg-warning-subtle {
  background-color: rgba(245, 158, 11, 0.2);
}

.bg-primary-subtle {
  background-color: rgba(59, 130, 246, 0.2);
}

.bg-info-subtle {
  background-color: rgba(14, 165, 233, 0.2);
}

.impact-meter {
  height: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;
}

.impact-level {
  height: 100%;
  border-radius: 3px;
}

.impact-label {
  display: block;
  font-size: 0.8rem;
  color: #9ca3af;
}

.level-5 { width: 100%; background-color: #ef4444; }
.level-4 { width: 80%; background-color: #f59e0b; }
.level-3 { width: 60%; background-color: #3b82f6; }
.level-2 { width: 40%; background-color: #10b981; }
.level-1 { width: 20%; background-color: #6366f1; }

/* Solutions list */
.solution-list {
  list-style: none;
  padding: 0;
}

.solution-list li {
  margin-bottom: 2rem;
}

.bullet {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(16, 185, 129, 0.2);
  color: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 1rem;
  flex-shrink: 0;
}

/* Environmental facts section */
.environmental-facts {
  background: linear-gradient(to right, #1e3a8a, #0f766e);
  overflow: hidden;
  position: relative;
}

.environmental-facts::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://images.unsplash.com/photo-1557684387-08927d28c72a?w=1400&q=80') center/cover no-repeat;
  opacity: 0.1;
  z-index: 0;
}

.fact-item {
  position: relative;
  z-index: 1;
  padding: 1rem;
}

.fact-number {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.5rem;
}

.fact-label {
  display: block;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

/* Table card */
.table-card {
  background-color: #1f2937;
  border-radius: 16px;
  overflow: hidden;
}

.table-dark {
  --bs-table-bg: transparent;
  --bs-table-striped-bg: rgba(255, 255, 255, 0.05);
  --bs-table-hover-bg: rgba(16, 185, 129, 0.1);
  --bs-table-hover-color: #fff;
}

.btn-outline-accent {
  color: #10b981;
  border-color: #10b981;
}

.btn-outline-accent:hover {
  background-color: #10b981;
  color: #fff;
}

/* Call to action section */
.cta-section {
  position: relative;
}

.cta-content {
  background: linear-gradient(to right, #0f766e, #047857);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.cta-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://images.unsplash.com/photo-1569466181852-973d1a89c01a?w=1400&q=80') center/cover no-repeat;
  opacity: 0.1;
  z-index: -1;
}

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
</style>