<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") La identificación y valoración de productos turísticos, junto con su diseño, <em>marketing</em> y evaluación, son esenciales para lograr calidad y competitividad en el sector. Este proceso incluye actividades clave como la aplicación de principios de sostenibilidad y modelos regenerativos, además de estrategias específicas para estructurar, empaquetar y promocionar el producto. En Colombia, se analizan el ciclo de vida, los atributos y la calidad del producto, incorporando innovación y empatía para crear propuestas de valor diferenciadas. También se consideran aspectos como la capacidad de carga turística y la colaboración entre entidades públicas, privadas y comunitarias, destacando el papel de las Juntas de Acción Comunal en el turismo sostenible y local .

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Estrategias de productos turísticos sostenibles, se describen los elementos esenciales para identificar, diseñar y valorar productos turísticos, incorporando principios de sostenibilidad y turismo regenerativo. Se abordan aspectos de calidad, competitividad y capacidad de carga, destacando la colaboración entre entidades públicas, privadas y comunidades locales para un desarrollo turístico sostenible.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
