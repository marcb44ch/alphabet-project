<script setup>
import Chart from '@/components/chart.vue'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import "@/assets/pages.css"
// Import the custom library
import AlphabetStockPrice from '@/components/AlphabetStockPrice.vue'

// Configuración de internacionalización
const { t } = useI18n({
  locale: 'es',
  messages: {
    ca: {
      header: {
        span: "ESTUDI DE CAS | 2025",
        h1: "Criteris ASG en la Gestió Empresarial",
        h2: "Incorporació de factors ambientals, socials i de governança",
        a1: "Resum executiu",
        a2: "Veure estudi complet"
      },
      mainContent: {
        h2: "Resum executiu",
        p: "Aquest estudi analitza la implementació i el desenvolupament dels criteris ASG (Ambientals, Socials i de Governança) a Alphabet España, avaluant el seu impacte en la sostenibilitat corporativa i els resultats del negoci.",
        objectives: {
          h3: "Objectius",
          li1: "Analitzar l'estat actual de la implementació dels criteris ASG",
          li2: "Identificar bones pràctiques i àrees de millora",
          li3: "Avaluar la integració dels criteris ASG en l'estratègia empresarial",
          li4: "Proposar un full de ruta per a l'evolució futura"
        },
        findings: {
          h3: "Principals troballes",
          li1: "Sistema de Gestió Ambiental amb certificació ISO 14001 des de 2010",
          li2: "Reducció del consum energètic en un 16,5% des de 2020",
          li3: "100% dels empleats amb contracte indefinit",
          li4: "Creació del rol de consultor en Sostenibilitat el 2023"
        }
      },
      framework: {
        divider: "Marc ASG",
        h2: "Marc de referència ASG",
        p: "Els criteris ASG constitueixen un conjunt d'estàndards utilitzats per avaluar les pràctiques empresarials en matèria de sostenibilitat i responsabilitat corporativa. Aquest marc permet integrar consideracions no financeres en la presa de decisions estratègiques.",
        cards: {
          card1: {
            h4: "Criteris Ambientals",
            p: "Avaluen com l'empresa gestiona el seu impacte en els ecosistemes i recursos naturals, incloent la petjada de carboni, l'ús eficient de l'energia i la gestió de residus.",
            icon: "leaf-fill"
          },
          card2: {
            h4: "Criteris Socials",
            p: "Examinen la relació de l'empresa amb els seus empleats, clients, proveïdors i comunitats, incloent pràctiques laborals, diversitat i inclusió, i impacte social.",
            icon: "people-fill"
          },
          card3: {
            h4: "Criteris de Governança",
            p: "Avaluen les estructures i processos de govern corporatiu, ètica empresarial, transparència i compliment normatiu.",
            icon: "shield-check"
          }
        }
      },
      environmental: {
        divider: "Ambiental",
        h2: "Acompliment Ambiental",
        p: "L'anàlisi mostra una sòlida estratègia ambiental centrada en la reducció d'emissions, l'eficiència energètica i la promoció de solucions de mobilitat sostenible.",
        chart: {
          title: "Distribució d'emissions per abast (tCO₂e)",
          subtitle: "Període 2023",
          abast1: "Abast 1: Emissions directes",
          abast2: "Abast 2: Emissions indirectes (electricitat)",
          abast3: "Abast 3: Altres emissions indirectes"
        },
        metrics: {
          h3: "Principals indicadors ambientals",
          energy: {
            h4: "Consum energètic",
            value: "639.449",
            unit: "kWh",
            comparison: "-16,5% des de 2020"
          },
          water: {
            h4: "Consum d'aigua",
            value: "848,3",
            unit: "m³",
            comparison: "+3,6% vs 2022"
          },
          paper: {
            h4: "Consum de paper",
            value: "267",
            unit: "kg",
            comparison: "+20% vs 2022"
          },
          recycling: {
            h4: "Paper reciclat",
            value: "687,6",
            unit: "kg",
            comparison: "Gestió responsable de residus"
          }
        },
        initiatives: {
          h3: "Iniciatives principals",
          li1: "Sistema de Gestió Ambiental certificat ISO 14001 des de 2010",
          li2: "Subministrament d'energia renovable en 5 de les 8 localitzacions",
          li3: "Control de temperatura en oficines (27°C a l'estiu, 19°C a l'hivern)",
          li4: "Foment de l'electrificació de la flota amb un creixement del 92% en 2023"
        }
      },
      social: {
        divider: "Social",
        h2: "Compromís amb les persones",
        p: "La dimensió social dels criteris ASG engloba les relacions amb empleats, clients, proveïdors i comunitats locals. Alphabet demostra un sòlid enfocament en aquests aspectes a través de diverses iniciatives i polítiques.",
        employees: {
          h3: "Empleats",
          li1: "100% dels empleats amb contracte indefinit i a jornada completa",
          li2: "Pla d'Igualtat actualitzat en 2023",
          li3: "Certificació Bequal Plus des de 2016, renovada cada tres anys",
          li4: "Programes de desenvolupament professional i lideratge"
        },
        communities: {
          h3: "Comunitats",
          li1: "Col·laboració amb el Banc d'Aliments de Madrid",
          li2: "Donacions a l'Hospital Nacional de Paraplègics de Toledo",
          li3: "Iniciativa €uro solidari a favor de l'Associació CEPRI",
          li4: "Suport a Cruz Roja per a l'ajuda a Ucraïna"
        },
        customers: {
          h3: "Clients",
          li1: "Certificació ISO 10002 de Gestió de Queixes i Reclamacions des de 2018",
          li2: "Valoració NPS (Net Promoter Score) de 61 punts en 2023",
          li3: "Més de 40.800 enquestes de satisfacció realitzades",
          li4: "69% de clients promotors"
        },
        suppliers: {
          h3: "Proveïdors",
          li1: "62% dels proveïdors compleixen criteris ambientals",
          li2: "99% dels proveïdors són espanyols, contribuint a l'economia local",
          li3: "Oficina Virtual del proveïdor per facilitar la interacció",
          li4: "Exigència de certificacions ambientals a tallers col·laboradors"
        }
      },
      governance: {
        divider: "Governança",
        h2: "Bon govern i ètica empresarial",
        p: "Els criteris de governança garanteixen la transparència, la responsabilitat i la integritat en la gestió i direcció de l'empresa. Alphabet ha implementat diverses mesures i polítiques per assegurar una gestió ètica i responsable.",
        structure: {
          h3: "Estructura de govern",
          li1: "Comitè de Direcció responsable de la gestió estratègica i operativa",
          li2: "Consell d'Administració format per membres nomenats per l'accionista únic (Grup BMW)",
          li3: "Sessions de 'Cercle de Sostenibilitat' per revisar el desenvolupament sostenible",
          li4: "Creació de la figura de consultor en Sostenibilitat en 2023"
        },
        ethics: {
          h3: "Ètica i compliment",
          li1: "Codi de Conducta aplicable a tot el Grup BMW a nivell mundial",
          li2: "Sistema de Gestió de Compliment amb mesures preventives i de control",
          li3: "Sistema Intern d'Informació per reportar conductes inapropiades",
          li4: "Normativa interna sobre conflictes d'interès actualitzada anualment"
        },
        risks: {
          h3: "Gestió de riscos",
          li1: "Estratègia basada en els 'Sound Risk Management Principles' del Grup BMW",
          li2: "Sistema de Control Intern amb formacions regulars per a tots els empleats",
          li3: "Comitè de Riscos amb reunions mensuals",
          li4: "Pla de Continuïtat de Negoci revisat regularment"
        }
      },
      conclusions: {
        divider: "Conclusions",
        h2: "Conclusions i recomanacions",
        findings: {
          h3: "Fortaleses",
          li1: "Sistema integral d'incorporació de criteris ASG en l'estratègia de negoci",
          li2: "Sòlida estructura de govern amb supervisió específica de sostenibilitat",
          li3: "Elevat compromís amb empleats i comunitats locals",
          li4: "Mesures ambientals efectives en la reducció del consum energètic"
        },
        areas: {
          h3: "Àrees de millora",
          li1: "Elevat percentatge d'emissions d'Abast 3 (99,81%) que requereix estratègies específiques",
          li2: "Tendència creixent en el consum d'aigua i paper",
          li3: "Baix percentatge de proveïdors amb avaluació ambiental verificada",
          li4: "Necessitat d'ampliar la diversitat en els òrgans de direcció"
        },
        recommendations: {
          h3: "Recomanacions estratègiques",
          rec1: {
            h4: "Estratègia integral d'Abast 3",
            p: "Desenvolupar un programa específic per a la reducció d'emissions en la cadena de valor, enfocat en proveïdors i ús de vehicles per part dels clients."
          },
          rec2: {
            h4: "Ampliació de criteris ASG a proveïdors",
            p: "Establir un programa de capacitació i verificació de criteris ASG per a tota la cadena de subministrament, amb incentius per al compliment."
          },
          rec3: {
            h4: "Millora de la diversitat en direcció",
            p: "Implementar polítiques i objectius específics per incrementar la diversitat de gènere i altres aspectes en els òrgans de direcció."
          },
          rec4: {
            h4: "Formalització de l'estructura ASG",
            p: "Potenciar el rol del consultor de Sostenibilitat creat en 2023, dotant-lo d'un equip transversal i capacitat d'influència en la presa de decisions."
          }
        },
      },
      references: {
        title: "Referències",
        items: {
          li1: "Alphabet España (2023). <em>Transformació en moviment: Memòria de sostenibilitat 2023</em>.",
          li2: "Grup BMW (2023). <em>Annual Report 2023</em>.",
          li3: "Global Reporting Initiative (2023). <em>GRI Standards</em>.",
          li4: "TCFD (2023). <em>Recomanacions del Task Force on Climate-Related Financial Disclosures</em>."
        }
      },
      stockQuote: "Cotització actual a borsa"
    },
    es: {
      header: {
        span: "ESTUDIO DE CASO | 2025",
        h1: "Criterios ASG en la Gestión Empresarial",
        h2: "Incorporación de factores ambientales, sociales y de gobernanza",
        a1: "Resumen ejecutivo",
        a2: "Ver estudio completo"
      },
      mainContent: {
        h2: "Resumen ejecutivo",
        p: "Este estudio analiza la implementación y desarrollo de los criterios ASG (Ambientales, Sociales y de Gobernanza) en Alphabet España, evaluando su impacto en la sostenibilidad corporativa y los resultados del negocio.",
        objectives: {
          h3: "Objetivos",
          li1: "Analizar el estado actual de la implementación de los criterios ASG",
          li2: "Identificar buenas prácticas y áreas de mejora",
          li3: "Evaluar la integración de los criterios ASG en la estrategia empresarial",
          li4: "Proponer una hoja de ruta para la evolución futura"
        },
        findings: {
          h3: "Principales hallazgos",
          li1: "Sistema de Gestión Ambiental con certificación ISO 14001 desde 2010",
          li2: "Reducción del consumo energético en un 16,5% desde 2020",
          li3: "100% de los empleados con contrato indefinido",
          li4: "Creación del rol de consultor en Sostenibilidad en 2023"
        }
      },
      framework: {
        divider: "Marco ASG",
        h2: "Marco de referencia ASG",
        p: "Los criterios ASG constituyen un conjunto de estándares utilizados para evaluar las prácticas empresariales en materia de sostenibilidad y responsabilidad corporativa. Este marco permite integrar consideraciones no financieras en la toma de decisiones estratégicas.",
        cards: {
          card1: {
            h4: "Criterios Ambientales",
            p: "Evalúan cómo la empresa gestiona su impacto en los ecosistemas y recursos naturales, incluyendo la huella de carbono, el uso eficiente de la energía y la gestión de residuos.",
            icon: "leaf-fill"
          },
          card2: {
            h4: "Criterios Sociales",
            p: "Examinan la relación de la empresa con sus empleados, clientes, proveedores y comunidades, incluyendo prácticas laborales, diversidad e inclusión, e impacto social.",
            icon: "people-fill"
          },
          card3: {
            h4: "Criterios de Gobernanza",
            p: "Evalúan las estructuras y procesos de gobierno corporativo, ética empresarial, transparencia y cumplimiento normativo.",
            icon: "shield-check"
          }
        }
      },
      environmental: {
        divider: "Ambiental",
        h2: "Desempeño Ambiental",
        p: "El análisis muestra una sólida estrategia ambiental centrada en la reducción de emisiones, la eficiencia energética y la promoción de soluciones de movilidad sostenible.",
        chart: {
          title: "Distribución de emisiones por alcance (tCO₂e)",
          subtitle: "Periodo 2023",
          abast1: "Alcance 1: Emisiones directas",
          abast2: "Alcance 2: Emisiones indirectas (electricidad)",
          abast3: "Alcance 3: Otras emisiones indirectas"
        },
        metrics: {
          h3: "Principales indicadores ambientales",
          energy: {
            h4: "Consumo energético",
            value: "639.449",
            unit: "kWh",
            comparison: "-16,5% desde 2020"
          },
          water: {
            h4: "Consumo de agua",
            value: "848,3",
            unit: "m³",
            comparison: "+3,6% vs 2022"
          },
          paper: {
            h4: "Consumo de papel",
            value: "267",
            unit: "kg",
            comparison: "+20% vs 2022"
          },
          recycling: {
            h4: "Papel reciclado",
            value: "687,6",
            unit: "kg",
            comparison: "Gestión responsable de residuos"
          }
        },
        initiatives: {
          h3: "Iniciativas principales",
          li1: "Sistema de Gestión Ambiental certificado ISO 14001 desde 2010",
          li2: "Suministro de energía renovable en 5 de las 8 ubicaciones",
          li3: "Control de temperatura en oficinas (27°C en verano, 19°C en invierno)",
          li4: "Fomento de la electrificación de la flota con un crecimiento del 92% en 2023"
        }
      },
      social: {
        divider: "Social",
        h2: "Compromiso con las personas",
        p: "La dimensión social de los criterios ASG abarca las relaciones con empleados, clientes, proveedores y comunidades locales. Alphabet demuestra un sólido enfoque en estos aspectos a través de diversas iniciativas y políticas.",
        employees: {
          h3: "Empleados",
          li1: "100% de los empleados con contrato indefinido y a jornada completa",
          li2: "Plan de Igualdad actualizado en 2023",
          li3: "Certificación Bequal Plus desde 2016, renovada cada tres años",
          li4: "Programas de desarrollo profesional y liderazgo"
        },
        communities: {
          h3: "Comunidades",
          li1: "Colaboración con el Banco de Alimentos de Madrid",
          li2: "Donaciones al Hospital Nacional de Parapléjicos de Toledo",
          li3: "Iniciativa €uro solidario a favor de la Asociación CEPRI",
          li4: "Apoyo a Cruz Roja para la ayuda a Ucrania"
        },
        customers: {
          h3: "Clientes",
          li1: "Certificación ISO 10002 de Gestión de Quejas y Reclamaciones desde 2018",
          li2: "Valoración NPS (Net Promoter Score) de 61 puntos en 2023",
          li3: "Más de 40.800 encuestas de satisfacción realizadas",
          li4: "69% de clientes promotores"
        },
        suppliers: {
          h3: "Proveedores",
          li1: "62% de los proveedores cumplen criterios ambientales",
          li2: "99% de los proveedores son españoles, contribuyendo a la economía local",
          li3: "Oficina Virtual del proveedor para facilitar la interacción",
          li4: "Exigencia de certificaciones ambientales a talleres colaboradores"
        }
      },
      governance: {
        divider: "Gobernanza",
        h2: "Buen gobierno y ética empresarial",
        p: "Los criterios de gobernanza garantizan la transparencia, la responsabilidad y la integridad en la gestión y dirección de la empresa. Alphabet ha implementado diversas medidas y políticas para asegurar una gestión ética y responsable.",
        structure: {
          h3: "Estructura de gobierno",
          li1: "Comité de Dirección responsable de la gestión estratégica y operativa",
          li2: "Consejo de Administración formado por miembros nombrados por el accionista único (Grupo BMW)",
          li3: "Sesiones de 'Círculo de Sostenibilidad' para revisar el desarrollo sostenible",
          li4: "Creación de la figura de consultor en Sostenibilidad en 2023"
        },
        ethics: {
          h3: "Ética y cumplimiento",
          li1: "Código de Conducta aplicable a todo el Grupo BMW a nivel mundial",
          li2: "Sistema de Gestión de Cumplimiento con medidas preventivas y de control",
          li3: "Sistema Interno de Información para reportar conductas inapropiadas",
          li4: "Normativa interna sobre conflictos de interés actualizada anualmente"
        },
        risks: {
          h3: "Gestión de riesgos",
          li1: "Estrategia basada en los 'Sound Risk Management Principles' del Grupo BMW",
          li2: "Sistema de Control Interno con formaciones regulares para todos los empleados",
          li3: "Comité de Riesgos con reuniones mensuales",
          li4: "Plan de Continuidad de Negocio revisado regularmente"
        }
      },
      conclusions: {
        divider: "Conclusiones",
        h2: "Conclusiones y recomendaciones",
        findings: {
          h3: "Fortalezas",
          li1: "Sistema integral de incorporación de criterios ASG en la estrategia de negocio",
          li2: "Sólida estructura de gobierno con supervisión específica de sostenibilidad",
          li3: "Elevado compromiso con empleados y comunidades locales",
          li4: "Medidas ambientales efectivas en la reducción del consumo energético"
        },
        areas: {
          h3: "Áreas de mejora",
          li1: "Elevado porcentaje de emisiones de Alcance 3 (99,81%) que requiere estrategias específicas",
          li2: "Tendencia creciente en el consumo de agua y papel",
          li3: "Bajo porcentaje de proveedores con evaluación ambiental verificada",
          li4: "Necesidad de ampliar la diversidad en los órganos de dirección"
        },
        recommendations: {
          h3: "Recomendaciones estratégicas",
          rec1: {
            h4: "Estrategia integral de Alcance 3",
            p: "Desarrollar un programa específico para la reducción de emisiones en la cadena de valor, enfocado en proveedores y uso de vehículos por parte de los clientes."
          },
          rec2: {
            h4: "Ampliación de criterios ASG a proveedores",
            p: "Establecer un programa de capacitación y verificación de criterios ASG para toda la cadena de suministro, con incentivos para el cumplimiento."
          },
          rec3: {
            h4: "Mejora de la diversidad en dirección",
            p: "Implementar políticas y objetivos específicos para incrementar la diversidad de género y otros aspectos en los órganos de dirección."
          },
          rec4: {
            h4: "Formalización de la estructura ASG",
            p: "Potenciar el rol del consultor de Sostenibilidad creado en 2023, dotándolo de un equipo transversal y capacidad de influencia en la toma de decisiones."
          }
        }
      },
      references: {
        title: "Referencias",
        items: {
          li1: "Alphabet España (2023). <em>Transformación en movimiento: Memoria de sostenibilidad 2023</em>.",
          li2: "Grupo BMW (2023). <em>Annual Report 2023</em>.",
          li3: "Global Reporting Initiative (2023). <em>GRI Standards</em>.",
          li4: "TCFD (2023). <em>Recomendaciones del Task Force on Climate-Related Financial Disclosures</em>."
        }
      },
      stockQuote: "Cotización actual en borsa",
    }
  }
})

