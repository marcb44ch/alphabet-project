<script setup>
import Chart from '@/components/Chart.vue'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import "@/assets/pages.css"

const { t } = useI18n({
  locale: 'ca',
  messages: {
    ca: { },
    es: { }
  }
})

// Chart options for emissions overview
const emissionsOverview = computed(() => ({
  title: {
    text: 'Resum d\'Emissions i Objectius',
    subtext: '2023-2030',
    left: 'center',
    textStyle: { color: '#e0e0e0' },
    subtextStyle: { color: '#a0a0a0' }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['2023', '2025', '2027', '2030'],
    axisLine: { lineStyle: { color: '#555' } },
    axisLabel: { color: '#e0e0e0' }
  },
  yAxis: {
    type: 'value',
    name: 'Reducció (%)',
    nameTextStyle: { color: '#a0a0a0' },
    axisLine: { lineStyle: { color: '#555' } },
    axisLabel: { color: '#e0e0e0' },
    splitLine: { lineStyle: { color: 'rgba(255, 255, 255, 0.1)' } }
  },
  series: [{
    data: [0, 30, 60, 80],
    type: 'bar',
    itemStyle: { color: '#10b981' },
    label: {
      show: true,
      position: 'top',
      formatter: '{c}%',
      color: '#e0e0e0'
    }
  }]
}))
</script>

<template>
  <div class="study-page dark-theme">
    <!-- Header section -->
    <section class="header-section position-relative overflow-hidden" style="background-image: url('@/assets/img/arbol.jpg')">
      <div class="overlay"></div>
      <div class="container position-relative z-3">
        <div class="row min-vh-75 align-items-center py-5">
          <div class="col-lg-8 mx-auto text-center">
            <span class="badge bg-accent text-dark mb-3 px-3 py-2">PROJECTE ALFABET | 2025</span>
            <h1 class="display-3 fw-bold text-white mb-3">Compromís amb el<br>Medi Ambient</h1>
            <p class="lead text-light-50">Descobreix les nostres iniciatives per combatre el canvi climàtic i reduir la petjada de carboni.</p>
            <div class="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <a href="#overview" class="btn btn-accent">
                <i class="bi bi-graph-up me-2"></i>Resum Executiu
              </a>
              <a href="#initiatives" class="btn btn-outline-accent">
                <i class="bi bi-arrow-down-circle me-2"></i>Veure Iniciatives
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-element bg-element-1"></div>
      <div class="bg-element bg-element-2"></div>
    </section>

    <!-- Main content -->
    <section class="container py-5">
      <!-- Overview section -->
      <div class="row mb-5" id="overview">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">Resum de l'Impacte Ambiental</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <div class="row g-4">
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-shield-check text-accent me-2"></i>Principals Assoliments</h3>
                  <ul class="custom-list">
                    <li>Reducció d'emissions: 372.557,87 tCO₂e en 2023</li>
                    <li>92% creixement en vehicles electrificats</li>
                    <li>Sistema de Gestió Ambiental ISO 14001</li>
                    <li>Implementació d'energia renovable</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-bullseye text-accent me-2"></i>Objectius 2030</h3>
                  <ul class="custom-list">
                    <li>30% reducció d'emissions per 2025</li>
                    <li>60% reducció d'emissions per 2027</li>
                    <li>80% reducció d'emissions per 2030</li>
                    <li>100% flota electrificada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chart section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4">
              <div class="chart-container" style="height: 400px;">
                <Chart :option="emissionsOverview" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Initiatives section -->
      <div class="row mb-5" id="initiatives">
        <div class="col-lg-10 mx-auto">
          <h2 class="h3 fw-bold text-center mb-4">Iniciatives Principals</h2>
          <div class="row g-4">
            <!-- Carbon Footprint Card -->
            <div class="col-md-6">
              <div class="product-analysis-card h-100">
                <div class="product-icon">
                  <i class="bi bi-leaf-fill"></i>
                </div>
                <h3 class="h5 mb-3">Petjada de Carboni</h3>
                <ul class="custom-list">
                  <li>Electrificació de flotes (+92% vs 2022)</li>
                  <li>Reducció consum energètic (-16.5%)</li>
                  <li>Sistema ISO 14001 certificat</li>
                  <li>Energia renovable en instal·lacions</li>
                </ul>
                <router-link to="/carbon-footprint" class="btn btn-outline-accent mt-3">
                  Més informació
                </router-link>
              </div>
            </div>

            <!-- Climate Change Card -->
            <div class="col-md-6">
              <div class="product-analysis-card h-100">
                <div class="product-icon">
                  <i class="bi bi-globe2"></i>
                </div>
                <h3 class="h5 mb-3">Canvi Climàtic</h3>
                <ul class="custom-list">
                  <li>Temperatura global: +1.1°C des de 1900</li>
                  <li>CO₂ atmosfèric: 416 ppm</li>
                  <li>Pèrdua gel Àrtic: -13% per dècada</li>
                  <li>Nivell del mar: +3.3 mm/any</li>
                </ul>
                <router-link to="/climatic-change" class="btn btn-outline-accent mt-3">
                  Més informació
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@import '../assets/pages.css';



/* Mejorar el overlay para mejor contraste */
.overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
}

/* Ajustar el contenido del header */
.header-section .container {
  padding-top: 6rem;
}

/* Custom styles for this view */
.chart-container {
  width: 100%;
  height: 100%;
  min-height: 400px;
}

.badge {
  font-weight: 500;
  letter-spacing: 0.5px;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .header-section {
    min-height: 80vh;
  }
}
</style>