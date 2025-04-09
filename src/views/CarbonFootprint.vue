<!-- <template>
  <div class="CarbonFootprint">
    <div>
      <h1>Petjada de Carboni</h1>
      <p>L’empresa Alphabet està compromesa amb la reducció de la seva petjada de carboni a través de diverses iniciatives i polítiques. Aquí tens un resum de les accions que estan duent a terme:</p>
      <br>
      <section>
        <h4>Electrificació de flotes</h4>
        <li>Increment de les matriculacions de vehicles 100% elèctrics, amb un creixement del 92% en 2023.</li>
        <li>Servei de consultoria d’electrificació per ajudar els clients a integrar vehicles elèctrics i infraestructures de recàrrega.</li>
      </section>
      <br>
      <section>
        <h4>Gestió ambiental:</h4>
        <li>Implementació d’un Sistema de Gestió Ambiental basat en la norma ISO 14001 des de 2010.</li>
        <li>Objectius específics com la reducció del consum d’aigua i energia elèctrica a les seves instal·lacions.</li>
      </section>
      <br>
      <section>
        <h4>Reducció d’emissions de CO2</h4>
        <li>Projectes sostenibles per prevenir i reduir les emissions de CO2 a llarg termini.</li>
        <li>Càlcul de la seva petjada de carboni segons els tres alcances del protocol de GEI, amb un total de 372.557,87 tCO²e en 2023.</li>
      </section>
      <br>
      <section>
        <h4>Innovació i sostenibilitat:</h4>
        <li>Promoció de la reducció, reutilització i reciclatge de residus.</li>
        <li>Foment de l’ús d’energia verda en les seves instal·lacions.</li>
      </section>
      <br>
      <section>
        <h4>Suport als clients:</h4>
        <li>Expansió dels serveis de consultoria per ajudar els clients a reduir les emissions de les seves flotes durant tot el cicle de vida del vehicle.</li>
        <li>Aquestes accions reflecteixen el compromís d’Alphabet amb la sostenibilitat i la seva responsabilitat amb el medi ambient.</li>
      </section>
      <br>
      <section>
        <h4>Suport als clients:</h4>
        <li>Expansió dels serveis de consultoria per ajudar els clients a reduir les emissions de les seves flotes durant tot el cicle de vida del vehicle.</li>
        <li>Aquestes accions reflecteixen el compromís d’Alphabet amb la sostenibilitat i la seva responsabilitat amb el medi ambient.</li>
      </section>
      <br>
    </div>
  </div>
 </template>

<style>
  @media (min-width: 1024px) {
  .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
  }
  }
</style> -->

<script setup>
import Chart from '@/components/Chart.vue'
import {ref} from 'vue'
import { useI18n } from 'vue-i18n'
import "@/assets/pages.css"

const { t } = useI18n({
  locale: 'ca',
  messages: {
    ca: { },
    es: { }
  }
})

const options = ref({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
})

// export default {
//   name: 'CarbonFootprint',
//   components: {
//     Chart
//   },
//   data() {
//     return {
//       emissionsChartOptions: {
//         title: {
//           text: 'Distribució d\'emissions per abast (tCO₂e)',
//           left: 'center'
//         },
//         tooltip: {
//           trigger: 'item',
//           formatter: '{a} <br/>{b}: {c} tCO₂e ({d}%)'
//         },
//         legend: {
//           orient: 'vertical',
//           left: 'left',
//           textStyle: {
//             color: '#e0e0e0'
//           }
//         },
//         series: [
//           {
//             name: 'Emissions de CO₂',
//             type: 'pie',
//             radius: ['40%', '70%'],
//             avoidLabelOverlap: false,
//             itemStyle: {
//               borderRadius: 10,
//               borderColor: '#121212',
//               borderWidth: 2
//             },
//             label: {
//               show: false,
//               position: 'center'
//             },
//             emphasis: {
//               label: {
//                 show: true,
//                 fontSize: '18',
//                 fontWeight: 'bold'
//               }
//             },
//             labelLine: {
//               show: false
//             },
//             data: [
//               { value: 514.92, name: 'Abast 1: Emissions directes', itemStyle: { color: '#28a745' } },
//               { value: 211.02, name: 'Abast 2: Emissions indirectes (electricitat)', itemStyle: { color: '#0d6efd' } },
//               { value: 371851.93, name: 'Abast 3: Altres emissions indirectes', itemStyle: { color: '#dc3545' } }
//             ]
//           }
//         ]
//       }
//     }
//   }
// }
</script>

