<script setup>
// Component for chart
import Chart from '@/components/chart.vue'
import {ref} from 'vue'
// Importing the i18n for translation
import { useI18n } from 'vue-i18n'
// Importing the CSS styles
import "@/assets/pages.css"
// Import the custom library
import AlphabetStockPrice from '@/components/AlphabetStockPrice.vue'

const { t } = useI18n({
  locale: 'ca',
  messages: {
    ca: {
      header: {
        span: "ESTUDI DE CAS 2025",
        h1: "Estudi de la Petjada <br> de Carboni",
        h2: "Anàlisi d'Alphabet España (2025)",
        a1: "Resum executiu",
        a2: "Veure estudi complet"
      },
      mainContent: {
        h2: "Resum executiu",
        p: "Aquest estudi analitza la petjada de carboni d'Alphabet España Fleet Management S.A.U., les seves estratègies de reducció d'emissions i el seu compromís amb la sostenibilitat.",
        h3: "Objectius",
        objectius: "<li>Analitzar les emissions segons el Protocol GEH</li><li>Identificar les principals fonts d'emissions</li><li>Avaluar les estratègies de reducció implementades</li><li>Proposar millores i recomanacions</li>",
        i: "Principals troballes",
        troballes: "<li>Petjada de carboni total de 372.557,87 tCO₂e en 2023</li><li>99,81% d'emissions procedents de l'Abast 3</li><li>Creixement del 92% en matriculacions elèctriques</li><li>Reducció del consum energètic en un 0,5% respecte a 2022</li>"
      },
      methodology: {
        span: "Metodologia",
        h2: "Metodologia d'anàlisi",
        p: "L'anàlisi de la petjada de carboni s'ha realitzat segons l'estàndard del Protocol de Gasos d'Efecte Hivernacle (GEH), que classifica les emissions en tres abasts.",
        abast1: "Abast 1: Emissions directes",
        abast1p: "Emissions directes procedents de fonts controlades per l'organització, com la flota pròpia i combustibles.",
        abast2: "Abast 2: Emissions indirectes",
        abast2p: "Emissions indirectes associades a la generació d'electricitat adquirida per l'organització.",
        abast3: "Abast 3: Altres emissions indirectes",
        abast3p: "Emissions que ocorren en la cadena de valor, incloent l'ús dels vehicles per part dels clients."
      },
      alertInfo: {
        title: "Verificació de dades",
        text: "Les dades han estat recopilades dels registres interns de l'empresa i verificades mitjançant el seu Sistema de Gestió Ambiental ISO 14001."
      },
      graphic: {
        section: "Gràfica d'emissions",
        title: "Distribució d'emissions per abast",
        footer: "Resultats de l'anàlisi"
      },
      results: {
        title: "Anàlisi de la petjada de carboni",
        indicadors: {
          h3: "Indicadors clau de rendiment",
          h4: "Creixement en matriculacions elèctriques",
          h4p: "Comparativa amb el sector (+76%)",
          h4p2: "increment anual",
          h43: "Comparativa amb sector",
          h44: "+16 punts",
        },
        vehicles: {
          h3: "Vehicles electrificats en flota",
          h4p: "Total de vehicles electrificats",
          h4p2: "vehicles",
          h43: "Flota total",
          h44: "vehicles"
        },
        consum: {
          h3: "Consum energètic",
          h4p: "Total consumit en instal·lacions",
          h43: "Reducció des de 2020",
        },
        emisions: {
          h3: "Emisions per abast",
          p: "L'estudi revela que la major part de l'impacte ambiental de l'empresa prové de les emissions indirectes (Abast 3), representant el 99,81% del total. Els resultats mostren un càlcul total d'emissions per a l'any 2023 de 372.557,87 tCO₂e.",
          abast1: "<strong>Abast 1:</strong> Emissions directes",
          abast2: "<strong>Abast 2:</strong> Emissions indirectes (electricitat)",
          abast3: "<strong>Abast 3:</strong> Altres emissions indirectes",
          h5: "Troballa significativa",
          p2: "L'elevat percentatge d'emissions d'Abast 3 suggereix que les estratègies més efectives per reduir la petjada ambiental s'han de centrar en la cadena de valor i l'ús de vehicles per part dels clients.",
        }
      },
      estrategies: {
        divider: "Estratègies implementades",
        title: "Estratègies de reducció d'emissions",
        p: "Aquest apartat examina les solucions que l'empresa ha desenvolupat per fomentar la mobilitat sostenible i reduir l'impacte ambiental de la seva activitat i la dels seus clients.",
        h32: "Electrificació interna",
        h32p: "Incentius per a l'elecció de vehicles de companyia híbrids i elèctrics per part dels empleats.",
        h32s: "Alt impacte",
        h33: "Mobilitat sostenible",
        h33p: "Promoció del teletreball i opcions de desplaçament amb menor impacte ambiental per als treballadors.",
        h33s: "Mig impacte",
        h34: "Eficiència energètica",
        h34p: "Control de temperatura en oficines (27°C a l'estiu, 19°C a l'hivern) i mesures d'estalvi energètic.",
        h34s: "Mig impacte",
        h35: "Energia verda",
        h35p: "Implementació d'energia renovable en 5 de les 8 localitzacions de l'empresa a nivell nacional.",
        h35s: "Mig impacte",
        serveis: {
          title: "Serveis per a clients",
          h4: "Consultoria E-Mobility",
          p: "Servei estructurat en 4 nivells diferenciats d'assessorament que s'adapten a les necessitats específiques de cada client.",
          taula: {
            li1: "<strong>Nivell Bàsic:</strong> Anàlisi inicial de flota i potencial d'electrificació",
            li2: "<strong>Nivell Intermedi:</strong> Desenvolupament d'estratègia d'electrificació",
            li3: "<strong>Nivell Avançat:</strong> Implementació d'infraestructures i polítiques",
            li4: "<strong>Nivell Expert:</strong> Gestió integral de la transformació de flotes"
          },
          infrastructure: {
            title: "Infraestructures de recàrrega",
            p: "Solucions per facilitar la transició a vehicles elèctrics, incloent punts de recàrrega i sistemes de pagament.",
            div1: "Tarjeta de recàrrega",
            div2: "En col·laboració amb Repsol",
            div3: "Accés a més de 400 punts de recàrrega a España"
          }
        },
      },
      conclusions: {
        divider: "Conclusions",
        section: {
          title: "Conclusions i recomanacions",
          h3: "Principals troballes"
        },
        strengths: {
          title: "Fortaleses",
          items: {
            li1: "Creixement significatiu en matriculacions de vehicles elèctrics, 16 punts percentuals per sobre del mercat",
            li2: "Reducció continuada del consum energètic en instal·lacions (-16,5% des de 2020)",
            li3: "Implementació d'energia renovable en el 62,5% de les localitzacions",
            li4: "Servei de consultoria d'electrificació amb diversos nivells d'assessorament"
          }
        },
        improvements: {
          title: "Àrees de millora",
          items: {
            li1: "Alt percentatge (99,81%) d'emissions d'Abast 3, que requereix estratègies específiques en la cadena de valor",
            li2: "Baix percentatge de vehicles electrificats respecte al total de flota (6,9%)",
            li3: "Consum d'aigua amb tendència creixent (+3,6% vs 2022)",
            li4: "Dependència de fabricants per al subministrament de models electrificats"
          }
        },
        recommendations: {
          title: "Recomanacions estratègiques",
          items: {
            one: {
              title: "Estratègia integral d'Abast 3",
              description: "Desenvolupar un programa específic per a la reducció d'emissions en la cadena de valor, enfocat en proveïdors i ús de vehicles per part dels clients."
            },
            two: {
              title: "Acceleració de l'electrificació",
              description: "Establir objectius ambiciosos per incrementar el percentatge de vehicles electrificats en la flota total, superant l'actual 6,9%."
            },
            three: {
              title: "Gestió eficient de l'aigua",
              description: "Implementar un pla de reducció del consum d'aigua en instal·lacions per revertir la tendència creixent observada."
            },
            four: {
              title: "Compensació de carboni",
              description: "Desenvolupar un pla integral de compensació de carboni per a les emissions inevitables mentre s'avança en la transició cap a una mobilitat de zero emissions."
            }
          }
        },
        quote: {
          text: "L'anàlisi revela que Alphabet España està avançant significativament en la seva estratègia de sostenibilitat, amb focus en l'electrificació de la flota. No obstant això, el repte més important es troba en la gestió de les emissions d'Abast 3, on es requereixen accions més decisives i col·laboratives.",
          footer: "Conclusió de l'estudi de la petjada de carboni 2023"
        },
        references: {
          title: "Referències bibliogràfiques",
          items: {
            li1: "Alphabet España (2023). <em>Transformació en moviment: Memòria de sostenibilitat 2023</em>.",
            li2: "GHG Protocol (2023). <em>Corporate Accounting and Reporting Standard</em>.",
            li3: "ISO 14064-1:2018. <em>Gasos d'efecte hivernacle - Part 1: Especificació amb orientació, a nivell d'organització, per a la quantificació i l'informe d'emissions i remocions de gasos d'efecte hivernacle</em>."
          }
        }
      },
      stockQuote: "Cotització actual a borsa",
    },
    es: { 
      header: {
        span: "ESTUDIO DE CASO 2025",
        h1: "Estudio de la Huella <br> de Carbono",
        h2: "Análisis de Alphabet España (2025)",
        a1: "Resumen ejecutivo",
        a2: "Ver estudio completo"
      },
      mainContent: {
        h2: "Resumen ejecutivo",
        p: "Este estudio analiza la huella de carbono de Alphabet España Fleet Management S.A.U., sus estrategias de reducción de emisiones y su compromiso con la sostenibilidad.",
        h3: "Objetivos",
        objectius: "<li>Analizar las emisiones según el Protocolo GEH</li><li>Identificar las principales fuentes de emisiones</li><li>Evaluar las estrategias de reducción implementadas</li><li>Proponer mejoras y recomendaciones</li>",
        i: "Principales hallazgos",
        troballes: "<li>Huella de carbono total de 372.557,87 tCO₂e en 2023</li><li>99,81% de emisiones procedentes del Alcance 3</li><li>Crecimiento del 92% en matriculaciones eléctricas</li><li>Reducción del consumo energético en un 0,5% respecto a 2022</li>"
      },
      methodology: {
        span: "Metodología",
        h2: "Metodología de análisis",
        p: "El análisis de la huella de carbono se ha realizado según el estándar del Protocolo de Gases de Efecto Invernadero (GEH), que clasifica las emisiones en tres alcances.",
        abast1: "Alcance 1: Emisiones directas",
        abast1p: "Emisiones directas procedentes de fuentes controladas por la organización, como la flota propia y combustibles.",
        abast2: "Alcance 2: Emisiones indirectas",
        abast2p: "Emisiones indirectas asociadas a la generación de electricidad adquirida por la organización.",
        abast3: "Alcance 3: Otras emisiones indirectas",
        abast3p: "Emisiones que ocurren en la cadena de valor, incluyendo el uso de los vehículos por parte de los clientes."
      },
      alertInfo: {
        title: "Verificación de datos",
        text: "Los datos han sido recopilados de los registros internos de la empresa y verificados mediante su Sistema de Gestión Ambiental ISO 14001."
      },
      graphic: {
        section: "Gráfica de emisiones",
        title: "Distribución de emisiones por alcance",
        footer: "Resultados del análisis"
      },
      results: {
        title: "Análisis de la huella de carbono",
        indicadors: {
          h3: "Indicadores clave de rendimiento",
          h4: "Crecimiento en matriculaciones eléctricas",
          h4p: "Comparativa con el sector (+76%)",
          h4p2: "incremento anual",
          h43: "Comparativa con sector",
          h44: "+16 puntos",
        },
        vehicles: {
          h3: "Vehículos electrificados en flota",
          h4p: "Total de vehículos electrificados",
          h4p2: "vehículos",
          h43: "Flota total",
          h44: "vehículos"
        },
        consum: {
          h3: "Consumo energético",
          h4p: "Total consumido en instalaciones",
          h43: "Reducción desde 2020",
        },
        emisions: {
          h3: "Emisiones por alcance",
          p: "El estudio revela que la mayor parte del impacto ambiental de la empresa proviene de las emisiones indirectas (Alcance 3), representando el 99,81% del total. Los resultados muestran un cálculo total de emisiones para el año 2023 de 372.557,87 tCO₂e.",
          abast1: "<strong>Alcance 1:</strong> Emisiones directas",
          abast2: "<strong>Alcance 2:</strong> Emisiones indirectas (electricidad)",
          abast3: "<strong>Alcance 3:</strong> Otras emisiones indirectas",
          h5: "Hallazgo significativo",
          p2: "El elevado porcentaje de emisiones de Alcance 3 sugiere que las estrategias más efectivas para reducir la huella ambiental deben centrarse en la cadena de valor y el uso de vehículos por parte de los clientes.",
        },
      },
      estrategies: {
        divider: "Estrategias implementadas",
        title: "Estrategias de reducción de emisiones",
        p: "Este apartado examina las soluciones que la empresa ha desarrollado para fomentar la movilidad sostenible y reducir el impacto ambiental de su actividad y la de sus clientes.",
        h32: "Electrificación interna",
        h32p: "Incentivos para la elección de vehículos de compañía híbridos y eléctricos por parte de los empleados.",
        h32s: "Alto impacto",
        h33: "Movilidad sostenible",
        h33p: "Promoción del teletrabajo y opciones de desplazamiento con menor impacto ambiental para los trabajadores.",
        h33s: "Medio impacto",
        h34: "Eficiencia energética",
        h34p: "Control de temperatura en oficinas (27°C en verano, 19°C en invierno) y medidas de ahorro energético.",
        h34s: "Medio impacto",
        h35: "Energía verde",
        h35p: "Implementación de energía renovable en 5 de las 8 localizaciones de la empresa a nivel nacional.",
        h35s: "Medio impacto",
        serveis: {
          title: "Servicios para clientes",
          h4: "Consultoría E-Mobility",
          p: "Servicio estructurado en 4 niveles diferenciados de asesoramiento que se adaptan a las necesidades específicas de cada cliente.",
          taula: {
            li1: "<strong>Nivel Básico:</strong> Análisis inicial de flota y potencial de electrificación",
            li2: "<strong>Nivel Intermedio:</strong> Desarrollo de estrategia de electrificación",
            li3: "<strong>Nivel Avanzado:</strong> Implementación de infraestructuras y políticas",
            li4: "<strong>Nivel Experto:</strong> Gestión integral de la transformación de flotas"
          },
          infrastructure: {
            title: "Infraestructuras de recarga",
            p: "Soluciones para facilitar la transición a vehículos eléctricos, incluyendo puntos de recarga y sistemas de pago.",
            div1: "Tarjeta de recarga",
            div2: "En colaboración con Repsol",
            div3: "Acceso a más de 400 puntos de recarga en España"
          }
        },
      },
      conclusions: {
        divider: "Conclusiones",
        section: {
          title: "Conclusiones y recomendaciones",
          h3: "Principales hallazgos"
        },
        strengths: {
          title: "Fortalezas",
          items: {
            li1: "Crecimiento significativo en matriculaciones de vehículos eléctricos, 16 puntos porcentuales por encima del mercado",
            li2: "Reducción continuada del consumo energético en instalaciones (-16,5% desde 2020)",
            li3: "Implementación de energía renovable en el 62,5% de las localizaciones",
            li4: "Servicio de consultoría de electrificación con diversos niveles de asesoramiento"
          }
        },
        improvements: {
          title: "Áreas de mejora",
          items: {
            li1: "Alto porcentaje (99,81%) de emisiones de Alcance 3, que requiere estrategias específicas en la cadena de valor",
            li2: "Bajo porcentaje de vehículos electrificados respecto al total de flota (6,9%)",
            li3: "Consumo de agua con tendencia creciente (+3,6% vs 2022)",
            li4: "Dependencia de fabricantes para el suministro de modelos electrificados"
          }
        },
        recommendations: {
          title: "Recomendaciones estratégicas",
          items: [
            {
              number: "01",
              title: "Estrategia integral de Alcance 3",
              description: "Desarrollar un programa específico para la reducción de emisiones en la cadena de valor, enfocado en proveedores y uso de vehículos por parte de los clientes."
            },
            {
              number: "02",
              title: "Aceleración de la electrificación",
              description: "Establecer objetivos ambiciosos para incrementar el porcentaje de vehículos electrificados en la flota total, superando el actual 6,9%."
            },
            {
              number: "03",
              title: "Gestión eficiente del agua",
              description: "Implementar un plan de reducción del consumo de agua en instalaciones para revertir la tendencia creciente observada."
            },
            {
              number: "04",
              title: "Compensación de carbono",
              description: "Desarrollar un plan integral de compensación de carbono para las emisiones inevitables mientras se avanza en la transición hacia una movilidad de cero emisiones."
            }
          ]
        },
        quote: {
          text: "El análisis revela que Alphabet España está avanzando significativamente en su estrategia de sostenibilidad, con foco en la electrificación de la flota. Sin embargo, el reto más importante se encuentra en la gestión de las emisiones de Alcance 3, donde se requieren acciones más decisivas y colaborativas.",
          footer: "Conclusión del estudio de la huella de carbono 2023"
        },
        references: {
          title: "Referencias bibliográficas",
          items: {
            li1: "Alphabet España (2023). <em>Transformación en movimiento: Memoria de sostenibilidad 2023</em>.",
            li2: "GHG Protocol (2023). <em>Corporate Accounting and Reporting Standard</em>.",
            li3: "ISO 14064-1:2018. <em>Gases de efecto invernadero - Parte 1: Especificación con orientación, a nivel de organización, para la cuantificación y el informe de emisiones y remociones de gases de efecto invernadero</em>."
          }
        }
      },
      stockQuote: "Cotización actual en borsa",
    }
  }
})

