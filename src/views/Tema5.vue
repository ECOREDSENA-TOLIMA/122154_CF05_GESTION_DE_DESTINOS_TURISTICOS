<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 La competitividad en el producto turístico desde las diferentes entidades

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.col-md-10
        .row.justify-content-center.align-items-center
          .col-lg-6.col-12.order-lg-1.order-2
            p.mb-3 La competitividad del turismo se potencia cuando estos tres actores trabajan de manera conjunta. La colaboración público-privada permite desarrollar proyectos de gran envergadura, mientras que la integración de las comunidades asegura que el desarrollo turístico respete las características locales y sea sostenible. Este enfoque integrado no solo mejora la percepción del destino entre los turistas, sino que también fortalece la economía local y promueve un desarrollo equilibrado, posicionando al turismo como una herramienta clave para el progreso social y económico en Colombia.

          .col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/img-01.svg', alt='Imagen decorativa')

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1. Entidades públicas

    p.mb-5 Las instituciones gubernamentales son fundamentales en la creación de un entorno regulado y propicio para el desarrollo turístico. Su influencia abarca:

    .row.justify-content-center.mb-3(data-aos="zoom-in")
      .col-lg-3.col-12.mb-3.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema5/img-02.svg', alt='Imagen decorativa')
      .col-lg-9.col-12.mb-3
        TabsA.color-acento-botones.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones--borde.p-4(titulo="Planificación estratégica")
            p Diseñan planes de desarrollo turístico que identifican fortalezas y debilidades de los destinos, alineando los recursos con objetivos sostenibles y competitivos. En Colombia, planes como el Plan Sectorial de Turismo son ejemplos claros de esta acción.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Regulación y normatividad")
            p Garantizan el cumplimiento de estándares de calidad, seguridad y sostenibilidad mediante normativas claras que beneficien tanto a los turistas como a las comunidades locales.
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fomento a la conectividad")
            p Impulsan la construcción de carreteras, aeropuertos y vías de acceso, mejorando la conectividad interna y externa del destino, lo que incrementa su atractivo.
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde

          .tarjeta.color-acento-botones--borde.p-4(titulo="Promoción de alianzas estratégicas")
            p Facilitan la coordinación entre diferentes actores, fomentando redes de colaboración para el desarrollo turístico integral.
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde

          .tarjeta.color-acento-botones--borde.p-4(titulo="Incentivos económicos")
            p Proveen subsidios, préstamos o beneficios fiscales para proyectos que promuevan el turismo responsable y sostenible.
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-primario.p-4
          p.mb-0 #[b Ejemplo:] en Colombia, Cartagena de Indias es un ejemplo claro de cómo las entidades públicas fortalecen la competitividad turística. Corpoturismo y el Ministerio de Comercio, Industria y Turismo han impulsado el Plan Maestro de Turismo, que combina la conservación del patrimonio histórico con mejoras en infraestructura, como la modernización del Aeropuerto Internacional Rafael Núñez. Además, programas como “Cartagena Sostenible” promueven prácticas responsables para preservar el entorno.

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2. Entidades privadas

    p.mb-5 El sector privado actúa como el motor que impulsa la competitividad del destino mediante la innovación, la calidad y la diversificación de la oferta turística. Estas entidades incluyen hoteles, agencias de viajes, restaurantes, operadores turísticos y otros actores del sector. Sus principales aportes son:

    .row.justify-content-center.mb-3(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema5/icono-01-n.svg", alt="alt").img90.m-auto
          h4.text-center Desarrollo de experiencias personalizadas
          p.text-center.mb-0 Crean productos que se adaptan a los intereses específicos de los turistas, como turismo de aventura, ecológico o cultural, destacando el destino frente a la competencia.
      
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema5/icono-02-n.svg", alt="alt").img90.m-auto
          h4.text-center Promoción del destino a nivel 
          p.text-center.mb-0 A  través de estrategias de <em>marketing</em> digital y presencial, las empresas posicionan el destino en mercados internacionales, atrayendo turistas extranjeros.
      
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema5/icono-03-n.svg", alt="alt").img90.m-auto
          h4.text-center Contribución a la innovación tecnológica
          p.text-center.mb-0 Incorporan plataformas digitales, aplicaciones y servicios en línea que facilitan la planificación y reserva de experiencias turísticas.
      
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema5/icono-04-n.svg", alt="alt").img90.m-auto
          h4.text-center Responsabilidad social empresarial
          p.text-center.mb-0 Muchas empresas privadas se involucran en proyectos que benefician a las comunidades locales, promoviendo prácticas éticas y sostenibles. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 #[b Ejemplo:] en el Eje Cafetero, las entidades privadas destacan con iniciativas como Panaca y el Parque del Café, que han transformado la cultura cafetera en un atractivo turístico internacional. Alojamientos como Haciendas del Café también han elevado la calidad del servicio, posicionando la región como líder en turismo cultural y natural.

    Separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3. Comité local y/o Juntas de Acción Comunal (JAC)

    p.mb-5 Las comunidades organizadas son un pilar esencial para garantizar que el turismo sea inclusivo, auténtico y sostenible. En este nivel, la participación activa de los residentes locales asegura que los beneficios del turismo se distribuyan equitativamente y que las características únicas del destino sean preservadas. Sus contribuciones son:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema5/img01.svg' alt='AvatarTop')
        h4.text-center Fortalecimiento del capital social
        p.text-center Impulsan la cohesión comunitaria mediante proyectos turísticos que involucran a diferentes grupos, como jóvenes, artesanos y líderes locales.
      
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema5/img02.svg' alt='AvatarTop')
        h4.text-center Preservación de la identidad cultural
        p.text-center Desarrollan actividades y festivales que destacan tradiciones locales, como en el caso del Carnaval de Barranquilla o las Fiestas de San Pacho en Quibdó, lo que mejora el atractivo del destino.
      
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema5/img03.svg' alt='AvatarTop')
        h4.text-center Capacitación de la comunidad
        p.text-center Organizan talleres y programas para formar a los residentes como guías turísticos, artesanos o emprendedores en servicios relacionados con el turismo.
      
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema5/img04.svg' alt='AvatarTop')
        h4.text-center Desarrollo de circuitos turísticos rurales
        p.text-center Diseñan rutas y experiencias que integran elementos de la naturaleza y la cultura local, promoviendo el turismo comunitario y el desarrollo económico inclusivo. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 #[b Ejemplo:] en Salento, Quindío, las Juntas de Acción Comunal han jugado un papel esencial en el desarrollo del ecoturismo en el Valle de Cocora. Estas organizaciones han liderado la conservación de la palma de cera y promovido el emprendimiento local, fortaleciendo la autenticidad del destino con rutas culturales, alojamientos rurales y gastronomía típica, todo ello bajo un enfoque de sostenibilidad.









</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({}),
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
