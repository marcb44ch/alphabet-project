<script setup>
 import Table from '@/components/Table.vue';
  import "bootstrap";
  import { ref, computed } from 'vue';
  import Chart from '@/components/chart.vue';
  // Or if you're using a different chart library: 
  // import { Chart } from 'some-chart-library';

  // traduccion de textos
  // import { useI18n } from 'vue-i18n'
  // const { t } = useI18n({
  //   locale: 'en',
  //   messages: {
  //     en: {},
  //     ca: {},
  //     es: {}
  //   }
  // })
  
  // Rest of your code remains the same...
  const headers = ref(['Cargo', 'Nombre', 'Departamento']);
  const items = ref([
    {cargo: "CEO", nombre: "Alberto Copado", departamento: "Dirección General"},
    {cargo: "Directora Comercial", nombre: "Alicia Gálvez", departamento: "Comercial y Marketing"},
    {cargo: "Director de Riesgos", nombre: "Daniel Müller", departamento: "Gestión de Riesgos"},
    {cargo: "Director Financiero", nombre: "Frank Danitz", departamento: "Finanzas"},
    {cargo: "Director de Operaciones", nombre: "Manuel Plaza", departamento: "Operaciones"}
  ]);

  const emissionData = ref([
    { year: 2021, value: 398450, label: '2021' },
    { year: 2022, value: 385220, label: '2022' },
    { year: 2023, value: 372557, label: '2023' }
  ]);

  const electricVehicles = ref([
    { year: 2021, value: 1850, label: '2021' },
    { year: 2022, value: 2860, label: '2022' },
    { year: 2023, value: 5500, label: '2023' }
  ]);

    // Configuración del gráfico de emisiones
  const emissionsChartOptions = computed(() => ({
    title: {
      text: 'Evolución de Emisiones de CO₂',
      subtext: 'Periodo 2021-2023 (tCO₂e)',
      left: 'center',
      textStyle: {
        color: '#e0e0e0'
      },
      subtextStyle: {
        color: '#a0a0a0'
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}: {c} tCO₂e',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: emissionData.value.map(item => item.label),
      axisLine: {
        lineStyle: {
          color: '#555'
        }
      },
      axisLabel: {
        color: '#e0e0e0'
      }
    },
    yAxis: {
      type: 'value',
      name: 'tCO₂e',
      nameTextStyle: {
        color: '#a0a0a0'
      },
      axisLine: {
        lineStyle: {
          color: '#555'
        }
      },
      axisLabel: {
        color: '#e0e0e0',
        formatter: '{value}'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    },
    series: [{
      data: emissionData.value.map(item => item.value),
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 4,
        color: '#ef4444'
      },
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
        color: '#ef4444'
      },
      markPoint: {
        data: [
          { type: 'min', name: 'Mínimo' }
        ]
      },
      areaStyle: {
        opacity: 0.2,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#ef4444'
          }, {
            offset: 1, color: 'rgba(0,0,0,0)'
          }]
        }
      }
    }]
  }));

  // Configuración del gráfico de vehículos eléctricos
  const evChartOptions = computed(() => ({
    title: {
      text: 'Crecimiento de Vehículos Electrificados',
      subtext: 'Periodo 2021-2023',
      left: 'center',
      textStyle: {
        color: '#e0e0e0'
      },
      subtextStyle: {
        color: '#a0a0a0'
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}: {c} vehículos',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: electricVehicles.value.map(item => item.label),
      axisLine: {
        lineStyle: {
          color: '#555'
        }
      },
      axisLabel: {
        color: '#e0e0e0'
      }
    },
    yAxis: {
      type: 'value',
      name: 'Vehículos',
      nameTextStyle: {
        color: '#a0a0a0'
      },
      axisLine: {
        lineStyle: {
          color: '#555'
        }
      },
      axisLabel: {
        color: '#e0e0e0',
        formatter: '{value}'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    },
    series: [{
      data: electricVehicles.value.map(item => item.value),
      type: 'bar',
      barWidth: '60%',
      itemStyle: {
        color: '#10b981'
      },
      label: {
        show: true,
        position: 'top',
        color: '#e0e0e0'
      }
    }]
  }));
</script>

<template>
  <div class="study-page dark-theme">
    <!-- Header section with study title -->
    <section class="header-section position-relative overflow-hidden">
      <div class="overlay"></div>
      <div class="container position-relative z-3">
        <div class="row min-vh-75 align-items-center py-5">
          <div class="col-lg-8 mx-auto text-center">
            <span class="badge bg-accent text-dark mb-3 px-3 py-2">ESTUDIO DE CASO | 2025</span>
            <h1 class="display-3 fw-bold text-white mb-3">Análisis de Estrategias de<br>Sostenibilidad en el Sector Movilidad</h1>
            <h2 class="h3 fw-light text-accent mb-4">Caso de estudio: Alphabet España (2023)</h2>
            <div class="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <a href="#abstract" class="btn btn-outline-accent">
                <i class="bi bi-file-text me-2"></i>Resumen ejecutivo
              </a>
              <a href="#methodology" class="btn btn-accent">
                <i class="bi bi-arrow-down-circle me-2"></i>Ver estudio completo
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
              <h2 class="h4 text-white mb-0">Resumen ejecutivo</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <p class="lead">
                Este estudio analiza las estrategias de sostenibilidad implementadas por Alphabet España, 
                compañía de renting y movilidad corporativa perteneciente al Grupo BMW, evaluando su impacto 
                ambiental y las soluciones desarrolladas en el contexto de la emergencia climática.
              </p>
              <hr class="my-4">
              <div class="row g-4">
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-graph-up-arrow text-accent me-2"></i>Objetivos</h3>
                  <ul class="custom-list">
                    <li>Analizar el impacto ambiental de la flota gestionada</li>
                    <li>Evaluar estrategias de electrificación implementadas</li>
                    <li>Examinar las estructuras de gobierno corporativo responsables</li>
                    <li>Identificar tendencias y áreas de mejora</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-lightbulb text-accent me-2"></i>Hallazgos principales</h3>
                  <ul class="custom-list">
                    <li>Huella de carbono total de 372.557 tCO₂e en 2023</li>
                    <li>99,81% de emisiones procedentes del Alcance 3</li>
                    <li>92% de crecimiento en matriculaciones eléctricas</li>
                    <li>Portfolio diversificado de soluciones de movilidad sostenible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider -->
      <div class="divider my-5" id="methodology">
        <span class="divider-label">Metodología</span>
      </div>

      <!-- Methodology section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">Metodología de investigación</h2>
              <p>El presente estudio analiza los datos publicados en la memoria de sostenibilidad 2023 de Alphabet España. 
                 Se ha empleado una metodología mixta combinando análisis cuantitativo de datos medioambientales y examen cualitativo 
                 de las políticas, productos y estrategias implementadas.</p>
              
              <div class="row g-4 mt-3">
                <div class="col-md-4">
                  <div class="methodology-card p-3 rounded-3 h-100">
                    <div class="methodology-icon mb-3">
                      <i class="bi bi-file-text"></i>
                    </div>
                    <h4 class="h6 fw-bold">Análisis documental</h4>
                    <p class="small">Examen de la memoria de sostenibilidad, informes financieros y documentación corporativa.</p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="methodology-card p-3 rounded-3 h-100">
                    <div class="methodology-icon mb-3">
                      <i class="bi bi-calculator"></i>
                    </div>
                    <h4 class="h6 fw-bold">Análisis cuantitativo</h4>
                    <p class="small">Procesamiento de datos de emisiones, consumos y KPIs relevantes para el estudio.</p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="methodology-card p-3 rounded-3 h-100">
                    <div class="methodology-icon mb-3">
                      <i class="bi bi-diagram-3"></i>
                    </div>
                    <h4 class="h6 fw-bold">Análisis comparativo</h4>
                    <p class="small">Comparación con tendencias sectoriales y benchmarking con otras empresas del sector.</p>
                  </div>
                </div>
              </div>

              <div class="alert alert-info mt-4">
                <div class="d-flex">
                  <div class="me-3">
                    <i class="bi bi-info-circle-fill fs-4"></i>
                  </div>
                  <div>
                    <h5 class="alert-heading">Limitaciones del estudio</h5>
                    <p class="mb-0">Los datos analizados provienen exclusivamente de fuentes corporativas. No se han realizado 
                    mediciones independientes ni verificaciones de terceros para este estudio académico.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider -->
      <div class="divider my-5" id="context">
        <span class="divider-label">Contexto empresarial</span>
      </div>

      <!-- Company context section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <div class="row">
                <div class="col-md-6">
                  <h2 class="h3 fw-bold mb-4">Perfil de la empresa analizada</h2>
                  <p>Alphabet España Fleet Management S.A.U. es una compañía multimarca de renting y gestión de flotas 
                     operativa en España desde 2001. Forma parte del Grupo BMW y tiene su sede central en Múnich (Alemania).</p>
                  
                  <ul class="custom-list mt-4">
                    <li><strong>Sector:</strong> Renting y movilidad corporativa</li>
                    <li><strong>Fundación en España:</strong> 2001</li>
                    <li><strong>Presencia global:</strong> 36 países</li>
                    <li><strong>Misión declarada:</strong> "Garantizar la satisfacción de los clientes a través del compromiso como socio de movilidad"</li>
                  </ul>
                </div>
                
                <div class="col-md-6">
                  <div class="key-metrics-panel rounded-4 p-4 h-100">
                    <h3 class="h5 fw-bold mb-4">Indicadores clave (2023)</h3>
                    
                    <div class="metric-item d-flex align-items-center mb-3">
                      <div class="metric-icon bg-primary-subtle">
                        <i class="bi bi-currency-euro text-primary"></i>
                      </div>
                      <div class="ms-3">
                        <div class="metric-value">388M €</div>
                        <div class="metric-label">Facturación anual</div>
                      </div>
                    </div>
                    
                    <div class="metric-item d-flex align-items-center mb-3">
                      <div class="metric-icon bg-success-subtle">
                        <i class="bi bi-graph-up-arrow text-success"></i>
                      </div>
                      <div class="ms-3">
                        <div class="metric-value">62,7M €</div>
                        <div class="metric-label">Beneficio antes de impuestos</div>
                      </div>
                    </div>
                    
                    <div class="metric-item d-flex align-items-center mb-3">
                      <div class="metric-icon bg-info-subtle">
                        <i class="bi bi-people-fill text-info"></i>
                      </div>
                      <div class="ms-3">
                        <div class="metric-value">224</div>
                        <div class="metric-label">Empleados</div>
                      </div>
                    </div>
                    
                    <div class="metric-item d-flex align-items-center">
                      <div class="metric-icon bg-warning-subtle">
                        <i class="bi bi-car-front-fill text-warning"></i>
                      </div>
                      <div class="ms-3">
                        <div class="metric-value">80.000</div>
                        <div class="metric-label">Vehículos en flota</div>
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
      <div class="divider my-5" id="results">
        <span class="divider-label">Análisis de impacto ambiental</span>
      </div>

      <!-- Environmental impact results -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">Evaluación de la huella ambiental</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <div class="row g-4">
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">Análisis de emisiones GEI</h3>
                  <p>El estudio revela que la mayor parte del impacto ambiental de la empresa proviene de sus 
                     emisiones indirectas (Alcance 3), representando el 99,81% del total. Los datos indican una 
                     tendencia de reducción progresiva en emisiones directas.</p>
                  
                  <div class="emissions-breakdown mt-4">
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mb-1">
                        <span><strong>Alcance 1:</strong> Emisiones directas</span>
                        <span>155,35 tCO₂e</span>
                      </div>
                      <div class="progress" style="height: 10px;">
                        <div class="progress-bar bg-success" style="width: 0.05%;"></div>
                      </div>
                    </div>
                    
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mb-1">
                        <span><strong>Alcance 2:</strong> Emisiones indirectas (electricidad)</span>
                        <span>549,72 tCO₂e</span>
                      </div>
                      <div class="progress" style="height: 10px;">
                        <div class="progress-bar bg-info" style="width: 0.14%;"></div>
                      </div>
                    </div>
                    
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mb-1">
                        <span><strong>Alcance 3:</strong> Otras emisiones indirectas</span>
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
                        <h5 class="alert-heading">Hallazgo significativo</h5>
                        <p class="mb-0">El elevado porcentaje de emisiones de Alcance 3 sugiere que las 
                        estrategias más efectivas para reducir la huella ambiental deben centrarse en la 
                        cadena de valor y el uso de vehículos por parte de los clientes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">Otros indicadores ambientales</h3>
                  
                  <div class="env-metrics-panel">
                    <div class="env-metric-item mb-4">
                      <div class="d-flex justify-content-between">
                        <h4 class="h6 mb-0">Consumo energético</h4>
                        <span class="badge bg-success-subtle text-success">-0,5% vs 2022</span>
                      </div>
                      <p class="small text-muted mb-2">Total consumido en instalaciones</p>
                      <div class="d-flex align-items-end">
                        <span class="h3 mb-0">639.449</span>
                        <span class="ms-2">kWh</span>
                      </div>
                      <div class="progress mt-2" style="height: 6px;">
                        <div class="progress-bar bg-success" style="width: 83.5%;"></div>
                      </div>
                      <div class="d-flex justify-content-between mt-1">
                        <small>Reducción desde 2020</small>
                        <small>-16,5%</small>
                      </div>
                    </div>
                    
                    <div class="env-metric-item mb-4">
                      <div class="d-flex justify-content-between">
                        <h4 class="h6 mb-0">Consumo de agua</h4>
                        <span class="badge bg-warning-subtle text-warning">+3,6% vs 2022</span>
                      </div>
                      <p class="small text-muted mb-2">Total consumido en instalaciones</p>
                      <div class="d-flex align-items-end">
                        <span class="h3 mb-0">848,3</span>
                        <span class="ms-2">m³</span>
                      </div>
                      <div class="progress mt-2" style="height: 6px;">
                        <div class="progress-bar bg-warning" style="width: 60%;"></div>
                      </div>
                      <div class="d-flex justify-content-between mt-1">
                        <small>Área de mejora</small>
                        <small>Tendencia creciente</small>
                      </div>
                    </div>
                    
                    <div class="env-metric-item">
                      <div class="d-flex justify-content-between">
                        <h4 class="h6 mb-0">Reciclaje de papel</h4>
                        <span class="badge bg-info-subtle text-info">Economía circular</span>
                      </div>
                      <p class="small text-muted mb-2">Total reciclado</p>
                      <div class="d-flex align-items-end">
                        <span class="h3 mb-0">687,6</span>
                        <span class="ms-2">kg</span>
                      </div>
                      <div class="progress mt-2" style="height: 6px;">
                        <div class="progress-bar bg-info" style="width: 68%;"></div>
                      </div>
                      <div class="d-flex justify-content-between mt-1">
                        <small>Potencial de mejora</small>
                        <small>Moderado</small>
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
      <div class="divider my-5" id="charts">
        <span class="divider-label">Graficos</span>
      </div>

      <!-- Emissions and EV charts -->
      <div class="row mt-5 mb-4">
        <div class="col-lg-12">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-body p-4">
              <div class="chart-container" style="height: 400px;">
                <Chart :option="emissionsChartOptions" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row mt-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">Evolución de la flota sostenible</h2>
            </div>
            <div class="card-body p-4">
              <p class="mb-4">
                El análisis de la evolución interanual muestra un crecimiento sostenido y acelerado en la incorporación 
                de vehículos electrificados a la flota, con un incremento especialmente notable en 2023, casi duplicando 
                el parque móvil electrificado respecto al año anterior.
              </p>
              <div class="chart-container" style="height: 400px;">
                <Chart :option="evChartOptions" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Section divider -->
      <div class="divider my-5" id="strategies">
        <span class="divider-label">Estrategias implementadas</span>
      </div>

      <!-- Sustainable products analysis -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">Análisis de productos y servicios sostenibles</h2>
              <p>Este apartado examina las soluciones que la empresa ha desarrollado para fomentar la movilidad 
                 sostenible y reducir el impacto ambiental de su actividad y la de sus clientes.</p>
              
              <div class="row g-4 mt-3">
                <div class="col-md-6 col-lg-3">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-lightning-charge-fill"></i>
                    </div>
                    <h3 class="h5">Consultoría de electrificación</h3>
                    <p class="small">Servicio de asesoramiento para la transición hacia flotas eléctricas, con diferentes 
                       niveles de servicio adaptados a cada cliente.</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span class="badge bg-success-subtle text-success">Alto impacto</span>
                      </div>
                      <div class="rating">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6 col-lg-3">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-people-fill"></i>
                    </div>
                    <h3 class="h5">Alphabet Share</h3>
                    <p class="small">Servicio de carsharing corporativo (anteriormente AlphaCity) que optimiza el uso de 
                       vehículos mediante un sistema de reservas por aplicación.</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span class="badge bg-success-subtle text-success">Alto impacto</span>
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
                      <i class="bi bi-credit-card-fill"></i>
                    </div>
                    <h3 class="h5">Tarjeta de recarga</h3>
                    <p class="small">Desarrollada en colaboración con Repsol, facilita acceso a la red de recarga pública, 
                       siendo pioneros en el sector del renting.</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span class="badge bg-primary-subtle text-primary">Medio impacto</span>
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
                      <i class="bi bi-plug-fill"></i>
                    </div>
                    <h3 class="h5">Punto de recarga</h3>
                    <p class="small">Solución integrada que incluye instalación y financiación de puntos de recarga para 
                       hogares y oficinas a través de BMW Bank.</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span class="badge bg-primary-subtle text-primary">Medio impacto</span>
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
              </div>
              
              <h3 class="h5 fw-bold mt-5 mb-3">Análisis de indicadores de electrificación</h3>
              <div class="row">
                <div class="col-md-6">
                  <div class="card bg-dark-accent border-0">
                    <div class="card-body">
                      <h4 class="h6 fw-bold text-white">Crecimiento de matriculaciones eléctricas</h4>
                      <p class="small text-light">Las matriculaciones de vehículos 100% eléctricos crecieron a un ritmo 
                         superior al del mercado de renting en 2023.</p>
                      <div class="comparison-metrics d-flex align-items-center mt-3">
                        <div class="me-4">
                          <div class="value-label">Alphabet</div>
                          <div class="value-number text-success">+92%</div>
                        </div>
                        <div class="divider-vertical mx-2"></div>
                        <div class="ms-2">
                          <div class="value-label">Mercado</div>
                          <div class="value-number text-primary">+76%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="card bg-dark-accent border-0">
                    <div class="card-body">
                      <h4 class="h6 fw-bold text-white">Vehículos electrificados en flota</h4>
                      <p class="small text-light">Evolución del número de vehículos eléctricos e híbridos enchufables en la flota gestionada.</p>
                      <div class="electrified-metrics d-flex align-items-center mt-3">
                        <div class="me-3">
                          <div class="ev-count">5.500</div>
                          <div class="ev-label">vehículos</div>
                        </div>
                        <div class="ms-3">
                          <div class="progress flex-grow-1" style="height: 8px; width: 150px;">
                            <div class="progress-bar bg-success" style="width: 6.9%;"></div>
                          </div>
                          <div class="small mt-1 text-light">6,9% del total de flota</div>
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
      <div class="divider my-5" id="governance">
        <span class="divider-label">Gobierno corporativo</span>
      </div>

      

      <!-- Governance section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">Estructura de gobierno y sostenibilidad</h2>
              <p>Se ha analizado la estructura de toma de decisiones y los organismos responsables de la 
                 implementación de las políticas de sostenibilidad en la empresa.</p>
              
              <div class="governance-structure mt-4">
                <h3 class="h5 fw-bold mb-3">Comité de Dirección</h3>
                <p class="small mb-4">El Comité de Dirección es responsable de la gestión estratégica y operativa, 
                   incluyendo las iniciativas de sostenibilidad. Supervisa la diligencia de la organización mediante 
                   sesiones denominadas "Círculo de Sostenibilidad".</p>
                
                <div class="table-responsive">
                  <Table :headers="headers" :items="items" class="table table-striped table-hover align-middle"></Table>
                </div>
                
                <div class="key-finding mt-4">
                  <h4 class="h6 fw-bold"><i class="bi bi-search me-2 text-accent"></i>Hallazgo del estudio</h4>
                  <p class="small">El análisis revela que en julio de 2023 se creó la figura de consultor en Sostenibilidad, 
                     lo que sugiere un fortalecimiento del enfoque estratégico en este ámbito.</p>
                </div>
                
                <h3 class="h5 fw-bold mt-5 mb-3">Consejo de Administración</h3>
                <p class="small mb-3">Formado por miembros nombrados por el accionista único (Grupo BMW), se encarga 
                   de la dirección estratégica y toma de decisiones estructurales.</p>
                
                <ul class="custom-list small">
                  <li><strong>Alberto Copado:</strong> CEO de Alphabet España</li>
                  <li><strong>Frank Danitz:</strong> Director Financiero de Alphabet España</li>
                  <li><strong>Juan Ridao-Alonso:</strong> Controlling Business to Business, Fleet en Financial Services HQ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider -->
      <div class="divider my-5" id="conclusions">
        <span class="divider-label">Conclusiones</span>
      </div>

      <!-- Conclusions section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">Conclusiones y recomendaciones</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <div class="row">
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">Hallazgos principales</h3>
                  
                  <div class="conclusion-item mb-4">
                    <h4 class="h6 fw-bold"><i class="bi bi-check-circle-fill text-success me-2"></i>Fortalezas</h4>
                    <ul class="custom-list small">
                      <li>Crecimiento significativo en matriculaciones de vehículos eléctricos, 16 puntos porcentuales por encima del mercado</li>
                      <li>Portfolio diversificado de soluciones orientadas a la sostenibilidad</li>
                      <li>Reducción continuada del consumo energético en instalaciones (-16,5% desde 2020)</li>
                      <li>Estructura de gobierno con supervisión específica de sostenibilidad</li>
                    </ul>
                  </div>
                  
                  <div class="conclusion-item">
                    <h4 class="h6 fw-bold"><i class="bi bi-exclamation-circle-fill text-warning me-2"></i>Áreas de mejora</h4>
                    <ul class="custom-list small">
                      <li>Alto porcentaje (99,81%) de emisiones de Alcance 3, que requiere estrategias específicas en la cadena de valor</li>
                      <li>Crecimiento en el consumo de agua (+3,6% vs 2022)</li>
                      <li>Bajo porcentaje de vehículos electrificados respecto al total de flota (6,9%)</li>
                      <li>Dependencia de fabricantes para el suministro de modelos electrificados</li>
                    </ul>
                  </div>
                </div>
                
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">Recomendaciones estratégicas</h3>
                  
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">01</div>
                      <div>
                        <h4 class="h6 fw-bold">Estrategia integral de Alcance 3</h4>
                        <p class="small">Desarrollar un programa específico para la reducción de emisiones en la cadena de valor, 
                           enfocado en proveedores y uso de vehículos por parte de los clientes.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">02</div>
                      <div>
                        <h4 class="h6 fw-bold">Aceleración de la electrificación</h4>
                        <p class="small">Establecer objetivos ambiciosos para incrementar el porcentaje de vehículos 
                           electrificados en la flota total, superando el actual 6,9%.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">03</div>
                      <div>
                        <h4 class="h6 fw-bold">Gestión eficiente del agua</h4>
                        <p class="small">Implementar un plan de reducción del consumo de agua en instalaciones para 
                           revertir la tendencia creciente observada.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="recommendation-item">
                    <div class="d-flex">
                      <div class="recommendation-number">04</div>
                      <div>
                        <h4 class="h6 fw-bold">Formalización de la estructura de sostenibilidad</h4>
                        <p class="small">Potenciar el rol del consultor de Sostenibilidad creado en 2023, dotándolo de 
                           recursos y capacidad de influencia en la toma de decisiones.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="quote-panel mt-5">
                <blockquote class="blockquote">
                  <p>El análisis revela que Alphabet España está avanzando en su transformación hacia la sostenibilidad, 
                     poniendo a las personas en el centro de su estrategia. Sin embargo, el reto más significativo 
                     está en el Alcance 3 de sus emisiones, donde se requieren acciones más decisivas.</p>
                </blockquote>
                <div class="blockquote-footer">
                  Extraído del análisis de la declaración del CEO Alberto Copado
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
              <h3 class="h5 fw-bold mb-3">Referencias bibliográficas</h3>
              <ol class="references-list">
                <li>Alphabet España (2023). <em>Transformación en movimiento: Memoria de sostenibilidad 2023</em>.</li>
                <li>Grupo BMW (2023). <em>Annual Report 2023</em>.</li>
                <li>AER - Asociación Española de Renting (2023). <em>Estadísticas del sector renting en España</em>.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer
    <footer class="py-4 bg-dark-accent">
      <div class="container text-center">
        <p class="small text-light mb-0">© 2025 Estudio académico - Universidad de Vic | Sostenibilidad Aplicada al Sistema Productivo</p>
      </div>
    </footer> -->
  </div>
</template>

<style>
/* Global reset to remove white border */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Add seamless scrolling */
html {
  scroll-behavior: smooth;
}

/* Dark theme base styles */
.dark-theme {
  --bg-color: #121212;
  --card-bg: #1e1e1e;
  --card-bg-accent: #2a2a2a;
  --text-color: #e0e0e0;
  --text-muted: #a0a0a0;
  --accent-color: #10b981;
  --border-color: rgba(255, 255, 255, 0.1);
  --shadow-color: rgba(0, 0, 0, 0.5);
}
</style>

<style scoped>
/* General styling */
.study-page {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-color, #121212);
  color: var(--text-color, #e0e0e0);
  overflow-x: hidden; /* Prevent horizontal scrollbar */
}

p {
  color: var(--text-muted, #a0a0a0);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--text-color, #e0e0e0);
}

/* Header section styling - Full bleed image */
.header-section {
  background-color: #000;
  background-image: url('https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?w=1400&q=80');
  background-size: cover;
  background-position: center;
  min-height: 60vh;
  position: relative;
  z-index: 1;
  margin: 0; /* Remove any margin */
  padding: 0; /* Remove any padding */
}

.min-vh-75 {
  min-height: 75vh;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 100%);
  z-index: 2;
}

/* Accent colors */
.text-accent {
  color: var(--accent-color, #10b981) !important;
}

.bg-accent {
  background-color: var(--accent-color, #10b981) !important;
}

.bg-dark-accent {
  background-color: #1a1a1a !important; /* Darker shade for dark mode */
}

/* Card styling for dark theme */
.card {
  background-color: var(--card-bg, #1e1e1e);
  border: none;
  color: var(--text-color, #e0e0e0);
  box-shadow: 0 8px 16px var(--shadow-color, rgba(0, 0, 0, 0.5)) !important;
}

.card .card-header {
  background-color: var(--card-bg-accent, #2a2a2a);
  border-bottom: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
}

.card .card-body {
  background-color: var(--card-bg, #1e1e1e);
}

/* Divider styling */
.divider {
  position: relative;
  text-align: center;
  margin: 3rem 0;
}

.divider:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--border-color, rgba(255, 255, 255, 0.1));
}

.divider-label {
  position: relative;
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--bg-color, #121212);
  color: var(--text-color, #e0e0e0);
  font-weight: 600;
  border-radius: 4px;
  box-shadow: 0 2px 5px var(--shadow-color, rgba(0, 0, 0, 0.5));
  z-index: 10;
}

.divider-icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--card-bg-accent, #2a2a2a);
  color: var(--accent-color, #10b981);
  z-index: 10;
  box-shadow: 0 2px 5px var(--shadow-color, rgba(0, 0, 0, 0.5));
}

/* Animated background elements */
.bg-element {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  z-index: 1;
  filter: blur(50px);
}

.bg-element-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #10b981, #0ea5e9);
  top: -50px;
  right: -50px;
  animation: float 15s ease-in-out infinite;
}

.bg-element-2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #ef4444, #f59e0b);
  bottom: 50px;
  left: -50px;
  animation: float 20s ease-in-out infinite reverse;
}

@keyframes float {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(20px, 15px) rotate(5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

/* Custom lists */
.custom-list {
  list-style: none;
  padding-left: 0;
}

.custom-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-muted, #a0a0a0);
}

.custom-list li:before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent-color, #10b981);
}

/* Methodology cards */
.methodology-card {
  background-color: var(--card-bg-accent, #2a2a2a);
  box-shadow: 0 2px 10px var(--shadow-color, rgba(0, 0, 0, 0.5));
  transition: all 0.3s ease;
}

.methodology-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px var(--shadow-color, rgba(0, 0, 0, 0.8));
}

.methodology-icon {
  color: var(--accent-color, #10b981);
  font-size: 1.5rem;
}

/* Alert styling */
.alert {
  background-color: var(--card-bg-accent, #2a2a2a);
  color: var(--text-color, #e0e0e0);
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
}

.alert-info {
  border-left: 4px solid #0ea5e9;
}

.alert-warning {
  border-left: 4px solid #f59e0b;
}

/* Key metrics panel */
.key-metrics-panel {
  background: linear-gradient(to bottom right, #1a1a1a, #2a2a2a);
  border-left: 4px solid var(--accent-color, #10b981);
}

.metric-item {
  transition: transform 0.2s ease;
}

.metric-item:hover {
  transform: translateX(5px);
}

.metric-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.bg-primary-subtle {
  background-color: rgba(13, 110, 253, 0.2);
}

.bg-success-subtle {
  background-color: rgba(25, 135, 84, 0.2);
}

.bg-info-subtle {
  background-color: rgba(13, 202, 240, 0.2);
}

.bg-warning-subtle {
  background-color: rgba(255, 193, 7, 0.2);
}

.metric-value {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-color, #e0e0e0);
}

.metric-label {
  font-size: 0.8rem;
  color: var(--text-muted, #a0a0a0);
}

/* Environmental metrics */
.env-metrics-panel {
  background-color: var(--card-bg-accent, #2a2a2a);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px var(--shadow-color, rgba(0, 0, 0, 0.5));
}

.env-metric-item {
  padding-bottom: 1rem;
  border-bottom: 1px dashed var(--border-color, rgba(255, 255, 255, 0.1));
}

.env-metric-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

/* Product analysis cards */
.product-analysis-card {
  background-color: var(--card-bg-accent, #2a2a2a);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px var(--shadow-color, rgba(0, 0, 0, 0.5));
  transition: all 0.3s ease;
}

.product-analysis-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px var(--shadow-color, rgba(0, 0, 0, 0.8));
}

.product-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(16, 185, 129, 0.2);
  color: var(--accent-color, #10b981);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.rating {
  color: #f59e0b;
  font-size: 0.8rem;
}

/* Comparison metrics */
.comparison-metrics {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 0.8rem;
}

.divider-vertical {
  width: 1px;
  height: 40px;
  background-color: var(--border-color, rgba(255, 255, 255, 0.1));
}

.value-label {
  font-size: 0.8rem;
  color: var(--text-muted, #a0a0a0);
}

.value-number {
  font-size: 1.2rem;
  font-weight: 700;
}

.electrified-metrics {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 0.8rem;
}

.ev-count {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent-color, #10b981);
}

.ev-label {
  font-size: 0.8rem;
  color: var(--text-muted, #a0a0a0);
}

/* Recommendation items */
.recommendation-number {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(16, 185, 129, 0.2);
  color: var(--accent-color, #10b981);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

/* Table styling */
.table {
  color: var(--text-color, #e0e0e0);
  border-color: var(--border-color, rgba(255, 255, 255, 0.1));
}

.table-striped > tbody > tr:nth-of-type(odd) > * {
  background-color: rgba(255, 255, 255, 0.03);
  color: var(--text-color, #e0e0e0);
}

.table-hover > tbody > tr:hover > * {
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-color, #e0e0e0);
}

/* Quote panel */
.quote-panel {
  background-color: rgba(16, 185, 129, 0.1);
  border-left: 4px solid var(--accent-color, #10b981);
  padding: 1.5rem;
  border-radius: 0 8px 8px 0;
}

.blockquote {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--text-color, #e0e0e0);
}

.blockquote-footer {
  font-size: 0.85rem;
  color: var(--text-muted, #a0a0a0);
}

/* References list */
.references-list {
  padding-left: 1.5rem;
  font-size: 0.9rem;
  color: var(--text-muted, #a0a0a0);
}

.references-list li {
  margin-bottom: 0.5rem;
}

/* Buttons */
.btn-accent {
  background-color: var(--accent-color, #10b981);
  border-color: var(--accent-color, #10b981);
  color: #000;
  transition: all 0.3s ease;
}

.btn-accent:hover {
  background-color: #059669;
  border-color: #059669;
  color: #000;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.btn-outline-accent {
  color: var(--accent-color, #10b981);
  border-color: var(--accent-color, #10b981);
  transition: all 0.3s ease;
}

.btn-outline-accent:hover {
  background-color: var(--accent-color, #10b981);
  color: #000;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

/* Responsive improvements */
@media (max-width: 768px) {
  .header-section {
    min-height: 50vh;
  }
  
  .divider-label {
    font-size: 0.9rem;
  }
  
  .quote-panel {
    padding: 1rem;
  }
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");
</style>