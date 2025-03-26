<!-- <script setup>
  import Table from '@/components/Table.vue';
  import "bootstrap"
  import {ref} from 'vue'
  const headers = ref (['Nom', 'Cognoms', 'Adreça', 'Telefon'])
  const items   = ref ([
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
  <div class="ClimaticChange container">
    <h1 class="text-success">Impacte de l'empresa sobre el canvi climàtic</h1>
    <p class="text-primary">Les empreses tenen un impacte significatiu sobre el canvi climàtic, i aquest impacte es manifesta de diverses maneres:</p>
    <ol>
        <li><strong>Emissions de gasos d'efecte hivernacle</strong>: 
            Les activitats industrials i de producció generen emissions de CO₂ i altres gasos que contribueixen al canvi climàtic. 
            Aquestes emissions provenen principalment de la crema de combustibles fòssils com el carbó, el petroli i el gas natural.
        </li>
        <li><strong>Consum d'energia</strong>: 
            L'ús intensiu d'energia, especialment de fonts no renovables, augmenta la petjada de carboni de les empreses. 
            Les empreses que depenen en gran mesura de l'electricitat generada per centrals tèrmiques contribueixen significativament a les emissions de CO₂.
        </li>
        <li><strong>Desforestació</strong>: 
            Algunes empreses contribueixen a la desforestació, que redueix la capacitat del planeta per absorbir CO₂. 
            La desforestació és sovint resultat de l'expansió agrícola, la tala d'arbres per a fusta i paper, i la construcció d'infraestructures.
        </li>
        <li><strong>Residus</strong>: 
            La generació de residus, especialment plàstics, afecta negativament els ecosistemes i contribueix a la contaminació. 
            Els residus plàstics poden trigar centenars d'anys a descompondre's i sovint acaben als oceans, afectant la vida marina.
        </li>
    </ol>
    <p>Les empreses també poden jugar un paper crucial en la mitigació del canvi climàtic adoptant pràctiques sostenibles, com ara:</p>
    <ul>
        <li>L'ús d'energia renovable: Invertir en fonts d'energia renovable com l'energia solar, eòlica i hidroelèctrica per reduir les emissions de CO₂.</li>
        <li>La reducció de residus: Implementar programes de reciclatge i reduir l'ús de materials no biodegradables.</li>
        <li>Polítiques de responsabilitat social corporativa: Adoptar polítiques que promoguin la sostenibilitat ambiental i la responsabilitat social.</li>
        <li>Innovació tecnològica: Desenvolupar tecnologies més netes i eficients que redueixin l'impacte ambiental.</li>
    </ul>
    <Table :headers="headers" :items="items" class="table table-striped"></Table>
  </div>
</template>

<style scoped>
.ClimaticChange {
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
  color: #048300;
}

p {
  margin-bottom: 1em;
  color: #4ea6ff;
}

ol, ul {
  margin-bottom: 1em;
  padding-left: 1.5em;
}

li {
  margin-bottom: 0.5em;
}

strong {
  color: #e74c3c;
}

@media (min-width: 1024px) {
  .ClimaticChange {
    padding: 40px;
  }
}
</style> -->

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
              <button class="btn btn-accent btn-lg">
                <i class="bi bi-arrow-down-circle me-2"></i>Explorar solucions
              </button>
              <button class="btn btn-outline-light btn-lg">
                <i class="bi bi-graph-up me-2"></i>Veure dades
              </button>
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
      
      <div class="row mb-6">
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
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-6 col-lg-3">
          <div class="impact-card card border-0 h-100 shadow-lg">
            <div class="card-body p-4">
              <div class="icon-wrapper mb-4 bg-success-subtle rounded-circle">
                <i class="bi bi-tree-fill text-success"></i>
              </div>
              <h3 class="h4 fw-bold">Desforestació</h3>
              <p class="card-text">Algunes empreses contribueixen a la desforestació, que redueix la capacitat d'absorció de CO₂.</p>
              <div class="impact-meter mt-4">
                <div class="impact-level level-3"></div>
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
          <div class="card bg-dark-accent border-0 h-100">
            <div class="card-body p-4 p-lg-5">
              <h3 class="h3 fw-bold text-white mb-4">Estratègies immediates</h3>
              <ul class="solution-list">
                <li>
                  <div class="d-flex">
                    <div class="bullet">01</div>
                    <div>
                      <h4 class="h5 text-accent">Energia renovable</h4>
                      <p class="text-light">Invertir en fonts d'energia renovable com l'energia solar, eòlica i hidroelèctrica.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div class="bullet">02</div>
                    <div>
                      <h4 class="h5 text-accent">Reducció de residus</h4>
                      <p class="text-light">Implementar programes de reciclatge i reduir l'ús de materials no biodegradables.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="col-lg-6">
          <div class="card bg-dark-accent border-0 h-100">
            <div class="card-body p-4 p-lg-5">
              <h3 class="h3 fw-bold text-white mb-4">Objectius a llarg termini</h3>
              <ul class="solution-list">
                <li>
                  <div class="d-flex">
                    <div class="bullet">03</div>
                    <div>
                      <h4 class="h5 text-accent">Responsabilitat social</h4>
                      <p class="text-light">Adoptar polítiques que promoguin la sostenibilitat ambiental i la responsabilitat social.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div class="bullet">04</div>
                    <div>
                      <h4 class="h5 text-accent">Innovació tecnològica</h4>
                      <p class="text-light">Desenvolupar tecnologies més netes i eficients que redueixin l'impacte ambiental.</p>
                    </div>
                  </div>
                </li>
              </ul>
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
      <div class="row mb-5">
        <div class="col-12 text-center mb-5">
          <span class="badge bg-light text-dark px-3 py-2 mb-3">CONTACTES</span>
          <h2 class="display-5 fw-bold mb-3">Persones compromeses</h2>
          <p class="lead text-secondary mx-auto" style="max-width: 700px">Connecta amb professionals que treballen activament en solucions climàtiques.</p>
        </div>
      </div>
      
      <div class="card table-card border-0 shadow-lg">
        <div class="card-body p-0 p-sm-4">
          <div class="table-responsive">
            <Table :headers="headers" :items="items" class="table table-dark table-borderless align-middle"></Table>
          </div>
          <div class="d-flex justify-content-center mt-4">
            <button class="btn btn-outline-accent">
              <i class="bi bi-download me-2"></i>Exportar llistat
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* General styling */
.climate-page {
  font-family: 'Poppins', sans-serif;
  background-color: #111827;
  color: #e5e7eb;
}

.py-6 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.mb-6 {
  margin-bottom: 5rem;
}

/* Hero section styling */
.hero {
  background-color: #0f172a;
  min-height: 100vh;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
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
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
}

.impact-meter {
  height: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.impact-level {
  height: 100%;
  border-radius: 3px;
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

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
</style>