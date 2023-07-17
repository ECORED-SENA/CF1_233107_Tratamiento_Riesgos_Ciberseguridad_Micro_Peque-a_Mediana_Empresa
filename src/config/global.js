export default {
  global: {
    componenteFormativo:
      'Fundamentos para la gestión del riesgo de ciberseguridad',
    descripcionCurso:
      'En este componente se aborda la fundamentación requerida para la implementación de métodos de análisis y valoración de los riesgos de ciberseguridad que se puedan presentar en una organización, utilizando una metodología y normativa adecuada.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
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
        titulo:
          'Conceptos y fundamentos asociados a la gestión de la ciberseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de redes',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modelo OSI',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Protocolo TCP/IP',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'IPv4 e IPv6',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Enrutamiento IP',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Arquitecturas Cloud y On-premises',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Vulnerabilidad, amenaza y riesgo',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normatividad y estándares de seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'ISO 27001',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'ISO 27002',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'ISO 27032',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Metodologías para la gestión del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Magerit',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'ISO 31000',
            hash: 't_3_2',
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
        download: 'downloads/233107_CF01_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
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
      tema:
        'Conceptos y fundamentos asociados a la gestión de la ciberseguridad',
      referencia:
        'Gayoso Martínez, V., Hernández Encinas, L., & Arroyo Guardeño, D. (2020). Ciberseguridad. CSIC.',
      tipo: 'Libro',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/80863/ciberseguridad',
    },
    {
      tema:
        'Conceptos y fundamentos asociados a la gestión de la ciberseguridad',
      referencia:
        'Cano, J.  (2022).  Prospectiva de ciberseguridad nacional para Colombia a 2030. <em>Revista Científica General José María Córdova.</em>',
      tipo: 'Artículo',
      link:
        'https://revistacientificaesmic.com/index.php/esmic/article/view/866',
    },
    {
      tema: 'Enrutamiento IP',
      referencia:
        'Fernández, L. (2022). <em>Conoce qué es la tabla de enrutamiento en un router</em>. Redeszone.',
      tipo: 'Página web',
      link:
        'https://www.redeszone.net/tutoriales/redes-cable/tabla-enrutamiento-router-que-es/',
    },
    {
      tema: 'IPv4 e IPv6',
      referencia:
        'Freda, A. 2021. <em>¿Qué diferencia hay entre IPv4 e IPv6? AVG</em>.',
      tipo: 'Página web',
      link: 'https://www.avg.com/es/signal/ipv4-vs-ipv6',
    },
    {
      tema: 'Protocolo TPC/IP',
      referencia: '<em>IBM. Protocolos TCP/IP. (s.f.). IBM.</em>',
      tipo: 'Página web',
      link:
        'https://www.ibm.com/docs/es/aix/7.2?topic=protocol-tcpip-protocols',
    },
    {
      tema: 'Tipos de redes',
      referencia: '<em>IBM. Redes físicas. (s.f.). IBM.</em>',
      tipo: 'Página web',
      link:
        'https://www.ibm.com/docs/es/aix/7.2?topic=concepts-physical-networks',
    },
    {
      tema: 'Normatividad y estándares de seguridad de la información',
      referencia:
        '<em>The History of ISO 17799 and ISO 27001.</em> (s.f.). Historial de PC. ',
      tipo: 'Línea de tiempo',
      link: 'https://www.pc-history.org/17799.htm',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'Las amenazas informáticas hacen referencia a eventos o situaciones de seguridad que pueden afectar un sistema en estado de vulnerabilidad y sufrir daños.',
    },
    {
      termino: 'Ataque',
      significado:
        'Conjunto de técnicas que se utilizan en búsqueda de una vulnerabilidad, con el objetivo de robar, alterar o dañar un sistema o información. ',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'Conjunto de procedimientos y herramientas que se implementan para proteger la información que se genera y procesa a través de computadoras, servidores, dispositivos móviles, redes y sistemas electrónicos.',
    },
    {
      termino: 'Enrutamiento',
      significado:
        'El enrutamiento de redes es el proceso de selección de una ruta a través de una o más redes.',
    },
    {
      termino: 'IPv4',
      significado:
        'La estructura del protocolo IP versión cuatro (IPv4) está formada por 12 caracteres divididos por un punto en cuatro segmentos de hasta 3 caracteres.',
    },
    {
      termino: 'IPv6',
      significado:
        'Es una mejora a su antecesor, el protocolo IP versión cuatro, su implementación pretende mejorar la escasez de direcciones que se presentan con la versión cuatro.',
    },
    {
      termino: 'Metodología',
      significado:
        'Combinación de varios métodos enfocados en la gestión de riesgos con un enfoque de automatización durante las etapas de operación.',
    },
    {
      termino: 'Modelo OSI',
      significado:
        'Modelo de interconexión de sistemas abiertos. Proporciona a los diversos sistemas de tecnología informática estándares para que se comuniquen entre sí.',
    },
    {
      termino: 'Normatividad',
      significado:
        'Conjunto de leyes o reglamentos que rigen conductas y procedimientos según los criterios y los lineamientos de una institución u organización privada o estatal.',
    },
    {
      termino: 'Redes de informática',
      significado:
        'Conjunto de ordenadores y otros dispositivos conectados entre sí para intercambiar información (impresoras, archivos, etc.) y compartir recursos.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Probabilidad de que se pueda presentar una amenaza, asociada a una vulnerabilidad.',
    },
    {
      termino: 'TCP/IP',
      significado:
        'Define cuidadosamente cómo se mueve la información desde el remitente hasta el destinatario.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'Incapacidad que tiene un sistema para protegerse, permitiendo ser atacado y recibiendo daño.',
    },
  ],
  referencias: [
    {
      referencia: 'IBM. (s.f.). <em>Protocolos TCP/IP</em>. IBM.',
      link:
        'https://www.ibm.com/docs/es/aix/7.2?topic=protocol-tcpip-protocols',
    },
    {
      referencia: 'ISO. (s.f.). <em>The ISO Survey</em>. ISO.',
      link: 'https://www.iso.org/the-iso-survey.html',
    },
    {
      referencia:
        'Oracle Corporation. (2010). <em>Modelo de referencia OSI</em>. Oracle Corporation. ',
      link: 'https://docs.oracle.com/cd/E19957-01/820-2981/ipov-8/index.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ronald Alexander Vacca Ascanio',
          cargo: 'Experto Temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Maribel Avellaneda Nieves',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora Pedagógica y Metodológica',
          centro: 'Centro de diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Centro de diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