// Definició de les opcions del gràfic circular
const options = ref({
title: {
    text: t('graphic.title'),
    left: 'center',
    textStyle: {
      color: '#e0e0e0'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} tCO₂e ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    textStyle: {
      color: '#e0e0e0'
    }
  },
  series: [
    {
      name: 'Emissions de CO₂',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#121212',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '18',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 514.92, name: 'Abast 1: Emissions directes', itemStyle: { color: '#28a745' } },
        { value: 211.02, name: 'Abast 2: Emissions indirectes (electricitat)', itemStyle: { color: '#0d6efd' } },
        { value: 371851.93, name: 'Abast 3: Altres emissions indirectes', itemStyle: { color: '#dc3545' } }
      ]
    }
  ]
})
</script>

<template>
  <div class="study-page dark-theme">
    <!-- Header section with study title -->
    <section class="header-section position-relative overflow-hidden">
      <div class="overlay"></div>
      <div class="container position-relative z-3">
        <div class="row min-vh-75 align-items-center py-5">
          <div class="col-lg-8 mx-auto text-center">
            <span class="badge bg-accent text-dark mb-3 px-3 py-2">{{ t('header.span') }}</span>
            <h1 class="display-3 fw-bold text-white mb-3" v-html="t('header.h1')"></h1>
            <h2 class="h3 fw-light text-accent mb-4">{{ t('header.h2') }}</h2>
            <div class="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <a href="#abstract" class="btn btn-outline-accent">
                <i class="bi bi-file-text me-2"></i>{{ t('header.a1') }}
              </a>
              <a href="#methodology" class="btn btn-accent">
                <i class="bi bi-arrow-down-circle me-2"></i>{{ t('header.a2') }}
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
      <!-- Executive resume -->
      <div class="row mb-5" id="abstract">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">{{ t('mainContent.h2') }}</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <p class="lead">
                {{ t('mainContent.p') }}
              </p>
              <hr class="my-4">
              <div class="row g-4">
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-graph-up-arrow text-accent me-2"></i>{{ t('mainContent.h3') }}</h3>
                  <ul class="custom-list" v-html="t('mainContent.objectius')"></ul>
                </div>
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-lightbulb text-accent me-2"></i>{{ t('mainContent.i') }}</h3>
                  <ul class="custom-list" v-html="t('mainContent.troballes')"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider -->
      <div class="divider my-5" id="methodology">
        <span class="divider-label">{{ t('methodology.span') }}</span>
      </div>

      <!-- Methodology section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">{{ t('methodology.h2') }}</h2>
              <p>{{ t('methodology.p') }}</p>
              
              <div class="row g-4 mt-3">
                <!-- Scope 1 emissions -->
                <div class="col-md-4">
                  <div class="methodology-card p-3 rounded-3 h-100">
                    <div class="methodology-icon mb-3">
                      <i class="bi bi-1-circle"></i>
                    </div>
                    <h4 class="h6 fw-bold">{{ t('methodology.abast1') }}</h4>
                    <p class="small">{{ t('methodology.abast1p') }}</p>
                  </div>
                </div>
                
                <!-- Scope 2 emissions -->
                <div class="col-md-4">
                  <div class="methodology-card p-3 rounded-3 h-100">
                    <div class="methodology-icon mb-3">
                      <i class="bi bi-2-circle"></i>
                    </div>
                    <h4 class="h6 fw-bold">{{ t('methodology.abast2') }}</h4>
                    <p class="small">{{ t('methodology.abast2p') }}</p>
                  </div>
                </div>
                
                <!-- Scope 3 emissions -->
                <div class="col-md-4">
                  <div class="methodology-card p-3 rounded-3 h-100">
                    <div class="methodology-icon mb-3">
                      <i class="bi bi-3-circle"></i>
                    </div>
                    <h4 class="h6 fw-bold">{{ t('methodology.abast3') }}</h4>
                    <p class="small">{{ t('methodology.abast3p') }}</p>
                  </div>
                </div>
              </div>

              <div class="alert alert-info mt-4">
                <div class="d-flex">
                  <div class="me-3">
                    <i class="bi bi-info-circle-fill fs-4"></i>
                  </div>
                  <div>
                    <h5 class="alert-heading">{{ t('alertInfo.title') }}</h5>
                    <p class="mb-0">{{ t('alertInfo.text') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider -->
      <div class="divider my-5" id="results">
        <span class="divider-label">{{ t('results.title') }}</span>
      </div>

      <!-- Carbon footprint results -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">{{ t('results.title') }}</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <div class="row g-4">
                
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">{{ t('results.indicadors.h3') }}</h3>
                  
                  <div class="env-metrics-panel">
                    <div class="env-metric-item mb-4">
                      <div class="d-flex justify-content-between">
                        <h4 class="h6 mb-0">{{ t('results.indicadors.h4') }}</h4>
                        <span class="badge bg-success-subtle text-success">+92% vs 2022</span>
                      </div>
                      <p class="small text-muted mb-2">{{ t('results.indicadors.h4p') }}</p>
                      <div class="d-flex align-items-end">
                        <span class="h3 mb-0">92%</span>
                        <span class="ms-2">{{ t('results.indicadors.h4p2') }}</span>
                      </div>
                      <div class="progress mt-2" style="height: 6px;">
                        <div class="progress-bar bg-success" style="width: 92%;"></div>
                      </div>
                      <div class="d-flex justify-content-between mt-1">
                        <small>{{ t('results.indicadors.h43') }}</small>
                        <small>{{ t('results.indicadors.h44') }}</small>
                      </div>
                    </div>
                    
                    <div class="env-metric-item mb-4">
                      <div class="d-flex justify-content-between">
                        <h4 class="h6 mb-0">{{ t('results.vehicles.h3') }}</h4>
                        <span class="badge bg-primary-subtle text-primary">6,9% del total</span>
                      </div>
                      <p class="small text-muted mb-2">{{ t('results.vehicles.h4p') }}</p>
                      <div class="d-flex align-items-end">
                        <span class="h3 mb-0">5.500</span>
                        <span class="ms-2">{{ t('h4p2') }}</span>
                      </div>
                      <div class="progress mt-2" style="height: 6px;">
                        <div class="progress-bar bg-primary" style="width: 6.9%;"></div>
                      </div>
                      <div class="d-flex justify-content-between mt-1">
                        <small>{{ t('results.vehicles.h43') }}</small>
                        <small>80.000 {{ t('results.vehicles.h4p2') }}</small>
                      </div>
                    </div>
                    
                    <div class="env-metric-item">
                      <div class="d-flex justify-content-between">
                        <h4 class="h6 mb-0">{{ t('results.consum.h3') }}</h4>
                        <span class="badge bg-success-subtle text-success">-0,5% vs 2022</span>
                      </div>
                      <p class="small text-muted mb-2">{{ t('results.consum.h4p') }}</p>
                      <div class="d-flex align-items-end">
                        <span class="h3 mb-0">639.449</span>
                        <span class="ms-2">kWh</span>
                      </div>
                      <div class="progress mt-2" style="height: 6px;">
                        <div class="progress-bar bg-success" style="width: 83.5%;"></div>
                      </div>
                      <div class="d-flex justify-content-between mt-1">
                        <small>{{ t('results.consum.h42') }}</small>
                        <small>-16,5%</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">{{ t('results.emisions.h3') }}</h3>
                  <p>{{ t('results.emisions.p') }}</p>
                  
                  <div class="emissions-breakdown mt-4">
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mb-1">
                        <span v-html="t('results.emisions.abast1')"></span>
                        <span>514,92 tCO₂e</span>
                      </div>
                      <div class="progress" style="height: 10px;">
                        <div class="progress-bar bg-success" style="width: 0.14%;"></div>
                      </div>
                    </div>
                    
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mb-1">
                        <span v-html="t('results.emisions.abast2')"></span>
                        <span>211,02 tCO₂e</span>
                      </div>
                      <div class="progress" style="height: 10px;">
                        <div class="progress-bar bg-info" style="width: 0.05%;"></div>
                      </div>
                    </div>
                    
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mb-1">
                        <span v-html="t('results.emisions.abast3')"></span>
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
                        <h5 class="alert-heading">{{ t('results.emisions.h5') }}</h5>
                        <p class="mb-0">{{ t('results.emisions.p2') }}</p>
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
      <div class="divider my-5" id="graphs">
        <span class="divider-label">{{ t('graphic.section') }}</span>
      </div>

      <!-- Chart visualization section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-body p-4">
              <div style="height: 500px;">
                <chart :options="options"></chart>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider -->
      <div class="divider my-5" id="strategies">
        <span class="divider-label">{{ t('estrategies.divider') }}</span>
      </div>

      <!-- Strategies section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">{{ t('estrategies.title') }}</h2>
              <p>{{ t('estrategies.p') }}</p>
              
              <div class="row g-4 mt-3">
                <!-- Strategy cards with impact ratings -->
                <!-- Internal electrification, sustainable mobility, energy efficiency, green energy -->
                <div class="col-md-6 col-lg-3">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-lightning-charge-fill"></i>
                    </div>
                    <h3 class="h5">{{ t('estrategies.h32') }}</h3>
                    <p class="small">{{ t('estrategies.h32p') }}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span class="badge bg-success-subtle text-success">{{ t('estrategies.h32s') }}</span>
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
                    <h3 class="h5">{{ t('estrategies.h33') }}</h3>
                    <p class="small">{{ t('estrategies.h33p') }}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span class="badge bg-primary-subtle text-primary">{{ t('estrategies.h33s') }}</span>
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
                    <h3 class="h5">{{ t('estrategies.h34') }}</h3>
                    <p class="small">{{ t('estrategies.h34p') }}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span class="badge bg-primary-subtle text-primary">{{ t('estrategies.h34s') }}</span>
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
                    <h3 class="h5">{{ t('estrategies.h35') }}</h3>
                    <p class="small">{{ t('estrategies.h35p') }}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span class="badge bg-primary-subtle text-primary">{{ t('estrategies.h35s') }}</span>
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
              
              <h3 class="h5 fw-bold mt-5 mb-3">{{ t('estrategies.serveis.title') }}</h3>
              <div class="row">
                <div class="col-md-6">
                  <div class="card bg-dark-accent border-0">
                    <div class="card-body">
                      <h4 class="h6 fw-bold text-white">{{ t('estrategies.serveis.h4') }}</h4>
                      <p class="small text-light">{{ t('estrategies.serveis.p') }}</p>
                      <ol class="small text-light mt-3">
                        <li v-html="t('estrategies.serveis.taula.li1')"></li>
                        <li v-html="t('estrategies.serveis.taula.li2')"></li>
                        <li v-html="t('estrategies.serveis.taula.li3')"></li>
                        <li v-html="t('estrategies.serveis.taula.li4')"></li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="card bg-dark-accent border-0">
                    <div class="card-body">
                      <h4 class="h6 fw-bold text-white">{{ t('estrategies.serveis.infrastructure.title') }}</h4>
                      <p class="small text-light">{{ t('estrategies.serveis.infrastructure.p') }}</p>
                      <div class="electrified-metrics d-flex align-items-center mt-3">
                        <div class="me-3">
                          <div class="ev-count">{{ t('estrategies.serveis.infrastructure.div1') }}</div>
                          <div class="ev-label text-light small">{{ t('estrategies.serveis.infrastructure.div2') }}</div>
                        </div>
                        <div class="ms-3">
                          <div class="small mt-1 text-light">{{ t('estrategies.serveis.infrastructure.div3') }}</div>
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
        <span class="divider-label">{{ t('conclusions.divider') }}</span>
      </div>

      <!-- Conclusions section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">{{ t('conclusions.section.title') }}</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <div class="row">
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">{{ t('conclusions.section.h3') }}</h3>
                  
                  <div class="conclusion-item mb-4">
                    <h4 class="h6 fw-bold"><i class="bi bi-check-circle-fill text-success me-2"></i>{{ t('conclusions.strengths.title') }}</h4>
                    <ul class="custom-list small">
                      <li>{{ t('conclusions.strengths.items.li1') }}</li>
                      <li>{{ t('conclusions.strengths.items.li2') }}</li>
                      <li>{{ t('conclusions.strengths.items.li3') }}</li>
                      <li>{{ t('conclusions.strengths.items.li4') }}</li>
                    </ul>
                  </div>
                  
                  <div class="conclusion-item">
                    <h4 class="h6 fw-bold"><i class="bi bi-exclamation-circle-fill text-warning me-2"></i>{{ t('conclusions.improvements.title') }}</h4>
                    <ul class="custom-list small">
                      <li>{{ t('conclusions.improvements.items.li1') }}</li>
                      <li>{{ t('conclusions.improvements.items.li2') }}</li>
                      <li>{{ t('conclusions.improvements.items.li3') }}</li>
                      <li>{{ t('conclusions.improvements.items.li4') }}</li>
                    </ul>
                  </div>
                </div>
                
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">{{ t('conclusions.recommendations.title') }}</h3>
                  
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">01</div>
                      <div>
                        <h4 class="h6 fw-bold">{{ t('conclusions.recommendations.items.one.title') }}</h4>
                        <p class="small">{{ t('conclusions.recommendations.description') }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">02</div>
                      <div>
                        <h4 class="h6 fw-bold">{{ t('conclusions.recommendations.items.two.title') }}</h4>
                        <p class="small">{{ t('conclusions.recommendations.items.two.description') }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">03</div>
                      <div>
                        <h4 class="h6 fw-bold">{{ t('conclusions.recommendations.items.three.tittle') }}</h4>
                        <p class="small">{{ t('conclusions.recommendations.items.three.description') }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="recommendation-item">
                    <div class="d-flex">
                      <div class="recommendation-number">04</div>
                      <div>
                        <h4 class="h6 fw-bold">{{ t('conclusions.recommendations.items.four.title') }}</h4>
                        <p class="small">{{ t('conclusions.recommendations.items.four.description') }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="quote-panel mt-5">
                <blockquote class="blockquote">
                  <p>{{ t('conclusions.quote.text') }}</p>
                </blockquote>
                <div class="blockquote-footer">
                  {{ t('conclusions.quote.footer') }}
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
              <h3 class="h5 fw-bold mb-3">{{ t('conclusions.references.title') }}</h3>
              <ol class="references-list">
                <li v-html="t('conclusions.references.items.li1')"></li>
                <li v-html="t('conclusions.references.items.li2')"></li>
                <li v-html="t('conclusions.references.items.li3')"></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    
      <div class="row mb-5">
      <div class="col-lg-10 mx-auto">
        <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="card-header bg-dark-accent p-4">
            <h2 class="h4 text-white mb-0">{{ t('stockQuote') }}</h2>
          </div>
          <div class="card-body p-4 p-lg-5">            
            <div class="row">
              <div class="col-lg-12">
                <h3 class="h5 fw-bold mb-4"></h3>
                <AlphabetStockPrice />
              </div>
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