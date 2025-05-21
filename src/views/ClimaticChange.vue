<script setup>
  // Importació de components necessaris per a la vista
  import Table from '@/components/Table.vue';  // Component de taula per mostrar dades tabulars
  import "bootstrap";  // Importació de Bootstrap per als estils i funcionalitats
   import dayjs from 'dayjs'; // Llibreria d'utilitats per a dates
  import { ref, computed } from 'vue';  // Funcions de Vue 3 per a reactivitat
  import Chart from '@/components/chart.vue';  // Component per mostrar gràfics
  import Modal from '@/components/modal.vue';  // Component per mostrar finestres modals
  import { useI18n } from 'vue-i18n'  // Llibreria d'internacionalització per suportar múltiples idiomes
  
  // Configuració de la internacionalització amb idioma inicial espanyol
  const { t } = useI18n({
    locale: 'es',  // Estableix espanyol com a idioma predeterminat
    messages: {
      // Diccionari de traduccions en català
      ca: {
        // Textos per a la secció de capçalera
        header: {
          span: "ESTUDI DE CAS | 2025",
          h1: "Anàlisi dels efectes del canvi climàtic",
          h2: "Cas d'estudi: Alphabet Espanya (2023)",
          a1: "Resum executiu",
          a2: "Veure estudi complet"
        },
        // Contingut principal amb resum executiu
        mainContent: {
          h2: "Resum executiu",
          p: "Aquest estudi analitza les estratègies de sostenibilitat implementades per Alphabet Espanya, companyia de rènting i mobilitat corporativa pertanyent al Grup BMW, avaluant el seu impacte ambiental i les solucions desenvolupades en el context de l'emergència climàtica.",
          objectives: {
            h3: "Objectius",
            li1: "Analitzar l'impacte ambiental de la flota gestionada",
            li2: "Avaluar estratègies d'electrificació implementades",
            li3: "Examinar les estructures de govern corporatiu responsables",
            li4: "Identificar tendències i àrees de millora"
          },
          findings: {
            h3: "Troballes principals",
            li1: "Petjada de carboni total de 372.557 tCO₂e en 2023",
            li2: "99,81% d'emissions procedents de l'Abast 3",
            li3: "92% de creixement en matriculacions elèctriques",
            li4: "Portfolio diversificat de solucions de mobilitat sostenible"
          }
        },
        // Secció de metodologia amb explicació del procés d'investigació
    methodology: {
          divider: "Metodologia",
          h2: "Metodologia d'investigació",
          p: "El present estudi analitza les dades publicades a la memòria de sostenibilitat 2023 d'Alphabet Espanya. S'ha emprat una metodologia mixta combinant anàlisi quantitativa de dades mediambientals i examen qualitatiu de les polítiques, productes i estratègies implementades.",
          cards: {
            card1: {
              h4: "Anàlisi documental",
              p: "Examen de la memòria de sostenibilitat, informes financers i documentació corporativa."
            },
            card2: {
              h4: "Anàlisi quantitativa",
              p: "Processament de dades d'emissions, consums i KPIs rellevants per a l'estudi."
            },
            card3: {
              h4: "Anàlisi comparativa",
              p: "Comparació amb tendències sectorials i benchmarking amb altres empreses del sector."
            }
          },
          alert: {
            h5: "Limitacions de l'estudi",
            p: "Les dades analitzades provenen exclusivament de fonts corporatives. No s'han realitzat mesuraments independents ni verificacions de tercers per a aquest estudi acadèmic."
          }
        },
        context: {
          divider: "Context empresarial",
          h2: "Perfil de l'empresa analitzada",
          p: "Alphabet Espanya Fleet Management S.A.U. és una companyia multimarca de rènting i gestió de flotes operativa a Espanya des de 2001. Forma part del Grup BMW i té la seva seu central a Munic (Alemanya).",
          list: {
            li1: "Sector: Rènting i mobilitat corporativa",
            li2: "Fundació a Espanya: 2001",
            li3: "Presència global: 36 països",
            li4: "Missió declarada: \"Garantir la satisfacció dels clients a través del compromís com a soci de mobilitat\""
          },
          metrics: {
            h3: "Indicadors clau (2023)",
            metric1: {
              value: "388M €",
              label: "Facturació anual"
            },
            metric2: {
              value: "62,7M €",
              label: "Benefici abans d'impostos"
            },
            metric3: {
              value: "224",
              label: "Empleats"
            },
            metric4: {
              value: "80.000",
              label: "Vehicles en flota"
            }
          }
        },
        results: {
          divider: "Anàlisi d'impacte ambiental",
          h2: "Avaluació de la petjada ambiental",
          emissions: {
            h3: "Anàlisi d'emissions GEH",
            p: "L'estudi revela que la major part de l'impacte ambiental de l'empresa prové de les seves emissions indirectes (Abast 3), representant el 99,81% del total. Les dades indiquen una tendència de reducció progressiva en emissions directes.",
            scope1: "Abast 1: Emissions directes",
            scope2: "Abast 2: Emissions indirectes (electricitat)",
            scope3: "Abast 3: Altres emissions indirectes"
          },
          alert: {
            h5: "Troballa significativa",
            p: "L'elevat percentatge d'emissions d'Abast 3 suggereix que les estratègies més efectives per reduir la petjada ambiental s'han de centrar en la cadena de valor i l'ús de vehicles per part dels clients."
          },
          otherMetrics: {
            h3: "Altres indicadors ambientals",
            energy: {
              h4: "Consum energètic",
              badge: "-0,5% vs 2022",
              p: "Total consumit en instal·lacions",
              value: "639.449",
              unit: "kWh",
              reduction: "Reducció des de 2020",
              percentage: "-16,5%"
            },
            water: {
              h4: "Consum d'aigua",
              badge: "+3,6% vs 2022",
              p: "Total consumit en instal·lacions",
              value: "848,3",
              unit: "m³",
              area: "Àrea de millora",
              trend: "Tendència creixent"
            },
            recycling: {
              h4: "Reciclatge de paper",
              badge: "Economia circular",
              p: "Total reciclat",
              value: "687,6",
              unit: "kg",
              potential: "Potencial de millora",
              level: "Moderat"
            }
          },
          modal: {
            button: "Veure dades d'impacte climàtic",
            title: "Impacte climàtic - Alphabet Espanya",
            finding: "Troballa clau: El 99,81% de les emissions (371.851,93 tCO₂e) provenen de fonts d'Abast 3, principalment de l'ús de vehicles.",
            emissions: {
              title: "Resum d'emissions 2023",
              scope1: "Abast 1 (Directe):",
              scope2: "Abast 2 (Electricitat):",
              total: "Petjada de carboni total:"
            },
            progress: {
              title: "Progrés en sostenibilitat",
              fleet: "Flota electrificada:",
              growth: "Taxa de creixement VE:",
              reduction: "Reducció d'emissions:"
            },
            buttons: {
              close: "Tancar",
              download: "Descarregar informe"
            }
          }
        },
        charts: {
          divider: "Gràfics",
          emissions: {
            title: "Evolució d'Emissions de CO₂",
            subtitle: "Període 2021-2023 (tCO₂e)"
          },
          ev: {
            h2: "Evolució de la flota sostenible",
            p: "L'anàlisi de l'evolució interanual mostra un creixement sostingut i accelerat en la incorporació de vehicles electrificats a la flota, amb un increment especialment notable en 2023, gairebé duplicant el parc mòbil electrificat respecte a l'any anterior.",
            title: "Creixement de Vehicles Electrificats",
            subtitle: "Període 2021-2023"
          }
        },
        strategies: {
          divider: "Estratègies implementades",
          h2: "Anàlisi de productes i serveis sostenibles",
          p: "Aquest apartat examina les solucions que l'empresa ha desenvolupat per fomentar la mobilitat sostenible i reduir l'impacte ambiental de la seva activitat i la dels seus clients.",
          products: {
            product1: {
              h3: "Consultoria d'electrificació",
              p: "Servei d'assessorament per a la transició cap a flotes elèctriques, amb diferents nivells de servei adaptats a cada client.",
              badge: "Alt impacte"
            },
            product2: {
              h3: "Alphabet Share",
              p: "Servei de carsharing corporatiu (anteriorment AlphaCity) que optimitza l'ús de vehicles mitjançant un sistema de reserves per aplicació.",
              badge: "Alt impacte"
            },
            product3: {
              h3: "Targeta de recàrrega",
              p: "Desenvolupada en col·laboració amb Repsol, facilita accés a la xarxa de recàrrega pública, sent pioners en el sector del rènting.",
              badge: "Mitjà impacte"
            },
            product4: {
              h3: "Punt de recàrrega",
              p: "Solució integrada que inclou instal·lació i finançament de punts de recàrrega per a llars i oficines a través de BMW Bank.",
              badge: "Mitjà impacte"
            }
          },
          indicators: {
            h3: "Anàlisi d'indicadors d'electrificació",
            growth: {
              h4: "Creixement de matriculacions elèctriques",
              p: "Les matriculacions de vehicles 100% elèctrics van créixer a un ritme superior al del mercat de rènting en 2023.",
              alphabet: "Alphabet",
              market: "Mercat"
            },
            fleet: {
              h4: "Vehicles electrificats en flota",
              p: "Evolució del nombre de vehicles elèctrics i híbrids endollables en la flota gestionada.",
              count: "vehicles",
              percentage: "6,9% del total de flota"
            }
          }
        },
        governance: {
          divider: "Govern corporatiu",
          h2: "Estructura de govern i sostenibilitat",
          p: "S'ha analitzat l'estructura de presa de decisions i els organismes responsables de la implementació de les polítiques de sostenibilitat a l'empresa.",
          committee: {
            h3: "Comitè de Direcció",
            p: "El Comitè de Direcció és responsable de la gestió estratègica i operativa, incloent les iniciatives de sostenibilitat. Supervisa la diligència de l'organització mitjançant sessions denominades \"Cercle de Sostenibilitat\".",
            headers: ["Càrrec", "Nom", "Departament"],
            finding: {
              h4: "Troballa de l'estudi",
              p: "L'anàlisi revela que al juliol de 2023 es va crear la figura de consultor en Sostenibilitat, el que suggereix un enfortiment de l'enfocament estratègic en aquest àmbit."
            }
          },
          board: {
            h3: "Consell d'Administració",
            p: "Format per membres nomenats per l'accionista únic (Grup BMW), s'encarrega de la direcció estratègica i presa de decisions estructurals.",
            members: {
              member1: "Alberto Copado: CEO d'Alphabet Espanya",
              member2: "Frank Danitz: Director Financer d'Alphabet Espanya",
              member3: "Juan Ridao-Alonso: Controlling Business to Business, Fleet en Financial Services HQ"
            }
          }
        },
        conclusions: {
          divider: "Conclusions",
          h2: "Conclusions i recomanacions",
          findings: {
            h3: "Troballes principals",
            strengths: {
              h4: "Fortaleses",
              li1: "Creixement significatiu en matriculacions de vehicles elèctrics, 16 punts percentuals per sobre del mercat",
              li2: "Portfolio diversificat de solucions orientades a la sostenibilitat",
              li3: "Reducció continuada del consum energètic en instal·lacions (-16,5% des de 2020)",
              li4: "Estructura de govern amb supervisió específica de sostenibilitat"
            },
            areas: {
              h4: "Àrees de millora",
              li1: "Alt percentatge (99,81%) d'emissions d'Abast 3, que requereix estratègies específiques en la cadena de valor",
              li2: "Creixement en el consum d'aigua (+3,6% vs 2022)",
              li3: "Baix percentatge de vehicles electrificats respecte al total de flota (6,9%)",
              li4: "Dependència de fabricants per al subministrament de models electrificats"
            }
          },
          recommendations: {
            h3: "Recomanacions estratègiques",
            rec1: {
              h4: "Estratègia integral d'Abast 3",
              p: "Desenvolupar un programa específic per a la reducció d'emissions en la cadena de valor, enfocat en proveïdors i ús de vehicles per part dels clients."
            },
            rec2: {
              h4: "Acceleració de l'electrificació",
              p: "Establir objectius ambiciosos per incrementar el percentatge de vehicles electrificats en la flota total, superant l'actual 6,9%."
            },
            rec3: {
              h4: "Gestió eficient de l'aigua",
              p: "Implementar un pla de reducció del consum d'aigua en instal·lacions per revertir la tendència creixent observada."
            },
            rec4: {
              h4: "Formalització de l'estructura de sostenibilitat",
              p: "Potenciar el rol del consultor de Sostenibilitat creat en 2023, dotant-lo de recursos i capacitat d'influència en la presa de decisions."
            }
          },
          quote: {
            blockquote: "L'anàlisi revela que Alphabet Espanya està avançant en la seva transformació cap a la sostenibilitat, posant a les persones al centre de la seva estratègia. No obstant això, el repte més significatiu està en l'Abast 3 de les seves emissions, on es requereixen accions més decisives.",
            footer: "Extret de l'anàlisi de la declaració del CEO Alberto Copado"
          }
        },
        references: {
          h3: "Referències bibliogràfiques",
          ref1: "Alphabet Espanya (2023). <em>Transformació en moviment: Memòria de sostenibilitat 2023</em>.",
          ref2: "Grup BMW (2023). <em>Annual Report 2023</em>.",
          ref3: "AER - Associació Espanyola de Rènting (2023). <em>Estadístiques del sector rènting a Espanya</em>.",
          ref4: "Informe modificat el: {date}"
        }
      },
      es: {
        header: {
          span: "ESTUDIO DE CASO | 2025",
          h1: "Análisis de los efectos del cambio climático",
          h2: "Caso de estudio: Alphabet España (2023)",
          a1: "Resumen ejecutivo",
          a2: "Ver estudio completo"
        },
        mainContent: {
          h2: "Resumen ejecutivo",
          p: "Este estudio analiza las estrategias de sostenibilidad implementadas por Alphabet España, compañía de renting y movilidad corporativa perteneciente al Grupo BMW, evaluando su impacto ambiental y las soluciones desarrolladas en el contexto de la emergencia climática.",
          objectives: {
            h3: "Objetivos",
            li1: "Analizar el impacto ambiental de la flota gestionada",
            li2: "Evaluar estrategias de electrificación implementadas",
            li3: "Examinar las estructuras de gobierno corporativo responsables",
            li4: "Identificar tendencias y áreas de mejora"
          },
          findings: {
            h3: "Hallazgos principales",
            li1: "Huella de carbono total de 372.557 tCO₂e en 2023",
            li2: "99,81% de emisiones procedentes del Alcance 3",
            li3: "92% de crecimiento en matriculaciones eléctricas",
            li4: "Portfolio diversificado de soluciones de movilidad sostenible"
          }
        },
        methodology: {
          divider: "Metodología",
          h2: "Metodología de investigación",
          p: "El presente estudio analiza los datos publicados en la memoria de sostenibilidad 2023 de Alphabet España. Se ha empleado una metodología mixta combinando análisis cuantitativo de datos medioambientales y examen cualitativo de las políticas, productos y estrategias implementadas.",
          cards: {
            card1: {
              h4: "Análisis documental",
              p: "Examen de la memoria de sostenibilidad, informes financieros y documentación corporativa."
            },
            card2: {
              h4: "Análisis cuantitativo",
              p: "Procesamiento de datos de emisiones, consumos y KPIs relevantes para el estudio."
            },
            card3: {
              h4: "Análisis comparativo",
              p: "Comparación con tendencias sectoriales y benchmarking con otras empresas del sector."
            }
          },
          alert: {
            h5: "Limitaciones del estudio",
            p: "Los datos analizados provienen exclusivamente de fuentes corporativas. No se han realizado mediciones independientes ni verificaciones de terceros para este estudio académico."
          }
        },
        context: {
          divider: "Contexto empresarial",
          h2: "Perfil de la empresa analizada",
          p: "Alphabet España Fleet Management S.A.U. es una compañía multimarca de renting y gestión de flotas operativa en España desde 2001. Forma parte del Grupo BMW y tiene su sede central en Múnich (Alemania).",
          list: {
            li1: "Sector: Renting y movilidad corporativa",
            li2: "Fundación en España: 2001",
            li3: "Presencia global: 36 países",
            li4: "Misión declarada: \"Garantizar la satisfacción de los clientes a través del compromiso como socio de movilidad\""
          },
          metrics: {
            h3: "Indicadores clave (2023)",
            metric1: {
              value: "388M €",
              label: "Facturación anual"
            },
            metric2: {
              value: "62,7M €",
              label: "Beneficio antes de impuestos"
            },
            metric3: {
              value: "224",
              label: "Empleados"
            },
            metric4: {
              value: "80.000",
              label: "Vehículos en flota"
            }
          }
        },
        results: {
          divider: "Análisis de impacto ambiental",
          h2: "Evaluación de la huella ambiental",
          emissions: {
            h3: "Análisis de emisiones GEI",
            p: "El estudio revela que la mayor parte del impacto ambiental de la empresa proviene de sus emisiones indirectas (Alcance 3), representando el 99,81% del total. Los datos indican una tendencia de reducción progresiva en emisiones directas.",
            scope1: "Alcance 1: Emisiones directas",
            scope2: "Alcance 2: Emisiones indirectas (electricidad)",
            scope3: "Alcance 3: Otras emisiones indirectas"
          },
          alert: {
            h5: "Hallazgo significativo",
            p: "El elevado porcentaje de emisiones de Alcance 3 sugiere que las estrategias más efectivas para reducir la huella ambiental deben centrarse en la cadena de valor y el uso de vehículos por parte de los clientes."
          },
          otherMetrics: {
            h3: "Otros indicadores ambientales",
            energy: {
              h4: "Consumo energético",
              badge: "-0,5% vs 2022",
              p: "Total consumido en instalaciones",
              value: "639.449",
              unit: "kWh",
              reduction: "Reducción desde 2020",
              percentage: "-16,5%"
            },
            water: {
              h4: "Consumo de agua",
              badge: "+3,6% vs 2022",
              p: "Total consumido en instalaciones",
              value: "848,3",
              unit: "m³",
              area: "Área de mejora",
              trend: "Tendencia creciente"
            },
            recycling: {
              h4: "Reciclaje de papel",
              badge: "Economía circular",
              p: "Total reciclado",
              value: "687,6",
              unit: "kg",
              potential: "Potencial de mejora",
              level: "Moderado"
            }
          },
          modal: {
            button: "Ver datos de impacto climático",
            title: "Impacto climático - Alphabet España",
            finding: "Hallazgo clave: El 99,81% de las emisiones (371.851,93 tCO₂e) provienen de fuentes de Alcance 3, principalmente del uso de vehículos.",
            emissions: {
              title: "Resumen de emisiones 2023",
              scope1: "Alcance 1 (Directo):",
              scope2: "Alcance 2 (Electricidad):",
              total: "Huella de carbono total:"
            },
            progress: {
              title: "Progreso en sostenibilidad",
              fleet: "Flota electrificada:",
              growth: "Tasa de crecimiento VE:",
              reduction: "Reducción de emisiones:"
            },
            buttons: {
              close: "Cerrar",
            }
          }
        },
        charts: {
          divider: "Gráficos",
          emissions: {
            title: "Evolución de Emisiones de CO₂",
            subtitle: "Periodo 2021-2023 (tCO₂e)"
          },
          ev: {
            h2: "Evolución de la flota sostenible",
            p: "El análisis de la evolución interanual muestra un crecimiento sostenido y acelerado en la incorporación de vehículos electrificados a la flota, con un incremento especialmente notable en 2023, casi duplicando el parque móvil electrificado respecto al año anterior.",
            title: "Crecimiento de Vehículos Electrificados",
            subtitle: "Periodo 2021-2023"
          }
        },
        strategies: {
          divider: "Estrategias implementadas",
          h2: "Análisis de productos y servicios sostenibles",
          p: "Este apartado examina las soluciones que la empresa ha desarrollado para fomentar la movilidad sostenible y reducir el impacto ambiental de su actividad y la de sus clientes.",
          products: {
            product1: {
              h3: "Consultoría de electrificación",
              p: "Servicio de asesoramiento para la transición hacia flotas eléctricas, con diferentes niveles de servicio adaptados a cada cliente.",
              badge: "Alto impacto"
            },
            product2: {
              h3: "Alphabet Share",
              p: "Servicio de carsharing corporativo (anteriormente AlphaCity) que optimiza el uso de vehículos mediante un sistema de reservas por aplicación.",
              badge: "Alto impacto"
            },
            product3: {
              h3: "Tarjeta de recarga",
              p: "Desarrollada en colaboración con Repsol, facilita acceso a la red de recarga pública, siendo pioneros en el sector del renting.",
              badge: "Medio impacto"
            },
            product4: {
              h3: "Punto de recarga",
              p: "Solución integrada que incluye instalación y financiación de puntos de recarga para hogares y oficinas a través de BMW Bank.",
              badge: "Medio impacto"
            }
          },
          indicators: {
            h3: "Análisis de indicadores de electrificación",
            growth: {
              h4: "Crecimiento de matriculaciones eléctricas",
              p: "Las matriculaciones de vehículos 100% eléctricos crecieron a un ritmo superior al del mercado de renting en 2023.",
              alphabet: "Alphabet",
              market: "Mercado"
            },
            fleet: {
              h4: "Vehículos electrificados en flota",
              p: "Evolución del número de vehículos eléctricos e híbridos enchufables en la flota gestionada.",
              count: "vehículos",
              percentage: "6,9% del total de flota"
            }
          }
        },
        governance: {
          divider: "Gobierno corporativo",
          h2: "Estructura de gobierno y sostenibilidad",
          p: "Se ha analizado la estructura de toma de decisiones y los organismos responsables de la implementación de las políticas de sostenibilidad en la empresa.",
          committee: {
            h3: "Comité de Dirección",
            p: "El Comité de Dirección es responsable de la gestión estratégica y operativa, incluyendo las iniciativas de sostenibilidad. Supervisa la diligencia de la organización mediante sesiones denominadas \"Círculo de Sostenibilidad\".",
            headers: ["Cargo", "Nombre", "Departamento"],
            finding: {
              h4: "Hallazgo del estudio",
              p: "El análisis revela que en julio de 2023 se creó la figura de consultor en Sostenibilidad, lo que sugiere un fortalecimiento del enfoque estratégico en este ámbito."
            }
          },
          board: {
            h3: "Consejo de Administración",
            p: "Formado por miembros nombrados por el accionista único (Grupo BMW), se encarga de la dirección estratégica y toma de decisiones estructurales.",
            members: {
              member1: "Alberto Copado: CEO de Alphabet España",
              member2: "Frank Danitz: Director Financiero de Alphabet España",
              member3: "Juan Ridao-Alonso: Controlling Business to Business, Fleet en Financial Services HQ"
            }
          }
        },
        conclusions: {
          divider: "Conclusiones",
          h2: "Conclusiones y recomendaciones",
          findings: {
            h3: "Hallazgos principales",
            strengths: {
              h4: "Fortalezas",
              li1: "Crecimiento significativo en matriculaciones de vehículos eléctricos, 16 puntos porcentuales por encima del mercado",
              li2: "Portfolio diversificado de soluciones orientadas a la sostenibilidad",
              li3: "Reducción continuada del consumo energético en instalaciones (-16,5% desde 2020)",
              li4: "Estructura de gobierno con supervisión específica de sostenibilidad"
            },
            areas: {
              h4: "Áreas de mejora",
              li1: "Alto porcentaje (99,81%) de emisiones de Alcance 3, que requiere estrategias específicas en la cadena de valor",
              li2: "Crecimiento en el consumo de agua (+3,6% vs 2022)",
              li3: "Bajo porcentaje de vehículos electrificados respecto al total de flota (6,9%)",
              li4: "Dependencia de fabricantes para el suministro de modelos electrificados"
            }
          },
          recommendations: {
            h3: "Recomendaciones estratégicas",
            rec1: {
              h4: "Estrategia integral de Alcance 3",
              p: "Desarrollar un programa específico para la reducción de emisiones en la cadena de valor, enfocado en proveedores y uso de vehículos por parte de los clientes."
            },
            rec2: {
              h4: "Aceleración de la electrificación",
              p: "Establecer objetivos ambiciosos para incrementar el porcentaje de vehículos electrificados en la flota total, superando el actual 6,9%."
            },
            rec3: {
              h4: "Gestión eficiente del agua",
              p: "Implementar un plan de reducción del consumo de agua en instalaciones para revertir la tendencia creciente observada."
            },
            rec4: {
              h4: "Formalización de la estructura de sostenibilidad",
              p: "Potenciar el rol del consultor de Sostenibilidad creado en 2023, dotándolo de recursos y capacidad de influencia en la toma de decisiones."
            }
          },
          quote: {
            blockquote: "El análisis revela que Alphabet España está avanzando en su transformación hacia la sostenibilidad, poniendo a las personas en el centro de su estrategia. Sin embargo, el reto más significativo está en el Alcance 3 de sus emisiones, donde se requieren acciones más decisivas.",
            footer: "Extraído del análisis de la declaración del CEO Alberto Copado"
          }
        },
        references: {
          h3: "Referencias bibliográficas",
          ref1: "Alphabet España (2023). <em>Transformación en movimiento: Memoria de sostenibilidad 2023</em>.",
          ref2: "Grupo BMW (2023). <em>Annual Report 2023</em>.",
          ref3: "AER - Asociación Española de Renting (2023). <em>Estadísticas del sector renting en España</em>.",
          ref4: "Informe modificado el: {date}"
        }
      }
    }
  })

  // Dades per a la taula del comitè de direcció
  const headers = ref(['Cargo', 'Nombre', 'Departamento']);  // Capçaleres de la taula
  const items = ref([  // Elements de la taula amb informació dels directius
    {cargo: "CEO", nombre: "Alberto Copado", departamento: "Dirección General"},
    {cargo: "Directora Comercial", nombre: "Alicia Gálvez", departamento: "Comercial y Marketing"},
    {cargo: "Director de Riesgos", nombre: "Daniel Müller", departamento: "Gestión de Riesgos"},
    {cargo: "Director Financiero", nombre: "Frank Danitz", departamento: "Finanzas"},
    {cargo: "Director de Operaciones", nombre: "Manuel Plaza", departamento: "Operaciones"}
  ]);
  
  // Dades per al gràfic d'emissions de CO2 per any
  const emissionData = ref([
    { year: 2021, value: 398450, label: '2021' },  // Dades d'emissions per 2021
    { year: 2022, value: 385220, label: '2022' },  // Dades d'emissions per 2022
    { year: 2023, value: 372557, label: '2023' }   // Dades d'emissions per 2023
  ]);

  // Dades per al gràfic de creixement de vehicles elèctrics per any
  const electricVehicles = ref([
    { year: 2021, value: 1850, label: '2021' },  // Quantitat de vehicles elèctrics el 2021
    { year: 2022, value: 2860, label: '2022' },  // Quantitat de vehicles elèctrics el 2022
    { year: 2023, value: 5500, label: '2023' }   // Quantitat de vehicles elèctrics el 2023
  ]);

  // Configuració del gràfic d'emissions de CO2
  const emissionsChartOptions = computed(() => ({
    // Configuració del títol del gràfic
    title: {
      text: 'Evolución de Emisiones de CO₂',
      subtext: 'Periodo 2021-2023 (tCO₂e)',
      left: 'center',
      textStyle: {
        color: '#e0e0e0'  // Color clar per al tema fosc
      },
      subtextStyle: {
        color: '#a0a0a0'  // Color més suau per al subtítol
      }
    },
    // Configuració del tooltip (informació en passar el ratolí)
    tooltip: {
      trigger: 'axis',
      formatter: '{b}: {c} tCO₂e',
      axisPointer: {
        type: 'shadow'
      }
    },
    // Configuració de la graella del gràfic
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    // Configuració de l'eix X (anys)
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
    // Configuració de l'eix Y (valors d'emissions)
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
    // Configuració de la sèrie de dades
    series: [{
      data: emissionData.value.map(item => item.value),
      type: 'line',  // Gràfic de línia
      smooth: true,  // Línia suavitzada
      lineStyle: {
        width: 4,
        color: '#ef4444'  // Color vermell per a les emissions (negatiu)
      },
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
        color: '#ef4444'
      },
      markPoint: {
        data: [
          { type: 'min', name: 'Mínimo' }  // Marca el punt mínim
        ]
      },
      // Àrea sota la línia amb gradient
      areaStyle: {
        opacity: 0.2,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#ef4444'  // Color vermell a dalt
          }, {
            offset: 1, color: 'rgba(0,0,0,0)'  // Transparent a baix
          }]
        }
      }
    }]
  }));

   // Data de generació de l'informe (exemple d'ús de dayjs)
  const reportDate = dayjs().format('DD/MM/YYYY');
  const reportDateLabel = computed(() => t('references.generated', { date: reportDate }));
  

  // Configuració del gràfic de vehicles elèctrics
  const evChartOptions = computed(() => ({
    // Configuració del títol del gràfic
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
    // Configuració del tooltip
    tooltip: {
      trigger: 'axis',
      formatter: '{b}: {c} vehículos',
      axisPointer: {
        type: 'shadow'
      }
    },
    // Configuració de la graella
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    // Configuració de l'eix X (anys)
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
    // Configuració de l'eix Y (quantitat de vehicles)
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
    // Configuració de la sèrie de dades
    series: [{
      data: electricVehicles.value.map(item => item.value),
      type: 'bar',  // Gràfic de barres
      barWidth: '60%',  // Amplada de les barres
      itemStyle: {
        color: '#10b981'  // Color verd per als vehicles elèctrics (positiu)
      },
      label: {
        show: true,
        position: 'top',
        color: '#e0e0e0'  // Mostra els valors a sobre de cada barra
      }
    }]
  }));
