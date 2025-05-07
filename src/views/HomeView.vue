<script setup>
import Chart from '@/components/Chart.vue'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import "@/assets/pages.css"

const { t, locale, messages } = useI18n({
  locale: 'ca',
  messages: {
    ca: {
      badge: "PROJECTE ALFABET | 2025",
      header: {
        title: "Compromís amb el Medi Ambient",
        subtitle: "Descobreix les nostres iniciatives per combatre el canvi climàtic i reduir la petjada de carboni.",
        button1: "Resum Executiu",
        button2: "Veure Iniciatives"
      },
      overview: {
        title: "Resum de l'Impacte Ambiental",
        achievements: {
          title: "Principals Assoliments",
          list: [
            "Reducció d'emissions: 372.557,87 tCO₂e en 2023",
            "92% creixement en vehicles electrificats",
            "Sistema de Gestió Ambiental ISO 14001",
            "Implementació d'energia renovable"
          ]
        },
        objectives: {
          title: "Objectius 2030",
          list: [
            "30% reducció d'emissions per 2025",
            "60% reducció d'emissions per 2027",
            "80% reducció d'emissions per 2030",
            "100% flota electrificada"
          ]
        }
      },
      chart: {
        title: "Resum d'Emissions i Objectius",
        subtext: "2023-2030"
      },
      initiatives: {
        title: "Iniciatives Principals",
        carbonFootprint: {
          title: "Petjada de Carboni",
          list: [
            "Electrificació de flotes (+92% vs 2022)",
            "Reducció consum energètic (-16.5%)",
            "Sistema ISO 14001 certificat",
            "Energia renovable en instal·lacions"
          ],
          button: "Més informació"
        },
        climateChange: {
          title: "Canvi Climàtic",
          list: [
            "Temperatura global: +1.1°C des de 1900",
            "CO₂ atmosfèric: 416 ppm",
            "Pèrdua gel Àrtic: -13% per dècada", 
            "Nivell del mar: +3.3 mm/any"
          ],
          button: "Més informació"
        }
      }
    },
    es: {
      badge: "PROYECTO ALFABETO | 2025",
      header: {
        title: "Compromiso con el Medio Ambiente",
        subtitle: "Descubre nuestras iniciativas para combatir el cambio climático y reducir la huella de carbono.",
        button1: "Resumen Ejecutivo",
        button2: "Ver Iniciativas"
      },
      overview: {
        title: "Resumen del Impacto Ambiental",
        achievements: {
          title: "Principales Logros",
          list: [
            "Reducción de emisiones: 372.557,87 tCO₂e en 2023",
            "92% crecimiento en vehículos electrificados",
            "Sistema de Gestión Ambiental ISO 14001",
            "Implementación de energía renovable"
          ]
        },
        objectives: {
          title: "Objetivos 2030",
          list: [
            "30% reducción de emisiones para 2025",
            "60% reducción de emisiones para 2027",
            "80% reducción de emisiones para 2030",
            "100% flota electrificada"
          ]
        }
      },
      chart: {
        title: "Resumen de Emisiones y Objetivos",
        subtext: "2023-2030"
      },
      initiatives: {
        title: "Iniciativas Principales",
        carbonFootprint: {
          title: "Huella de Carbono",
          list: [
            "Electrificación de flotas (+92% vs 2022)",
            "Reducción consumo energético (-16.5%)",
            "Sistema ISO 14001 certificado",
            "Energía renovable en instalaciones"
          ],
          button: "Más información"
        },
        climateChange: {
          title: "Cambio Climático",
          list: [
            "Temperatura global: +1.1°C desde 1900",
            "CO₂ atmosférico: 416 ppm",
            "Pérdida hielo Ártico: -13% por década",
            "Nivel del mar: +3.3 mm/año"
          ],
          button: "Más información"
        }
      }
    }
  }
})

// Chart options for emissions overview
const emissionsOverview = computed(() => ({
  title: {
    text: t('chart.title'),
    subtext: t('chart.subtext'),
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
            <span class="badge bg-accent text-dark mb-3 px-3 py-2">{{ t('badge') }}</span>
            <h1 class="display-3 fw-bold text-white mb-3">{{ t('header.title') }}</h1>
            <p class="lead text-light-50">{{ t('header.subtitle') }}</p>
            <div class="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <a href="#overview" class="btn btn-accent">
                <i class="bi bi-graph-up me-2"></i>{{ t('header.button1') }}
              </a>
              <a href="#initiatives" class="btn btn-outline-accent">
                <i class="bi bi-arrow-down-circle me-2"></i>{{ t('header.button2') }}
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
              <h2 class="h4 text-white mb-0">{{ t('overview.title') }}</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <div class="row g-4">
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-shield-check text-accent me-2"></i>{{ t('overview.achievements.title') }}</h3>
                  <ul class="custom-list">
                    <li v-for="achievement in messages[locale].overview.achievements.list" :key="achievement">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-bullseye text-accent me-2"></i>{{ t('overview.objectives.title') }}</h3>
                  <ul class="custom-list">
                    <li v-for="objective in messages[locale].overview.objectives.list" :key="objective">
                      {{ objective }}
                    </li>
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
          <h2 class="h3 fw-bold text-center mb-4">{{ t('initiatives.title') }}</h2>
          <div class="row g-4">
            <!-- Carbon Footprint Card -->
            <div class="col-md-6">
              <div class="product-analysis-card h-100">
                <div class="product-icon">
                  <i class="bi bi-leaf-fill"></i>
                </div>
                <h3 class="h5 mb-3">{{ t('initiatives.carbonFootprint.title') }}</h3>
                <ul class="custom-list">
                  <li v-for="item in messages[locale].initiatives.carbonFootprint.list" :key="item">{{ item }}</li>
                </ul>
                <router-link to="/CarbonFootprint" class="btn btn-outline-accent mt-3">
                  {{ t('initiatives.carbonFootprint.button') }}
                </router-link>
              </div>
            </div>

            <!-- Climate Change Card -->
            <div class="col-md-6">
              <div class="product-analysis-card h-100">
                <div class="product-icon">
                  <i class="bi bi-globe2"></i>
                </div>
                <h3 class="h5 mb-3">{{ t('initiatives.climateChange.title') }}</h3>
                <ul class="custom-list">
                  <li v-for="item in messages[locale].initiatives.climateChange.list" :key="item">{{ item }}</li>
                </ul>
                <router-link to="/ClimaticChange" class="btn btn-outline-accent mt-3">
                  {{ t('initiatives.climateChange.button') }}
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