<template>
  <div class="study-page dark-theme">
    <!-- Header section with study title -->
    <section class="header-section position-relative overflow-hidden">
      <div class="overlay"></div>
      <div class="container position-relative z-3">
        <div class="row min-vh-75 align-items-center py-5">
          <div class="col-lg-8 mx-auto text-center">
            <span class="badge bg-accent text-dark mb-3 px-3 py-2">ESTUDI DE CAS | 2025</span>
            <h1 class="display-3 fw-bold text-white mb-3">Estudi de la Petjada<br>de Carboni</h1>
            <h2 class="h3 fw-light text-accent mb-4">Anàlisi d'Alphabet España (2025)</h2>
            <div class="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <a href="#abstract" class="btn btn-outline-accent">
                <i class="bi bi-file-text me-2"></i>Resum executiu
              </a>
              <a href="#methodology" class="btn btn-accent">
                <i class="bi bi-arrow-down-circle me-2"></i>Veure estudi complet
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Background elements -->
      <div class="bg-element bg-element-1"></div>
      <div class="bg-element bg-element-2"></div>
    </section>

    <!-- Main content section -->
    <section class="container py-5">
      <!-- Abstract section -->
      <div class="row mb-5" id="abstract">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">Resum executiu</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <p class="lead">
                Aquest estudi analitza la petjada de carboni d'Alphabet España Fleet Management S.A.U., les seves 
                estratègies de reducció d'emissions i el seu compromís amb la sostenibilitat.
              </p>
              <hr class="my-4">
              <div class="row g-4">
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-graph-up-arrow text-accent me-2"></i>Objectius</h3>
                  <ul class="custom-list">
                    <li>Analitzar les emissions segons el Protocol GEH</li>
                    <li>Identificar les principals fonts d'emissions</li>
                    <li>Avaluar les estratègies de reducció implementades</li>
                    <li>Proposar millores i recomanacions</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-lightbulb text-accent me-2"></i>Principals troballes</h3>
                  <ul class="custom-list">
                    <li>Petjada de carboni total de 372.557,87 tCO₂e en 2023</li>
                    <li>99,81% d'emissions procedents de l'Abast 3</li>
                    <li>Creixement del 92% en matriculacions elèctriques</li>
                    <li>Reducció del consum energètic en un 0,5% respecte a 2022</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider -->
      <div class="divider my-5" id="methodology">
        <span class="divider-label">Metodologia</span>
      </div>

      <!-- Methodology section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">Metodologia d'anàlisi</h2>
              <p>L'anàlisi de la petjada de carboni s'ha realitzat segons l'estàndard del Protocol de Gasos d'Efecte 
                 Hivernacle (GEH), que classifica les emissions en tres abasts.</p>
              
              <div class="row g-4 mt-3">
                <div class="col-md-4">
                  <div class="methodology-card p-3 rounded-3 h-100">
                    <div class="methodology-icon mb-3">
                      <i class="bi bi-1-circle"></i>
                    </div>
                    <h4 class="h6 fw-bold">Abast 1: Emissions directes</h4>
                    <p class="small">Emissions directes procedents de fonts controlades per l'organització, com la flota pròpia i combustibles.</p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="methodology-card p-3 rounded-3 h-100">
                    <div class="methodology-icon mb-3">
                      <i class="bi bi-2-circle"></i>
                    </div>
                    <h4 class="h6 fw-bold">Abast 2: Emissions indirectes</h4>
                    <p class="small">Emissions indirectes associades a la generació d'electricitat adquirida per l'organització.</p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="methodology-card p-3 rounded-3 h-100">
                    <div class="methodology-icon mb-3">
                      <i class="bi bi-3-circle"></i>
                    </div>
                    <h4 class="h6 fw-bold">Abast 3: Altres emissions indirectes</h4>
                    <p class="small">Emissions que ocorren en la cadena de valor, incloent l'ús dels vehicles per part dels clients.</p>
                  </div>
                </div>
              </div>

              <div class="alert alert-info mt-4">
                <div class="d-flex">
                  <div class="me-3">
                    <i class="bi bi-info-circle-fill fs-4"></i>
                  </div>
                  <div>
                    <h5 class="alert-heading">Verificació de dades</h5>
                    <p class="mb-0">Les dades han estat recopilades dels registres interns de l'empresa i verificades mitjançant el 
                    seu Sistema de Gestió Ambiental ISO 14001.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider -->
      <div class="divider my-5" id="graphs">
        <span class="divider-label">Gràfica</span>
      </div>

      <div style="height: 500px;">
        <chart :options="options"></chart>
      </div>

      <!-- Section divider -->
      <div class="divider my-5" id="results">
        <span class="divider-label">Resultats de l'anàlisi</span>
      </div>

      <!-- Carbon footprint results -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">Anàlisi de la petjada de carboni</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <div class="row g-4">
                
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">Indicadors clau de rendiment</h3>
                  
                  <div class="env-metrics-panel">
                    <div class="env-metric-item mb-4">
                      <div class="d-flex justify-content-between">
                        <h4 class="h6 mb-0">Creixement en matriculacions elèctriques</h4>
                        <span class="badge bg-success-subtle text-success">+92% vs 2022</span>
                      </div>
                      <p class="small text-muted mb-2">Comparativa amb el sector (+76%)</p>
                      <div class="d-flex align-items-end">
                        <span class="h3 mb-0">92%</span>
                        <span class="ms-2">increment anual</span>
                      </div>
                      <div class="progress mt-2" style="height: 6px;">
                        <div class="progress-bar bg-success" style="width: 92%;"></div>
                      </div>
                      <div class="d-flex justify-content-between mt-1">
                        <small>Comparativa amb sector</small>
                        <small>+16 punts</small>
                      </div>
                    </div>
                    
                    <div class="env-metric-item mb-4">
                      <div class="d-flex justify-content-between">
                        <h4 class="h6 mb-0">Vehicles electrificats en flota</h4>
                        <span class="badge bg-primary-subtle text-primary">6,9% del total</span>
                      </div>
                      <p class="small text-muted mb-2">Total de vehicles electrificats</p>
                      <div class="d-flex align-items-end">
                        <span class="h3 mb-0">5.500</span>
                        <span class="ms-2">vehicles</span>
                      </div>
                      <div class="progress mt-2" style="height: 6px;">
                        <div class="progress-bar bg-primary" style="width: 6.9%;"></div>
                      </div>
                      <div class="d-flex justify-content-between mt-1">
                        <small>Flota total</small>
                        <small>80.000 vehicles</small>
                      </div>
                    </div>
                    
                    <div class="env-metric-item">
                      <div class="d-flex justify-content-between">
                        <h4 class="h6 mb-0">Consum energètic</h4>
                        <span class="badge bg-success-subtle text-success">-0,5% vs 2022</span>
                      </div>
                      <p class="small text-muted mb-2">Total consumit en instal·lacions</p>
                      <div class="d-flex align-items-end">
                        <span class="h3 mb-0">639.449</span>
                        <span class="ms-2">kWh</span>
                      </div>
                      <div class="progress mt-2" style="height: 6px;">
                        <div class="progress-bar bg-success" style="width: 83.5%;"></div>
                      </div>
                      <div class="d-flex justify-content-between mt-1">
                        <small>Reducció des de 2020</small>
                        <small>-16,5%</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">Emissions per abast</h3>
                  <p>L'estudi revela que la major part de l'impacte ambiental de l'empresa prové de les 
                     emissions indirectes (Abast 3), representant el 99,81% del total. Els resultats mostren un càlcul 
                     total d'emissions per a l'any 2023 de 372.557,87 tCO₂e.</p>
                  
                  <div class="emissions-breakdown mt-4">
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mb-1">
                        <span><strong>Abast 1:</strong> Emissions directes</span>
                        <span>514,92 tCO₂e</span>
                      </div>
                      <div class="progress" style="height: 10px;">
                        <div class="progress-bar bg-success" style="width: 0.14%;"></div>
                      </div>
                    </div>
                    
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mb-1">
                        <span><strong>Abast 2:</strong> Emissions indirectes (electricitat)</span>
                        <span>211,02 tCO₂e</span>
                      </div>
                      <div class="progress" style="height: 10px;">
                        <div class="progress-bar bg-info" style="width: 0.05%;"></div>
                      </div>
                    </div>
                    
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mb-1">
                        <span><strong>Abast 3:</strong> Altres emissions indirectes</span>
                        <span>371.851,93 tCO₂e</span>
                      </div>
                      <div class="progress" style="height: 10px;">
                        <div class="progress-bar bg-danger" style="width: 99.81%;"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="alert alert-warning mt-4">
                    <div class="d-flex">
                      <div class="me-3">
                        <i class="bi bi-exclamation-triangle-fill fs-4"></i>
                      </div>
                      <div>
                        <h5 class="alert-heading">Troballa significativa</h5>
                        <p class="mb-0">L'elevat percentatge d'emissions d'Abast 3 suggereix que les 
                        estratègies més efectives per reduir la petjada ambiental s'han de centrar en la 
                        cadena de valor i l'ús de vehicles per part dels clients.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Section divider -->
      <div class="divider my-5" id="strategies">
        <span class="divider-label">Estratègies implementades</span>
      </div>

      <!-- Strategies section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">Estratègies de reducció d'emissions</h2>
              <p>Aquest apartat examina les solucions que l'empresa ha desenvolupat per fomentar la mobilitat 
                 sostenible i reduir l'impacte ambiental de la seva activitat i la dels seus clients.</p>
              
              <div class="row g-4 mt-3">
                <div class="col-md-6 col-lg-3">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-lightning-charge-fill"></i>
                    </div>
                    <h3 class="h5">Electrificació interna</h3>
                    <p class="small">Incentius per a l'elecció de vehicles de companyia híbrids i elèctrics per part dels empleats.</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span class="badge bg-success-subtle text-success">Alt impacte</span>
                      </div>
                      <div class="rating">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6 col-lg-3">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-people-fill"></i>
                    </div>
                    <h3 class="h5">Mobilitat sostenible</h3>
                    <p class="small">Promoció del teletreball i opcions de desplaçament amb menor impacte ambiental per als treballadors.</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span class="badge bg-primary-subtle text-primary">Mig impacte</span>
                      </div>
                      <div class="rating">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6 col-lg-3">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-thermometer-half"></i>
                    </div>
                    <h3 class="h5">Eficiència energètica</h3>
                    <p class="small">Control de temperatura en oficines (27°C a l'estiu, 19°C a l'hivern) i mesures d'estalvi energètic.</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span class="badge bg-primary-subtle text-primary">Mig impacte</span>
                      </div>
                      <div class="rating">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                        <i class="bi bi-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6 col-lg-3">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-building-fill"></i>
                    </div>
                    <h3 class="h5">Energia verda</h3>
                    <p class="small">Implementació d'energia renovable en 5 de les 8 localitzacions de l'empresa a nivell nacional.</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span class="badge bg-primary-subtle text-primary">Mig impacte</span>
                      </div>
                      <div class="rating">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 class="h5 fw-bold mt-5 mb-3">Serveis per a clients</h3>
              <div class="row">
                <div class="col-md-6">
                  <div class="card bg-dark-accent border-0">
                    <div class="card-body">
                      <h4 class="h6 fw-bold text-white">Consultoria E-Mobility</h4>
                      <p class="small text-light">Servei estructurat en 4 nivells diferenciats d'assessorament que s'adapten a les necessitats específiques de cada client.</p>
                      <ol class="small text-light mt-3">
                        <li><strong>Nivell Bàsic:</strong> Anàlisi inicial de flota i potencial d'electrificació</li>
                        <li><strong>Nivell Intermedi:</strong> Desenvolupament d'estratègia d'electrificació</li>
                        <li><strong>Nivell Avançat:</strong> Implementació d'infraestructures i polítiques</li>
                        <li><strong>Nivell Expert:</strong> Gestió integral de la transformació de flotes</li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="card bg-dark-accent border-0">
                    <div class="card-body">
                      <h4 class="h6 fw-bold text-white">Infraestructura de recàrrega</h4>
                      <p class="small text-light">Solucions per facilitar la transició a vehicles elèctrics, incloent punts de recàrrega i sistemes de pagament.</p>
                      <div class="electrified-metrics d-flex align-items-center mt-3">
                        <div class="me-3">
                          <div class="ev-count">Tarjeta de recàrrega</div>
                          <div class="ev-label text-light small">En col·laboració amb Repsol</div>
                        </div>
                        <div class="ms-3">
                          <div class="small mt-1 text-light">Accés a més de 400 punts de recàrrega a España</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider -->
      <div class="divider my-5" id="conclusions">
        <span class="divider-label">Conclusions</span>
      </div>

      <!-- Conclusions section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">Conclusions i recomanacions</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <div class="row">
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">Principals troballes</h3>
                  
                  <div class="conclusion-item mb-4">
                    <h4 class="h6 fw-bold"><i class="bi bi-check-circle-fill text-success me-2"></i>Fortaleses</h4>
                    <ul class="custom-list small">
                      <li>Creixement significatiu en matriculacions de vehicles elèctrics, 16 punts percentuals per sobre del mercat</li>
                      <li>Reducció continuada del consum energètic en instal·lacions (-16,5% des de 2020)</li>
                      <li>Implementació d'energia renovable en el 62,5% de les localitzacions</li>
                      <li>Servei de consultoria d'electrificació amb diversos nivells d'assessorament</li>
                    </ul>
                  </div>
                  
                  <div class="conclusion-item">
                    <h4 class="h6 fw-bold"><i class="bi bi-exclamation-circle-fill text-warning me-2"></i>Àrees de millora</h4>
                    <ul class="custom-list small">
                      <li>Alt percentatge (99,81%) d'emissions d'Abast 3, que requereix estratègies específiques en la cadena de valor</li>
                      <li>Baix percentatge de vehicles electrificats respecte al total de flota (6,9%)</li>
                      <li>Consum d'aigua amb tendència creixent (+3,6% vs 2022)</li>
                      <li>Dependència de fabricants per al subministrament de models electrificats</li>
                    </ul>
                  </div>
                </div>
                
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">Recomanacions estratègiques</h3>
                  
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">01</div>
                      <div>
                        <h4 class="h6 fw-bold">Estratègia integral d'Abast 3</h4>
                        <p class="small">Desenvolupar un programa específic per a la reducció d'emissions en la cadena de valor, 
                           enfocat en proveïdors i ús de vehicles per part dels clients.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">02</div>
                      <div>
                        <h4 class="h6 fw-bold">Acceleració de l'electrificació</h4>
                        <p class="small">Establir objectius ambiciosos per incrementar el percentatge de vehicles 
                           electrificats en la flota total, superant l'actual 6,9%.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">03</div>
                      <div>
                        <h4 class="h6 fw-bold">Gestió eficient de l'aigua</h4>
                        <p class="small">Implementar un pla de reducció del consum d'aigua en instal·lacions per 
                           revertir la tendència creixent observada.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="recommendation-item">
                    <div class="d-flex">
                      <div class="recommendation-number">04</div>
                      <div>
                        <h4 class="h6 fw-bold">Compensació de carboni</h4>
                        <p class="small">Desenvolupar un pla integral de compensació de carboni per a les emissions 
                           inevitables mentre s'avança en la transició cap a una mobilitat de zero emissions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="quote-panel mt-5">
                <blockquote class="blockquote">
                  <p>L'anàlisi revela que Alphabet España està avançant significativament en la seva estratègia de sostenibilitat, 
                     amb focus en l'electrificació de la flota. No obstant això, el repte més important es troba en la gestió 
                     de les emissions d'Abast 3, on es requereixen accions més decisives i col·laboratives.</p>
                </blockquote>
                <div class="blockquote-footer">
                  Conclusió de l'estudi de la petjada de carboni 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- References section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-sm rounded-4">
            <div class="card-body p-4">
              <h3 class="h5 fw-bold mb-3">Referències bibliogràfiques</h3>
              <ol class="references-list">
                <li>Alphabet España (2023). <em>Transformació en moviment: Memòria de sostenibilitat 2023</em>.</li>
                <li>GHG Protocol (2023). <em>Corporate Accounting and Reporting Standard</em>.</li>
                <li>ISO 14064-1:2018. <em>Gasos d'efecte hivernacle - Part 1: Especificació amb orientació, a nivell d'organització, per a la quantificació i l'informe d'emissions i remocions de gasos d'efecte hivernacle</em>.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@import '../assets/pages.css';

/* Header section styling - Full bleed image */
.header-section {
  /* background-image: url('https://images.unsplash.com/photo-1490775949603-0e355e8e01ba?w=1400&q=80'); */
  background-image: url('../assets/img/bmw-carbonFootprint.jpg');
}

/* Environmental metrics */
.bg-success-subtle {
  background-color: rgba(25, 135, 84, 0.2);
}

.bg-primary-subtle {
  background-color: rgba(13, 110, 253, 0.2);
}

.text-success {
  color: #28a745 !important;
}

.text-primary {
  color: #0d6efd !important;
}
</style>