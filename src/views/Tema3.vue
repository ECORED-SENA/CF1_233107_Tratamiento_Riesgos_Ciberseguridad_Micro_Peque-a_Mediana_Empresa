<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Metodologías para la gestión del riesgo

    .row.justify-content-center.align-items-center.mb-0.mb-lg-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Suele ser de conocimiento general el proceso de gestión de riesgos en tanto la identificación, el análisis, la gestión, etc., documentado en las normas internacionales para la gestión de riesgos;  sin embargo, el concepto de una metodología de gestión de riesgos parece bastante extraño para la mayoría.
        .bg_48.p-4.px-5.mb-4
          p.m-0 <b>Una metodología de riesgo define para una organización la visión general del proceso de gestión de riesgos.</b> En lugar de identificar prácticamente los riesgos, establece cómo deben identificarse, los métodos que deben utilizarse, las personas que deben participar e incluso los documentos y plantillas apropiados.
        p No todas las organizaciones adoptan el mismo enfoque para la gestión de riesgos. Se evidencia que mientras algunas organizaciones abordan la gestión de riesgos con precisión militar, como una unidad organizada perfectamente orquestada para brindar resultados, otras utilizan un enfoque mucho más flexible, abriéndose camino a tientas en la oscuridad. La diferencia en estos enfoques puede considerarse como las diferencias en la implementación de la metodología de la gestión de riesgos.
      .col-lg-4.mb-4.mb-lg-3(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img01.png')

    p Organizaciones de todo tipo y tamaño enfrentan factores e influencias internas y externas que hacen que sea incierto asegurar si lograrán sus objetivos y cuándo lo harán. El efecto que esta incertidumbre tiene sobre los objetivos de una organización es el riesgo.  El riesgo está involucrado en cualquier actividad de una organización.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 3.1 Magerit

    .row.mb-4.mb-lg-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema3/img02.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p El Consejo Superior de Informática ha elaborado la <b>Metodología de análisis y gestión de riesgos para los sistemas de información de las administraciones públicas, Magerit.</b> El Consejo recomienda el uso de esta metodología como respuesta a la creciente dependencia de las administraciones públicas (y de la sociedad en su conjunto) a las tecnologías de la información. El propósito de <b>Magerit está directamente relacionado con el uso extensivo y generalizado de las tecnologías de la información.</b> Si bien las tecnologías de la información brindan beneficios evidentes a los ciudadanos, también generan ciertos riesgos que deben minimizarse a través de medidas de seguridad que garanticen la autenticidad y la confidencialidad.

    .row.mb-2(data-aos="fade-right")
      .col-lg-5
        .bg_49.p-4
          h3.ms-4.text-white Objetivos

    .bg_50
      .row.align-items-end.mb-5
        .col-lg-9(data-aos="fade-right")
          p Dentro de los <b>objetivos de la metodología Magerit destacan estudiar los riesgos que afectan a un sistema de información (SI) específico y su entorno relacionado,</b> entendido el riesgo en su sentido más común, como la posible ocurrencia de un daño, y recomendar las medidas adecuadas que deben adoptarse para descubrir, prevenir, impedir, reducir o controlar los riesgos investigados.
          p Como <b>objetivo a más largo plazo,</b> Magerit está preparando mecanismos de evaluación y certificación de la seguridad de los sistemas de información.
          p Para programarlo, Magerit utiliza como referencia sistemática -Ll ITSEC (<em>Information Technologies Security Evaluation Criteria</em>), aprobado por el SOGIS (<em>Senior Officer Group of Information Systems</em>) de la Comisión de la UE y sujeto a la Recomendación de 7/4/1995 del Consejo de la UE; así como el Manual de evaluación de la seguridad de las tecnologías de la información (ITSEM) y,  los conceptos y los términos acuñados por los criterios de evaluación para la seguridad de la tecnología de la información (ISO/IEC IS 15408).
          p Ambos criterios estipulan que los solicitantes de una evaluación o certificación de seguridad primero deben definir su “dominio” (<em>Target of Evaluation</em>, TOE) y sus amenazas ambientales junto con el <em>Target of Security</em> (TOS) solicitado. También establecen que esta definición previa debe hacerse con el apoyo de un método de análisis y gestión de riesgos como Magerit.
        .col-lg-3(data-aos="fade-left")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema3/img04.svg', alt='')

    .row.mb-2(data-aos="fade-right")
      .col-lg-5
        .bg_49.p-4
          h3.ms-4.text-white Elementos

    p.mb-4 La estructura de Magerit se compone de dos tipos de elementos:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-numerada.color-secundario.p-5.py-4
          .tarjeta-numerada__numero
            .h2 1.
          p.flex-center-text.ms-3 Un conjunto de manuales: introductorio, de procedimientos, de técnicas, un manual para desarrolladores de aplicaciones, para los responsables del dominio protegido y una guía de referencia de normas legales y técnicas.

      .col-lg-5(data-aos="fade-left")
        .tarjeta-numerada.color-acento-contenido.p-5.py-4
          .tarjeta-numerada__numero
            .h2.text-white 2.
          p.mt-3.ms-3 Una serie de herramientas de apoyo con sus respectivos <em>handbooks</em> y con las especificaciones de la arquitectura de la información e interfaz para el intercambio de los datos.

    p La estructura Magerit permite realizar el análisis de los riesgos para identificar las amenazas a los diferentes componentes pertenecientes o relacionados con el sistema de información (conocidos como “activos”), evaluar la vulnerabilidad del sistema frente a dichas amenazas y estimar el impacto o el nivel de daño que una seguridad inadecuada puede tener sobre la organización, obteniendo así una cierta conciencia del riesgo en el que se incurre.
    p.mb-5 La gestión de riesgos se basa en los resultados obtenidos en el análisis anterior, y permite seleccionar e implementar las medidas de seguridad o “salvaguardas”, adecuadas para descubrir, prevenir, impedir, reducir o controlar los riesgos identificados, reduciendo así los posibles daños a un mínimo.

    .row.mb-2(data-aos="fade-right")
      .col-lg-5
        .bg_49.p-4
          h3.ms-4.text-white Fases

    p.mb-5 A continuación se presentan las fases de recuperación de la seguridad propuestas por la metodología Magerit:

    .bg_51.p-4.mb-5
      SlyderA.t_btn(tipo="b")(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 Análisis y gestión de riesgos
            p Fase central de “medición” y cálculo dentro del ciclo de gestión de la seguridad, punto de partida que requiere técnicas de proceso especiales (dentro del ámbito de la seguridad). La fase estará sujeta a un método Magerit especial, mientras el resto de fases a técnicas más genéricas y conocidas.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema3/img06.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 Objetivos, estrategia y política de seguridad de los sistemas de información
            p En el ciclo inicial de gestión de la seguridad un análisis y gestión de riesgos integral ayuda a determinar los objetivos, la estrategia y la política, lo que a su vez afectará el análisis y la gestión de riesgos más detallado de ciclos posteriores.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema3/img07.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 Planificación de la seguridad de los sistemas de información
            p Esta fase, consecuencia funcional más inmediata de la fase de análisis y gestión de riesgos, utiliza técnicas generales de planificación (resultados, progresión e hitos de decisión) adaptadas al ámbito de la seguridad.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema3/img08.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 Organización de la seguridad de los sistemas de información
            p Consecuencia orgánica más inmediata de la fase de análisis y gestión de riesgos. Utiliza técnicas generales de organización (compromiso directivo, roles, responsabilidades, documentación reglamentaria) adaptadas al ámbito de la seguridad.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema3/img09.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 Implantación de salvaguardias y otras medidas de seguridad en los sistemas de información
            p Resultante de las fases de planificación y organización, utiliza técnicas generales de gestión de proyectos y de la gestión de la configuración adaptadas al ámbito de la seguridad.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema3/img10.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 Concienciación sobre la seguridad en los sistemas de información
            p Deriva de las fases de planificación y organización. Tiene en cuenta el papel fundamental de los recursos humanos internos en cualquier proyecto de seguridad y utiliza técnicas generales de la gestión de proyectos y de formación, comunicación y gestión de recursos humanos, adaptadas al entorno de seguridad.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema3/img11.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 Reacción a incidentes, atención y reporte de incidentes, y recuperación de estados aceptables de seguridad
            p Fase fundamentalmente operativa que utiliza técnicas generales de gestión del día a día y servicios de emergencia, adaptadas al ámbito de la seguridad.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema3/img12.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 Seguimiento y gestión de la configuración y cambios en la seguridad de los sistemas de información
            p Fase básicamente de mantenimiento, utiliza técnicas generales de seguimiento, gestión de la configuración y gestión del cambio, adaptadas al ámbito de la seguridad.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema3/img13.svg', alt='Texto que describa la imagen')

    .row.mb-0.mb-lg-4(data-aos="fade-right")
      .col-lg-8
        .bg_52.p-4
          h3.ms-4.text-white Magerit en proyectos de mediana y alta complejidad

    p.mb-5 Los proyectos de mediana y alta complejidad en seguridad requieren más de un ciclo integral de gestión de seguridad.  La aplicación del primer ciclo de gestión cubre todo el sistema en estudio. Se inicia con la fase de análisis y gestión de riesgos, con un enfoque amplio para obtener una primera separación o clasificación de los componentes del sistema en dos grandes bloques:

    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img15.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        ul.lista-ul--color
          li
            i.fas.fa-check-circle
            p.m-0 <b>Componentes de riesgos menores,</b> a los que se pueden aplicar medidas básicas de seguridad de “sentido común”, ampliamente aplicado.
          li
            i.fas.fa-check-circle
            p.m-0 <b>Componentes que implican riesgos importantes.</b> Para cada uno de ellos será necesario aplicar un nuevo y más detallado análisis y gestión de riesgos. La primera aplicación ofrece una visión sintética inicial de la seguridad con la ayuda de las otras fases del ciclo de gestión de la seguridad, es decir, el establecimiento de objetivos, la estrategia y política integrales de seguridad, el establecimiento de la planificación inicial de seguridad, establecer una definición inicial de la organización necesaria para la seguridad, la implementación de salvaguardas generales en componentes de bajo riesgo, la conciencia de seguridad, la capacitación de personas para participar en la seguridad de componentes de bajo riesgo, y finalmente, capacitar a las personas para reaccionar ante cada evento, manejar y registrar incidentes y recuperar estados aceptables de seguridad relacionados con los componentes de bajo riesgo.

    .row.mb-0.mb-lg-4(data-aos="fade-right")
      .col-lg-8
        .bg_52.p-4
          h3.ms-4.text-white Estructura de la fase de análisis y gestión de riesgos

    .row.align-items-center.mb-5
      .col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        .bg_17.px-4
          img.img-t.m-auto(src='@/assets/curso/tema3/img16.svg')
      .col-lg-10(data-aos="fade-left")
        p.m-0 El manual de procedimientos describe metódicamente la fase de análisis y gestión de riesgos, utilizando como referencia principal el método Magerit que comienza definiendo el nivel más general (para que pueda adaptarse a cualquier situación concreta). Magerit contempla una visión estratégica integral de la seguridad de los sistemas de información de las administraciones públicas, que comienza con un modelo de análisis y gestión de riesgos compuesto por tres submodelos. Ver figura.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-5
      h5 Figura 10.
      span <em>Submodelos del análisis y gestión de riesgos</em>

    .row.justify-content-center.mb-5
      .col-lg-8
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img17.svg', alt='')

    .row.align-items-center.mb-5
      .col-lg-4.order-last.order-lg-first(data-aos="fade-right")
        figure
          img.img-t.m-auto.mb-3(src='@/assets/curso/tema3/img18.png', alt='')
      .col-lg-8.align-self-end.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
        p El submodelo de elementos proporciona los “componentes” que el submodelo de eventos interrelaciona entre sí y en el tiempo, mientras que el submodelo de procesos es la descripción funcional (“cuadro explicativo”) del proyecto de seguridad en construcción. Al construir un proyecto de seguridad específico, el submodelo de procesos ayuda, por un lado, a seguir el procedimiento general,  por otro lado, a adaptarlo al problema concreto de que se trate, teniendo en cuenta la política de seguridad establecida por la dirección de la organización. Si esta adaptación es compleja o presenta elementos inciertos debe realizarse con la ayuda de un especialista en seguridad SI. El procedimiento adaptado a los requisitos de un proyecto de seguridad concreto determina las funciones y servicios de salvaguarda adecuados a los problemas detectados al aplicar el método, y señala los tipos de mecanismos de salvaguarda para solucionarlos.
        p Aunque no forma parte de Magerit, esta metodología prepara la planificación, la organización y las posteriores fases necesarias para la implementación y operación de dichos mecanismos, teniendo en cuenta la política de seguridad establecida por la dirección de la organización.

    .row.mb-2(data-aos="fade-right")
      .col-lg-5
        .bg_53.p-4
          h3.ms-4.text-white Tipos de Magerit

    p.mb-5 El modelo considera cinco tipos o categorías principales de activos representados en la siguiente figura:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-5
      h5 Figura 11.
      span <em>Clasificación de activos según Magerit</em>

    .row.justify-content-center.mb-5
      .col-lg-8
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img20.svg', alt='')

    p <b>Nota.</b> Este concepto amplio de activo (*) sigue las directrices ISO/IEC para la gestión de la seguridad de TI, en las que se define cualquier cosa que una organización tiene o utiliza.
    p Para los objetivos específicos de algunos proyectos, Magerit puede desarrollar listas de activos diferentes o desgloses más detallados.  También se suelen utilizar los siguientes grupos:

    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-left")
        ul.lista-ul--color
          li
            i.fas.fa-check-circle
            p.m-0 <b>Grupos jerárquicos de activos.</b> Diferentes según el caso de estudio y el nivel de detalle adecuado a la “granularidad” prevista para la etapa de aplicación.  Este desglose le permite identificar y definir directamente los activos y/o componentes específicos que se estudiarán, lo que facilita la colaboración entre los expertos en seguridad y los usuarios.
          li
            i.fas.fa-check-circle
            p.m-0 <b>Grupos de activos según la amenaza.</b> Activos vulnerables a una amenaza común y grupos de activos según la salvaguardia, que permiten aplicar una salvaguardia común.
          li
            i.fas.fa-check-circle
            p.m-0 <b>Activos no tipificados.</b> Magerit facilita la inclusión de cualquier activo, independientemente de su naturaleza. Esto permite un tratamiento muy flexible pero bien estructurado de las funcionalidades de la organización y de otros recursos no tangibles.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img21.svg', alt='')

    .row.mb-2(data-aos="fade-right")
      .col-lg-5
        .bg_53.p-4
          h3.ms-4.text-white Vulnerabilidad

    p.mb-5 Es la potencial o posible ocurrencia de la materialización de una amenaza, que caracteriza la relación entre un activo y una amenaza. La vulnerabilidad se ha vinculado a un activo más como una “no calidad” del activo, pero puede vincularse a la amenaza cuando se considera útil (en cualquier caso, la vulnerabilidad no es solo una “debilidad”, es decir, una “característica negativa” del elemento de activo). La vulnerabilidad es un concepto doble:

    .row
      .col-lg-6(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.img-t.m-auto(src='@/assets/curso/tema3/img22.svg' alt='AvatarTop')
          .tarjeta.color1
            .p-4
              p Cumple una función de mediación (o predicado desde el punto de vista lingüístico) entre la amenaza como acción y el activo como objeto que modifica el estado de seguridad. Debido a este aspecto estático, la vulnerabilidad es parte del estado de seguridad del activo.
      .col-lg-6(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.img-t.m-auto(src='@/assets/curso/tema3/img22.svg' alt='AvatarTop')
          .tarjeta.color1-1
            .p-4.pt-lg-5.pt-md-5
              p En su aspecto dinámico es el mecanismo obligado que transforma una amenaza en una agresión materializada sobre un activo.

    .row.align-items-center.mb-2
      .col-lg-4.order-last.order-lg-first(data-aos="fade-right")
        figure
          img.img-t.m-auto.mb-4(src='@/assets/curso/tema3/img23.png', alt='')
      .col-lg-8.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
        p Así, a modo de ejemplo, la amenaza de inundación por el desbordamiento de un riachuelo junto con el activo <b>“sitio de cómputo”</b> ubicado en una zona fácilmente inundable se materializa en la vulnerabilidad de dicho activo ante esa amenaza. Esa vulnerabilidad depende del <b>“ciclo de ocurrencia”</b> (frecuencia) de inundaciones en esa área y la ubicación del sitio de la computadora (cercanía al cauce, ubicación del sótano, etc.). Un malentendido muy común es la asimilación de la vulnerabilidad como una probabilidad, utilizada como término científico y técnico relacionado con la teoría de las probabilidades. No se está hablando del cociente de un número de casos concretos (reales) frente a un número de casos totales (posibles), ya que el denominador no tendría ningún sentido. Magerit evita cuidadosamente los términos probable y probabilidad, utilizando los conceptos potencial y potencialidad en general como algo más cercano a la materialización de una amenaza en una agresión. La potencialidad se convierte en frecuencia en aquellos casos de cálculo definido, y posibilidad en aquellos casos de cálculo <b>“borroso”</b>.

    p <b>Ante el concepto de vulnerabilidad, Magerit considera dos significados principales:</b> la vulnerabilidad intrínseca del activo, en cuanto al tipo de amenaza que solo depende de estas dos entidades (activo y amenaza) y la vulnerabilidad efectiva del activo, que tiene en cuenta las salvaguardias aplicadas al activo en cada momento y también las formas en que un factor estima la efectividad global de las salvaguardias.
    p La vulnerabilidad intrínseca se puede desglosar, si es necesario, para realizar análisis detallados (sobre amenazas intencionales) de acuerdo con los siguientes grupos de atributos:

    .row.align-items-end.mb-4.mb-lg-5
      .col-lg-8(data-aos="fade-right")
        ul.lista-ul--color
          li
            i.fas.fa-check
            p Potencialidad autónoma, respecto del bien amenazado por la ocurrencia de una amenaza (por ejemplo, frecuencia de inundaciones en un lugar específico).
          li
            i.fas.fa-check
            p Potencialidad derivada en la relación entre activo y amenaza (principalmente intencional).
          li
            i.fas.fa-check
            p Factores subjetivos generadores de más o menos <b>“fuerza”</b> (motivación, disuasión).
          li
            i.fas.fa-check
            p Oportunidad de acceso al dominio con capacidad y recursos según los siguientes cuatro aspectos:
      .col-lg-4.mb-4(data-aos="fade-left")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema3/img24.svg', alt='')

    .row.justify-content-center(data-aos="fade-down-right")
      .col-lg-9
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr.bg_color1
                td.h4.text-center(colspan="5") Tipo de acceso
                td.h4.text-center(colspan="4") Escala
            tbody
              tr
                td(colspan="5")(rowspan="4") <b>Acceso físico</b> <br><br> Número de personas o entidades autorizadas que, en razón de sus funciones, tienen acceso al entorno del bien.
                td(colspan="4") Una sola persona o entidad.
              tr
                td(colspan="4") Pocas personas pertenecen a una entidad.
              tr
                td(colspan="4") Muchas personas de algunas entidades diferentes.
              tr
                td(colspan="4") Muchas personas de muchas entidades diferentes.
            tbody
              tr
                td(colspan="5")(rowspan="4") <b>Acceso físico cualificado</b> <br><br> Formación general y experiencia de los usuarios autorizados a tener acceso físico al entorno del bien.
                td(colspan="4") Sin formación.
              tr
                td(colspan="4") Bajo nivel de formación para el manejo de documentos técnicos.
              tr
                td(colspan="4") Cierta experiencia en el manejo de documentos técnicos.
              tr
                td(colspan="4") Alto nivel de formación y experiencia en el manejo de documentos técnicos.
            tbody
              tr
                td(colspan="5")(rowspan="4") <b>Acceso lógico competente</b> <br><br> Conocimiento técnico específico del activo atacable.
                td(colspan="4") Sin conocimientos especiales.
              tr
                td(colspan="4") Fácil de usar.
              tr
                td(colspan="4") <em>Know-how</em> del desarrollador.
              tr
                td(colspan="4") Experto calificado.
            tbody
              tr
                td(colspan="5")(rowspan="4") <b>Acceso lógico instrumental</b> <br><br> Disponibilidad de herramientas correspondientes a la tecnología del activo amenazado.
                td(colspan="4") No se requieren herramientas especiales pero el acceso está restringido.
              tr
                td(colspan="4") Se requieren herramientas especiales, aunque son accesibles con la tecnología estudiada.
              tr
                td(colspan="4") Se requieren herramientas especiales y el acceso es muy difícil.

    .row.justify-content-center.mb-0.mb-lg-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .bg_48.p-4.mb-4
          p.m-0 Las métricas de vulnerabilidad se basan en la <b>“distancia”</b> entre la amenaza (potencial) y su materialización como agresión (real) sobre el activo. Magerit mide la vulnerabilidad cuando es factible, por su frecuencia histórica o por la posibilidad de materialización de la amenaza sobre ese activo. Se tienen datos cuantitativos específicos (confiabilidad de un componente de <em>hardware</em>, cantidad de fallas de <em>software</em>, etc.) para algunos activos y se usa la métrica [0.1], donde 0 significa que la amenaza no afecta el activo y 1 no es accesible como lo haría, lo que significa una agresión permanente.
        p Pero como esa medida no suele estar disponible, una primera aproximación cualitativa a la frecuencia o posibilidad de materialización de la amenaza lleva a utilizar la escala mostrada en amenazas potenciales (consideradas ahora como reales, es decir, agresiones).
      .col-lg-4.mb-4.mb-lg-3(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img25.png')

    p La escala de niveles podría ser “objetiva” al comparar el tiempo medio entre ocurrencias en una unidad. En unos casos es recomendable que este plazo sea mayor (un año a efectos contables) y en otros menores (por ejemplo, un día, la ocurrencia diaria de una falla de un activo es un límite psicológico y material demasiado alto, inaceptable en condiciones normales de productividad, pero aceptable en la investigación de incidentes).  Por lo tanto, las herramientas de soporte de Magerit pueden manejar fácilmente varias "escalas" objetivas.

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 3.2 ISO 31000

    .row.mb-4.mb-lg-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema3/img26.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p La ISO 31000 es una norma internacional emitida en 2009 por la ISO (Organización Internacional de Normalización), que pretende servir como guía para el diseño, la implementación y el mantenimiento de la gestión de riesgos.  La ISO 31000 describe un proceso sistemático y lógico, durante el cual las organizaciones gestionan el riesgo a través de su identificación y análisis para luego evaluar si el riesgo debe modificarse mediante un tratamiento para satisfacer sus criterios de riesgo. La gestión de riesgos puede aplicarse a toda una organización, en sus múltiples áreas y niveles, en cualquier momento, así como a funciones, proyectos y actividades específicas.
        p El estándar de gestión de riesgos ISO 31000 se basa en ocho principios de creación y protección de valor que se convierten en fundamento de la gestión de riesgos y deben tenerse en cuenta al establecer el marco y los procesos de gestión de riesgos de la organización, vea en qué consiste cada uno de estos:

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-around(titulo="La gestión de riesgos está integrada en los procesos de la organización")
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  | La gestión de riesgos no está separada de las principales actividades y procesos de la organización, es parte de la toma de decisiones en cada departamento.
                li
                  i.fas.fa-angle-right
                  | La gestión de riesgos está integrada en los procesos de la organización y forma parte de las responsabilidades de la dirección.
            .col-lg-3
              img.img-t.mx-auto(src='@/assets/curso/tema3/img27.svg', alt='')

          .row.justify-content-around(titulo="La gestión de riesgos es estructurada e integral")
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  | Aborda la gestión de riesgos de manera sistemática, contribuye a la eficiencia y a los resultados consistentes dentro de la organización, así como a la comprensión de todos los involucrados.
                li
                  i.fas.fa-angle-right
                  | La gestión de riesgos está estructurada con lineamientos y procedimientos a seguir para mantener la productividad y eficacia.
            .col-lg-3
              img.img-t.mx-auto(src='@/assets/curso/tema3/img28.svg', alt='')
          .row.justify-content-around(titulo="La gestión de riesgos se adapta a su organización")
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  | Los procesos de gestión de riesgos no son de talla única, deben adaptarse al contexto externo e interno de la organización para alcanzar los objetivos.
                li
                  i.fas.fa-angle-right
                  | Cuando el contexto se establece en entornos internos y externos, los objetivos se pueden capturar y la gestión de riesgos se puede personalizar para la organización.
            .col-lg-3
              img.img-t.mx-auto(src='@/assets/curso/tema3/img29.svg', alt='')
          .row.justify-content-around(titulo="La gestión de riesgos es inclusiva y transparente")
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  | La participación de los grupos de interés permite considerar sus conocimientos y puntos de vista, garantizando una gestión de riesgos pertinente y actualizada.
                li
                  i.fas.fa-angle-right
                  | La gestión de riesgos es transparente, fácil de entender y no incluye jerga confusa, lo que permite incluir a las partes interesadas en el marco.
            .col-lg-3
              .row.justify-content-center
                .col-auto
                  img.img-t.mx-auto(src='@/assets/curso/tema3/img30.svg', alt='')
          .row.justify-content-around(titulo="La gestión de riesgos es dinámica, fluida y receptiva al cambio")
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  | El contexto y el conocimiento dentro de una organización cambian constantemente y debe reconocerse cómo lo hacen.
                li
                  i.fas.fa-angle-right
                  | La gestión de riesgos debe responder al cambio de manera continua y oportuna para mantener la eficiencia y los resultados.
                li
                  i.fas.fa-angle-right
                  | Los riesgos surgen, cambian y desaparecen a medida que ocurren eventos internos y externos, por lo que la gestión de riesgos debe ser anticipatoria.
            .col-lg-3
              img.img-t.mx-auto(src='@/assets/curso/tema3/img31.svg', alt='')

          .row.justify-content-around(titulo="La gestión de riesgos toma en consideración la mejor información disponible")
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  | Una organización nunca tendrá toda la información necesaria, pero se deben tomar medidas cuando una organización tiene los mejores datos disponibles.
                li
                  i.fas.fa-angle-right
                  | Se debe tener en cuenta la información histórica y actual, así como sus limitaciones.
                li
                  i.fas.fa-angle-right
                  | Toda la información conocida debe estar disponible para las partes interesadas.
            .col-lg-3
              img.img-t.mx-auto(src='@/assets/curso/tema3/img32.svg', alt='')
          .row.justify-content-around(titulo="La gestión de riesgos tiene en cuenta los factores humanos y la cultura de la empresa")
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  | La gestión de riesgos está influenciada significativamente por el comportamiento y la cultura humana.
                li
                  i.fas.fa-angle-right
                  | Las capacidades de la organización, así como las metas de las personas dentro y alrededor de ella deben ser reconocidas por la gestión de riesgos para lograr o inhibir las metas del negocio.
            .col-lg-3
              img.img-t.mx-auto(src='@/assets/curso/tema3/img33.svg', alt='')
          .row.justify-content-around(titulo="La gestión de riesgos fomenta e impulsa la mejora continua.")
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  | Mejorar continuamente a través de la experiencia asegura la resiliencia de la organización.
                li
                  i.fas.fa-angle-right
                  | La adecuada adaptación a los resultados en la gestión de riesgos permite a la organización crecer exponencialmente en todos los aspectos, y seguir haciéndolo.
            .col-lg-3
              .row.justify-content-center
                .col-auto
                  img.img-t.mx-auto(src='@/assets/curso/tema3/img34.svg', alt='')

    p Estos ocho principios son la base para la gestión del riesgo y se consideran al momento de crear procesos en todas las áreas de una organización con la Norma ISO 31000. Sin la base proporcionada por estos principios, el marco de la gestión de riesgos de ISO 31000 no sería sólido. La mejor gestión de riesgos utiliza estos principios para gestionar la incertidumbre de una organización, alcanzar sus objetivos y seguir logrando metas. Cuando una organización gestiona el riesgo mientras incorpora los ocho principios, verá resultados consistentes y confiables.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
