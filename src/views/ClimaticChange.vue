<script setup>
 import Table from '@/components/Table.vue';
  import "bootstrap";
  import { ref, computed } from 'vue';
  import Chart from '@/components/chart.vue';
  import Modal from '@/components/modal.vue';
  import { useI18n } from 'vue-i18n'
  
  const { t } = useI18n({
    locale: 'es',
    messages: {
      ca: {
        header: {
          span: "ESTUDI DE CAS | 2025",
          h1: "Anàlisi d'Estratègies de<br>Sostenibilitat en el Sector Mobilitat",
          h2: "Cas d'estudi: Alphabet Espanya (2023)",
          a1: "Resum executiu",
          a2: "Veure estudi complet"
        },
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
          ref3: "AER - Associació Espanyola de Rènting (2023). <em>Estadístiques del sector rènting a Espanya</em>."
        }
      },
      es: {
        header: {
          span: "ESTUDIO DE CASO | 2025",
          h1: "Análisis de Estrategias de<br>Sostenibilidad en el Sector Movilidad",
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
              download: "Descargar informe"
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
          ref3: "AER - Asociación Española de Renting (2023). <em>Estadísticas del sector renting en España</em>."
        }
      }
    }
  })

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
                  <h3 class="h5 fw-bold"><i class="bi bi-graph-up-arrow text-accent me-2"></i>{{ t('mainContent.objectives.h3') }}</h3>
                  <ul class="custom-list">
                    <li>{{ t('mainContent.objectives.li1') }}</li>
                    <li>{{ t('mainContent.objectives.li2') }}</li>
                    <li>{{ t('mainContent.objectives.li3') }}</li>
                    <li>{{ t('mainContent.objectives.li4') }}</li>
                  </ul>
                </div>
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

      <!-- Section divider -->
      <div class="divider my-5" id="methodology">
        <span class="divider-label">{{ t('methodology.divider') }}</span>
      </div>

      <!-- Methodology section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">{{ t('methodology.h2') }}</h2>
              <p>{{ t('methodology.p') }}</p>
              
              <div class="row g-4 mt-3">
                <div class="col-md-4">
                  <div class="methodology-card p-3 rounded-3 h-100">
                    <div class="methodology-icon mb-3">
                      <i class="bi bi-file-earmark-text"></i>
                    </div>
                    <h4 class="h6 fw-bold">{{ t('methodology.cards.card1.h4') }}</h4>
                    <p class="small">{{ t('methodology.cards.card1.p') }}</p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="methodology-card p-3 rounded-3 h-100">
                    <div class="methodology-icon mb-3">
                      <i class="bi bi-graph-up"></i>
                    </div>
                    <h4 class="h6 fw-bold">{{ t('methodology.cards.card2.h4') }}</h4>
                    <p class="small">{{ t('methodology.cards.card2.p') }}</p>
                  </div>
                </div>
                
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

      <!-- Section divider -->
      <div class="divider my-5" id="context">
        <span class="divider-label">{{ t('context.divider') }}</span>
      </div>

      <!-- Company context section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">{{ t('context.h2') }}</h2>
              <p>{{ t('context.p') }}</p>
              
              <div class="row g-4 mt-3">
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-3">{{ t('context.list.h3') }}</h3>
                  <ul class="custom-list">
                    <li>{{ t('context.list.li1') }}</li>
                    <li>{{ t('context.list.li2') }}</li>
                    <li>{{ t('context.list.li3') }}</li>
                    <li>{{ t('context.list.li4') }}</li>
                  </ul>
                </div>
                
                <div class="col-lg-6">
                  <div class="key-metrics-panel p-3 rounded-3">
                    <h3 class="h5 fw-bold mb-3">{{ t('context.metrics.h3') }}</h3>
                    
                    <div class="row g-3">
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

      <!-- Section divider -->
      <div class="divider my-5" id="results">
        <span class="divider-label">{{ t('results.divider') }}</span>
      </div>

      <!-- Environmental impact results -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-header bg-dark-accent p-4">
              <h2 class="h4 text-white mb-0">{{ t('results.h2') }}</h2>
            </div>
            <div class="card-body p-4 p-lg-5">
              <div class="row g-4">
                
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">{{ t('results.emissions.h3') }}</h3>
                  <p>{{ t('results.emissions.p') }}</p>
                  
                  <div class="emissions-breakdown mt-4">
                    <div class="d-flex align-items-center mb-3">
                      <div class="me-3" style="width: 15px; height: 15px; background-color: #28a745; border-radius: 3px;"></div>
                      <div>
                        <div class="small fw-bold">{{ t('results.emissions.scope1') }}</div>
                        <div class="text-muted small">0,14% (514,92 tCO₂e)</div>
                      </div>
                    </div>
                    
                    <div class="d-flex align-items-center mb-3">
                      <div class="me-3" style="width: 15px; height: 15px; background-color: #0d6efd; border-radius: 3px;"></div>
                      <div>
                        <div class="small fw-bold">{{ t('results.emissions.scope2') }}</div>
                        <div class="text-muted small">0,05% (211,02 tCO₂e)</div>
                      </div>
                    </div>
                    
                    <div class="d-flex align-items-center">
                      <div class="me-3" style="width: 15px; height: 15px; background-color: #dc3545; border-radius: 3px;"></div>
                      <div>
                        <div class="small fw-bold">{{ t('results.emissions.scope3') }}</div>
                        <div class="text-muted small">99,81% (371.851,93 tCO₂e)</div>
                      </div>
                    </div>
                  </div>
                  
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
                
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">{{ t('results.otherMetrics.h3') }}</h3>
                  
                  <div class="env-metrics-panel mb-3">
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
                  
                  <button class="btn btn-sm btn-outline-accent w-100 mt-2" data-bs-toggle="modal" data-bs-target="#climateImpactModal">
                    <i class="bi bi-cloud-haze2 me-2"></i>{{ t('results.modal.button') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider -->
      <div class="divider my-5" id="charts">
        <span class="divider-label">{{ t('charts.divider') }}</span>
      </div>

      <!-- Emissions and EV charts -->
      <div class="row mt-5 mb-4">
        <div class="col-lg-12">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-body p-4">
              <chart :options="emissionsChartOptions" style="height: 400px;" />
            </div>
          </div>
        </div>
      </div>

      <!-- EV chart with analysis -->
      <div class="row mt-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-3">{{ t('charts.ev.h2') }}</h2>
              <p class="mb-4">{{ t('charts.ev.p') }}</p>
              
              <chart :options="evChartOptions" style="height: 400px;" />
            </div>
          </div>
        </div>
      </div>


      <!-- Section divider -->
      <div class="divider my-5" id="strategies">
        <span class="divider-label">{{ t('strategies.divider') }}</span>
      </div>

      <!-- Sustainable products analysis -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h2 class="h3 fw-bold mb-4">{{ t('strategies.h2') }}</h2>
              <p>{{ t('strategies.p') }}</p>
              
              <div class="row g-4 mt-3">
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
              
              <h3 class="h5 fw-bold mt-5 mb-3">{{ t('strategies.indicators.h3') }}</h3>
              <div class="row">
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

      <!-- Section divider -->
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
              
              <div class="row g-4">
                             
                <div class="col-lg-5">
                  <h3 class="h5 fw-bold mb-3">{{ t('governance.board.h3') }}</h3>
                  <p class="small mb-4">{{ t('governance.board.p') }}</p>
                  
                  <ul class="custom-list">
                    <li>{{ t('governance.board.members.member1') }}</li>
                    <li>{{ t('governance.board.members.member2') }}</li>
                    <li>{{ t('governance.board.members.member3') }}</li>
                  </ul>
                  
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

      <!-- Section divider -->
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
              <div class="row">
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">{{ t('conclusions.findings.h3') }}</h3>
                  
                  <div class="conclusion-item mb-4">
                    <h4 class="h6 fw-bold text-success mb-3">{{ t('conclusions.findings.strengths.h4') }}</h4>
                    <ul class="small custom-list">
                      <li>{{ t('conclusions.findings.strengths.li1') }}</li>
                      <li>{{ t('conclusions.findings.strengths.li2') }}</li>
                      <li>{{ t('conclusions.findings.strengths.li3') }}</li>
                      <li>{{ t('conclusions.findings.strengths.li4') }}</li>
                    </ul>
                  </div>
                  
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
                
                <div class="col-lg-6">
                  <h3 class="h5 fw-bold mb-4">{{ t('conclusions.recommendations.h3') }}</h3>
                  
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">1</div>
                      <div>
                        <h4 class="h6 fw-bold mb-1">{{ t('conclusions.recommendations.rec1.h4') }}</h4>
                        <p class="small mb-0">{{ t('conclusions.recommendations.rec1.p') }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">2</div>
                      <div>
                        <h4 class="h6 fw-bold mb-1">{{ t('conclusions.recommendations.rec2.h4') }}</h4>
                        <p class="small mb-0">{{ t('conclusions.recommendations.rec2.p') }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="recommendation-item mb-3">
                    <div class="d-flex">
                      <div class="recommendation-number">3</div>
                      <div>
                        <h4 class="h6 fw-bold mb-1">{{ t('conclusions.recommendations.rec3.h4') }}</h4>
                        <p class="small mb-0">{{ t('conclusions.recommendations.rec3.p') }}</p>
                      </div>
                    </div>
                  </div>
                  
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

      <!-- References section -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-sm rounded-4">
            <div class="card-body p-4">
              <h3 class="h5 fw-bold mb-3">{{ t('references.h3') }}</h3>
              <ol class="references-list">
                <li v-html="t('references.ref1')"></li>
                <li v-html="t('references.ref2')"></li>
                <li v-html="t('references.ref3')"></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal for climate impact data -->
    <Modal id="climateImpactModal">
      <template #title>{{ t('results.modal.title') }}</template>
      <template #body>
        <div class="alert alert-info mb-4">
          <i class="bi bi-info-circle-fill me-2"></i>
          {{ t('results.modal.finding') }}
        </div>
        
        <h5 class="h6 fw-bold mb-3">{{ t('results.modal.emissions.title') }}</h5>
        <ul class="list-unstyled mb-4">
          <li class="mb-2"><i class="bi bi-circle-fill text-success me-2 small"></i>{{ t('results.modal.emissions.scope1') }} <span class="fw-bold">514,92 tCO₂e</span></li>
          <li class="mb-2"><i class="bi bi-circle-fill text-primary me-2 small"></i>{{ t('results.modal.emissions.scope2') }} <span class="fw-bold">211,02 tCO₂e</span></li>
          <li class="mb-4"><i class="bi bi-circle-fill text-danger me-2 small"></i>{{ t('results.modal.emissions.scope3') }} <span class="fw-bold">371.851,93 tCO₂e</span></li>
          <li class="fw-bold border-top pt-2">{{ t('results.modal.emissions.total') }} <span>372.557,87 tCO₂e</span></li>
        </ul>
        
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
      <template #footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ t('results.modal.buttons.close') }}</button>
        <button type="button" class="btn btn-accent">
          <i class="bi bi-download me-2"></i>{{ t('results.modal.buttons.download') }}
        </button>
      </template>
    </Modal>
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