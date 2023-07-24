<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="fade-right") Introducción

    p.mb-4(data-aos="fade-right") Mediante la evaluación de la seguridad digital se puede determinar la situación de ciberseguridad al interior de una organización que permita implementar diversos estándares propios de la seguridad informática, aplicando el uso de metodologías para un acercamiento a los potenciales riesgos presentes en Internet.  Por lo anterior, es muy importante elegir de acuerdo con los requerimientos específicos de cada organización los métodos y las metodologías indicados con base al modelo de seguridad que se quiera implementar. Revise el siguiente video de introducción al componente formativo.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/E6k9F_2bQWg" title="Fundamentos para la gestión del riesgo de ciberseguridad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Fundamentos para la gestión del riesgo de ciberseguridad


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