// Datos para el gráfico de distribución ASG en empresas
const asgDistributionOptions = computed(() => ({
  title: {
    text: 'Evolución de la implementación ASG',
    subtext: 'Periodo 2020-2023',
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
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['Ambiental', 'Social', 'Gobernanza'],
    top: 'bottom',
    textStyle: {
      color: '#e0e0e0'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['2020', '2021', '2022', '2023'],
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
    name: 'Nivel de implementación (%)',
    max: 100,
    axisLine: {
      lineStyle: {
        color: '#555'
      }
    },
    axisLabel: {
      color: '#e0e0e0',
      formatter: '{value}%'
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    }
  },
  series: [
    {
      name: 'Ambiental',
      type: 'bar',
      stack: 'asg',
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        color: '#28a745'
      },
      data: [45, 55, 68, 75]
    },
    {
      name: 'Social',
      type: 'bar',
      stack: 'asg',
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        color: '#0d6efd'
      },
      data: [50, 58, 65, 80]
    },
    {
      name: 'Gobernanza',
      type: 'bar',
      stack: 'asg',
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        color: '#ffc107'
      },
      data: [65, 70, 78, 85]
    }
  ]
}))
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
            <h1 class="display-3 fw-bold text-white mb-3">{{ t('header.h1') }}</h1>
            <h2 class="h3 fw-light text-accent mb-4">{{ t('header.h2') }}</h2>
            <div class="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <a href="#abstract" class="btn btn-outline-accent">
                <i class="bi bi-file-text me-2"></i>{{ t('header.a1') }}
              </a>
              <a href="#framework" class="btn btn-accent">
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
      <!-- Abstract section -->
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
                  <h3 class="h5 fw-bold"><i class="bi bi-bullseye text-accent me-2"></i>{{ t('mainContent.objectives.h3') }}</h3>
                  <ul class="custom-list">
                    <li>{{ t('mainContent.objectives.li1') }}</li>
                    <li>{{ t('mainContent.objectives.li2') }}</li>
                    <li>{{ t('mainContent.objectives.li3') }}</li>
                    <li>{{ t('mainContent.objectives.li4') }}</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-search text-accent me-2"></i>{{ t('mainContent.findings.h3') }}</h3>
                  <ul class="custom-list">
                    <li>{{ t('mainContent.findings.li1') }}</li>
                    <li>{{ t('mainContent.findings.li2') }}</li>
                    <li>{{ t('mainContent.findings.li3') }}</li>
                    <li>{{ t('mainContent.findings.li4') }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider -->
      <div class="divider my-5" id="framework">
        <span class="divider-label">{{ t('framework.divider') }}</span>
      </div>

      <!-- ASG Framework section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">{{ t('framework.h2') }}</h2>
              <p>{{ t('framework.p') }}</p>
              
              <div class="row g-4 mt-3">
                <!-- Environmental criteria -->
                <div class="col-md-4">
                  <div class="methodology-card h-100 p-4 rounded-4">
                    <div class="d-flex align-items-center mb-3">
                      <div class="methodology-icon me-3">
                        <i class="bi bi-{{ t('framework.cards.card1.icon') }}"></i>
                      </div>
                      <h4 class="h5 fw-bold mb-0">{{ t('framework.cards.card1.h4') }}</h4>
                    </div>
                    <p class="text-light">{{ t('framework.cards.card1.p') }}</p>
                  </div>
                </div>
                
                <!-- Social criteria -->
                <div class="col-md-4">
                  <div class="methodology-card h-100 p-4 rounded-4">
                    <div class="d-flex align-items-center mb-3">
                      <div class="methodology-icon me-3">
                        <i class="bi bi-{{ t('framework.cards.card2.icon') }}"></i>
                      </div>
                      <h4 class="h5 fw-bold mb-0">{{ t('framework.cards.card2.h4') }}</h4>
                    </div>
                    <p class="text-light">{{ t('framework.cards.card2.p') }}</p>
                  </div>
                </div>
                
                <!-- Governance criteria -->
                <div class="col-md-4">
                  <div class="methodology-card h-100 p-4 rounded-4">
                    <div class="d-flex align-items-center mb-3">
                      <div class="methodology-icon me-3">
                        <i class="bi bi-{{ t('framework.cards.card3.icon') }}"></i>
                      </div>
                      <h4 class="h5 fw-bold mb-0">{{ t('framework.cards.card3.h4') }}</h4>
                    </div>
                    <p class="text-light">{{ t('framework.cards.card3.p') }}</p>
                  </div>
                </div>
              </div>
              
              <!-- ASG Evolution Chart -->
              <div class="mt-5">
                <div class="chart-container" style="height: 400px;">
                  <Chart :option="asgDistributionOptions" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider - Environmental -->
      <div class="divider my-5" id="environmental">
        <span class="divider-label">{{ t('environmental.divider') }}</span>
      </div>

      <!-- Environmental section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">{{ t('environmental.h2') }}</h2>
              <p>{{ t('environmental.p') }}</p>
              
              <!-- Environmental metrics -->
              <h3 class="h5 fw-bold mt-5 mb-4">{{ t('environmental.metrics.h3') }}</h3>
              <div class="row g-4">
                <!-- Energy consumption -->
                <div class="col-md-3">
                  <div class="env-metrics-panel">
                    <div class="env-metric-item">
                      <h4 class="h6 text-muted mb-2">{{ t('environmental.metrics.energy.h4') }}</h4>
                      <div class="d-flex align-items-baseline">
                        <span class="metric-value text-success me-2">{{ t('environmental.metrics.energy.value') }}</span>
                        <span class="metric-label">{{ t('environmental.metrics.energy.unit') }}</span>
                      </div>
                      <div class="small text-muted mt-1">{{ t('environmental.metrics.energy.comparison') }}</div>
                    </div>
                  </div>
                </div>
                
                <!-- Water consumption -->
                <div class="col-md-3">
                  <div class="env-metrics-panel">
                    <div class="env-metric-item">
                      <h4 class="h6 text-muted mb-2">{{ t('environmental.metrics.water.h4') }}</h4>
                      <div class="d-flex align-items-baseline">
                        <span class="metric-value text-warning me-2">{{ t('environmental.metrics.water.value') }}</span>
                        <span class="metric-label">{{ t('environmental.metrics.water.unit') }}</span>
                      </div>
                      <div class="small text-muted mt-1">{{ t('environmental.metrics.water.comparison') }}</div>
                    </div>
                  </div>
                </div>
                
                <!-- Paper consumption -->
                <div class="col-md-3">
                  <div class="env-metrics-panel">
                    <div class="env-metric-item">
                      <h4 class="h6 text-muted mb-2">{{ t('environmental.metrics.paper.h4') }}</h4>
                      <div class="d-flex align-items-baseline">
                        <span class="metric-value text-warning me-2">{{ t('environmental.metrics.paper.value') }}</span>
                        <span class="metric-label">{{ t('environmental.metrics.paper.unit') }}</span>
                      </div>
                      <div class="small text-muted mt-1">{{ t('environmental.metrics.paper.comparison') }}</div>
                    </div>
                  </div>
                </div>
                
                <!-- Recycled paper -->
                <div class="col-md-3">
                  <div class="env-metrics-panel">
                    <div class="env-metric-item">
                      <h4 class="h6 text-muted mb-2">{{ t('environmental.metrics.recycling.h4') }}</h4>
                      <div class="d-flex align-items-baseline">
                        <span class="metric-value text-success me-2">{{ t('environmental.metrics.recycling.value') }}</span>
                        <span class="metric-label">{{ t('environmental.metrics.recycling.unit') }}</span>
                      </div>
                      <div class="small text-muted mt-1">{{ t('environmental.metrics.recycling.comparison') }}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Environmental initiatives -->
              <h3 class="h5 fw-bold mt-5 mb-3">{{ t('environmental.initiatives.h3') }}</h3>
              <ul class="custom-list">
                <li>{{ t('environmental.initiatives.li1') }}</li>
                <li>{{ t('environmental.initiatives.li2') }}</li>
                <li>{{ t('environmental.initiatives.li3') }}</li>
                <li>{{ t('environmental.initiatives.li4') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider - Social -->
      <div class="divider my-5" id="social">
        <span class="divider-label">{{ t('social.divider') }}</span>
      </div>

      <!-- Social section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">{{ t('social.h2') }}</h2>
              <p>{{ t('social.p') }}</p>
              
              <div class="row g-4 mt-4">
                <!-- Employees -->
                <div class="col-md-6">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-people"></i>
                    </div>
                    <h3 class="h5 mb-3">{{ t('social.employees.h3') }}</h3>
                    <ul class="custom-list">
                      <li>{{ t('social.employees.li1') }}</li>
                      <li>{{ t('social.employees.li2') }}</li>
                      <li>{{ t('social.employees.li3') }}</li>
                      <li>{{ t('social.employees.li4') }}</li>
                    </ul>
                  </div>
                </div>
                
                <!-- Communities -->
                <div class="col-md-6">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-globe"></i>
                    </div>
                    <h3 class="h5 mb-3">{{ t('social.communities.h3') }}</h3>
                    <ul class="custom-list">
                      <li>{{ t('social.communities.li1') }}</li>
                      <li>{{ t('social.communities.li2') }}</li>
                      <li>{{ t('social.communities.li3') }}</li>
                      <li>{{ t('social.communities.li4') }}</li>
                    </ul>
                  </div>
                </div>
                
                <!-- Customers -->
                <div class="col-md-6">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-person-check"></i>
                    </div>
                    <h3 class="h5 mb-3">{{ t('social.customers.h3') }}</h3>
                    <ul class="custom-list">
                      <li>{{ t('social.customers.li1') }}</li>
                      <li>{{ t('social.customers.li2') }}</li>
                      <li>{{ t('social.customers.li3') }}</li>
                      <li>{{ t('social.customers.li4') }}</li>
                    </ul>
                  </div>
                </div>
                
                <!-- Suppliers -->
                <div class="col-md-6">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-building"></i>
                    </div>
                    <h3 class="h5 mb-3">{{ t('social.suppliers.h3') }}</h3>
                    <ul class="custom-list">
                      <li>{{ t('social.suppliers.li1') }}</li>
                      <li>{{ t('social.suppliers.li2') }}</li>
                      <li>{{ t('social.suppliers.li3') }}</li>
                      <li>{{ t('social.suppliers.li4') }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider - Governance -->
      <div class="divider my-5" id="governance">
        <span class="divider-label">{{ t('governance.divider') }}</span>
      </div>

      <!-- Governance section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">{{ t('governance.h2') }}</h2>
              <p>{{ t('governance.p') }}</p>
              
              <div class="row g-4 mt-4">
                <!-- Governance Structure -->
                <div class="col-lg-4">
                  <div class="methodology-card h-100 p-4 rounded-4">
                    <h3 class="h5 fw-bold mb-3">{{ t('governance.structure.h3') }}</h3>
                    <ul class="custom-list">
                      <li>{{ t('governance.structure.li1') }}</li>
                      <li>{{ t('governance.structure.li2') }}</li>
                      <li>{{ t('governance.structure.li3') }}</li>
                      <li>{{ t('governance.structure.li4') }}</li>
                    </ul>
                  </div>
                </div>
                
                <!-- Ethics & Compliance -->
                <div class="col-lg-4">
                  <div class="methodology-card h-100 p-4 rounded-4">
                    <h3 class="h5 fw-bold mb-3">{{ t('governance.ethics.h3') }}</h3>
                    <ul class="custom-list">
                      <li>{{ t('governance.ethics.li1') }}</li>
                      <li>{{ t('governance.ethics.li2') }}</li>
                      <li>{{ t('governance.ethics.li3') }}</li>
                      <li>{{ t('governance.ethics.li4') }}</li>
                    </ul>
                  </div>
                </div>
                
                <!-- Risk Management -->
                <div class="col-lg-4">
                  <div class="methodology-card h-100 p-4 rounded-4">
                    <h3 class="h5 fw-bold mb-3">{{ t('governance.risks.h3') }}</h3>
                    <ul class="custom-list">
                      <li>{{ t('governance.risks.li1') }}</li>
                      <li>{{ t('governance.risks.li2') }}</li>
                      <li>{{ t('governance.risks.li3') }}</li>
                      <li>{{ t('governance.risks.li4') }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider - Conclusions -->
      <div class="divider my-5" id="conclusions">
        <span class="divider-label">{{ t('conclusions.divider') }}</span>
      </div>

      <!-- Conclusions section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">{{ t('conclusions.h2') }}</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <div class="row g-4">
                <!-- Strengths -->
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-shield-check text-success me-2"></i>{{ t('conclusions.findings.h3') }}</h3>
                  <ul class="custom-list">
                    <li>{{ t('conclusions.findings.li1') }}</li>
                    <li>{{ t('conclusions.findings.li2') }}</li>
                    <li>{{ t('conclusions.findings.li3') }}</li>
                    <li>{{ t('conclusions.findings.li4') }}</li>
                  </ul>
                </div>
                
                <!-- Areas for Improvement -->
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-exclamation-triangle text-warning me-2"></i>{{ t('conclusions.areas.h3') }}</h3>
                  <ul class="custom-list">
                    <li>{{ t('conclusions.areas.li1') }}</li>
                    <li>{{ t('conclusions.areas.li2') }}</li>
                    <li>{{ t('conclusions.areas.li3') }}</li>
                    <li>{{ t('conclusions.areas.li4') }}</li>
                  </ul>
                </div>
              </div>
              
              <!-- Recommendations -->
              <h3 class="h5 fw-bold mt-5 mb-4">{{ t('conclusions.recommendations.h3') }}</h3>
              <div class="row g-4">
                <!-- Recommendation 1 -->
                <div class="col-md-6">
                  <div class="d-flex mb-3">
                    <div class="recommendation-number">01</div>
                    <h4 class="h6 fw-bold mb-0 align-self-center">{{ t('conclusions.recommendations.rec1.h4') }}</h4>
                  </div>
                  <p class="ms-5 mb-0">{{ t('conclusions.recommendations.rec1.p') }}</p>
                </div>
                
                <!-- Recommendation 2 -->
                <div class="col-md-6">
                  <div class="d-flex mb-3">
                    <div class="recommendation-number">02</div>
                    <h4 class="h6 fw-bold mb-0 align-self-center">{{ t('conclusions.recommendations.rec2.h4') }}</h4>
                  </div>
                  <p class="ms-5 mb-0">{{ t('conclusions.recommendations.rec2.p') }}</p>
                </div>
                
                <!-- Recommendation 3 -->
                <div class="col-md-6">
                  <div class="d-flex mb-3">
                    <div class="recommendation-number">03</div>
                    <h4 class="h6 fw-bold mb-0 align-self-center">{{ t('conclusions.recommendations.rec3.h4') }}</h4>
                  </div>
                  <p class="ms-5 mb-0">{{ t('conclusions.recommendations.rec3.p') }}</p>
                </div>
                
                <!-- Recommendation 4 -->
                <div class="col-md-6">
                  <div class="d-flex mb-3">
                    <div class="recommendation-number">04</div>
                    <h4 class="h6 fw-bold mb-0 align-self-center">{{ t('conclusions.recommendations.rec4.h4') }}</h4>
                  </div>
                  <p class="ms-5 mb-0">{{ t('conclusions.recommendations.rec4.p') }}</p>
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
              <h3 class="h5 fw-bold mb-3">{{ t('references.title') }}</h3>
              <ol class="references-list">
                <li v-html="t('references.items.li1')"></li>
                <li v-html="t('references.items.li2')"></li>
                <li v-html="t('references.items.li3')"></li>
                <li v-html="t('references.items.li4')"></li>
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
  /* Use a sustainability/governance themed background */
  background-image: url('../assets/img/bmw-asg.jpg');
}

/* Environmental metrics */
.bg-success-subtle {
  background-color: rgba(25, 135, 84, 0.2);
}

.bg-primary-subtle {
  background-color: rgba(13, 110, 253, 0.2);
}

.bg-warning-subtle {
  background-color: rgba(255, 193, 7, 0.2);
}

.text-success {
  color: #28a745 !important;
}

.text-warning {
  color: #ffc107 !important;
}

.text-primary {
  color: #0d6efd !important;
}

/* Cards for ASG indicators */
.asg-indicator-card {
  border-radius: 12px;
  background-color: var(--card-bg-accent, #2a2a2a);
  padding: 1.5rem;
  height: 100%;
  transition: transform 0.3s ease;
}

.asg-indicator-card:hover {
  transform: translateY(-5px);
}

/* Chart container styling */
.chart-container {
  width: 100%;
  height: 100%;
  min-height: 400px;
}

/* Mejorar la visibilidad del texto en las tarjetas */
.methodology-card p {
  color: rgba(255, 255, 255, 0.9); /* Texto casi blanco para mejor contraste */
}

</style>