</script>

<template>
  <!-- Contenidor principal amb tema fosc per a tota la pàgina -->
  <div class="study-page dark-theme">
    <!-- Secció de capçalera amb imatge de fons i títol principal -->
    <section class="header-section position-relative overflow-hidden">
      <!-- Capa semitransparent per millorar la llegibilitat del text sobre la imatge -->
      <div class="overlay"></div>
      <!-- Contenidor del contingut de la capçalera -->
      <div class="container position-relative z-3">
        <div class="row min-vh-75 align-items-center py-5">
          <div class="col-lg-8 mx-auto text-center">
            <!-- Distintiu amb l'any de l'estudi -->
            <span class="badge bg-accent text-dark mb-3 px-3 py-2">{{ t('header.span') }}</span>
            <!-- Títol principal amb format HTML per permetre salt de línia -->
            <h1 class="display-3 fw-bold text-white mb-3" v-html="t('header.h1')"></h1>
            <!-- Subtítol de l'estudi -->
            <h2 class="h3 fw-light text-accent mb-4">{{ t('header.h2') }}</h2>
            <!-- Botons d'acció per navegar a diferents seccions -->
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
      <!-- Elements decoratius del fons -->
      <div class="bg-element bg-element-1"></div>
      <div class="bg-element bg-element-2"></div>
    </section>

    <!-- Secció principal de contingut -->
    <section class="container py-5">
      <!-- Secció de resum executiu -->
      <div class="row mb-5" id="abstract">
        <!-- Limitem l'amplada per millorar la llegibilitat en pantalles grans -->
        <div class="col-lg-10 mx-auto">
          <!-- Targeta amb resum executiu -->
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <!-- Capçalera de la targeta -->
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">{{ t('mainContent.h2') }}</h2>
            </div>
            <!-- Cos de la targeta amb el contingut principal -->
            <div class="card-body p-4 p-lg-5">
              <!-- Paràgraf de descripció general -->
              <p class="lead">
                {{ t('mainContent.p') }}
              </p>
              <hr class="my-4">
              <!-- Secció dividida en dues columnes -->
              <div class="row g-4">
                <!-- Columna d'objectius -->
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-graph-up-arrow text-accent me-2"></i>{{ t('mainContent.objectives.h3') }}</h3>
                  <ul class="custom-list">
                    <li>{{ t('mainContent.objectives.li1') }}</li>
                    <li>{{ t('mainContent.objectives.li2') }}</li>
                    <li>{{ t('mainContent.objectives.li3') }}</li>
                    <li>{{ t('mainContent.objectives.li4') }}</li>
                  </ul>
                </div>
                <!-- Columna de troballes principals -->
                <div class="col-md-6">
                  <h3 class="h5 fw-bold"><i class="bi bi-lightbulb text-accent me-2"></i>{{ t('mainContent.findings.h3') }}</h3>
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

      <!-- Separador de secció amb etiqueta -->
      <div class="divider my-5" id="methodology">
        <span class="divider-label">{{ t('methodology.divider') }}</span>
      </div>

      <!-- Secció de metodologia -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <!-- Targeta amb metodologia de l'estudi -->
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">{{ t('methodology.h2') }}</h2>
              <p>{{ t('methodology.p') }}</p>
              
              <!-- Targetes amb els tres tipus d'anàlisi utilitzats -->
              <div class="row g-4 mt-3">
                <!-- Targeta d'anàlisi documental -->
                <div class="col-md-4">
                  <div class="methodology-card p-3 rounded-3 h-100">
                    <div class="methodology-icon mb-3">
                      <i class="bi bi-file-earmark-text"></i>
                    </div>
                    <h4 class="h6 fw-bold">{{ t('methodology.cards.card1.h4') }}</h4>
                    <p class="small">{{ t('methodology.cards.card1.p') }}</p>
                  </div>
                </div>
                
                <!-- Targeta d'anàlisi quantitativa -->
                <div class="col-md-4">
                  <div class="methodology-card p-3 rounded-3 h-100">
                    <div class="methodology-icon mb-3">
                      <i class="bi bi-graph-up"></i>
                    </div>
                    <h4 class="h6 fw-bold">{{ t('methodology.cards.card2.h4') }}</h4>
                    <p class="small">{{ t('methodology.cards.card2.p') }}</p>
                  </div>
                </div>
                
                <!-- Targeta d'anàlisi comparativa -->
                <div class="col-md-4">
                  <div class="methodology-card p-3 rounded-3 h-100">
                    <div class="methodology-icon mb-3">
                      <i class="bi bi-bar-chart-steps"></i>
                    </div>
                    <h4 class="h6 fw-bold">{{ t('methodology.cards.card3.h4') }}</h4>
                    <p class="small">{{ t('methodology.cards.card3.p') }}</p>
                  </div>
                </div>
              </div>

              <!-- Alerta amb les limitacions de l'estudi -->
              <div class="alert alert-info mt-4">
                <div class="d-flex">
                  <div class="me-3">
                    <i class="bi bi-info-circle-fill fs-4"></i>
                  </div>
                  <div>
                    <h5 class="alert-heading h6 mb-1">{{ t('methodology.alert.h5') }}</h5>
                    <p class="mb-0 small">{{ t('methodology.alert.p') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Separador de secció per al context empresarial -->
      <div class="divider my-5" id="context">
        <span class="divider-label">{{ t('context.divider') }}</span>
      </div>

      <!-- Secció de context empresarial -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <!-- Targeta amb la informació de l'empresa analitzada -->
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">{{ t('context.h2') }}</h2>
              <p>{{ t('context.p') }}</p>
              
              <!-- Dividim la informació en dues columnes -->
              <div class="row g-4 mt-3">
                <!-- Columna amb informació general de l'empresa -->
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-3">{{ t('context.list.h3') }}</h3>
                  <ul class="custom-list">
                    <li>{{ t('context.list.li1') }}</li>
                    <li>{{ t('context.list.li2') }}</li>
                    <li>{{ t('context.list.li3') }}</li>
                    <li>{{ t('context.list.li4') }}</li>
                  </ul>
                </div>
                
                <!-- Columna amb mètriques clau en format visual -->
                <div class="col-lg-6">
                  <div class="key-metrics-panel p-3 rounded-3">
                    <h3 class="h5 fw-bold mb-3">{{ t('context.metrics.h3') }}</h3>
                    
                    <!-- Graella d'indicadors clau en format de targetes petites -->
                    <div class="row g-3">
                      <!-- Facturació anual -->
                      <div class="col-6">
                        <div class="metric-item d-flex align-items-center p-2">
                          <div class="metric-icon bg-primary-subtle text-primary me-3">
                            <i class="bi bi-currency-euro"></i>
                          </div>
                          <div>
                            <div class="metric-value">{{ t('context.metrics.metric1.value') }}</div>
                            <div class="metric-label">{{ t('context.metrics.metric1.label') }}</div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Benefici abans d'impostos -->
                      <div class="col-6">
                        <div class="metric-item d-flex align-items-center p-2">
                          <div class="metric-icon bg-success-subtle text-success me-3">
                            <i class="bi bi-graph-up-arrow"></i>
                          </div>
                          <div>
                            <div class="metric-value">{{ t('context.metrics.metric2.value') }}</div>
                            <div class="metric-label">{{ t('context.metrics.metric2.label') }}</div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Nombre d'empleats -->
                      <div class="col-6">
                        <div class="metric-item d-flex align-items-center p-2">
                          <div class="metric-icon bg-info-subtle text-info me-3">
                            <i class="bi bi-people"></i>
                          </div>
                          <div>
                            <div class="metric-value">{{ t('context.metrics.metric3.value') }}</div>
                            <div class="metric-label">{{ t('context.metrics.metric3.label') }}</div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Vehicles en flota -->
                      <div class="col-6">
                        <div class="metric-item d-flex align-items-center p-2">
                          <div class="metric-icon bg-warning-subtle text-warning me-3">
                            <i class="bi bi-car-front"></i>
                          </div>
                          <div>
                            <div class="metric-value">{{ t('context.metrics.metric4.value') }}</div>
                            <div class="metric-label">{{ t('context.metrics.metric4.label') }}</div>
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
      </div>

      <!-- Separador per a la secció d'anàlisi d'impacte ambiental -->
      <div class="divider my-5" id="results">
        <span class="divider-label">{{ t('results.divider') }}</span>
      </div>

      <!-- Secció d'anàlisi d'impacte ambiental -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <!-- Targeta principal amb la informació de petjada ambiental -->
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <!-- Capçalera de la secció -->
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">{{ t('results.h2') }}</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <div class="row g-4">
                
                <!-- Columna d'anàlisi d'emissions GEH -->
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">{{ t('results.emissions.h3') }}</h3>
                  <p>{{ t('results.emissions.p') }}</p>
                  
                  <!-- Desglossament d'emissions per tipus (Abast 1, 2 i 3) -->
                  <div class="emissions-breakdown mt-4">
                    <!-- Emissions d'Abast 1 (directes) -->
                    <div class="d-flex align-items-center mb-3">
                      <div class="me-3" style="width: 15px; height: 15px; background-color: #28a745; border-radius: 3px;"></div>
                      <div>
                        <div class="small fw-bold">{{ t('results.emissions.scope1') }}</div>
                        <div class="text-muted small">0,14% (514,92 tCO₂e)</div>
                      </div>
                    </div>
                    
                    <!-- Emissions d'Abast 2 (electricitat) -->
                    <div class="d-flex align-items-center mb-3">
                      <div class="me-3" style="width: 15px; height: 15px; background-color: #0d6efd; border-radius: 3px;"></div>
                      <div>
                        <div class="small fw-bold">{{ t('results.emissions.scope2') }}</div>
                        <div class="text-muted small">0,05% (211,02 tCO₂e)</div>
                      </div>
                    </div>
                    
                    <!-- Emissions d'Abast 3 (indirectes) -->
                    <div class="d-flex align-items-center">
                      <div class="me-3" style="width: 15px; height: 15px; background-color: #dc3545; border-radius: 3px;"></div>
                      <div>
                        <div class="small fw-bold">{{ t('results.emissions.scope3') }}</div>
                        <div class="text-muted small">99,81% (371.851,93 tCO₂e)</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Alerta amb troballa significativa sobre les emissions d'Abast 3 -->
                  <div class="alert alert-warning mt-4">
                    <div class="d-flex">
                      <div class="me-3">
                        <i class="bi bi-exclamation-triangle-fill fs-4"></i>
                      </div>
                      <div>
                        <h5 class="alert-heading h6 mb-1">{{ t('results.alert.h5') }}</h5>
                        <p class="mb-0 small">{{ t('results.alert.p') }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Columna amb altres mètriques ambientals -->
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">{{ t('results.otherMetrics.h3') }}</h3>
                  
                  <!-- Panell amb mètriques energètiques, aigua i reciclatge -->
                  <div class="env-metrics-panel mb-3">
                    <!-- Mètrica de consum energètic -->
                    <div class="env-metric-item pb-3">
                      <div class="d-flex justify-content-between align-items-start mb-2">
                        <h4 class="h6 mb-0 fw-bold">{{ t('results.otherMetrics.energy.h4') }}</h4>
                        <span class="badge bg-success-subtle text-success">{{ t('results.otherMetrics.energy.badge') }}</span>
                      </div>
                      <p class="small mb-2">{{ t('results.otherMetrics.energy.p') }}</p>
                      <div class="d-flex justify-content-between align-items-end">
                        <div class="d-flex align-items-baseline">
                          <span class="fs-4 fw-bold me-1">{{ t('results.otherMetrics.energy.value') }}</span>
                          <span class="text-muted small">{{ t('results.otherMetrics.energy.unit') }}</span>
                        </div>
                        <div class="small text-end">
                          <span class="d-block">{{ t('results.otherMetrics.energy.reduction') }}</span>
                          <span class="fw-bold text-success">{{ t('results.otherMetrics.energy.percentage') }}</span>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Mètrica de consum d'aigua -->
                    <div class="env-metric-item py-3">
                      <div class="d-flex justify-content-between align-items-start mb-2">
                        <h4 class="h6 mb-0 fw-bold">{{ t('results.otherMetrics.water.h4') }}</h4>
                        <span class="badge bg-warning-subtle text-warning">{{ t('results.otherMetrics.water.badge') }}</span>
                      </div>
                      <p class="small mb-2">{{ t('results.otherMetrics.water.p') }}</p>
                      <div class="d-flex justify-content-between align-items-end">
                        <div class="d-flex align-items-baseline">
                          <span class="fs-4 fw-bold me-1">{{ t('results.otherMetrics.water.value') }}</span>
                          <span class="text-muted small">{{ t('results.otherMetrics.water.unit') }}</span>
                        </div>
                        <div class="small text-end">
                          <span class="d-block">{{ t('results.otherMetrics.water.area') }}</span>
                          <span class="fw-bold text-warning">{{ t('results.otherMetrics.water.trend') }}</span>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Mètrica de reciclatge de paper -->
                    <div class="env-metric-item pt-3">
                      <div class="d-flex justify-content-between align-items-start mb-2">
                        <h4 class="h6 mb-0 fw-bold">{{ t('results.otherMetrics.recycling.h4') }}</h4>
                        <span class="badge bg-info-subtle text-info">{{ t('results.otherMetrics.recycling.badge') }}</span>
                      </div>
                      <p class="small mb-2">{{ t('results.otherMetrics.recycling.p') }}</p>
                      <div class="d-flex justify-content-between align-items-end">
                        <div class="d-flex align-items-baseline">
                          <span class="fs-4 fw-bold me-1">{{ t('results.otherMetrics.recycling.value') }}</span>
                          <span class="text-muted small">{{ t('results.otherMetrics.recycling.unit') }}</span>
                        </div>
                        <div class="small text-end">
                          <span class="d-block">{{ t('results.otherMetrics.recycling.potential') }}</span>
                          <span class="fw-bold">{{ t('results.otherMetrics.recycling.level') }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Botó per mostrar el modal amb més dades d'impacte climàtic -->
                  <button class="btn btn-sm btn-outline-accent w-100 mt-2" data-bs-toggle="modal" data-bs-target="#climateImpactModal">
                    <i class="bi bi-cloud-haze2 me-2"></i>{{ t('results.modal.button') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Separador per a la secció de gràfics -->
      <div class="divider my-5" id="charts">
        <span class="divider-label">{{ t('charts.divider') }}</span>
      </div>

      <!-- Secció amb el gràfic d'emissions de CO2 -->
      <div class="row mt-5 mb-4">
        <div class="col-lg-12">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-body p-4">
              <!-- Component de gràfic amb les dades d'emissions -->
              <chart :options="emissionsChartOptions" style="height: 400px;" />
            </div>
          </div>
        </div>
      </div>

      <!-- Secció amb el gràfic de vehicles elèctrics -->
      <div class="row mt-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-3">{{ t('charts.ev.h2') }}</h2>
              <p class="mb-4">{{ t('charts.ev.p') }}</p>
              
              <!-- Component de gràfic amb les dades de vehicles elèctrics -->
              <chart :options="evChartOptions" style="height: 400px;" />
            </div>
          </div>
        </div>
      </div>

      <!-- Separador per a la secció d'estratègies implementades -->
      <div class="divider my-5" id="strategies">
        <span class="divider-label">{{ t('strategies.divider') }}</span>
      </div>

      <!-- Secció d'estratègies i productes sostenibles -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">{{ t('strategies.h2') }}</h2>
              <p>{{ t('strategies.p') }}</p>
              
              <!-- Targetes amb les diferents solucions de mobilitat sostenible -->
              <div class="row g-4 mt-3">
                <!-- Consultoria d'electrificació -->
                <div class="col-md-6 col-lg-3">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-lightning"></i>
                    </div>
                    <h3 class="h5 mb-2">{{ t('strategies.products.product1.h3') }}</h3>
                    <span class="badge bg-success mb-2">{{ t('strategies.products.product1.badge') }}</span>
                    <p class="small mb-0">{{ t('strategies.products.product1.p') }}</p>
                  </div>
                </div>
                
                <!-- Alphabet Share (carsharing corporatiu) -->
                <div class="col-md-6 col-lg-3">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-share"></i>
                    </div>
                    <h3 class="h5 mb-2">{{ t('strategies.products.product2.h3') }}</h3>
                    <span class="badge bg-success mb-2">{{ t('strategies.products.product2.badge') }}</span>
                    <p class="small mb-0">{{ t('strategies.products.product2.p') }}</p>
                  </div>
                </div>
                
                <!-- Targeta de recàrrega -->
                <div class="col-md-6 col-lg-3">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-credit-card"></i>
                    </div>
                    <h3 class="h5 mb-2">{{ t('strategies.products.product3.h3') }}</h3>
                    <span class="badge bg-primary mb-2">{{ t('strategies.products.product3.badge') }}</span>
                    <p class="small mb-0">{{ t('strategies.products.product3.p') }}</p>
                  </div>
                </div>
                
                <!-- Punt de recàrrega -->
                <div class="col-md-6 col-lg-3">
                  <div class="product-analysis-card h-100">
                    <div class="product-icon">
                      <i class="bi bi-plug"></i>
                    </div>
                    <h3 class="h5 mb-2">{{ t('strategies.products.product4.h3') }}</h3>
                    <span class="badge bg-primary mb-2">{{ t('strategies.products.product4.badge') }}</span>
                    <p class="small mb-0">{{ t('strategies.products.product4.p') }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Indicadors d'electrificació -->
              <h3 class="h5 fw-bold mt-5 mb-3">{{ t('strategies.indicators.h3') }}</h3>
              <div class="row">
                <!-- Creixement de matriculacions elèctriques -->
                <div class="col-md-6">
                  <div class="card bg-dark-accent border-0">
                    <div class="card-body p-3">
                      <h4 class="h6 mb-3">{{ t('strategies.indicators.growth.h4') }}</h4>
                      <p class="small mb-3">{{ t('strategies.indicators.growth.p') }}</p>
                      <div class="comparison-metrics d-flex justify-content-around p-3 mb-2">
                        <div class="text-center">
                          <div class="value-label">{{ t('strategies.indicators.growth.alphabet') }}</div>
                          <div class="value-number text-success">+92%</div>
                        </div>
                        <div class="divider-vertical"></div>
                        <div class="text-center">
                          <div class="value-label">{{ t('strategies.indicators.growth.market') }}</div>
                          <div class="value-number">+76%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Vehicles electrificats en flota -->
                <div class="col-md-6">
                  <div class="card bg-dark-accent border-0">
                    <div class="card-body p-3">
                      <h4 class="h6 mb-3">{{ t('strategies.indicators.fleet.h4') }}</h4>
                      <p class="small mb-3">{{ t('strategies.indicators.fleet.p') }}</p>
                      <div class="electrified-metrics text-center p-3">
                        <div class="ev-count">5.500 {{ t('strategies.indicators.fleet.count') }}</div>
                        <div class="ev-label">{{ t('strategies.indicators.fleet.percentage') }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Separador per a la secció de govern corporatiu -->
      <div class="divider my-5" id="governance">
        <span class="divider-label">{{ t('governance.divider') }}</span>
      </div>

      <!-- Secció de govern corporatiu -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">{{ t('governance.h2') }}</h2>
              <p>{{ t('governance.p') }}</p>
              
              <div class="row g-4">
                <!-- Informació sobre el consell d'administració -->
                <div class="col-lg-5">
                  <h3 class="h5 fw-bold mb-3">{{ t('governance.board.h3') }}</h3>
                  <p class="small mb-4">{{ t('governance.board.p') }}</p>
                  
                  <!-- Llista de membres del consell -->
                  <ul class="custom-list">
                    <li>{{ t('governance.board.members.member1') }}</li>
                    <li>{{ t('governance.board.members.member2') }}</li>
                    <li>{{ t('governance.board.members.member3') }}</li>
                  </ul>
                  
                  <!-- Troballa sobre la creació del rol de consultor de sostenibilitat -->
                  <div class="card bg-dark-accent border-0 mt-4">
                    <div class="card-body p-3">
                      <h4 class="h6 mb-2">{{ t('governance.committee.finding.h4') }}</h4>
                      <p class="small mb-0">{{ t('governance.committee.finding.p') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Separador per a la secció de conclusions -->
      <div class="divider my-5" id="conclusions">
        <span class="divider-label">{{ t('conclusions.divider') }}</span>
      </div>

      <!-- Secció de conclusions i recomanacions -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <!-- Capçalera de conclusions -->
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">{{ t('conclusions.h2') }}</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <div class="row">
                <!-- Columna amb troballes principals -->
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">{{ t('conclusions.findings.h3') }}</h3>
                  
                  <!-- Fortaleses identificades -->
                  <div class="conclusion-item mb-4">
                    <h4 class="h6 fw-bold text-success mb-3">{{ t('conclusions.findings.strengths.h4') }}</h4>
                    <ul class="small custom-list">
                      <li>{{ t('conclusions.findings.strengths.li1') }}</li>
                      <li>{{ t('conclusions.findings.strengths.li2') }}</li>
                      <li>{{ t('conclusions.findings.strengths.li3') }}</li>
                      <li>{{ t('conclusions.findings.strengths.li4') }}</li>
                    </ul>
                  </div>
                  
                  <!-- Àrees de millora identificades -->
                  <div class="conclusion-item">
                    <h4 class="h6 fw-bold text-warning mb-3">{{ t('conclusions.findings.areas.h4') }}</h4>
                    <ul class="small custom-list">
                      <li>{{ t('conclusions.findings.areas.li1') }}</li>
                      <li>{{ t('conclusions.findings.areas.li2') }}</li>
                      <li>{{ t('conclusions.findings.areas.li3') }}</li>
                      <li>{{ t('conclusions.findings.areas.li4') }}</li>
                    </ul>
                  </div>
                </div>
                
                <!-- Columna amb recomanacions -->
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">{{ t('conclusions.recommendations.h3') }}</h3>
                  
                  <!-- Recomanació 1: Estratègia integral d'Abast 3 -->
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">1</div>
                      <div>
                        <h4 class="h6 fw-bold mb-1">{{ t('conclusions.recommendations.rec1.h4') }}</h4>
                        <p class="small mb-0">{{ t('conclusions.recommendations.rec1.p') }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Recomanació 2: Acceleració de l'electrificació -->
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">2</div>
                      <div>
                        <h4 class="h6 fw-bold mb-1">{{ t('conclusions.recommendations.rec2.h4') }}</h4>
                        <p class="small mb-0">{{ t('conclusions.recommendations.rec2.p') }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Recomanació 3: Gestió eficient de l'aigua -->
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">3</div>
                      <div>
                        <h4 class="h6 fw-bold mb-1">{{ t('conclusions.recommendations.rec3.h4') }}</h4>
                        <p class="small mb-0">{{ t('conclusions.recommendations.rec3.p') }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Recomanació 4: Formalització de l'estructura de sostenibilitat -->
                  <div class="recommendation-item">
                    <div class="d-flex">
                      <div class="recommendation-number">4</div>
                      <div>
                        <h4 class="h6 fw-bold mb-1">{{ t('conclusions.recommendations.rec4.h4') }}</h4>
                        <p class="small mb-0">{{ t('conclusions.recommendations.rec4.p') }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Panell amb citació destacada -->
              <div class="quote-panel mt-5">
                <blockquote class="blockquote">
                  <p>{{ t('conclusions.quote.blockquote') }}</p>
                </blockquote>
                <div class="blockquote-footer">
                  {{ t('conclusions.quote.footer') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Secció de referències bibliogràfiques -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-sm rounded-4">
            <div class="card-body p-4">
              <h3 class="h5 fw-bold mb-3">{{ t('references.h3') }}</h3>
              <!-- Llista de referències utilitzades en l'estudi -->
              <ol class="references-list">
                <li v-html="t('references.ref1')"></li>
                <li v-html="t('references.ref2')"></li>
                <li v-html="t('references.ref3')"></li>
                <!-- Component adicional -->
                <li v-html="t('references.ref4', { date: reportDate })"></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal per mostrar dades detallades d'impacte climàtic -->
    <Modal id="climateImpactModal">
      <template #title>{{ t('results.modal.title') }}</template>
      <template #body>
        <!-- Alerta informativa amb la troballa clau -->
        <div class="alert alert-info mb-4">
          <i class="bi bi-info-circle-fill me-2"></i>
          {{ t('results.modal.finding') }}
        </div>
        
        <!-- Resum d'emissions per abast -->
        <h5 class="h6 fw-bold mb-3">{{ t('results.modal.emissions.title') }}</h5>
        <ul class="list-unstyled mb-4">
          <li class="mb-2"><i class="bi bi-circle-fill text-success me-2 small"></i>{{ t('results.modal.emissions.scope1') }} <span class="fw-bold">514,92 tCO₂e</span></li>
          <li class="mb-2"><i class="bi bi-circle-fill text-primary me-2 small"></i>{{ t('results.modal.emissions.scope2') }} <span class="fw-bold">211,02 tCO₂e</span></li>
          <li class="mb-4"><i class="bi bi-circle-fill text-danger me-2 small"></i>{{ t('results.modal.emissions.scope3') }} <span class="fw-bold">371.851,93 tCO₂e</span></li>
          <li class="fw-bold border-top pt-2">{{ t('results.modal.emissions.total') }} <span>372.557,87 tCO₂e</span></li>
        </ul>
        
        <!-- Progrés en sostenibilitat -->
        <h5 class="h6 fw-bold mb-3">{{ t('results.modal.progress.title') }}</h5>
        <div class="row">
          <div class="col-sm-4 mb-3">
            <div class="small text-muted">{{ t('results.modal.progress.fleet') }}</div>
            <div class="fs-5 fw-bold">5.500</div>
          </div>
          <div class="col-sm-4 mb-3">
            <div class="small text-muted">{{ t('results.modal.progress.growth') }}</div>
            <div class="fs-5 fw-bold text-success">+92%</div>
          </div>
          <div class="col-sm-4 mb-3">
            <div class="small text-muted">{{ t('results.modal.progress.reduction') }}</div>
            <div class="fs-5 fw-bold text-success">-3,3%</div>
          </div>
        </div>
      </template>
      <!-- Botons d'acció del modal -->
      <template #footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ t('results.modal.buttons.close') }}</button>
      </template>
    </Modal>
  </div>
</template>

<style>
/* Resetejat global per eliminar els marges blancs */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Afegir desplaçament suau entre seccions */
html {
  scroll-behavior: smooth;
}

/* Estils base per al tema fosc */
.dark-theme {
  --bg-color: #121212;  /* Color de fons principal */
  --card-bg: #1e1e1e;  /* Color de fons de les targetes */
  --card-bg-accent: #2a2a2a;  /* Color de fons accent per a capçaleres */
  --text-color: #e0e0e0;  /* Color de text principal */
  --text-muted: #a0a0a0;  /* Color de text secundari/atenuat */
  --accent-color: #10b981;  /* Color d'accent (verd) */
  --border-color: rgba(255, 255, 255, 0.1);  /* Color de vores */
  --shadow-color: rgba(0, 0, 0, 0.5);  /* Color d'ombres */
}
</style>

<style scoped>
/* Estils generals */
.study-page {
  font-family: 'Inter', sans-serif;  /* Tipografia moderna i neta */
  background-color: var(--bg-color, #121212);  /* Color de fons fosc */
  color: var(--text-color, #e0e0e0);  /* Text clar per contrast */
  overflow-x: hidden; /* Evita la barra de desplaçament horitzontal */
}

/* Estil per als paràgrafs amb color més suau */
p {
  color: var(--text-muted, #a0a0a0);
  line-height: 1.6;  /* Millora llegibilitat amb interlineat més espaiós */
}

/* Estil per als encapçalaments */
h1, h2, h3, h4, h5, h6 {
  color: var(--text-color, #e0e0e0);
}

/* Estil de la secció de capçalera amb imatge de fons */
.header-section {
  background-color: #000;  /* Fons negre com a fallback */
  background-image: url('https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?w=1400&q=80');  /* Imatge de fons */
  background-size: cover;  /* Cobreix tot l'espai disponible */
  background-position: center;  /* Centrat de la imatge */
  min-height: 60vh;  /* Alçada mínima per visibilitat */
  position: relative;  /* Per posicionar elements interns */
  z-index: 1;  /* Capa base */
  margin: 0; /* Elimina els marges */
  padding: 0; /* Elimina el padding */
}

/* Defineix l'alçada mínima de la capçalera en proporció a la finestra */
.min-vh-75 {
  min-height: 75vh;
}

/* Capa fosca semitransparent sobre la imatge de capçalera */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 100%);  /* Gradient fosc */
  z-index: 2;  /* Per sobre de la imatge */
}

/* Colors d'accent */
.text-accent {
  color: var(--accent-color, #10b981) !important;  /* Text amb color accent (prioritat alta) */
}

.bg-accent {
  background-color: var(--accent-color, #10b981) !important;  /* Fons amb color accent */
}

.bg-dark-accent {
  background-color: #1a1a1a !important; /* To més fosc per capçaleres */
}

/* Estil de targetes pel tema fosc */
.card {
  background-color: var(--card-bg, #1e1e1e);  /* Fons fosc per les targetes */
  border: none;  /* Sense vores */
  color: var(--text-color, #e0e0e0);  /* Text clar */
  box-shadow: 0 8px 16px var(--shadow-color, rgba(0, 0, 0, 0.5)) !important;  /* Ombra pronunciada */
}

/* Estil per a les capçaleres de targetes */
.card .card-header {
  background-color: var(--card-bg-accent, #2a2a2a);  /* Fons una mica més clar */
  border-bottom: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));  /* Vora subtil */
}

/* Estil pel cos de les targetes */
.card .card-body {
  background-color: var(--card-bg, #1e1e1e);  /* Mateix fons que la targeta */
}

/* Estil del separador de seccions */
.divider {
  position: relative;
  text-align: center;
  margin: 3rem 0;
}

/* Línia horitzontal del separador */
.divider:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--border-color, rgba(255, 255, 255, 0.1));  /* Línia subtil */
}

/* Etiqueta del separador */
.divider-label {
  position: relative;
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--bg-color, #121212);  /* Fons igual que la pàgina */
  color: var(--text-color, #e0e0e0);  /* Text clar */
  font-weight: 600;  /* Semibold per llegibilitat */
  border-radius: 4px;  /* Cantonades arrodonides */
  box-shadow: 0 2px 5px var(--shadow-color, rgba(0, 0, 0, 0.5));  /* Ombra subtil */
  z-index: 10;  /* Per sobre de la línia */
}

/* Icona del separador (alternativa a l'etiqueta) */
.divider-icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;  /* Forma circular */
  background-color: var(--card-bg-accent, #2a2a2a);  /* Fons fosc */
  color: var(--accent-color, #10b981);  /* Color accent */
  z-index: 10;  /* Per sobre de la línia */
  box-shadow: 0 2px 5px var(--shadow-color, rgba(0, 0, 0, 0.5));  /* Ombra subtil */
}

/* Elements decoratius de fons animats */
.bg-element {
  position: absolute;
  border-radius: 50%;  /* Forma circular */
  opacity: 0.1;  /* Molt transparent */
  z-index: 1;  /* Darrere del contingut */
  filter: blur(50px);  /* Efecte difuminat */
}

/* Element de fons 1 (verd/blau) */
.bg-element-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #10b981, #0ea5e9);  /* Gradient verd-blau */
  top: -50px;
  right: -50px;
  animation: float 15s ease-in-out infinite;  /* Animació flotant */
}

/* Element de fons 2 (vermell/taronja) */
.bg-element-2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #ef4444, #f59e0b);  /* Gradient vermell-taronja */
  bottom: 50px;
  left: -50px;
  animation: float 20s ease-in-out infinite reverse;  /* Animació inversa */
}

/* Animació de flotació per als elements de fons */
@keyframes float {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(20px, 15px) rotate(5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

/* Llistes personalitzades amb fletxes en lloc de punts */
.custom-list {
  list-style: none;
  padding-left: 0;
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

/* Elements decoratius de fons animats - crea esferes difuminades que floten subtilment en el fons */
.bg-element {
  position: absolute;      /* Posicionament absolut per col·locar-los en qualsevol lloc de la pàgina */
  border-radius: 50%;      /* Forma circular (50% crea un cercle perfecte) */
  opacity: 0.1;            /* Quasi transparent per no distreure del contingut principal */
  z-index: 1;              /* Capa inferior darrere del contingut principal */
  filter: blur(50px);      /* Efecte difuminat intensiu per crear una aparença de "nebulosa" */
}

/* Element decoratiu de fons 1 - esfera amb gradient verd-blau a la part superior dreta */
.bg-element-1 {
  width: 300px;            /* Amplada de l'esfera més gran */
  height: 300px;           /* Alçada igual a l'amplada per mantenir la forma circular */
  background: linear-gradient(45deg, #10b981, #0ea5e9);  /* Gradient diagonal de verd a blau */
  top: -50px;              /* Posicionat parcialment fora de la vora superior */
  right: -50px;            /* Posicionat parcialment fora de la vora dreta */
  animation: float 15s ease-in-out infinite;  /* Animació suau que es repeteix indefinidament cada 15s */
}

/* Element decoratiu de fons 2 - esfera amb gradient vermell-taronja a la part inferior esquerra */
.bg-element-2 {
  width: 200px;            /* Amplada més petita que la primera esfera */
  height: 200px;           /* Alçada igual a l'amplada per mantenir la forma circular */
  background: linear-gradient(45deg, #ef4444, #f59e0b);  /* Gradient diagonal de vermell a taronja */
  bottom: 50px;            /* Posicionat a 50px de la vora inferior */
  left: -50px;             /* Posicionat parcialment fora de la vora esquerra */
  animation: float 20s ease-in-out infinite reverse;  /* Animació més lenta i en direcció contrària */
}

/* Definició de l'animació de flotació utilitzada pels elements de fons */
@keyframes float {
  0% { transform: translate(0, 0) rotate(0deg); }       /* Posició inicial (sense moviment ni rotació) */
  50% { transform: translate(20px, 15px) rotate(5deg); } /* Punt mitjà: desplaçat i lleugerament rotat */
  100% { transform: translate(0, 0) rotate(0deg); }     /* Torna a la posició inicial per crear un cicle fluid */
}

/* Estil base per a les llistes personalitzades sense marcadors predeterminats */
.custom-list {
  list-style: none;        /* Elimina els marcadors de llista predeterminats (punts o números) */
  padding-left: 0;         /* Elimina el padding esquerre que normalment tenen les llistes */
}
/* Estil per elements de llista personalitzats - defineix l'aparença base de les llistes */
.custom-list li {
  position: relative;     /* Posicionament relatiu per permetre col·locar elements fills */
  padding-left: 1.5rem;   /* Espaiat esquerre per deixar lloc a l'indicador de llista */
  margin-bottom: 0.5rem;  /* Marge inferior entre elements de la llista */
  color: var(--text-muted, #a0a0a0);  /* Color de text atenuat per millorar la llegibilitat */
}

/* Afegeix una fletxa abans de cada element de la llista personalitzada */
.custom-list li:before {
  content: '→';           /* Utilitza una fletxa com a indicador d'element */
  position: absolute;     /* Posicionament absolut respecte al parent (relatiu) */
  left: 0;                /* Alineat a l'esquerra */
  color: var(--accent-color, #10b981);  /* Color d'accent per destacar l'indicador */
}

/* Estil per a les targetes de metodologia, amb fons més fosc i efectes visuals */
.methodology-card {
  background-color: var(--card-bg-accent, #2a2a2a);  /* Fons una mica més fosc que el principal */
  box-shadow: 0 2px 10px var(--shadow-color, rgba(0, 0, 0, 0.5));  /* Ombra suau */
  transition: all 0.3s ease;  /* Transició suau per als efectes d'interacció */
}

/* Efecte d'elevació en passar el ratolí per sobre de les targetes de metodologia */
.methodology-card:hover {
  transform: translateY(-3px);  /* Mou lleugerament cap amunt per efecte de "flotació" */
  box-shadow: 0 5px 15px var(--shadow-color, rgba(0, 0, 0, 0.8));  /* Ombra més pronunciada */
}

/* Estil per a les icones dins de les targetes de metodologia */
.methodology-icon {
  color: var(--accent-color, #10b981);  /* Color d'accent per a les icones */
  font-size: 1.5rem;  /* Mida d'icona més gran */
}

/* Estils per als missatges d'alerta, adaptats al tema fosc */
.alert {
  background-color: var(--card-bg-accent, #2a2a2a);  /* Fons fosc per a les alertes */
  color: var(--text-color, #e0e0e0);  /* Text clar per llegibilitat */
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));  /* Vora subtil */
}

/* Variació d'alerta informativa amb vora esquerra blava */
.alert-info {
  border-left: 4px solid #0ea5e9;  /* Indicador visual blau per a informació */
}

/* Variació d'alerta d'advertència amb vora esquerra taronja */
.alert-warning {
  border-left: 4px solid #f59e0b;  /* Indicador visual taronja per a advertències */
}

/* Estil del panell de mètriques clau amb gradient de fons i vora d'accent */
.key-metrics-panel {
  background: linear-gradient(to bottom right, #1a1a1a, #2a2a2a);  /* Gradient subtil */
  border-left: 4px solid var(--accent-color, #10b981);  /* Vora d'accent a l'esquerra */
}

/* Efectes d'animació per als elements de mètriques */
.metric-item {
  transition: transform 0.2s ease;  /* Transició suau per a l'efecte d'hover */
}

/* Efecte de lliscament en passar el ratolí per sobre de les mètriques */
.metric-item:hover {
  transform: translateX(5px);  /* Es mou lleugerament cap a la dreta */
}

/* Estil per a les icones de mètriques */
.metric-icon {
  width: 40px;           /* Amplada fixa */
  height: 40px;          /* Alçada fixa (quadrat) */
  border-radius: 8px;    /* Cantonades arrodonides */
  display: flex;         /* Flexbox per centrar contingut */
  align-items: center;   /* Centrat vertical */
  justify-content: center; /* Centrat horitzontal */
  font-size: 1.2rem;     /* Mida d'icona més gran */
}

/* Variacions de color per als fons d'icones de mètriques */
.bg-primary-subtle {
  background-color: rgba(13, 110, 253, 0.2);  /* Blau semitransparent */
}

.bg-success-subtle {
  background-color: rgba(25, 135, 84, 0.2);  /* Verd semitransparent */
}

.bg-info-subtle {
  background-color: rgba(13, 202, 240, 0.2);  /* Cian semitransparent */
}

.bg-warning-subtle {
  background-color: rgba(255, 193, 7, 0.2);  /* Groc semitransparent */
}

/* Estil per als valors numèrics dins de les mètriques */
.metric-value {
  font-weight: 700;      /* Text en negreta */
  font-size: 1.1rem;     /* Mida de text més gran */
  color: var(--text-color, #e0e0e0);  /* Color clar per destacar */
}

/* Estil per a les etiquetes de mètriques */
.metric-label {
  font-size: 0.8rem;     /* Text més petit */
  color: var(--text-muted, #a0a0a0);  /* Color atenuat secundari */
}

/* Panell per a les mètriques ambientals amb efecte d'elevació */
.env-metrics-panel {
  background-color: var(--card-bg-accent, #2a2a2a);  /* Fons fosc */
  border-radius: 12px;   /* Cantonades molt arrodonides */
  padding: 1.5rem;       /* Espaiat interior ampli */
  box-shadow: 0 2px 10px var(--shadow-color, rgba(0, 0, 0, 0.5));  /* Ombra suau */
}

/* Elements individuals de mètriques ambientals, amb separadors */
.env-metric-item {
  padding-bottom: 1rem;  /* Espaiat inferior */
  border-bottom: 1px dashed var(--border-color, rgba(255, 255, 255, 0.1));  /* Línia discontinua de separació */
}

/* Elimina la línia separadora de l'últim element */
.env-metric-item:last-child {
  border-bottom: none;   /* Sense vora per a l'últim element */
  padding-bottom: 0;     /* Sense padding inferior per a l'últim element */
}

/* Estils per a les targetes d'anàlisi de productes */
.product-analysis-card {
  background-color: var(--card-bg-accent, #2a2a2a);  /* Fons fosc */
  border-radius: 12px;   /* Cantonades molt arrodonides */
  padding: 1.5rem;       /* Espaiat interior ampli */
  box-shadow: 0 2px 10px var(--shadow-color, rgba(0, 0, 0, 0.5));  /* Ombra suau */
  transition: all 0.3s ease;  /* Transició suau per a efectes d'interacció */
}

/* Efecte d'elevació en passar el ratolí per sobre de les targetes de productes */
.product-analysis-card:hover {
  transform: translateY(-5px);  /* Elevació més pronunciada que les targetes de metodologia */
  box-shadow: 0 10px 20px var(--shadow-color, rgba(0, 0, 0, 0.8));  /* Ombra més gran i intensa */
}

/* Icones per als productes, amb estil circular i color d'accent */
.product-icon {
  width: 50px;           /* Més gran que les icones de mètriques */
  height: 50px;          /* Forma quadrada */
  border-radius: 50%;    /* Forma circular */
  background-color: rgba(16, 185, 129, 0.2);  /* Fons verd semitransparent */
  color: var(--accent-color, #10b981);  /* Color d'accent per a la icona */
  display: flex;         /* Flexbox per centrat */
  align-items: center;   /* Centrat vertical */
  justify-content: center; /* Centrat horitzontal */
  font-size: 1.5rem;     /* Icona gran */
  margin-bottom: 1rem;   /* Espaiat inferior */
}

/* Estil per a les estrelles de valoració */
.rating {
  color: #f59e0b;        /* Groc-taronja per a les estrelles */
  font-size: 0.8rem;     /* Mida petita */
}

/* Mètriques de comparació amb fons semitransparent */
.comparison-metrics {
  background-color: rgba(255, 255, 255, 0.05);  /* Blanc molt semitransparent */
  border-radius: 8px;    /* Cantonades arrodonides */
  padding: 0.8rem;       /* Espaiat interior moderat */
}

/* Separador vertical per a les mètriques de comparació */
.divider-vertical {
  width: 1px;            /* Línia vertical molt fina */
  height: 40px;          /* Alçada fixa */
  background-color: var(--border-color, rgba(255, 255, 255, 0.1));  /* Color subtil */
}

/* Etiquetes per als valors de comparació */
.value-label {
  font-size: 0.8rem;     /* Text petit */
  color: var(--text-muted, #a0a0a0);  /* Color atenuat */
}

/* Valors numèrics per a les comparacions */
.value-number {
  font-size: 1.2rem;     /* Text més gran */
  font-weight: 700;      /* Negreta per destacar */
}

/* Contenidor per a les mètriques de vehicles electrificats */
.electrified-metrics {
  background-color: rgba(255, 255, 255, 0.05);  /* Fons semitransparent */
  border-radius: 8px;    /* Cantonades arrodonides */
  padding: 0.8rem;       /* Espaiat interior moderat */
}

/* Comptador de vehicles elèctrics, destacat amb color d'accent */
.ev-count {
  font-size: 1.2rem;     /* Text gran */
  font-weight: 700;      /* Negreta */
  color: var(--accent-color, #10b981);  /* Color d'accent per destacar */
}

/* Etiqueta per al comptador de vehicles elèctrics */
.ev-label {
  font-size: 0.8rem;     /* Text petit */
  color: var(--text-muted, #a0a0a0);  /* Color atenuat */
}

/* Estil per als números de recomanació, amb cercle i color d'accent */
.recommendation-number {
  width: 36px;           /* Amplada fixa */
  height: 36px;          /* Alçada fixa (cercle) */
  border-radius: 50%;    /* Forma circular */
  background-color: rgba(16, 185, 129, 0.2);  /* Fons verd semitransparent */
  color: var(--accent-color, #10b981);  /* Color d'accent per al número */
  display: flex;         /* Flexbox per centrat */
  align-items: center;   /* Centrat vertical */
  justify-content: center; /* Centrat horitzontal */
  font-weight: 700;      /* Negreta */
  font-size: 0.8rem;     /* Text petit */
  margin-right: 1rem;    /* Marge dret per separar del text */
  flex-shrink: 0;        /* Evita que es redueixi de mida en pantalla petita */
}

/* Estils per a les taules, adaptats al tema fosc */
.table {
  color: var(--text-color, #e0e0e0);  /* Text clar */
  border-color: var(--border-color, rgba(255, 255, 255, 0.1));  /* Vores subtils */
}

/* Estil per a les files alternes (zebra) en les taules */
.table-striped > tbody > tr:nth-of-type(odd) > * {
  background-color: rgba(255, 255, 255, 0.03);  /* Fons molt lleugerament més clar */
  color: var(--text-color, #e0e0e0);  /* Manté el text clar */
}

/* Efecte en passar el ratolí per sobre de les files de taula */
.table-hover > tbody > tr:hover > * {
  background-color: rgba(255, 255, 255, 0.05);  /* Fons lleugerament més clar en hover */
  color: var(--text-color, #e0e0e0);  /* Manté el text clar */
}

/* Estil per al panell de citacions, amb color d'accent */
.quote-panel {
  background-color: rgba(16, 185, 129, 0.1);  /* Fons verd molt semitransparent */
  border-left: 4px solid var(--accent-color, #10b981);  /* Vora esquerra amb color d'accent */
  padding: 1.5rem;       /* Espaiat interior ampli */
  border-radius: 0 8px 8px 0;  /* Cantonades arrodonides (excepte la cantonada superior esquerra) */
}

/* Estil per al text de les citacions */
.blockquote {
  font-size: 1rem;       /* Mida normal de text */
  margin-bottom: 0.5rem; /* Marge inferior petit */
  color: var(--text-color, #e0e0e0);  /* Text clar */
}

/* Peu de la citació (autor o font) */
.blockquote-footer {
  font-size: 0.85rem;    /* Text més petit */
  color: var(--text-muted, #a0a0a0);  /* Color atenuat */
}

/* Estil per a la llista de referències */
.references-list {
  padding-left: 1.5rem;  /* Espaiat esquerre per als números de llista */
  font-size: 0.9rem;     /* Text lleugerament més petit */
  color: var(--text-muted, #a0a0a0);  /* Color atenuat */
}

/* Elements individuals de la llista de referències */
.references-list li {
  margin-bottom: 0.5rem; /* Espaiat entre referències */
}

/* Estil per als botons amb color d'accent */
.btn-accent {
  background-color: var(--accent-color, #10b981);  /* Fons amb color d'accent */
  border-color: var(--accent-color, #10b981);     /* Vora del mateix color */
  color: #000;           /* Text negre per contrast */
  transition: all 0.3s ease;  /* Transició suau per a efectes */
}

/* Efecte en passar el ratolí pels botons d'accent */
.btn-accent:hover {
  background-color: #059669;  /* Verd més fosc en hover */
  border-color: #059669;     /* Vora coincident */
  color: #000;              /* Manté el text negre */
  transform: translateY(-3px);  /* Efecte d'elevació */
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);  /* Ombra verda subtil */
}

/* Estil per als botons amb contorn d'accent */
.btn-outline-accent {
  color: var(--accent-color, #10b981);  /* Text del color d'accent */
  border-color: var(--accent-color, #10b981);  /* Vora del color d'accent */
  transition: all 0.3s ease;  /* Transició suau per a efectes */
}

/* Efecte en passar el ratolí pels botons de contorn */
.btn-outline-accent:hover {
  background-color: var(--accent-color, #10b981);  /* Fons amb color d'accent en hover */
  color: #000;           /* Text negre per contrast */
  transform: translateY(-3px);  /* Efecte d'elevació igual que els botons sòlids */
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);  /* Ombra verda subtil */
}

/* Adaptacions responsives per a diferents mides de pantalla */
@media (max-width: 768px) {
  .header-section {
    min-height: 50vh;    /* Redueix l'alçada de la capçalera en pantalles petites */
  }
  
  .divider-label {
    font-size: 0.9rem;   /* Text més petit per als separadors en mòbil */
  }
  
  .quote-panel {
    padding: 1rem;       /* Redueix el padding de les citacions en mòbil */
  }
}

/* Importació de tipografies i icones externes */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');  /* Tipografia Inter */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");  /* Icones de Bootstrap */
</style>