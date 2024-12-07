<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Consideraciones para analizar la capacidad de carga 

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema4/img-01.png', alt='')

    p.mb-5 Para analizar la capacidad de carga turística, la carga física y la carga real en un producto turístico, es esencial evaluar factores ambientales, sociales y económicos. Este análisis permite determinar cuántas personas pueden disfrutar de una atracción sin causar un impacto negativo significativo, garantizando la sostenibilidad del destino y la calidad de la experiencia turística. A continuación, se presentan las principales consideraciones y fórmulas aplicadas a contextos turísticos en Colombia.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1. Capacidad de Carga Turística (CCT)

    p.mb-5 La capacidad de carga turística se refiere al número máximo de visitantes que pueden estar presentes en un lugar sin afectar negativamente el entorno natural o cultural. Esta se clasifica en:

    .row.justify-content-center.ali.mb-4(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6.col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img-02.svg', alt='Imagen decorativa')
            
          h4.text-center Capacidad de Carga Física (CCF)
          p.text-center Máximo número de visitantes que pueden estar presentes físicamente en un área sin generar problemas.

        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6.col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img-03.svg', alt='Imagen decorativa')
            
          h4.text-center Capacidad de Carga Real (CCR)
          p.text-center Ajusta la capacidad física considerando factores correctores, como condiciones climáticas o fragilidad del ecosistema.

        .col-xl.col-md-6.tarjeta.color-acento-contenido.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6.col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img-04.svg', alt='Imagen decorativa')
            
          h4.text-center Capacidad de Carga Efectiva (CCE)
          p.text-center Incluye factores de gestión, como servicios disponibles y capacidad de control del sitio. 

    p.mb-5 La capacidad de carga turística se calcula utilizando fórmulas que consideran distintos niveles de análisis, desde lo físico hasta lo práctico y efectivo. Estas fórmulas permiten tomar decisiones informadas y garantizar la sostenibilidad de un destino turístico. A continuación, se explican las fórmulas utilizadas para calcular la capacidad de carga física, real y efectiva, junto con un ejemplo detallado aplicado a un destino turístico en Colombia:

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="CCF")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img-05.png', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            h4.mb-0 Capacidad de Carga Física (CCF):
            br
            p.mb-0 CCF = A / U
            p.mb-0 Donde:
            .tarjeta.tarjeta--blanca.p-4.mb-3
              ul.lista-ul
                li.mb-0 
                  ul
                    li.mb-0
                      i.lista-ul__vineta
                      | #[b A:] Área disponible para uso turístico (en m²).

                    li.mb-0
                      i.lista-ul__vineta
                      | #[b U:] Espacio requerido por persona (en m²/persona).
            p.mb-0 Ejemplo, en una playa de Santa Marta con 2.000 m² disponibles y un espacio necesario de 4 m² por persona:
            br
            p.mb-0 CCF = 2000 / 4 = 500
            br 
            p Esto indica que físicamente la playa puede albergar hasta 500 personas simultáneamente.

      .py-3.py-md-4(titulo="CCR")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img-06.png', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            h4.mb-0 Capacidad de Carga Real (CCR):
            br
            p.mb-0 CCR = CCF x (1 - ΣFi)
            p.mb-0 Donde:
            .tarjeta.tarjeta--blanca.p-4.mb-3
              ul.lista-ul
                li.mb-0 
                  ul
                    li.mb-0
                      i.lista-ul__vineta
                      | #[b Fi:] Factores limitantes (clima, accesibilidad y fragilidad del ecosistema).

            p.mb-0 Ejemplo, si el clima limita el acceso el 30 % del tiempo:
            br
            p.mb-0 CCR = 500 x (1 - 0.30) = 350
            br 
            p En promedio, la playa podría recibir hasta 350 personas considerando las condiciones climáticas.

      .py-3.py-md-4(titulo="CCE")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img-07.png', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            h4.mb-0 Capacidad de Carga Efectiva (CCE):
            br
            p.mb-0 CCR = CCF x (1 - ΣFg)
            p.mb-0 Donde:
            .tarjeta.tarjeta--blanca.p-4.mb-3
              ul.lista-ul
                li.mb-0 
                  ul
                    li.mb-0
                      i.lista-ul__vineta
                      | #[b Fg:] Factores de gestión (infraestructura, servicios, personal).

            p.mb-0 Ejemplo, si los servicios cubren al 80 % de los turistas:
            br
            p.mb-0 CCE = 350 x (1 - 0.20) = 280

            br 
            p Este sería el número máximo de turistas que la playa podría recibir diariamente.
  
    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2. Consideraciones básicas

    p.mb-5 El análisis de la capacidad de carga turística, física y real requiere una evaluación detallada de factores clave que aseguren el equilibrio entre la preservación de los recursos y la calidad de la experiencia turística. Estas consideraciones básicas permiten establecer límites claros para el uso sostenible de los destinos, evitando impactos negativos sobre el entorno, la comunidad local y los propios visitantes. A continuación, se presentan los aspectos esenciales a tener en cuenta:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        ImagenInfografica.color-acento-botones.mb-5.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img-08-01.svg', alt='Imagen decorativa')

          .tarjeta.tarjeta--blanca.p-3(x="15%" y="13.5%" numero="+")
            p La fragilidad del ecosistema y la biodiversidad influyen directamente en la capacidad de un lugar para recibir visitantes. Es fundamental identificar si el destino posee áreas sensibles que requieren protección especial, como hábitats únicos o especies en peligro de extinción. Por ejemplo, en el Parque Nacional Natural Tayrona, el exceso de turistas podría afectar la vegetación y la fauna nativa, haciendo necesario limitar la afluencia.

          .tarjeta.tarjeta--blanca.p-3(x="38.5%" y="10%" numero="+")
            p La capacidad y calidad de los servicios, como baños, rutas de acceso, manejo de residuos y transporte, son cruciales para definir la capacidad de carga efectiva. En lugares como el Parque Nacional Natural Los Nevados, donde las rutas de senderismo y los servicios de alojamiento son limitados, es indispensable planificar cuidadosamente el número de visitantes para evitar colapsos o deterioro del entorno.

          .tarjeta.tarjeta--blanca.p-3(x="62%" y="10%" numero="+")
            p Factores como la temporada de lluvias, temperaturas extremas o tormentas pueden limitar el acceso a ciertos destinos o afectar la seguridad de los turistas. Un ejemplo es Caño Cristales, en la Serranía de la Macarena, donde las restricciones de acceso durante la temporada de lluvias protegen el suelo de la erosión y garantizan la conservación del ecosistema.

          .tarjeta.tarjeta--blanca.p-3(x="86%" y="13.5%" numero="+")
            p Contar con personal capacitado y recursos suficientes para regular las actividades turísticas es esencial. Guías oficiales, personal de seguridad y equipos de monitoreo ayudan a garantizar que las actividades se realicen de forma organizada y responsable. En la Ciudad Perdida, ubicada en la Sierra Nevada de Santa Marta, el control de acceso y la presencia de guías certificados son claves para mantener el equilibrio entre turismo y conservación.

        .row.justify-content-center.mb-5(data-aos="flip-up")
          .col-sm-9.col-md-8.col-10.movil
            figure
              img(src='@/assets/curso/temas/tema4/img-08-02.svg', alt='Imagen decorativa')


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Comunicación verbal',
        texto:
          'Se realiza mediante palabras, ya sea de manera oral o escrita. Ejemplos incluyen conversaciones, discursos, correos electrónicos y mensajes de texto.',
        imagen: require('@/assets/curso/temas/tema3/img-04.png'),
      },
      {
        titulo: 'Comunicación no verbal',
        texto:
          'Implica el uso de gestos, expresiones faciales, posturas, tono de voz y otros elementos no verbales para transmitir mensajes. Tiene un gran impacto en la percepción del mensaje.',
        imagen: require('@/assets/curso/temas/tema3/img-05.png'),
      },
      {
        titulo: 'Comunicación visual',
        texto:
          'Se refiere al uso de imágenes, gráficos, videos y otros recursos visuales para comunicar ideas o información. Es común en medios digitales y publicidad.',
        imagen: require('@/assets/curso/temas/tema3/img-06.png'),
      },
      {
        titulo: 'Comunicación formal',
        texto:
          'Sigue estructuras y protocolos específicos, como informes, cartas oficiales y reuniones de negocios. Generalmente ocurre en entornos organizacionales.',
        imagen: require('@/assets/curso/temas/tema3/img-07.png'),
      },
      {
        titulo: 'Comunicación informal',
        texto:
          'Es más espontánea y menos estructurada, como las charlas cotidianas entre colegas o amigos. No sigue reglas formales y suele ocurrir en contextos sociales.',
        imagen: require('@/assets/curso/temas/tema3/img-08.png'),
      },
      {
        titulo: 'Comunicación interna',
        texto:
          'Se da dentro de una organización entre sus miembros. Es fundamental para la coordinación de tareas y el buen funcionamiento de la entidad.',
        imagen: require('@/assets/curso/temas/tema3/img-09.png'),
      },
      {
        titulo: 'Comunicación externa',
        texto:
          'Se dirige hacia personas o entidades ajenas a la organización, como clientes, proveedores o el público en general. Es clave para la imagen y las relaciones públicas de la entidad.',
        imagen: require('@/assets/curso/temas/tema3/img-010.png'),
      },
      {
        titulo: 'Comunicación externa',
        texto:
          'Se dirige hacia personas o entidades ajenas a la organización, como clientes, proveedores o el público en general. Es clave para la imagen y las relaciones públicas de la entidad.',
        imagen: require('@/assets/curso/temas/tema3/img-011.png'),
      },
    ],
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
