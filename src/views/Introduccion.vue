<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p El desarrollo de un producto turístico implica identificar y aprovechar los recursos y atractivos de un destino, transformándolos en experiencias que generen valor para los visitantes. Este proceso debe responder a las necesidades de los turistas y estar alineado con las tendencias actuales del mercado. Para lograrlo, es crucial entender el contexto local, los intereses de los viajeros y las oportunidades que ofrece el entorno, tanto en términos culturales como naturales, y estructurarlo como un producto atractivo y viable.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-7.order-lg-1.order-2 
        .cajon-b.color-primario.p-3
          p En este sentido, la aplicación de los principios y objetivos de desarrollo sostenible (ODS) es fundamental. El turismo, como actividad económica, debe contribuir a la conservación del medio ambiente, el bienestar social y el desarrollo económico de las comunidades receptoras. Un producto turístico sostenible busca minimizar los impactos negativos y maximizar los beneficios para todas las partes interesadas, promoviendo la justicia social y la preservación de los recursos para las futuras generaciones.
          p.mb-0 La estructuración y diseño del producto turístico requiere de una planificación detallada que considere aspectos como la oferta de servicios, las actividades propuestas y la integración de elementos innovadores que lo hagan competitivo. Aquí, el <em>marketing</em> juega un papel clave, ya que permite comunicar de manera efectiva la propuesta de valor a los segmentos de mercado adecuados. La comercialización del producto a través de paquetes turísticos facilita la promoción de destinos y experiencias completas, mejorando la accesibilidad y satisfacción del cliente.
      .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        img(src='@/assets/curso/temas/introduccion/img-01.svg', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10
        .cajon.cajon.color-secundario.p-4
          p.mb-0 Finalmente, la evaluación del producto turístico es vital para garantizar su calidad y competitividad. La retroalimentación de los usuarios y el análisis de su desempeño permiten realizar mejoras continuas. Además, las diferentes entidades involucradas en el turismo, como gobiernos, empresas y organizaciones locales, desempeñan un rol esencial en el qué, para qué y cómo del turismo. Cada una debe coordinarse para garantizar un desarrollo armonioso, asegurando que los productos turísticos sean atractivos, sostenibles y beneficiosos tanto para los turistas como para las comunidades locales. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
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
