export default {
  global: {
    componenteFormativo: 'Estrategias de productos turísticos sostenibles',
    descripcionCurso:
      'Las estrategias que se requieren para identificar productos turísticos llevan a los interesados en el proceso de investigación al uso de herramientas en la elaboración de productos turísticos que propendan por un desarrollo sostenible resaltando factores ambientales, socioculturales y económicos que permitan satisfacer los visitantes con un conjunto de servicios y atractivos turísticos innovadores y únicos ofrecidos en paquetes turísticos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '1.	Identificación del producto turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Actividades para identificar productos turísticos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Principios y objetivos de desarrollo sostenible aplicados al producto',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Aplicar el modelo de turismo regenerativo al diseño del producto turístico',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Estructuración y diseño del producto turístico',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Diseño del paquete turístico',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: '<em>Marketing</em> del paquete turístico',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Valoración del producto turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de valoración del diseño del producto turístico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'La evaluación del producto turístico ',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '3.	Calidad y competitividad turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis del ciclo del producto turístico en Colombia',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Estrategias a aplicar en el producto turístico en Colombia',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'La innovación herramienta clave para el producto turístico',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Análisis a los atributos del producto turístico',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Evaluación a los aspectos de calidad turística en Colombia',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Empatía turística',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo:
              'Como se elabora la propuesta de valor en el producto turístico',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '4.	Consideraciones para analizar la capacidad de carga',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Capacidad de Carga Turística (CCT)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Consideraciones básicas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          '5.	La competitividad en el producto turístico desde las diferentes entidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Entidades públicas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Entidades privadas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Comité local y/o Juntas de Acción Comunal (JAC)',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Identificación del producto turístico',
      referencia:
        'Ministerio de Economía, Fomento y Turismo, SERNATUR, Servicio Nacional de Turismo. (2015). Manual paso a paso para el diseño de productos turísticos integrados.',
      tipo: 'Manual',
      link:
        'https://asesoresenturismoperu.wordpress.com/wp-content/uploads/2016/08/244-manual-productos-turc3adsticos-chile.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Actividades turística',
      significado:
        'conjunto de acciones o actividades que realizan los turistas durante su visita a un destino, tales como visitas a monumentos, actividades recreativas, gastronómicas, entre otras.',
    },
    {
      termino: 'Atractivo turístico',
      significado:
        'elemento o lugar dentro de un destino que atrae a los turistas, como paisajes naturales, patrimonio cultural, arquitectura, eventos especiales, entre otros.',
    },
    {
      termino: 'Demanda turística',
      significado:
        'interés o necesidad de los turistas por determinados destinos, productos o servicios turísticos, influenciada por factores como la oferta, el precio, las tendencias del mercado, entre otros.',
    },
    {
      termino: 'Desarrollo sustentable',
      significado:
        'enfoque que busca satisfacer las necesidades del presente sin comprometer las capacidades de las futuras generaciones para satisfacer sus propias necesidades, aplicable al turismo a través de la conservación de recursos naturales y culturales.',
    },
    {
      termino: 'Destino turístico',
      significado:
        'lugar geográfico que se ofrece a los turistas como un conjunto de servicios y recursos que permiten la realización de actividades turísticas.',
    },
    {
      termino: 'Innovación',
      significado:
        'proceso de crear nuevos productos, servicios, procesos o modelos que aporten valor al sector turístico, mejorando la experiencia del turista y la competitividad del destino.',
    },
    {
      termino: 'Oferta turística',
      significado:
        'conjunto de productos, servicios y recursos que están disponibles para ser consumidos por los turistas en un destino determinado.',
    },
    {
      termino: 'Producto turístico',
      significado:
        'combinación de elementos (recursos, servicios, actividades) que son ofrecidos a los turistas con el fin de satisfacer sus necesidades o deseos durante su estancia en un destino.',
    },
    {
      termino: 'Recurso turístico',
      significado:
        'elemento natural o cultural que tiene el potencial para ser aprovechado en el desarrollo de actividades turísticas, como parques naturales, monumentos históricos, playas, etc.',
    },
    {
      termino: 'Turismo',
      significado:
        'actividad económica, social y cultural que involucra los viajes de personas hacia destinos diferentes a su lugar de residencia, con fines recreativos, de ocio o negocios.',
    },
    {
      termino: 'Turista',
      significado:
        'persona que viaja a un destino fuera de su entorno habitual con fines recreativos, culturales, de negocios o de estudio, permaneciendo allí por un tiempo limitado.',
    },
    {
      termino: 'Vocación turística',
      significado:
        'potencial y predisposición de un lugar o región para desarrollar actividades turísticas debido a sus características naturales, culturales o sociales, que lo hacen atractivo para los visitantes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barreto, C., & Orozco, A. (2019). El paquete turístico en Colombia: Evolución y perspectivas. Revista Turismo y Sociedad, 24(1), 45-65.',
    },
    {
      referencia:
        'Bermúdez, J., & Romero, A. (2022). Turismo sostenible en Colombia: Retos y oportunidades. Editorial Turismo & Sociedad.',
    },
    {
      referencia: 'Corpoturismo. (s.f.). Cartagena de Indias.',
      link: 'https://cartagenadeindias.travel/corpoturismo/',
    },
    {
      referencia:
        'Fundación Turismo de Colombia. (2021). Estrategias de diversificación y sostenibilidad en el turismo colombiano.',
    },
    {
      referencia:
        'Gil Arroyo, L. (2018). Marketing turístico: Estrategias para la promoción de destinos y productos. McGraw-Hill Interamericana.',
    },
    {
      referencia:
        'Hernández, R. (2016). Diseño y comercialización de paquetes turísticos: Un enfoque práctico para agencias de viajes. Editorial Paraninfo.',
    },
    {
      referencia:
        'Londoño, F., & Vargas, J. (2021). Análisis DOFA para destinos emergentes en Colombia: Un enfoque estratégico. Revista Colombiana de Estrategia Turística, 14(3), 203-220.',
    },
    {
      referencia:
        'Martínez, P., & Ramírez, A. (2019). Marketing de destinos turísticos en Colombia: Análisis y propuestas. Revista Turismo y Sociedad, 24(1), 86-102.',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo de Colombia. (2019). Política de Turismo Sostenible en Colombia.',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/politicas-del-sector-turismo/politica-de-turismo-sostenible/documento-de-politica-politica-de-turismo-sostenib.aspx',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo (MINCIT). (2020). Informe sobre la calidad turística en Colombia.',
      link: 'https://www.mincit.gov.co',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo (MINCIT). (2020). Plan de desarrollo y promoción del turismo en Colombia 2020-2025.',
      link: 'https://www.mincit.gov.co',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo (MINCIT). (2021). Informe de situación del turismo en Colombia.',
      link: 'https://www.mincit.gov.co',
    },
    {
      referencia:
        'Navarro, J., & López, P. (2018). Producto turístico: Creación, gestión y comercialización. Editorial Síntesis.',
    },
    {
      referencia:
        'Organización Mundial del Turismo (OMT). (2018). Turismo y los Objetivos de Desarrollo Sostenible: Buenas prácticas en las Américas. OMT.',
    },
    {
      referencia:
        'Pérez, J. (2021). Turismo regenerativo: Conceptualización y casos en Colombia. Revista Colombiana de Turismo Regenerativo, 2(1), 12-30.',
    },
    {
      referencia: 'Registro Nacional de Turismo (RNT). (s.f.).',
      link: 'https://rnt.confecamaras.co/home',
    },
    {
      referencia:
        'Ruiz, P., & Sánchez, M. (2019). La calidad en los servicios turísticos y su impacto en la competitividad: Caso de Colombia. Revista de Turismo y Desarrollo.',
      link:
        'https://www.researchgate.net/figure/Figura-1-Factores-y-dimension-de-turismo-y-sostenibilidad-Programa-de-la-Naciones_fig2_328102410',
    },
    {
      referencia: 'UN. (2015). Objetivos de Desarrollo Sostenible (ODS).',
      link:
        'https://www.un.org/sustainabledevelopment/es/2015/09/la-asamblea-general-adopta-la-agenda-2030-para-el-desarrollo-sostenible/#',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Juan Carlos Camargo Solano',
          cargo: 'Experto temático',
          centro:
            'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
