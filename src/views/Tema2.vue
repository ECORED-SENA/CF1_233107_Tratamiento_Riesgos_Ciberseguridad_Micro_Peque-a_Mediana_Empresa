<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Normatividad y estándares de seguridad de la información

    .row.align-items-center.mb-4.mb-lg-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema2/img01.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p La ciberseguridad toma cada día mayor fortaleza gracias al creciente número de incidentes que sufren las empresas a causa de los ataques asociados a los sistemas y a la información.  Esto ha hecho que recurra a controles para garantizar la seguridad de los dispositivos informáticos, activos de información y redes de comunicaciones, entre otros.  A partir de esta serie de nuevos requisitos se empieza a hablar del concepto de ciberseguridad.
        p Realizar un control eficaz a través de la implementación de un plan de ciberseguridad no es tarea sencilla, considerando el reto de enfrentarse a grandes cantidades de equipos, nuevas tecnologías, ciberdelincuencia en búsqueda permanente de nuevos ataques que allanen las vulnerabilidades de los sistemas. A pesar de esto, se puede pensar en la implementación de medidas para la protección de la información a través de procedimientos basados en estándares establecidos para temas de seguridad informática.

    .row.justify-content-center.align-items-center
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-left")
        p La Organización Internacional de Normalización (ISO) y la Comisión Electrónica Internacional (IEC) referentes en la normalización a nivel mundial, en conjunto construyen comités técnicos encargados de la elaboración de normativas internacionales que son redactadas con el objetivo de realizar la regulación de procesos específicos en todo lo que tiene que ver con la seguridad de la información.  Hoy en día estos estándares y normas juegan un papel importante, instando a las organizaciones a adelantar su implementación, con altos niveles de cumplimiento, a través de lo cual adquieren prestigio y reconocimiento.  El valor agregado que aporta este tipo de certificaciones es fundamental, haciendo que clientes y accionistas vean con buenos ojos a la organización y depositen en ella su confianza.
        .bg_10.p-4
          p.m-0 Las normas establecidas por la ISO están numeradas de manera incremental acorde con su objetivo, a su vez se dividen en familias que agrupan temáticas afines.  El principal objetivo de estas normas y estándares yace en la identificación de nuevas y mejores técnicas, guías, capacitaciones, políticas, entre otras encaminadas a un propósito específico, por ejemplo, seguridad, calidad o escalabilidad.
      .col-lg-3.mb-4.mb-lg-3(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img02.svg' alt="")

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 2.1 ISO 27001

    p Conocida como la “Norma Tecnología de la información — Técnicas de seguridad — Sistemas de gestión de la seguridad de la información — Requisitos” ISO/IEC 27001 (en lo sucesivo, ISO/IEC 27001) especifica los requisitos para establecer, implementar, mantener y mejorar continuamente un sistema de gestión de seguridad de la información (SGSI). El SGSI presenta un enfoque sistemático para mantener segura la información confidencial y gestiona personas, procesos y sistemas de TI mediante la aplicación de procesos de gestión de riesgos. El SGSI de una organización certificado según la Norma ISO/IEC 27001 demuestra el compromiso de una organización con la seguridad de la información y brinda confianza a sus clientes, socios y partes interesadas.
    p.mb-5 ISO/IEC 27001 está diseñada para usarse junto con controles de apoyo, como los relacionados en el documento ISO/IEC 27002 (en lo sucesivo, ISO/IEC 27002) que detalla 114 controles de seguridad organizados en 14 secciones y 35 objetivos de control.

    .btn-h3.mb-4
      span.h3 Requisitos de certificación

    .row.mb-4
      .col-lg-8(data-aos="fade-right")
        p Para cumplir con los requisitos de la certificación ISO/IEC 27001, el SGSI de una organización debe ser auditado por un organismo de certificación acreditado internacionalmente. Los requisitos de las secciones 4 a 10 de ISO/IEC 27001 son obligatorios y no se permiten exclusiones.  Una vez superada la auditoría formal, el organismo de certificación otorga a la organización un certificado ISO/IEC 27001 por su SGSI válido por 3 años, luego de lo cual el SGSI debe volver a certificarse.
        p Durante el período de validez de 3 años, la organización debe realizar el mantenimiento del certificado para confirmar que el SGSI sigue cumpliendo, opera según lo especificado y mejora continuamente. Para mantener la certificación, el organismo de certificación visitará el sitio del SGSI al menos una vez al año para realizar una auditoría de vigilancia. Durante la auditoría de vigilancia solo se auditará una parte del SGSI. Hacia el final del período de 3 años el organismo de certificación audita todo el SGSI.
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img04.png' alt="")

    .btn-h3.mb-4
      span.h3 Beneficios de la certificación

    p.mb-5 La certificación ISO/IEC 27001 traerá beneficios a la organización tanto en seguridad interna como en competitividad externa.  Internamente al adoptar ISO/IEC 27001 una organización puede beneficiarse entre otros aspectos, de los relacionados en la siguiente figura.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 8.
      span <em>Certificación ISO/IEC 27001 - Beneficios internos</em>

    .bg_08.p-5.mb-5
      .row.justify-content-center
        .col-lg-10
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema2/img06b.svg', alt='La imagen nos presenta los beneficios internos de la certificación ISO/IEC27001:Formar una base para el intercambio seguro de información y proteger la privacidad de los datos, en particular la información confidencial. Gestionar y reducir la exposición al riesgo (menos incidentes, menos tiempo y dinero invertidos en su respuesta). Fortalecer la organización interna y mejorar la estructura de seguridad del negocio (definición de roles y responsabilidades relacionados con la seguridad de la información).Reducir recursos para la completitud de la información relacionada con la seguridad en la licitación de contratos, y presentación continua tras contratos adjudicados, según requerimientos de los clientes.')

    p Externamente, al dar a conocer el hecho de que ISO/IEC 27001 está certificada, la organización contaría dentro de sus beneficios con los elementos representados en la figura que aparece a continuación:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-0.mb-lg-5
      h5 Figura 9.
      span <em>Certificación ISO/IEC 27001 – Beneficios externos</em>

    .row.mb-4
      .col-lg-12
        .bg_27.p-4.d-none.d-lg-block
          figure(data-aos="fade-down-right")
            img.img-t.m-auto.d-none.d-lg-block(src='@/assets/curso/tema2/img09.svg', alt='')
    .row.justify-content-center.mb-4
      .col-12.d-lg-none.d-md-block
          figure(data-aos="fade-down-right")
            img.img-t.m-auto.d-lg-none.d-md-block(src='@/assets/curso/tema2/img10.svg', alt='')

    .btn-h3.mb-4
      span.h3 Organismos de certificación

    .bg_30
      .row.mb-5
        .col-lg-10(data-aos="fade-right")
          p El proceso de certificación <b>ISO/IEC 27001</b> implica la acreditación por parte de organismos de certificación. Dicha acreditación se otorga a las organizaciones que han demostrado cumplir plenamente con los requisitos de las normas internacionales <b>ISO/IEC 17021</b> “Evaluación de la conformidad: requisitos para los organismos que brindan auditoría y certificación de sistemas de gestión” e <b>ISO/IEC 27006</b> “Requisitos para los organismos que brindan auditoría y certificación de sistemas de gestión de seguridad de la información”.
        .col-lg-2
          .row.justify-content-center
            .col-auto
              figure(data-aos="fade-down-right")
                img.img-t.m-auto(src='@/assets/curso/tema2/img12.svg', alt='')

    .btn-h3.mb-4
      span.h3 Acreditación servicio por ISO/CEI 27001

    p.mb-3.mb-lg-5 La certificación fue lanzada oficialmente por el Servicio de Acreditación de Hong Kong (HKAS) el 15 de noviembre de 2011. Los organismos de certificación pueden comunicarse con HKAS y solicitar la acreditación de forma voluntaria.

    .row.align-items-center.mb-5
      .col
        .btn-h3.mb-4
          span.h3 Costos de certificación

        p.mb-4 La certificación inicial incluye los costos tanto para implementar el SGSI como para certificar ISO/IEC 27001. El costo de implementación depende en gran medida de las brechas entre los controles de seguridad existentes y los controles requeridos dentro de la organización. En términos de costos de implementación hay costos y recursos para implementar controles de seguridad, redacción de documentación, capacitación del personal, etc. La certificación en sí, incluye el costo de los auditores externos (que cobran una tarifa determinada por día), tarifas de solicitud, tasas de certificados y tasas de mantenimiento.

        .btn-h3.mb-4
          span.h3 Nivel de adopción e implementación

        p Según ISO Survey (2020), había unos 44.500 certificados ISO/IEC 27001 válidos en 137 países y economías de todo el mundo al 31 de diciembre de 2020. Los tres principales países y economías por el número total de certificados válidos eran China (unos 12.00), Japón (unos 5.600) y el Reino Unido de Gran Bretaña e Irlanda del Norte (unos 3.300). Según la información de la misma encuesta, el número de certificados válidos en Hong Kong era de unos 186, número que incluía algunos departamentos gubernamentales certificados según ISO/IEC 27001 para áreas funcionales específicas.

      .col-auto
        figure(data-aos="fade-left")
          img.img-t.m-auto(src='@/assets/curso/tema2/img15.png', alt='')

    .btn-h3.mb-4
      span.h3 Descripción general del proceso de implementación y certificación de ISO/IEC 27001

    p.mb-5 Revise en el siguiente paso a paso el detalle del proceso de implementación y certificación para ISO/IEC 27001:

    .row.justify-content-center
      .col-lg-8
        PasosA.color-acento-contenido.mb-0.mb-lg-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              h4 Definir la política de seguridad de la información.
              p <b>Tarea:</b> identificar los objetivos comerciales y obtener el apoyo de la gerencia para implementar un programa de mejora de la seguridad.
            .col-lg-5(data-aos="fade-left")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img21.svg',  alt="")

          .row.justify-content-end.align-items-center
            .col-lg-5.mb-4.mb-lg-0.order-last.order-lg-first(data-aos="fade-right")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img22.svg',  alt="")

            .col-lg-6.text-start.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
              h4 Definir el alcance del SGSI.
              p <b>Tarea:</b> comparar el sistema de gestión de seguridad de la información existente con los requisitos de ISO/ 2 IEC 27001 y seleccionar qué unidades de negocio, departamentos o sistemas cubrirá el SGSI.

          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              h4 Realizar una evaluación de riesgos.
              p <b>Tarea:</b> definir un método de evaluación de riesgos, hacer un inventario de los activos de información para proteger y clasificar los activos,  de acuerdo con la clasificación de los riesgos basada en la evaluación de los riesgos.
            .col-lg-5(data-aos="fade-left")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img23.svg',  alt="")

          .row.justify-content-end.align-items-center
            .col-lg-5.mb-4.mb-lg-0.order-last.order-lg-first(data-aos="fade-right")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img24.svg',  alt="")

            .col-lg-6.text-start.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
              h4 Gestionar el riesgo identificado.
              p <b>Tarea:</b> crear un plan de tratamiento de los riesgos para identificar acciones de gestión, recursos, responsabilidades y prioridades apropiadas para gestionar los riesgos de seguridad de la información.

          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              h4 Seleccionar los controles a implementar.
              p <b>Tarea:</b> preparar una declaración de aplicabilidad (SoA) para documentar qué controles son aplicables al SGSI y la forma en que se implementarán.
            .col-lg-5(data-aos="fade-left")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img25.svg',  alt="")


          .row.justify-content-end.align-items-center
            .col-lg-5.mb-4.mb-lg-0.order-last.order-lg-first(data-aos="fade-right")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img26.svg',  alt="")

            .col-lg-6.text-start.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
              h4 Implementar controles
              p <b>Tarea:</b> desarrollar programas para implementar los controles identificados.

          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              h4 Prepárese para la certificación.
              p <b>Tarea:</b> operar el SGSI y realizar un ciclo completo de auditorías internas, revisiones de gestión y	 actividades.
            .col-lg-5(data-aos="fade-left")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img27.svg',  alt="")


          .row.justify-content-end.align-items-center
            .col-lg-5.mb-4.mb-lg-0.order-last.order-lg-first(data-aos="fade-right")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img28.svg',  alt="")

            .col-lg-6.text-start.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
              h4 Solicitar la certificación.
              p <b>Tarea:</b> continuar con la solicitud de la certificación que incluye etapas de revisión de los documentos y la auditoría de cumplimiento en el sitio.

    .btn-h3.mb-4
      span.h3 Familia de ISO/IEC 27000

    p.mb-5 Consta de normas y directrices interrelacionadas, ya publicadas o en desarrollo, y contiene una serie de componentes estructurales centrados en los estándares normativos que describen los requisitos del SGSI (ISO/IEC 27001), los requisitos de los organismos de certificación (ISO/IEC 27006) para aquellos que certifican la conformidad con ISO/IEC 27001, y marco de requisitos adicionales para las implementaciones específicas del sector del SGSI (ISO/IEC 27009). Otros estándares y pautas brindan orientación para varios aspectos de la implementación de un SGSI, abordando un proceso genérico, así como orientación específica del sector. Ver tabla.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Tabla 3.
      span <em>Relaciones de la familia de Normas ISO/IEC 27001</em>

    .row.justify-content-center(data-aos="fade-down-right")
      .col-lg-12
        .tabla-a.color-acento-contenido.mb-5
          table.m_tabla3
            thead
              tr.bg_color1
                td.h4(colspan="4") Estándar de vocabulario
                td.h4.text-center(colspan="30") ISO/IEC 27000<br> Sistemas de gestión de seguridad de la información: visión general y vocabulario
            tbody
              tr
                td.text-bold(colspan="4") Requerimientos estándar
                td(colspan="10") <b>ISO/IEC 27001</b> <br> Requisitos de los sistemas de gestión de la seguridad de la información.
                td(colspan="10") <b>ISO/IEC27006</b> <br> Requisitos para organismos que brindan auditoría y certificación de los sistemas de gestión de seguridad de la información.
                td(colspan="10") <b>ISO/IEC27009</b> <br> Aplicación específica del sector de ISO/ EC 27001 Requisitos
              tr
                td.text-bold(colspan="4") Normas de orientación
                td(colspan="3") <b>ISO/IEC 27002</b> <br> Controles de seguridad de la información.
                td(colspan="3") <b>ISO/IEC 27003</b> <br> Guía de sistemas de gestión de seguridad de la información.
                td(colspan="3") <b>ISO/IEC 27004</b> <br> Gestión de la seguridad de la información - Seguimiento, medición, análisis y evaluación.
                td(colspan="3") <b>ISO/IEC 27005</b> <br> Gestión de riesgos de seguridad de la información.
                td(colspan="3") <b>ISO/IEC 27007</b> <br> Directrices para la auditoría de sistemas de gestión de seguridad de la información.
                td(colspan="3") Las directrices <b>ISO/IEC 27008</b> <br> forman la evaluación de los controles de seguridad de la información.
                td(colspan="3") <b>ISO/IEC 27013</b> <br> Directrices sobre la implementa<br>ción integrada de ISO/IEC 27001 e ISO/IEC 20000-1.
                td(colspan="3") <b>ISO/IEC 27014</b> <br> Gobernanza de la seguridad de la información.
                td(colspan="3") <b>ISO/IEC 27016</b> <br> Gestión de la seguridad de la información. Economía organizacio<br>nal.
                td(colspan="3") <b>ISO/IEC 27021</b> <br> Requisitos de competen<br>cia para profesiona<br>les de sistemas de gestión de seguridad de la información.
              tr
                td.text-bold(colspan="4") Normas de orientación específicas del sector
                td(colspan="6") <b>ISO/IEC 27010</b> <br> Gestión de la seguridad de la información para comunicaciones intersectoriales e interorganizacionales.
                td(colspan="5") <b>ISO/IEC 27011</b> <br> Código de prácticas para controles de seguridad de la información basado en ISO/EC 27002 para organizaciones de telecomunicaciones.
                td(colspan="6") <b>ISO/IEC 27017</b> <br> Código de prácticas para controles de seguridad de la información basado en ISO7EC 27002 para servicios en la nube.
                td(colspan="5") <b>ISO/IEC 27018</b> <br>Código de prácticas para la protección de información de identificación personal (PII) en nubes públicas que actúan como procesadores de PII.
                td(colspan="4") <b>ISO/IEC 27019</b> <br> Controles de seguridad de la información para la industria de servicios públicos de energía.
                td(colspan="4") Las directrices <b>ISO/IEC 27799</b> <br> Informática de la salud: gestión de la seguridad de la información en salud utilizando ISO/IEC 27002.
              tr
                td.text-bold(colspan="4") Estándares de directrices específicos de controles
                td.text-center(colspan="11") <b>ISO/IEC 27010</b>
                td.text-center(colspan="11") <b>ISO/IEC 27011</b>
                td.text-center(colspan="8") <b>ISO/IEC 27017</b>

    p.mb-5 Además de las más mencionadas ISO/IEC 27001, ISO/IEC 27002 e ISO/IEC 27018, también es importante hacer referencia a otras normas de la familia ISO/IEC 27000 como las que se destacan a continuación:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="ISO/IEC 27000")
            .col-lg-11
              span #[strong Sistemas de gestión de la seguridad de la información] #[em (descripción general y vocabulario)].
              p.mt-4 Proporciona una descripción general del SGSI y los términos y definiciones comúnmente utilizados en la familia de estándares del SGSI para garantizar coherencia; toda la familia de Normas 27000 se basa en los términos y definiciones proporcionados en ISO/IEC 27000.
          .row(titulo="ISO/IEC 27003")
            .col-lg-11
              p.font_text1.text-bold Sistemas de gestión de la seguridad de la información – Orientación.
              p Brinda orientación sobre los requisitos para un SGSI como se especifica en ISO/IEC 27001, así como las recomendaciones, posibilidades y permisos en relación con los requisitos.
          .row(titulo="ISO/IEC 27004")
            .col-lg-11
              p.font_text1.text-bold Gestión de la seguridad de la información - Monitoreo, medición, análisis y evaluación.
              p Proporciona pautas para ayudar a las organizaciones a evaluar el desempeño de la seguridad de la información, la efectividad de un SGSI y cumplir con los requisitos de monitoreo, medición, análisis y evaluación como especifica la Norma ISO/IEC 27001.
          .row(titulo="ISO/IEC 27005")
            .col-lg-11
              p.font_text1.text-bold Gestión de riesgos de seguridad de la información.
              p Ofrece directrices para la gestión de riesgos de seguridad de la información. Esta norma es compatible con los conceptos generales especificados en ISO/IEC 27001 y está diseñada para ayudar a la implementación satisfactoria de la seguridad de la información basada en un enfoque de gestión de riesgos.
          .row(titulo="ISO/IEC 27017")
            .col-lg-11
              p.font_text1.text-bold Código de prácticas para controles de seguridad de la información basado en ISO/IEC 27002 para servicios en la nube.
              p Proporciona pautas que respaldan la implementación de controles de seguridad de la información para consumidores y proveedores de servicios en la nube. La selección de los controles apropiados y la aplicación de la guía de implementación se basa en la evaluación de riesgos y otros requisitos para el uso de servicios en la nube.
          .row(titulo="ISO/IEC 27031")
            .col-lg-11
              p.font_text1.text-bold Directrices para la preparación de la tecnología de la información y las comunicaciones para la continuidad del negocio.
              p Describe los conceptos y principios de la preparación de las Tecnologías de la Información y la Comunicación (TIC) para la continuidad del negocio, y proporciona un marco de métodos y procesos para identificar y especificar todos los aspectos para mejorar la preparación TIC de una organización y garantizar la continuidad del negocio.
          .row(titulo="ISO/IEC 27035-1")
            .col-lg-11
              p.font_text1.text-bold Gestión de incidentes de seguridad de la información - Parte 1: Principios de la gestión de incidentes.
              p Proporciona conceptos básicos y fases de la gestión de incidentes de seguridad de la información, y combina estos conceptos con principios en un enfoque estructurado para detectar, informar, evaluar y responder a los incidentes y aplicar las lecciones aprendidas.
          .row(titulo="ISO/IEC 27035-2")
            .col-lg-11
              p.font_text1.text-bold Gestión de incidentes de seguridad de la información - Parte 2: Pautas para planificar y prepararse para la respuesta a incidentes.
              p Proporciona pautas para planificar y prepararse para la respuesta a incidentes.
          .row(titulo="ISO/IEC 27036-4")
            .col-lg-11
              p.font_text1.text-bold Seguridad de la información para las relaciones con los proveedores - Parte 4: Pautas para la seguridad de los servicios en la nube.
              p Define las pautas que respaldan la implementación de SGSI para el uso de servicios en la nube.
          .row(titulo="ISO/IEC 27037")
            .col-lg-11
              p.font_text1.text-bold Pautas para la identificación, recopilación, adquisición y conservación de evidencia digital.
              p Proporciona pautas para actividades específicas en el manejo de evidencia digital: identificación, recopilación, adquisición y preservación de evidencia digital potencial que puede tener valor probatorio.
          .row(titulo="ISO/IEC 27039")
            .col-lg-11
              p.font_text1.text-bold Selección, implementación y operaciones de sistemas de prevención y detección de intrusos (IDPS)
              p Brinda pautas para ayudar a las organizaciones a prepararse para implementar IDPS, en particular, aborda la selección, el despliegue y las operaciones de IDPS.
          .row(titulo="ISO/IEC 27043")
            .col-lg-11
              p.font_text1.text-bold Principios y procesos de investigación de incidentes.
              p Ofrece pautas basadas en modelos idealizados para procesos comunes de investigación de incidentes en varios escenarios que involucran evidencia digital. Incluye procesos que van desde la preparación previa al incidente hasta el cierre de la investigación, así como consejos generales y advertencias sobre dichos procesos.
          .row(titulo="ISO/IEC TS 27110")
            .col-lg-11
              p.font_text1.text-bold Pautas de desarrollo del marco de ciberseguridad.
              p Especifica las pautas para desarrollar un marco de ciberseguridad, independientemente del tipo, tamaño o naturaleza de las organizaciones.
          .row(titulo="ISO/IEC TS 27570")
            .col-lg-11
              p.font_text1.text-bold Directrices de privacidad para ciudades inteligentes.
              p Brinda orientación sobre la protección de la privacidad del ecosistema de ciudades inteligentes: cómo se pueden utilizar las normas a nivel mundial y a nivel organizativo en beneficio de los ciudadanos y procesos para la protección de la privacidad del ecosistema de la ciudad inteligente.

    .btn-h3.mb-4
      span.h3 Información de identificación personal (PII) en <em>Cloud Computing </em>

    .row.mb-4.mb-lg-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema2/img30.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p La computación en la nube está evolucionando como nunca antes con tendencia al crecimiento y al desarrollo en los próximos años. Es bien sabido que la computación en la nube tiene ventajas potenciales como método más rentable para usar, mantener y actualizar. El método de copia de seguridad y recuperación en la computación en la nube es relativamente más fácil que los métodos tradicionales de almacenamiento de datos. Además, ofrece la ventaja de una implementación rápida y un fácil acceso a la información.
        p Desde la perspectiva de las organizaciones, la seguridad de la computación en la nube es motivo de gran preocupación, especialmente en cuestiones de seguridad de datos y protección de la privacidad, lo que constituye el principal inhibidor para la adopción de este tipo de servicio.

    .bg_35
      .row.mb-5
        .col-lg-10(data-aos="fade-right")
          p El estándar ISO/IEC 27018:2019 (en adelante, ISO/IEC 27018) conocido como <b>"Código de prácticas para la protección de información de identificación personal (PII) en nubes públicas que actúan como procesadores de PII”,</b> es el primer estándar internacional centrado en la protección de datos personales en la nube pública. ISO/ IEC 27018 establece principalmente objetivos de control, controles y pautas comúnmente aceptados en relación con la protección de PII que procesan los proveedores de servicios de la nube pública, es decir, procesadores de PII.
          p ISO/IEC 27018 ha sido diseñado para todo tipo y tamaño de organización en el sector público y privado que brinde servicios de procesamiento de información a través de la nube como procesadores de PII.
        .col-lg-2
          .row.justify-content-center
            .col-auto
              figure(data-aos="fade-down-right")
                img.img-t.m-auto(src='@/assets/curso/tema2/img12.svg', alt='')

    .btn-h3.mb-4
      span.h3 Controles de protección de PII de ISO/IEC 27018

    p <b>ISO/IEC 27018</b> se desarrolló teniendo en cuenta los requisitos ya incluidos en ISO/IEC 27002. <b>Aumenta ISO/ IEC 27002 en dos enfoques:</b> en primer lugar, complementa la guía de implementación para los controles prescritos por ISO/IEC 27002 y en segundo lugar, proporciona controles adicionales y orientación asociada que se adapta para abordar los requisitos de protección de PII de la nube pública que no están cubiertos por el conjunto de controles ISO/IEC 27002. Para el primer enfoque, ISO/IEC 27018 proporciona una guía de implementación adicional sobre los siguientes 11 controles de ISO/IEC 27002:

    .bg_37.p-4.mb-4
      .row.justify-content-around
        .col-lg-4.align-self-center.mb-4.mb-lg-0(data-aos="fade-right")
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema2/img33.svg', alt='')
        .col-lg-7(data-aos="fade-left")
          ul.lista-ul--color
            li
              i.fas.fa-check-circle
              span Políticas de seguridad de la información.
            li
              i.fas.fa-check-circle
              span Organización de la seguridad de la información.
            li
              i.fas.fa-check-circle
              span Seguridad de los recursos humanos.
            li
              i.fas.fa-check-circle
              span Control de acceso.
            li
              i.fas.fa-check-circle
              span Criptografía.
            li
              i.fas.fa-check-circle
              span Seguridad física y ambiental.
            li
              i.fas.fa-check-circle
              span Seguridad de las operaciones.
            li
              i.fas.fa-check-circle
              span Seguridad de las comunicaciones.
            li
              i.fas.fa-check-circle
              span Gestión de incidentes de seguridad de la información.
            li
              i.fas.fa-check-circle
              span Aspectos de seguridad de la información de la gestión de la continuidad del negocio.
            li
              i.fas.fa-check-circle
              span Cumplimiento.

    p.mb-5 Para el segundo enfoque, el Anexo A de ISO/IEC 27018 enumera 11 controles extendidos de ISO/IEC 27002 para cumplir con los requisitos de protección de PII que se aplican a los proveedores de servicios de la nube pública que actúan como procesadores de PII. Estos controles ampliados se clasifican según los 11 principios de privacidad de la Norma ISO/IEC 29100:2011 (en lo sucesivo, ISO/IEC 29100), conocida como "Tecnología de la información - Técnicas de seguridad - Marco de privacidad".

    .btn-h3.mb-4
      span.h3 Beneficios de ISO/IEC 27018

    p ISO/IEC 27018 se aplica al procesamiento de PII obtenida de un cliente para los fines determinados por el cliente en virtud de su contrato con el proveedor de servicios en la nube.
    p Al adoptar ISO/IEC 27018 una organización puede:

    .row.align-items-center.mb-0.mb-lg-4
      .col-lg-6(data-aos="fade-right")
        .bg_39.p-4
          .row.align-items-center
            .col-auto
              img.img-t.m-auto(src='@/assets/curso/tema2/img36.svg', alt='')
            .col-lg-9.col-md-8.col-8
              p.m-0 Establecer una guía para facilitar el cumplimiento de los requisitos de protección de datos relevantes.
      .col-lg-6(data-aos="fade-left")
        .bg_39.p-4
          .row.align-items-center
            .col-auto
              img.img-t.m-auto(src='@/assets/curso/tema2/img37.svg', alt='')
            .col-lg-9.col-md-8.col-8
              p.m-0 Ganar la confianza de los clientes para dejar sus datos en la nube y así ampliar su base de clientes.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-lg-7.col-md-12(data-aos="fade-up")
        .bg_39-1.p-4.p-xl-3.p-xxl-4
          .row.align-items-center
            .col-auto
              img.img-t.m-auto(src='@/assets/curso/tema2/img38.svg', alt='')
            .col-lg-10.col-xl-9.col-xxl-10.col-md-8.col-8
              p.m-0 Ayudar al proveedor de servicios de nube pública, que opera en un mercado multinacional, a cumplir con varios estándares nacionales de protección de datos y realizar evaluaciones complejas en cada jurisdicción.

    p <b>ISO/IEC 27001</b> establece una especificación formal para ISMS, con mucho énfasis en el <b>"sistema de gestión"</b> en lugar de la <b>"seguridad de la información"</b>.  Un SGSI certificado proporciona una fuerte indicación de que una organización está utilizando un enfoque sistemático para la identificación, evaluación y gestión de los riesgos de seguridad de la información. Si hay un SGSI efectivo en funcionamiento, entonces, el SGSI garantizará que existan controles de seguridad adecuados. El certificado ISO/IEC 27001 tiene potencial de #[em marketing] y debe ayudar a mejorar la credibilidad y aumentar la confianza del cliente.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 2.2 ISO 27002

    .row.mb-4.mb-lg-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema2/img39.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p El estándar internacional ISO/IEC 27002 hace referencia a la seguridad de la información en las empresas y organizaciones, con el principal objetivo de reducir el riesgo al máximo, evitando alteraciones en la información ya sea por robo, destrucción o pérdida.
        p La reducción del riesgo es un tema relevante que involucra el desarrollo de procesos y el seguimiento de medidas adecuadas y eficientes para la empresa en consideración a los requerimientos y las restricciones estipuladas por la legislación nacional e internacional.  También es necesario que la organización tenga claridad en cuanto a sus objetivos, el bienestar de sus usuarios, ya sean clientes o empleados y los costos necesarios para la implementación y operación, no sea que incurra en medidas extremadamente costosas que estén por encima o afecten la rentabilidad de la compañía.
        .bg_40.p-4
          .row.justify-content-around.align-items-center
            .col-lg-9
              p.m-0 No se pueden establecer controles para una seguridad total, <b>pero sí se puede conseguir la reducción del riesgo al mínimo,</b> que en caso de materializarse alguna amenaza, los daños sean menores y fáciles de restaurar.
            .col-auto
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema2/img40.svg', alt='')

    p Explore algunas categorías de seguridad incluidas en el estándar internacional ISO/IEC 27002:

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12.col-md-8
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg_41.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema2/img41.png' alt="")
            h4.text-white Política de seguridad
            p.text-white Cada organización debe crear su propio documento de políticas de seguridad de la información, que debe planificarse teniendo en cuenta tanto los requerimientos comerciales propios del negocio, como las leyes y las regulaciones que le apliquen.
            p.text-white El documento en primera instancia debe ser aprobado por la gerencia y luego socializado a todos los departamentos, jefes, empleados y externos importantes para la compañía.
          .tarjeta.bg_41.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema2/img42.png' alt="")
            h4.text-white Aspectos organizativos de la seguridad de la información
            p.text-white Manejo de la seguridad de la información al interior de la organización y con respecto a terceros, identificando las actividades que involucren ingreso, modificación, manipulación e intercambio de información entre las partes.
          .tarjeta.bg_41.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema2/img43.png' alt="")
            h4.text-white Gestión de activos
            p.text-white A cada activo dentro de la empresa se le debe asociar o asignar un responsable, también se precisa mantener el inventario permanentemente actualizado con todos los activos, su manejo correcto, clasificación y a quién pertenece.
          .tarjeta.bg_41.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema2/img44.png' alt="")
            h4.text-white Seguridad ligada a los recursos humanos
            p.text-white Se debe garantizar que empleados, contratistas y grupos externos comprendan sus responsabilidades, valorando la idoneidad en las tareas delegadas, lo que contribuye a la reducción de riesgos como robo, fraude o mala manipulación de activos informáticos.
          .tarjeta.bg_41.p-4.p-xl-3.p-xxl-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema2/img45.png' alt="")
            h4.text-white Seguridad física y ambiental
            p.text-white Protección física en la que se tengan barreras o límites de protección (paredes, puertas de acceso con control inteligente o vigilancia privada) para salvaguardar las áreas en donde se almacena y procesa la información.
            p.text-white También se deben considerar amenazas externas o causadas ambientalmente (incendios, inundaciones, huracanes, terremotos, ataques terroristas) y en cuanto al ambiente (temperatura ideal, seguridad para el cableado, mantenimiento).
          .tarjeta.bg_41.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema2/img46.png' alt="")
            h4.text-white Gestión de comunicaciones y operaciones
            p.text-white Orientada a garantizar la operación funcional y segura de los dispositivos encargados de procesar la información.
          .tarjeta.bg_41.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema2/img47.png' alt="")
            h4.text-white Control de acceso
            p.text-white Estos controles se realizan a través del registro de usuario, validación de roles y privilegios, autenticación, denegación y activación de usuarios, entre otros.
            p.text-white En cuanto a los accesos desde dispositivos móviles, conexión a la red inalámbrica, acceso desde computadores portátiles o teletrabajo para personal que realice actividades desde casa se deben establecer unas políticas claras detallando cada uno de estos aspectos.
          .tarjeta.bg_41.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema2/img48.png' alt="")
            h4.text-white Adquisición, desarrollo y mantenimiento de los sistemas de información
            p.text-white Además de las consideraciones en calidad y valor, se debe estudiar la seguridad que proporcionan nuevos equipos y sistemas, con validaciones de entrada y salida de los datos, controles internos del procesamiento de las aplicaciones, y verificación de la integridad de los mensajes.
          .tarjeta.bg_41.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema2/img49.png' alt="")
            h4.text-white Gestión de incidentes en la seguridad de la información
            p.text-white Los eventos y las debilidades que se presenten en la seguridad de los activos de información se deben documentar y crear informes que contribuyan a mantener una comunicación a tiempo, garantizando que las correcciones se apliquen oportunamente.
          .tarjeta.bg_41.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema2/img50.png' alt="")
            h4.text-white Gestión de la continuidad del negocio
            p.text-white Los desastres que puedan provocar las fallas en la implementación de la seguridad, caídas o perdidas del servicio se deben validar con respecto al impacto en la operación comercial del negocio. En caso de desastres, contar con un plan de acción que indique la metodología con la que el negocio reanudará sus operaciones.
          .tarjeta.bg_41.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema2/img51.png' alt="")
            h4.text-white Cumplimiento
            p.text-white Cumplir con los requerimientos legales debe ser una de las prioridades de toda organización, evitando incurrir en violaciones de la ley.

    .bg_42.p-4
      p A manera de buenas prácticas se recomiendan las siguientes acciones para las categorías de seguridad:
      .bg_43.py-4.mb-5
        .row.justify-content-around.align-items-center
          .col-lg-3(data-aos="fade-right")
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema2/img53.svg' alt="")
          .col-lg-9.col-md-8(data-aos="fade-left")
            SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
              .tarjeta.bg_45.p-4
                .row.mb-4
                  .col-auto
                    figure
                      img.img-t(src='@/assets/curso/tema2/img54.svg' alt="")
                  .col-2.col-lg-1.align-self-end
                    h4.m_letters A.
                p Cada procedimiento en las operaciones debe estar debidamente documentado, no en la memoria de los administradores, así como el control de cambios realizado con previa autorización y posterior análisis de las mejoras alcanzadas.  Nadie debe tener acceso a realizar modificaciones o a hacer uso de activos informáticos sin previa autorización.
              .tarjeta.bg_45.p-4
                .row.mb-4
                  .col-auto
                    figure
                      img.img-t(src='@/assets/curso/tema2/img55.svg' alt="")
                  .col-2.col-lg-1.align-self-end
                    h4.m_letters2 B.
                p Crear entornos separados: uno para ambiente de pruebas y operación, y otro para el entorno desarrollo, evitando posibles problemas operacionales.
              .tarjeta.bg_45.p-4
                .row.mb-4
                  .col-auto
                    figure
                      img.img-t(src='@/assets/curso/tema2/img56.svg' alt="")
                  .col-2.col-lg-1.align-self-end
                    h4.m_letters3 C.
                p Las empresas dedicadas a la venta de servicios deben realizar la implementación y conservar niveles adecuados de seguridad informática y asegurar que los servicios que se dispongan en línea cuenten con los acuerdos y compromisos correspondientes a este tipo de entrega a grupos externos.
              .tarjeta.bg_45.p-4
                .row.mb-4
                  .col-auto
                    figure
                      img.img-t(src='@/assets/curso/tema2/img57.svg' alt="")
                  .col-2.col-lg-1.align-self-end
                    h4.m_letters D.
                p Proteger contra los códigos maliciosos y los virus que se puedan descargar e instalar, implementando las medidas de detección, prevención y recuperación (implementación de antivirus con garantía de actualización).
              .tarjeta.bg_45.p-4
                .row.mb-4
                  .col-auto
                    figure
                      img.img-t(src='@/assets/curso/tema2/img58.svg' alt="")
                  .col-2.col-lg-1.align-self-end
                    h4.m_letters E.
                p Se debe mantener un plan de copias de seguridad eficiente, automatizado, con revisiones continuas a la integridad de la información, evitando grandes pérdidas de datos en la compañía y serios problemas en la operación.
              .tarjeta.bg_45.p-4
                .row.mb-4
                  .col-auto
                    figure
                      img.img-t(src='@/assets/curso/tema2/img59.svg' alt="")
                  .col-2.col-lg-1.align-self-end
                    h4.m_letters F.
                p Cuando se trate de redes, garantizar la protección de los datos transportados, además del aseguramiento de la infraestructura. Los servicios que se ofrecen en la red, igualmente deben ser seguros. Todos los activos informáticos y de red deben estar documentados, detallando cada elemento que la conforma.
              .tarjeta.bg_45.p-4
                .row.mb-4
                  .col-auto
                    figure
                      img.img-t(src='@/assets/curso/tema2/img60.svg')
                  .col-2.col-lg-1.align-self-end
                    h4.m_letters2 G.
                p El procedimiento para realizar los controles para intercambiar información a través de las herramientas y medios para la comunicación deben estar establecidos mediante políticas claras.
              .tarjeta.bg_45.p-4
                .row.mb-4
                  .col-auto
                    figure
                      img.img-t(src='@/assets/curso/tema2/img61.svg' alt="")
                  .col-2.col-lg-1.align-self-end
                    h4.m_letters3 H.
                p Para realizar un despliegue del comercio electrónico se debe garantizar la efectiva protección, blindándose de ataques fraudulentos, divulgación de información no autorizada, alteración de la información y demás problemas propios de exponer información en redes públicas.
              .tarjeta.bg_45.p-4
                .row.mb-4
                  .col-auto
                    figure
                      img.img-t(src='@/assets/curso/tema2/img62.svg' alt="")
                  .col-2.col-lg-1.align-self-end
                    h4.m_letters I.
                p Monitorear permanentemente los sistemas que permitan detectar las actividades que no están autorizadas, para ello también es importante contar con las auditorías necesarias.
              .tarjeta.bg_45.p-4
                .row.mb-4
                  .col-auto
                    figure
                      img.img-t(src='@/assets/curso/tema2/img63.svg' alt="")
                  .col-2.col-lg-1.align-self-end
                    h4.m_letters J.
                p De presentarse fallas deberán ser corregidas rápidamente y documentarse para posteriores análisis, que ayuden a la toma de medidas y acciones necesarias.

      h4(data-aos="fade-right") Adquisición y mantenimiento de sistemas de información
      p En cuanto a los procesos de adquisición, desarrollo y mantenimiento de los sistemas de información es importante tener en cuenta los siguientes aspectos:

      .row.mb-4
        .col-lg-12
          .bg_46.p-4.d-none.d-lg-block
            figure(data-aos="fade-down-right")
              img.img-t.m-auto.d-none.d-lg-block(src='@/assets/curso/tema2/img65.svg', alt='La imagen presenta los aspectos a tener en cuenta en cuanto a los procesos de adquisición, desarrollo y mantenimiento de los sistemas de información')
      .row.justify-content-center.mb-4
        .col-12.d-lg-none.d-md-block
            figure(data-aos="fade-down-right")
              img.img-t.m-auto.d-lg-none.d-md-block(src='@/assets/curso/tema2/img66.svg', alt='La imagen presenta los aspectos a tener en cuenta en cuanto a los procesos de adquisición, desarrollo y mantenimiento de los sistemas de información')

      h4(data-aos="fade-right") Cumplimiento – ISO/IEC 27002
      p Y para la categoría de seguridad de cumplimiento, incluida en el estándar ISO/IEC 27002, se advierten las siguientes consideraciones.

      .row.mb-4.mb-md-0.mb-lg-5(data-aos="fade-right")
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img68.png')})`}")
              .tarjeta-flip__contenido.bg_47.p-4.p-xl-3
                p.text-center.flex-center-text Tener claridad sobre las regulaciones de ley aplicables.

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img69.png')})`}")
              .tarjeta-flip__contenido.bg_47.p-4.p-xl-3
                p.text-center.flex-center-text Definir con precisión, realizar la documentación y mantener actualizado todo lo necesario para el cumplimiento legal de cada uno de los sistemas informáticos y en general de toda la empresa.

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img70.png')})`}")
              .tarjeta-flip__contenido.bg_47.p-4.p-xl-3.flex-center-text
                p.text-center Implementar procedimientos bien definidos que permitan garantizar el cumplimiento de cada requerimiento a nivel legislativo, regulaciones y acuerdos contractuales con relación a los derechos que existan en cuanto a propiedad intelectual o sobre el uso de <em>software</em> licenciado.

        .col-sm-6.col-xl-3
          .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img71.png')})`}")
              .tarjeta-flip__contenido.bg_47.p-4.p-xl-3
                p.text-center.flex-center-text Aplicar a la protección que se ofrece a los archivos dentro de la empresa, protección de datos y privacidad de datos personales y, garantizar la prevención de la utilización indebida sobre la aplicabilidad del tratamiento de los datos y las acciones realizadas al control mediante la criptografía.

      .row.justify-content-center.mb-4.mb-md-0.mb-lg-5(data-aos="fade-left")
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img72.png')})`}")
              .tarjeta-flip__contenido.bg_47.p-4.p-xl-3
                p.text-center.flex-center-text Cada sistema informático con el que cuente la organización debe estar permanentemente bajo supervisión y monitoreo, garantizando el cumplimiento de las normas, estándares y políticas propias de la ciberseguridad en la organización.
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img73.png')})`}")
              .tarjeta-flip__contenido.bg_47.p-4.p-xl-3
                p.text-center.flex-center-text Realizar permanentes auditorías y garantizar que se cumple con los procedimientos establecidos.

        .col-sm-6.col-xl-3.mb-4.mb-sm-0
          .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img74.png')})`}")
              .tarjeta-flip__contenido.bg_47.p-4.p-xl-3.flex-center-text
                p.text-center Los controles que se piensen aplicar a la organización o a ciertas áreas deben estar cuidadosamente planificados, con el objetivo de causar el mínimo traumatismo en la operación diaria de la compañía.

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 2.3 ISO 27032

    .row.mb-4.mb-lg-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema2/img75.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-4 La Norma ISO/IEC 27032 surge para el tratamiento de los desafíos asociados a la ciberseguridad, que tienen que ver con la seguridad en el ciberespacio, definiendo los estándares aplicados en este ámbito que cubren falencias que no fueron cubiertas por normas de seguridad creadas anteriormente, ampliando la cobertura en estos temas, toda vez que surgen nuevos y mejorados ataques y aumentan los riesgos que impactan peligrosamente a las compañías. Por otro lado, se gesta una alianza con los involucrados que administran actualmente el entorno, al que normalmente se conoce como el marco de seguridad o CSF (<em>Cybersecurity Framework</em>).
        .cajon.color-acento-contenido.p-5
          p.m-0 <b>"El ciberespacio es un entorno complejo que consta de interacciones entre personas, <em>software</em> y servicios destinados a la distribución mundial de información y comunicación"</b>. Se trata de un contexto muy grande en el que <b>"la colaboración es esencial para garantizar un entorno seguro"</b>, aseguró la ISO al momento de presentar este estándar.

    p Teniendo en cuenta los desafíos a los que actualmente se enfrentan las organizaciones en temas de ciberseguridad, se plantean cuatro temas importantes siguiendo el estándar de la norma: seguridad de la información, seguridad de las redes, seguridad en Internet y protección de infraestructuras críticas para la información.

    p.mb-5 A la vez que se establece un marco de ciberseguridad de cuatro principales áreas que darán un acercamiento a la gestión del riesgo:

    .row.mb-3.mb-lg-5
      .col-sm-6.col-lg-3.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-acento-contenido.p-4
          .row.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img76.svg', alt='')
          h4 Prevención:
          p Consiste en la implementación de procedimientos y controles eficientes que detengan y minimicen los posibles daños que ocasionen situaciones de ciberseguridad.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-right")
        .tarjeta--boton.color-acento-contenido.p-4
          .row.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img77.svg', alt='')
          h4 Protección y detección:
          p Se establecen un conjunto de controles previstos para gestionar la seguridad y el monitoreo de eventos de ciberseguridad, a fin de que se puedan detectar y aplicar medidas de prevención ante este tipo de circunstancias.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-left")
        .tarjeta--boton.color-acento-contenido.p-4
          .row.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img78.svg', alt='')
          h4 Respuesta y comunicación:
          p Se debe preparar para reaccionar ante situaciones relacionadas con la ciberseguridad, realizando acciones que ayuden a minimizar su impacto.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-left")
        .tarjeta--boton.color-acento-contenido.p-4
          .row.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img79.svg', alt='')
          h4 Recuperación y aprendizaje:
          p Es la capacidad para restaurar y recuperar los sistemas informáticos y la información ante eventuales incidentes de ciberseguridad.  Con cada evento se debe mejorar para no incurrir nuevamente en ello.

    p Teniendo en cuenta los cuatro elementos mencionados, es posible implementar una serie de fases que contribuyan de manera organizada a implementar la estandarización, como se presenta a continuación.

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Entender la organización")
            .col-lg-11
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  span Conocer las diferentes áreas y su relación con el ciberespacio.
                li
                  i.fas.fa-angle-right
                  span Entender el flujo de información en los procesos de la organización.
                li
                  i.fas.fa-angle-right
                  span Revisar productos, servicios y el marco de la normatividad de la seguridad en uso.
                li
                  i.fas.fa-angle-right
                  span Recopilar el inventario de la documentación de seguridad.
                li
                  i.fas.fa-angle-right
                  span Establecer el inventario de los activos informáticos.
                li
                  i.fas.fa-angle-right
                  span Conocer los planes y las aplicaciones técnicas implementadas en ciberseguridad.
          .row(titulo="Analizar el riesgo")
            .col-lg-11
              p Realizar una evaluación teniendo en cuenta puntos importantes como activos críticos, amenazas, vulnerabilidades, impacto, el riesgo y cuáles son las responsabilidades.  Importante desarrollar esta tarea en línea con las normativas reconocidas internacionalmente, preparadas para realizar mantenimientos y gestionarse en el tiempo.
          .row(titulo="Plan de acción")
            .col-lg-11
              p Establecer un plan que identifique las prioridades y las acciones a desarrollar con el objetivo de buscar la alineación con la norma, al tiempo que se ajuste con las necesidades propias del negocio. El plan puede incluir diferentes estrategias teniendo en cuenta los distintos niveles de la organización: políticos, identificación de roles, métodos de implementación como procesos afectados y controles tecnológicos.
          .row(titulo="Implementación")
            .col-lg-11
              p Establecer los controles que consideren los niveles de seguridad alcanzados previamente, teniendo en cuenta las políticas y procedimientos de seguridad actuales.
              p Controles adicionales a nivel de aplicación (validación de datos, gestión de sesiones, autenticación, seguridad ante ataques), servidores (actualizaciones, control de parches, configuración segura, monitoreo), usuario final (antivirus, parametrización de seguridad, sistema operativo actualizado) e ingeniería social (planes de capacitación, pruebas periódicas, controles de seguridad, bloqueos).



</template>

<script>
import SlyderF from '../components/SlyderF.vue'
export default {
  name: 'Tema2',
  components: { SlyderF },
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
<style lang="sass">
.slyder-f
  .slyder-f__main
    .horizontal-scroll__wrapper
      padding-top: 4rem
</style>
