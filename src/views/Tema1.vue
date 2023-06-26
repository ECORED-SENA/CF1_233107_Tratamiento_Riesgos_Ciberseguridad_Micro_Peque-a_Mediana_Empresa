<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-right") Conceptos y fundamentos asociados a la gestión de la ciberseguridad

    .row.align-items-center.mb-4.mb-lg-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema1/img01.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p Para entrar al mundo de la ciberseguridad, es clave conocer algunos conceptos asociados que permitan entender su funcionamiento, arquitectura, implementación y utilidad.  Manejar estos conceptos permite tener un panorama claro al enfrentar diferentes escenarios, ya que cada organización cuenta con su propia implementación de las Tecnologías de la Información y la Comunicación.
        p A medida que evoluciona la ciencia la dependencia o confianza en los sistemas informáticos sigue aumentando, la tecnología se incorpora cada vez más en todo tipo de organizaciones ya sean privadas o públicas. El uso de nuevas tecnologías y la necesidad de conexión con el mundo exterior trae consigo nuevos desafíos, que obligan a las empresas a pensar en la ciberseguridad como un tema de vital importancia, considerando que:
        .bg_01.p-4.pb-2
          ul.lista-ul--color
            li
              i.fas.fa-check
              strong La información que se maneja dentro de las empresas es el activo más importante.
            li
              i.fas.fa-check
              strong Las organizaciones están sometidas a la ley y esta las obliga a salvaguardar la información de sus usuarios.

    p De manera tal que, los expertos en temas de ciberseguridad son cada día más demandados y tienen mayores posibilidades laborales. Las empresas han entendido que la prevención es fundamental en la protección de sus activos informáticos, logrando así evitar vulnerabilidades que puedan desatar grandes daños en la organización, lo que hace que cada vez más se requiera tener profesionales con estas capacidades.
    p.mb-5 Observe la siguiente figura en un primer acercamiento a la definición de ciberseguridad:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 1.
      span <em>Ciberseguridad</em>

    .row.justify-content-center
      .col-lg-10
        figure(data-aos="fade-down-right")
          img.img-t.m-auto.mb-5(src='@/assets/curso/tema1/img02b.svg', alt='Esta imagen presenta un primer acercamiento a la definición de ciberseguridad.')

      p La ciberseguridad pretende proteger computadoras, dispositivos móviles, sistemas electrónicos, servidores de aplicaciones, base de datos, redes, entre otros, de la posibilidad de amenazas que se conviertan en ataques, afectando los activos informáticos. En ese sentido se hace relevante conocer las arquitecturas de red, los protocolos y cómo funciona el transporte de los datos para poder crear planes, procedimientos y políticas usando una metodología que ayude a mitigar el riesgo y darle garantías a los usuarios y a los sistemas.
      p.mb-5 Avance sobre los siguientes conceptos clave en el abordaje de la ciberseguridad:

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12.col-md-7
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg_02.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img03.png' alt="")
            h4.text-white Seguridad de red
            p.text-white Capacidad para proteger una red de dispositivos informáticos del ataque de intrusos, ya sea planeado intencionalmente o por parte de programas malignos que aprovechan vulnerabilidades.
          .tarjeta.bg_02.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img04.png' alt="")
            h4.text-white Seguridad de aplicaciones
            p.text-white Garantía de que el <em>software</em> y dispositivos instalados en una organización se mantengan libres de amenazas. Las aplicaciones afectadas podrían generar agujeros de vulnerabilidad y dar acceso a datos importantes.
          .tarjeta.bg_02.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img05.png' alt="")
            h4.text-white Seguridad de la información
            p.text-white Se debe garantizar la integridad y protección de los datos, ya sea que se haga de manera local, en el transporte o en la recepción.
          .tarjeta.bg_02.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img06.png' alt="")
            h4.text-white Seguridad operacional
            p.text-white Procedimientos definidos para el manejo y protección de datos. Implica privilegios asignados a usuarios para el acceso a la red y los sistemas (cómo y cuándo pueden almacenar, modificar o compartir información).
          .tarjeta.bg_02.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img07.png' alt="")
            h4.text-white Recuperación de desastres
            p.text-white Capacidad y procedimientos de una organización para responder a un incidente de ciberseguridad que pueda causar detenimiento de las operaciones diarias y/o pérdida de los datos.
          .tarjeta.bg_02.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img08.png' alt="")
            h4.text-white Usuario final
            p.text-white La principal preocupación de las organizaciones, ya que son las personas más difíciles de controlar, pudiendo incumplir con buenas prácticas de seguridad establecidas (ingreso accidental o intencional de virus al sistema).

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.1 Tipos de redes

    p Las redes que se presentan a continuación están relacionadas con la interconexión física que se puede realizar entre computadoras, servidores, dispositivos móviles, impresoras, dispositivos electrónicos, entre otros. Estas redes se clasifican en diferentes tipos de acuerdo con su implementación, dependiendo del tamaño y la cobertura de la red de ordenadores o dispositivos electrónicos vinculados.  Revise en el siguiente video los tipos de redes más importantes.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/sSQWQEna6ow" title="Tipos de redes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Tipos de redes

    p.mb-5 Las organizaciones cuentan con uno o varios tipos de red, las cuales se pueden combinar para cumplir objetivos específicos. Una empresa puede iniciar con una oficina pequeña y una red LAN, pero con el tiempo abrir sedes en diferentes ciudades del país y contratar redes WAN para mayor seguridad, aunque con mayores costos, o utilizar el canal público creando canales virtuales de conexión con menor costo, pero que le implica apostar a esquemas de seguridad eficientes.

    .row.justify-content-center.mb-4(data-aos="fade-down-right")
      .col-lg-3
        figure
          img.img-t.m-auto.img_position(src='@/assets/curso/tema1/img10.svg' alt="")
      .col-lg-8
        .bg_03.p-4.pt-5
          .row.justify-content-center
            .col-lg-10.pt-4
              p Conectarse a una red pública genera desafíos importantes para salvaguardar la información, por lo que se recomienda tomar medidas de protección como:
              ul.lista-ul--color
                li
                  i.fas.fa-check-circle
                  p.m-0.text-bold Instalación de <em>firewall</em>, ya sean físicos o de <em>software</em> como los instalados en las computadoras.
                li
                  i.fas.fa-check-circle
                  p.m-0.text-bold Utilización de <em>router</em> avanzados con capacidad de bloqueos de paquetes sospechosos.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.2 Modelo OSI

    .row.justify-content-center.mb-0.mb-lg-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img12.png' alt="")
      .col-lg-8(data-aos="fade-left")
        p El modelo de interconexión de sistemas abiertos, creado por la Organización Internacional de Normalización (ISO) proporciona a los diversos sistemas de tecnología de la informática estándares para que se comuniquen entre sí.
        p Este modelo se divide en siete capas para realizar las actividades que la red necesita, asociando a cada capa una serie de protocolos, con el propósito de abordar la complejidad que conlleva la comunicación a través de problemas sencillos.
        p Se plantea una estructura jerarquizada en la que cada una de las capas realiza trabajos para la capa que está por encima de ella, devolviendo resultados y solicitando servicios a la capa ubicada en la parte inferior.

    p.mb-5 La siguiente imagen muestra las capas del modelo de interconexión de sistemas abiertos y su correspondiente descripción.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-0.mb-lg-5
      h5 Figura 2.
      span <em>Modelo de referencia de interconexión de sistemas abiertos</em>

    .row.mb-4
      .col-lg-12
        .bg_04.p-4.d-none.d-lg-block
          figure(data-aos="fade-down-right")
            img.img-t.m-auto.d-none.d-lg-block(src='@/assets/curso/tema1/img13b.svg', alt='Esta imagen presenta el Modelo de referencia de interconexión de sistemas abiertos')
    .row.justify-content-center.mb-4
      .col-12.col-md-8
        .bg_05.p-4.d-lg-none.d-md-block
          figure(data-aos="fade-down-right")
            img.img-t.m-auto.d-lg-none.d-md-block(src='@/assets/curso/tema1/img15b.svg', alt='Esta imagen presenta el Modelo de referencia de interconexión de sistemas abiertos')

    p.mb-4 A continuación, profundice en las características de las capas del modelo y el trabajo que realiza cada una de las etapas estudiadas en la anterior imagen.

    .bg_06.p-4.mb-5
      SlyderA(tipo="b")(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-lg-0
            div
              h4 Física
              p En esta primera capa se encuentran los dispositivos físicos encargados de transportar los datos: los cables de red (de cobre para redes LAN o de fibra óptica para el transporte de información a grandes distancias), los <em>router</em> para el direccionamiento de paquetes, los <em>switch</em> que ayudan a la agrupación de varios equipos en una misma red, y en general todos los componentes que de alguna u otra manera se encargan de llevar información de un lado al otro.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img17.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-lg-0
            div
              h4 Vínculo de los datos
              p Realiza la verificación de lo que entrega el medio físico en la búsqueda de errores para que, en caso de encontrarlos, se pueda corregir.  También controla el flujo de datos que se transmiten.
              p Presenta dos subcapas:
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  p.m-0 <b>MAC (<em>Media Access Control</em>).</b>  Conecta varios equipos de cómputo a una red con una dirección física (dirección MAC) que identifica la ubicación del equipo para el envío y la recepción.
                li
                  i.fas.fa-angle-right
                  p.m-0 <b>LLC (<em>Logical Link Control</em>).</b>  Maneja el control de flujo de los datos de la red.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img18.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-lg-0
            div
              h4 Red
              p Garantiza que los datos lleguen a su destino aún sin que el emisor y receptor estén conectados de forma directa.  Esta labor involucra dispositivos electrónicos enrutadores (<em>router</em>, en inglés).  En esta capa se establece el direccionamiento IP tanto de origen como de destino, se priorizan paquetes y la toma de decisiones para dirigirlos por la ruta más eficiente.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img19.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-lg-0
            div
              h4 Transporte
              p Nivel responsable de la confiabilidad del transporte, a través de dos protocolos:
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  p <b>TCP:</b> establece una sesión entre dos ordenadores, garantizando fidelidad con la creación de una secuencia de datos para la entrega. Es un protocolo lento que verifica que la recepción de los paquetes esté completa y solicita el reenvío en caso de faltantes.
                li
                  i.fas.fa-angle-right
                  p <b>UDP:</b> se ofrece sin conexión y sin establecer sesión entre ordenadores.  Es mucho más rápido porque solo entrega información en el menor tiempo posible, sin verificar completitud.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img20.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-lg-0
            div
              h4 Sesión
              p En la capa de sesión la principal responsabilidad es inicializar y terminar la conexión entre dos ordenadores.  Es esta capa la que inicia y sincroniza los equipos y realiza tareas como la de registro del <em>log</em> y algunas funciones de seguridad.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img21.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-lg-0
            div
              h4 Presentación
              p Capa encargada de realizar el tratamiento de los datos: convertir códigos de caracteres, conversión y comprensión de la información.  En caso de requerir el cifrado de los datos al realizar este tratamiento los datos ya estarían listos para ser entregados a la siguiente capa.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img22.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-lg-0
            div
              h4 Aplicación
              p.m-0 Finalmente, la capa 7, último nivel jerarquizado en el modelo OSI.
              p Esta capa interactúa directamente con el usuario final, por ejemplo, la visualización de una página web cuando se hace una petición a una URL mediante el Protocolo HTTPS o el envío de un correo electrónico mediante el protocolo SMTP.  Son varios los protocolos que se activan, dependiendo la tarea que desee realizar el usuario final.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img23.png', alt='Texto que describa la imagen')


    p.mt-4 Para conocer la dirección física de un equipo siga el procedimiento que se detalla en el video:

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/C5BpaaNij8I" title="Dirección física" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Dirección física

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.3 Protocolo TCP/IP

    .row.align-items-center
      .col-lg-8(data-aos="fade-right")
        p Hace referencia a un grupo de protocolos de red que permiten que se realice la transferencia de los datos a través de los diferentes tipos de redes, dispositivos informáticos o de Internet. El protocolo de control de transmisión TCP es el que garantiza que se establezca la conectividad y el intercambio de información entre dos dispositivos y el transporte confiable de los datos. Mientras que el protocolo de Internet IP se encarga de llevar la información a otros equipos en la red, este utiliza identificadores de cuatro octetos separados por un punto decimal, por ejemplo, #[code "192.168.0.1"].
        p Al igual que en el modelo OSI, el modelo TCP/IP (ver figura 3) propone un conjunto de capas jerarquizadas, en la misma dinámica en la que la capa inferior entrega información a la capa superior y así progresivamente se hace el control de los paquetes en cada capa dependiendo de la función que le corresponda. Específicamente se revisarán los protocolos que se encargan de realizar estas tareas en cada uno de esos niveles.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img25.png', alt='')

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 3.
      span <em>Modelo TCP/IP</em>

    .bg_08.p-2.p-lg-5.mb-5
      .row.justify-content-center
        .col-lg-9
          figure(data-aos="fade-down-right")
            img.img-t.m-auto.my-5(src='@/assets/curso/tema1/img27.svg', alt='La imagen presenta cada una de las capas del modelo TCP/IP, las cuales son: capace acceso al medio, capa de internet, capa de transporte y capa de aplicación.')

    p.mb-5 Para cada una de las capas del modelo TCP/IP se establece una serie de protocolos, cada uno con una función específica, que se presentan en la siguiente tabla con su respectiva equivalencia en el modelo OSI.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Tabla 1.
      span <em>Modelo TCP/IP con equivalencia al modelo OSI</em>

    .row.justify-content-center(data-aos="fade-down-right")
      .col-lg-12
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr.bg_color1
                td.h4.text-center(colspan="2") Capa TCP/IP
                td.h4.text-center(colspan="4") Ejemplos de protocolos TCP/IP
                td.h4.text-center(colspan="3") Equivalente de capa OSI
                td.h4.text-center(colspan="3") Ref. OSI Número de capa
            tbody
              tr
                td.text-bold(colspan="2") Aplicación
                td(colspan="4") NFS, NIS, DNS, LDAP, TELNET, FTP, RLOGIN, RSH, RCP, RIP, RDISC, SNMP Y OTROS.
                td.text-center(colspan="3") Aplicación, sesión, presentación
                td.text-center(colspan="3") 5, 6, 7
              tr
                td.text-bold(colspan="2") Transporte
                td(colspan="4") TCP, UDP, SCTP
                td.text-center(colspan="3") Transporte
                td.text-center(colspan="3") 4
              tr
                td.text-bold(colspan="2") Internet
                td(colspan="4") IPv4, IPv6, ARP, ICMP
                td.text-center(colspan="3") Red
                td.text-center(colspan="3") 3
              tr
                td.text-bold(colspan="2") Red física
                td(colspan="4") ETHERNET (IEEE 802.3), TOKEN RING, RS-232, FDDI Y OTROS. PPP, IEEE 802.2
                td.text-center(colspan="3") Física
                td.text-center(colspan="3") 1, 2

    p.mb-5 A continuación se definen algunos de los protocolos más importantes usados en el modelo TCP/IP.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12.col-md-8
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img29.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 Internet <em>Protocol</em>
            p Es el núcleo de todo el modelo. Se utiliza para especificar la dirección IP determinando así, la ruta que tiene que seguir el paquete.
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img30.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 Internet <em>Control Message Protocol</em>
            p Provee mensajes de diagnóstico y notificación de errores cuando fallan los datagramas IP.
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img31.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 <em>Address Resolution Protocol</em>
            p Ayuda al protocolo IP a guiar los datos, resolviendo la dirección de <em>hardware</em> o MAC.
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img32.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 <em>Reverse Address Resolution Protocol</em>
            p Lo mismo que el ARP, pero al revés, es decir, dada la MAC devuelve la IP.
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img33.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 <em>Network Address Translation</em>
            p Convierte la dirección IP privada a una pública.
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img34.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 <em>Routing Information Protocol</em>
            p Utilizado por los <em>router</em> para intercambiar información de las distintas redes y encaminar con mayor eficiencia los paquetes.
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img35.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 Capa de transporte
            p Garantiza que los paquetes lleguen sin errores y en secuencia, uno después de otro.
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img36.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 <em>User Datagram Protocol</em>
            p Implementa una transmisión no fiable (no está exenta de errores), usada en aplicaciones de <em>streaming</em> y con actualizaciones en tiempo real.
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img37.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 <em>Transmission Control Protocol</em>
            p Establece una transmisión fiable de datos. Incluye detección de errores y formas de recuperar los datos perdidos.
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img38.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 Capa de aplicación
            p Proporciona servicios de red que conectan la interfaz con el sistema operativo para que el usuario interactúe con la máquina (enviar correos, descargar información, etc.)
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img39.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 <em>File Transfer Protocol</em>
            p Transferencia interactiva de archivos.
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img40.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 <em>Telnet</em>
            p Iniciación de la sesión de forma remota en máquinas de la red.
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img41.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 <em>Hypertext Transfer Protocol</em>
            p Transferir archivos que forman las páginas web de la <em>World Wide Web</em>.
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img42.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 <em>Simple Mail Transfer Protocol</em>
            p Transferencia de mensajes de correo electrónico y archivos adjuntos.
          .tarjeta.bg_09.p-4.pt-5
            .row.align-items-center
              .col-auto.mb-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img43.svg' alt="")
              .col-lg-8.col-xl-7.col-xxl-8
                h4 <em>Domain Name System</em>
            p Resolución del nombre de un <em>host</em> a la dirección IP.

    p.mb-5 Ahora, observe el siguiente video sobre el modelo TCP/IP, haciendo uso de un ejemplo:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/HhgkV7YDhXY" title="Modelo TCP-IP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Modelo TCP - IP

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.4 IPv4 e IPv6

    .row.justify-content-center.mb-0.mb-lg-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img44.png' alt="")
      .col-lg-8(data-aos="fade-left")
        p En la actualidad casi todo dispositivo que se conecta a la red lo realiza mediante el protocolo IP versión cuatro (IPv4).  La estructura de este protocolo está formada por hasta 12 caracteres divididos por un punto en cuatro segmentos de hasta 3 caracteres, por ejemplo, la dirección IP de Google es 64.233.177.113, esta dirección es posible obtenerla gracias al sistema de nombres de dominios (DNS), que traduce un nombre de dominio a su respectiva dirección IP.  Estas direcciones IP son asignadas públicamente y permiten el acceso desde cualquier lugar del mundo.


    p Para obtener la dirección pública de un sitio siga el procedimiento que se detalla en el video:

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/eU9I0xE_5Yg" title="IP Pública" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. IP Pública

    p Por otro lado, cada máquina privada debe tener una dirección IP propia que le permita identificarse de manera única dentro de una red local. Esto garantiza que cada ordenador sea reconocido y que los paquetes puedan llegar a él. De esta manera, no pueden existir direcciones IP con la misma numeración.

    p Para obtener la dirección IP privada de un sitio siga el procedimiento que se detalla en el video:

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/KxpguIjDXvs" title="IP Privada" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. IP Privada

    p Como se aprecia en el video esa dirección IP es asignada mediante adaptador físico inalámbrico #[em WiFi].  En caso de estar conectado por medio del cable, el adaptador físico sería el <em>ethernet</em>.

    p El #[strong direccionamiento IP de una organización es supremamente importante, toda vez que ayuda a identificar cuáles serán las áreas en las que se deben aplicar permisos o restricciones]. Por ejemplo, el bloqueo o acceso controlado de las direcciones IP de los servidores de datos. También son útiles para realizar el monitoreo de la red e identificar posibles fallas de seguridad, entre otras funcionalidades.

    .row.justify-content-center.align-items-start.mb-0.mb-lg-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p En cuanto al protocolo de Internet versión seis (IPv6), una mejora de su antecesor, el protocolo IP versión cuatro, pretende mejorar la escasez de direcciones que se presentan con la versión anterior. En Colombia se promueve su implementación desde 2020 y su adopción es importante ya que contribuye con la transformación digital. Incrementar el número de direcciones IP aumentará la cantidad de dispositivos electrónicos conectados a la red, abriendo la posibilidad a nuevos servicios, aplicaciones y plataformas, también beneficiará el desarrollo de ciudades inteligentes, la implementación de Internet de las cosas, el uso de <em>blockchain</em> y redes de sensores, entre muchas más aplicaciones.
        .bg_10.p-4
          p.m-0 El gran número de direcciones que se pueden albergar radica en que se pasa de una estructura de 32 <em>bits</em> a una de 128 <em>bits</em>, cuatro veces superior a la versión número cuatro. <b>El formato de texto de la dirección IPv6 es xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx, donde cada x corresponde a un dígito hexadecimal que representa 4 <em>bits</em></b>, que si bien tiene una estructura más difícil de entender, generará múltiples beneficios.
      .col-lg-4.mb-4.mb-lg-3(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img45.png' alt="")


    p Para obtener la dirección IP privada de un sitio siga el procedimiento que se detalla en el video:

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/beKW7owSgdg" title="IPv6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. IPv6

    p.mb-5 La siguiente tabla diferencia los dos protocolos en algunas de sus características principales:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Tabla 2.
      span <em>Diferencias entre el protocolo IPv4 e IPv6</em>

    .row.justify-content-center(data-aos="fade-down-right")
      .col-lg-8.col-xl-10.col-xxl-8
        .tabla-a.color-acento-contenido.mb-5
          table.m_tabla2
            thead
              tr.bg_color1
                td.h4.text-center(colspan="3") Característica
                td.h4.text-center(colspan="2") IPv4
                td.h4.text-center(colspan="3") IPv6
            tbody
              tr
                td.text-bold(colspan="3") Longitud de la dirección en <em>bits</em>
                td.text-center(colspan="2") 32 <em>bits</em>
                td.text-center(colspan="3") 128 <em>bits</em>
              tr
                td.text-bold(colspan="3") Representación de las direcciones
                td.text-center(colspan="2") Decimal
                td.text-center(colspan="3") Hexadecimal
              tr
                td.text-bold(colspan="3") Separador de octetos
                td.text-center(colspan="2") Punto (.)
                td.text-center(colspan="3") Dos puntos (:)
              tr
                td.text-bold(colspan="3") Límite de IP
                td.text-center(colspan="2") 4.000 millones
                td.text-center(colspan="3") 340 sextillones
              tr
                td.text-bold(colspan="3") Autoconfiguración
                td.text-center(colspan="2") No. Solo configuración manual y a través de DHCP
                td.text-center(colspan="3") Sí. Configuración automática y renumeración de direcciones
              tr
                td.text-bold(colspan="3") Cifrado
                td.text-center(colspan="2") No compatible
                td.text-center(colspan="3") Compatible a nivel protocolo
              tr
                td.text-bold(colspan="3") Ejemplo IP
                td.text-center(colspan="2") 192.168.20.28
                td.text-center(colspan="3") 2800:484:2085:50b:5f9:60d:25aa:1369

    .bg_11.p-4.pt-5.mb-5
      p.mb-5 La adopción de este protocolo tiene múltiples ventajas dentro de las que destacan:
      .row.justify-content-center.align-items-center
        .col-lg-3(data-aos="fade-right")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img47.svg' alt="")
        .col-lg-8(data-aos="fade-left")
          ul.lista-ul--color
            li
              i.fas.fa-circle
              span El número de direcciones IP será casi ilimitado.
            li
              i.fas.fa-circle
              span Mayor seguridad con el protocolo e IPsec.
            li
              i.fas.fa-circle
              span Mejores rendimientos en la configuración automática con respecto al DHCP utilizado en la anterior versión, está en la capacidad de dar soporte nativo para los dispositivos móviles.
            li
              i.fas.fa-circle
              span Mayor eficiencia al momento de simplificar el encabezado de los paquetes o al tener que hacer un enrutamiento más jerárquico.

    p La adopción ha sido un poco lenta, pero ya se vienen preparando los diferentes dispositivos electrónicos para que se dé el cambio.

    Separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.5 Enrutamiento IP

    .row.justify-content-center.align-items-center.mb-0.mb-lg-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img48.png' alt="")
      .col-lg-8(data-aos="fade-left")
        p El enrutamiento que realizan las redes de datos consiste en la selección óptima de una ruta o de una o múltiples redes. En general, los conceptos de enrutamiento son aplicables a cualquier tipo de red, que pueden ir desde redes telefónicas hasta la analogía con el transporte público.  En cuanto a la red de Internet se realiza un enrutamiento teniendo en cuenta que los paquetes o datos del protocolo de Internet IP viajan desde su origen hasta su objetivo final, la selección de estas rutas es posible gracias a dispositivos de <em>hardware</em> que comúnmente conocemos como <em>router</em> o enrutadores.
        p Imagine tratando de llegar a su lugar de trabajo identificando posibles rutas.  Es la ruta más corta en cuanto a recorrido, pero que normalmente presenta trancones y tráfico lento, y la ruta rápida en la que, aunque el recorrido es mucho mayor, avanza a mayor velocidad.  Tal como se muestra en la figura 4 los <em>router</em> deben tomar ese tipo de decisiones, determinando cuál camino será el más eficiente para llegar al destino y realizando el monitoreo permanente de la red.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 4.
      span <em>Enrutamiento IP</em>


    .bg_12.p-4.p-lg-5.mb-4
      .row.justify-content-center
        .col-lg-12
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema1/img50.png', alt='La imagen presenta el enrutamiento IP desde el cliente hasta el servidor.')

    .row.mb-5
      .col-lg-8(data-aos="fade-right")
        p Los enrutadores deben guardar y actualizar periódicamente la tabla de enrutamiento, el servicio de enrutamiento de cada dispositivo se actualiza con las rutas que logre identificar.  Estas tablas, leídas antes del reenvío de paquetes a la red del área local se encargan de realizar la identificación de la dirección IP de las redes conocidas por el sistema, que incluye la red del área local que está predeterminada. También enumeran las diferentes direcciones IP de un sistema de portal para las redes conocidas (los portales son sistemas que están preparados para recibir datos de salida y hacer el reenvío más allá de la red del área local).
        p El administrador de la red es el encargado de la configuración de rutas estáticas que se realizan manualmente dado que no pueden actualizarse automáticamente, como sí lo haría el protocolo de <em>routing</em> dinámico.  En caso de cambiar la topología de la red se debe configurar nuevamente de forma manual.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img51.svg', alt='')

    p.mb-5 El enrutamiento estático ofrece tanto ventajas como desventajas comparado con el <em>router</em> dinámico.

    .row.align-items-stretch.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .bg_13.p-4.px-5.h-100
          .row
            .col-auto.mb-4
              figure
                img.img-t.m-auto.img_animation1(src='@/assets/curso/tema1/img52.svg', alt='')
          .row
            .col-lg-10.mb-4.text-white
              p.m-0 Dentro de sus principales #[strong ventajas] es posible mencionar:
          .row
            .col-lg-12
              ul.lista-ul--color
                li
                  i.fas.fa-check-circle(style="color:#2FF980")
                  span.text-white Mejora la seguridad, ya que estas no se anuncian por toda la red.
                li
                  i.fas.fa-check-circle(style="color:#2FF980")
                  span.text-white La ruta que utiliza un camino estático para compartir la información es conocida.
                li
                  i.fas.fa-check-circle(style="color:#2FF980")
                  span.text-white El consumo del ancho de banda es mucho menor que los protocolos utilizados para el #[em routing] dinámico, ya que no es necesario utilizar ciclos de CPU para el cálculo y la comunicación de rutas.

      .col-lg-6(data-aos="fade-left")
        .bg_13.p-4.px-5.h-100
          .row
            .col-auto.mb-4
              figure
                img.img-t.m-auto.img_animation1(src='@/assets/curso/tema1/img53.svg', alt='')
          .row
            .col-lg-10.mb-4.text-white
              p.m-0 En cuanto a sus #[strong desventajas] se señala que:
          .row
            .col-lg-12
              ul.lista-ul--color
                li
                  i.fas.fa-times-circle(style="color:#2FF980")
                  span.text-white Demanda una configuración de inicio y un mantenimiento que ocupa mucho tiempo.
                li
                  i.fas.fa-times-circle(style="color:#2FF980")
                  span.text-white Cuando se configuran redes de gran tamaño, las configuraciones son susceptibles de errores.
                li
                  i.fas.fa-times-circle(style="color:#2FF980")
                  span.text-white Se necesita un administrador permanente que realice los cambios, cuando la información de la ruta cambie.
                li
                  i.fas.fa-times-circle(style="color:#2FF980")
                  span.text-white Es necesario conocer toda la red para que la implementación se haga de manera correcta.

    p Los protocolos de <em>routing</em> dinámico están desarrollados para que el intercambio de información de <em>routing</em> entre los <em>router</em> sea más fácil. Estos protocolos conforman una serie de procesos, algoritmos y mensajes utilizados para permitir enviar y recibir información del <em>routing</em>, con el objetivo de llenar las tablas de enrutamiento seleccionando los caminos más eficientes.
    p.mb-5 Observe en la siguiente figura los principales objetivos y componentes de los protocolos de <em>routing</em>.


    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 5.
      span <em>Protocolos de routing, objetivos y componentes</em>

    .row.mb-5(data-aos="fade-down-right")
      .col-lg-12
        .bg_14.p-4
          .row.justify-content-evenly
            .col-lg-5
              h4.mb-4 Objetivos
              .bg_15.p-4.mb-3
                .row.align-items-center
                  .col-auto
                    figure
                      img.img-t.m-auto(src='@/assets/curso/tema1/img55.svg', alt='')
                  .col-lg-9
                    p.m-0.text-bold Descubrimiento de redes remotas.
              .bg_15.p-4.mb-3
                .row.align-items-center
                  .col-auto
                    figure
                      img.img-t.m-auto(src='@/assets/curso/tema1/img56.svg', alt='')
                  .col-lg-9
                    p.m-0.text-bold Actualización permanentemente de la información del <em>routing</em>.
              .bg_15.p-4.mb-3
                .row.align-items-center
                  .col-auto
                    figure
                      img.img-t.m-auto(src='@/assets/curso/tema1/img57.svg', alt='')
                  .col-lg-9
                    p.m-0.text-bold Selección eficiente del mejor camino hacia redes destino.
              .bg_15.p-4.mb-3
                .row.align-items-center
                  .col-auto
                    figure
                      img.img-t.m-auto(src='@/assets/curso/tema1/img58.svg', alt='')
                  .col-lg-9
                    p.m-0.text-bold En caso de fallas en la ruta establecida, descubrimiento de nuevos caminos.
            .col-auto
              .verticalLine.d-none.d-lg-block
              .b_bottom1.d-lg-none.d-md-block
            .col-lg-5
              h4.mb-4 Componentes
              .bg_15.p-4.mb-4
                .row.align-items-center
                  .col-auto
                    figure
                      img.img-t.m-auto(src='@/assets/curso/tema1/img59.svg', alt='')
                  .col-lg-9
                    p.m-0 <b>Estructura de datos.</b> Utilizan para su almacenamiento y operación base de datos o tablas guardadas en la memoria RAM.
              .bg_15.p-4.mb-4
                .row.align-items-center
                  .col-auto
                    figure
                      img.img-t.m-auto(src='@/assets/curso/tema1/img60.svg', alt='')
                  .col-lg-9
                    p.m-0 <b>Mensajes del protocolo de <em>routing</em></b>. Para descubrir <em>router</em> vecinos utilizan una serie de mensajes para intercambiar información del <em>routing</em> y realizar tareas como descubrimiento de red y almacenamiento de información.
              .bg_15.p-4.mb-4
                .row.align-items-center
                  .col-auto
                    figure
                      img.img-t.m-auto(src='@/assets/curso/tema1/img61.svg', alt='')
                  .col-lg-9
                    p.m-0 <b>Algoritmos</b>. Facilitan información en la tarea de encontrar los mejores caminos hacia una ruta destino.

    p.mb-5 Los protocolos de <em>routing</em> establecerán el mejor camino hacia la red destino, posteriormente esa ruta o camino se dispone en la tabla de <em>routing</em> y si no existe otra ruta con una distancia administrativa mucho menor, se instalará en la tabla de <em>routing</em>.

    .row.justify-content-center.mb-4
      .col-lg-3(data-aos="fade-right")
        figure
          img.img-t.m-auto.img_position(src='@/assets/curso/tema1/img63.svg' alt="")
      .col-lg-8(data-aos="fade-left")
        .bg_03.p-4.pt-5
          .row.justify-content-center
            .col-lg-10.pt-4
              p Las <b>rutas estáticas son eficientes para redes pequeñas</b> en las que solo se tiene una ruta a la red externa, ofrecen también un mayor nivel de seguridad en redes un poco más grandes para el tráfico específico o en caso de enlazarse con diferentes redes que necesiten más control.
              p La implementación de una técnica u otra dependerá de cada organización y puede utilizarse de manera independiente o de forma combinada.

    Separador

    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.6 Arquitecturas <em>Cloud y On Premise</em>

    .row.justify-content-center.mb-0.mb-lg-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img64.png' alt="")
      .col-lg-8(data-aos="fade-left")
        p Se inicia definiendo el término <em><b>On Premise</b></em> que hace referencia a la implementación de una infraestructura tecnológica que puede incluir servidores de aplicaciones, bases de datos, correo electrónico, instalación de <em>software</em>, entre otros. Este tipo de arquitecturas requieren una infraestructura compleja en la que se debe pensar en servidores de respaldo, energía de respaldo, copias de seguridad y un equipo especializado para el mantenimiento y la administración.
        p Las arquitecturas <em>On Premise</em> siguen siendo comunes en las empresas, ya que existen muchos <em>software</em> que fueron desarrollados pensando en este tipo de despliegues, en el que no era necesario tener una conexión a Internet para que el <em>software</em> funcionará correctamente.

    p.mb-4 El hecho de que las implementaciones estén pensadas solamente para funcionar dentro de la empresa genera inconvenientes como:

    .row.mb-4.align-items-center
      .col-auto.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img65.svg' alt="")
      .col-lg-9(data-aos="fade-left")
        p.mb-4.mt-2 <i class="fas fa-check-circle"></i> Manipulación indebida y daños por parte de personal no calificado, y el contratarlo implica mayores costos para la organización.
        p <i class="fas fa-check-circle"></i> El acceso a la información que solo es posible directamente desde las oficinas.

    p En cuanto a las arquitecturas tipo <em>Cloud</em> y gracias a la evolución de Internet hoy se puede contar con implementaciones que inicialmente se pensaron para trabajar de manera local y migrar a arquitecturas de tipo nube, que combinan varios componentes tecnológicos que gracias a la tecnología denominada virtualización se agrupan y hacen posible compartirlos a través de la red.
    p.mb-5 Dentro de los componentes que incluye la arquitectura de la nube figuran los siguientes:

    .row.mb-4.mb-md-0.mb-lg-5(data-aos="fade-left")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img66.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-lg-4.p-xl-3
              img.img-t.m-auto.mb-4(src='@/assets/curso/tema1/img70.svg' alt="")
              h4.text-center Plataforma <em>front-end</em>
              p.text-center Herramienta utilizada por el cliente o el dispositivo para acceder a la nube.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img67.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-lg-4.p-xl-3
              img.img-t.m-auto.mb-4(src='@/assets/curso/tema1/img70.svg' alt="")
              h4.text-center Plataforma <em>back-end</em>
              p.text-center Tiene que ver con el despliegue de servidores y el almacenamiento de información.

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img68.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-lg-4.p-xl-3
              img.img-t.m-auto.mb-4(src='@/assets/curso/tema1/img70.svg' alt="")
              h4.text-center Modelo de implementación basado en la nube
              p.text-center Pueden ser implementaciones completamente en la nube, soluciones híbridas o de nube privada.

      .col-sm-6.col-xl-3.mb-md-5.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img69.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-lg-4.p-xl-3
              img.img-t.m-auto.mb-4(src='@/assets/curso/tema1/img70.svg' alt="")
              h4.text-center Red
              p.text-center Conexión a través de los diferentes tipos de red.

    p Al unir estas tecnologías en una arquitectura tecnológica informática tipo nube se pueden desplegar múltiples aplicaciones, brindando a sus usuarios todo el potencial y capacidad de aprovechamiento.
    p.mb-4 El siguiente video presenta las principales ventajas, posibilidades de la arquitectura y servicios en la nube, observe con atención:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ftIakHaCcxA" title="Arquitectura y servicios en la nube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Arquitectura y servicios en la nube

    .row.align-items-center.mb-5
      .col-auto
        img.m-auto(src='@/assets/curso/tema1/img71.svg' alt="" style="max-width: 77px")
      .col
        p.m-0 Ya sea que se enfrente a una arquitectura de implementación local, una arquitectura en la nube o un despliegue híbrido, siempre se deberá tener en cuenta una metodología para la implementación de políticas de ciberseguridad, entendiendo las características propias de cada una de las arquitecturas. Se puede tener la mejor infraestructura, pero sin procedimientos, permisos y restricciones claramente definidos a través de una buena metodología, se podrían enfrentar serios problemas en la integridad de la información.

    p.mb-4 Revise ahora algunos elementos clave a considerar en cuanto a costos y seguridad para la implementación de  arquitecturas tecnológicas:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0AO0cUe3CCg" title="Implementación de arquitecturas tecnológicas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Implementación de arquitecturas tecnológicas

    Separador

    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.7 Vulnerabilidad, amenaza y riesgo

    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img72.png' alt="")
      .col-lg-8(data-aos="fade-left")
        p Hoy en día, la seguridad de los activos informáticos es prioritaria para todas las empresas, ya que cuando los sistemas son atacados, pueden sufrir consecuencias lamentables: pérdida de información, suspensión del servicio, mala imagen ante los clientes e incluso el pago de sanciones económicas por no proteger correctamente la información.
        p La ciberseguridad, entonces, se convierte en una necesidad prioritaria para aquellas empresas que quieran obtener en el sector donde operan las garantías para blindar sus activos informáticos y por supuesto, la información.
        p En ciberseguridad se habla de tres conceptos importantes: amenazas, vulnerabilidades y riesgos, términos que para la mayoría de las personas no son del todo claros y suelen presentar confusiones.

    p.mb-5 Observe el pronunciamiento que al respecto hace la ley:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 6.
      span <em>Riesgo, amenaza y vulnerabilidad</em>

    .bg_18.px-4.mb-5.d-none.d-lg-block
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-4
          .bg_19.p-4
            h3.m-0.text-center.text-white Ley 1523 de 2012
      .row.justify-content-around.mb-4
        .col-lg-3
          .tarjeta-avatar
            img.img46.m-auto(src='@/assets/curso/tema1/img74.svg'  alt="")
            .bg_20.p-4
              h4.m-0.text-center.text-white Riesgo
        .col-lg-3
          .tarjeta-avatar
            img.img46.m-auto(src='@/assets/curso/tema1/img75.svg'  alt="")
            .bg_20.p-4
              h4.m-0.text-center.text-white Amenaza
        .col-lg-3
          .tarjeta-avatar
            img.img46.m-auto(src='@/assets/curso/tema1/img76.svg'  alt="")
            .bg_20.p-4
              h4.m-0.text-center.text-white Vulnerabilidad
      .row.justify-content-around.mb-4
        .col-lg-4
          .bg_21.p-4.mb-4
            p.m-0.text-center Daño o pérdida potencial por  eventos físicos peligrosos (natural, socio-natural, tecnológico, biosanitario, humano)
          .bg_21.p-4.mb-4
            p.m-0.text-center Determinado por la vulnerabilidad de los elementos expuestos.
          .bg_21.p-4
            p.m-0.text-center El riesgo de desastres se deriva de la combinación de la amenaza y la vulnerabilidad.
        .col-lg-4
          .bg_21.p-4.mb-4
            p.m-0.text-center Peligro latente de que un evento físico de origen natural o causado accidentalmente por la acción humana se presente.
          .bg_21.p-4
            p.m-0.text-center Puede causar pérdida de vidas, impacto en la salud, daños en bienes, infraestructura, medios de sustento, prestación de servicios y recursos ambientales.
        .col-lg-4
          .bg_21.p-4
            p.m-0.text-center Predisposición a sufrir pérdidas o daños de los seres humanos y sus medios de subsistencia, y sistemas físicos, sociales, económicos y de apoyo tras ser afectados por eventos físicos peligrosos.

    .bg_18.px-4.mb-5.d-lg-none.d-md-block
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-4
          .bg_19.p-4
            h3.m-0.text-center.text-white Ley 1523 de 2012
      .row.justify-content-around.mb-4
        .col-lg-3
          .tarjeta-avatar
            img.img46.m-auto(src='@/assets/curso/tema1/img74.svg'  alt="")
            .bg_20.p-4.mb-4
              h4.m-0.text-center.text-white Riesgo
        .row.justify-content-around.mb-4
          .col-lg-4
            .bg_21.p-4.mb-4
              p.m-0.text-center Daño o pérdida potencial por  eventos físicos peligrosos (natural, socio-natural, tecnológico, biosanitario, humano).
            .bg_21.p-4.mb-4
              p.m-0.text-center Determinado por la vulnerabilidad de los elementos expuestos.
            .bg_21.p-4
              p.m-0.text-center El riesgo de desastres se deriva de la combinación de la amenaza y la vulnerabilidad.
      .row.justify-content-around.mb-4
        .col-lg-3
          .tarjeta-avatar
            img.img46.m-auto(src='@/assets/curso/tema1/img75.svg'  alt="")
            .bg_20.p-4.mb-4
              h4.m-0.text-center.text-white Amenaza
        .row.justify-content-around.mb-4
          .col-lg-4
            .bg_21.p-4.mb-4
              p.m-0.text-center Peligro latente de que un evento físico de origen natural o causado accidentalmente por la acción humana se presente.
            .bg_21.p-4
              p.m-0.text-center Puede causar pérdida de vidas, impacto en la salud, daños en bienes, infraestructura, medios de sustento, prestación de servicios y recursos ambientales.
      .row.justify-content-around.mb-4
        .col-lg-3
          .tarjeta-avatar
            img.img46.m-auto(src='@/assets/curso/tema1/img76.svg'  alt="")
            .bg_20.p-4.mb-4
              h4.m-0.text-center.text-white Vulnerabilidad
        .row.justify-content-around.mb-4
          .col-lg-4
            .bg_21.p-4
              p.m-0.text-center Predisposición a sufrir pérdidas o daños de los seres humanos y sus medios de subsistencia, y sistemas físicos, sociales, económicos y de apoyo tras ser afectados por eventos físicos peligrosos.

    .row.align-items-center.mb-5.pt-5
      .col-lg-8.order-last.order-lg-first(data-aos="fade-right")
        p En sistemas informáticos, la <b>vulnerabilidad</b> se entiende como la incapacidad de un sistema para protegerse permitiendo ser atacado y recibiendo daño. Estas debilidades en los sistemas son ocasionadas normalmente por no contar con una eficiente protección ante amenazas externas, el no realizar actualizaciones periódicas, posibles fallos en la programación, entre otras causas.
        p A estas vulnerabilidades se les denomina agujeros de seguridad y aunque tienen la ventaja de que una vez descubierta la falla, se pueden solucionar, también dejan los datos y sistemas de una empresa en riesgo, comprometiendo la integridad, privacidad y disponibilidad de la información.  Los huecos de seguridad exponen los sistemas a diversas amenazas que aumentan el riesgo de que se produzcan ataques en cualquier momento, enfrentando a las empresas a complejas situaciones.
      .col-lg-4.mb-4.mb-lg-0.order-first.order-lg-last(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img77.png' alt="")

    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img78.svg' alt="")
      .col-lg-9(data-aos="fade-right")
        p Uno de los objetivos principales de la ciberseguridad consiste en lograr la identificación de las debilidades que puedan existir, aplicando los correctivos necesarios para que desaparezcan.
        p Las <b>amenazas</b> informáticas hacen referencia a eventos o situaciones de seguridad que pueden afectar un sistema en estado de vulnerabilidad y sufrir daños. Los sistemas informáticos regularmente están expuestos a amenazas que vienen de ataques externos como la denegación del servicio, inyecciones SQL, <em>malware, spyware,</em> crimen organizado, entre otros. Vea en qué consisten a través del siguiente video:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/x56FT_OVARQ" title="Ataques de seguridad en la red" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Ataques de seguridad en la red

    p Las amenazas pueden provocar una vulnerabilidad, ya sea de manera intencional o accidentalmente y robar, dañar o eliminar un activo.
    p.mb-5 Las siguientes son consideradas las amenazas más comunes a las que se enfrenta la infraestructura IT:

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12.col-md-8
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg_23.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img79.png' alt="")
            h4.text-white Código malicioso
            p.text-white Ataques tipo <em>malware</em> cuyo objetivo es robar datos sensibles de dispositivos y servidores, como información bancaria.  Los ataques <em>ransomware</em> constituyen una de las amenazas de mayor preocupación para los sistemas informáticos empresariales.
          .tarjeta.bg_23.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img80.png' alt="")
            h4.text-white Amenazas persistentes avanzadas
            p.text-white Conocidas como APT, estos ataques se coordinan y dirigen hacia una empresa con el objetivo de robar su información, son muy difíciles de detectar ya que utilizan como estrategia la ingeniería social.
          .tarjeta.bg_23.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img81.png' alt="")
            h4.text-white Denegación de servicio
            p.text-white Las amenazas DDoS vulneran los servidores enviando un gran volumen de peticiones de modo que estos no puedan responderlas y el servicio termine por colapsar.
          .tarjeta.bg_23.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img82.png' alt="")
            h4.text-white Robo de identidad o <em>phishing</em>
            p.text-white Importante amenaza que consiste en engañar al usuario para que facilite involuntariamente sus datos de acceso a alguien desconocido, para posteriormente usarlos de forma fraudulenta.
          .tarjeta.bg_23.p-4
            figure.mb-5
              img.img-t.m-auto(src='@/assets/curso/tema1/img83.png' alt="")
            h4.text-white Negligencia
            p.text-white Las equivocaciones humanas y el hacer caso omiso a las políticas y normativas de seguridad que la empresa establece, colocan en riesgo latente los sistemas e información de la compañía.

    p.mb-5 El término riesgo en ciberseguridad tiene que ver con las amenazas y las vulnerabilidades que pueden afectar parcial o totalmente los activos informáticos, dejando como consecuencia daños importantes en la información.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 7.
      span <em>Representación del riesgo</em>

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img84.svg' alt="La imagen nos presenta cómo el riesgo puede afectar el sistema de información a través de la amenaza o la vulnerabilidad.")


    p.mb-4 El riesgo se determina, entonces, con la alineación de las amenazas, una vulnerabilidad y el dispositivo o sistema informático, por ejemplo, un ordenador que no cuente con protecciones mínimas como antivirus o un sistema operativo actualizado es un equipo que tiene vulnerabilidades, está expuesto a amenazas como <em>malware</em> que de llevarse a cabo podría instalar virus que encripten información y cobren luego por devolverla.  Si además este equipo presenta la vulnerabilidad de no contar con usuario y contraseña para el ingreso, está amenazado por cualquier empleado de la organización que pueda extraer información importante como, por ejemplo, de tipo financiero.

    .row.justify-content-center
      .col-lg-7.col-xl-8.col-xxl-7(data-aos="fade-left")
        .row
          .col-lg-3
            figure
              img.img-t.m-auto.img_position(src='@/assets/curso/tema1/img85.svg' alt="")
          .col-lg-8.col-xl-9.col-xxl-8
            .bg_22.p-5.ps-lg-2.pt-3.pb-3
              .row.justify-content-center
                .col-lg-9.col-xl-8.col-xxl-9
                  p.mb-0 #[br]Las amenazas siempre van a existir, y en cuanto a las vulnerabilidades lo que se debe hacer es minimizarlas al máximo. Llámese sistema de información, dispositivos de red o el usuario final, si se evita la alineación de estos elementos, la probabilidad del riesgo disminuye.


</template>

<script>
import SlyderF from '../components/SlyderF.vue'
export default {
  name: 'Tema1',
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
