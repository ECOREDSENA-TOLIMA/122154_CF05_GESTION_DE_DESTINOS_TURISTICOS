<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Identificación del producto turístico

    p.mb-5 La identificación de productos turísticos consiste en reconocer y clasificar los recursos y servicios que conforman la oferta turística de un destino. Estos productos pueden ser culturales, naturales, gastronómicos o de aventura, entre otros, y deben tener características únicas que atraerán a los visitantes. La creación de un producto turístico implica transformar un recurso en una experiencia atractiva y comercializable, adaptada a las necesidades y expectativas del mercado.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para identificar un producto turístico, es crucial analizar el entorno, los recursos disponibles, la infraestructura y la demanda potencial. Además, se debe tomar en cuenta la sostenibilidad y el impacto en la comunidad local. Una adecuada identificación y desarrollo de productos turísticos contribuye a la diferenciación de un destino, lo que puede aumentar su competitividad en el mercado global y atraer a diversos segmentos de turistas.
    
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1. Actividades para identificar productos turísticos

    p.mb-5 La identificación y desarrollo de productos turísticos es un proceso estratégico que permite resaltar y valorar los recursos culturales, naturales y sociales de una región, impulsando el turismo de manera sostenible y significativa. Para lograrlo, se requiere de una serie de actividades que abarcan desde la investigación de mercado hasta la promoción y comercialización del destino:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-12.mb-3
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--verde")
          .row.justify-content-center.align-items-center.p-4(titulo="Investigación de mercado")
            .col-lg-6.order-lg-1.order-2
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Análisis de la demanda:] se realiza para identificar los intereses y preferencias de los turistas potenciales, tanto nacionales como internacionales.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Segmentación del mercado:] se define para identificar segmentos de mercado atractivos, tales como turismo de aventura, ecoturismo o turismo cultural.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Competencia:] se lleva a cabo un análisis de productos turísticos similares en la región y su éxito en el mercado.

            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-02.png', alt='Imagen decorativa')
          
          .row.justify-content-center.align-items-center.p-4(titulo="Inventario de recursos turísticos")
            .col-lg-6.order-lg-1.order-2
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Recursos naturales:] se incluyen elementos como montañas, ríos, parques naturales, playas (por ejemplo, el Parque Tayrona, la Sierra Nevada y el Amazonas) y otros accidentes geográficos.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Patrimonio Cultural:] comprende monumentos históricos, pueblos patrimoniales, festividades (por ejemplo, Cartagena, Villa de Leyva y Carnaval de Barranquilla), platos típicos que representan un atractivo turístico (como bandeja paisa, ajiaco y lechona) y expresiones culturales como tradiciones, música y bailes típicos (por ejemplo, cumbia, vallenato y joropo).

            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-03.png', alt='Imagen decorativa')
          
          .row.justify-content-center.align-items-center.p-4(titulo="Análisis del entorno")
            .col-lg-6.order-lg-1.order-2
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Contexto socioeconómico:] se evalúa si la infraestructura turística (transporte, alojamiento y servicios) es adecuada o si requiere mejoras.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Sostenibilidad:] se considera la capacidad de carga del destino para minimizar el impacto negativo del turismo.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Seguridad:] se analizan las condiciones de seguridad para los turistas en la región.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Políticas locales y nacionales:] se alinean los productos turísticos con las políticas de promoción de turismo del gobierno colombiano (por ejemplo, ProColombia).

            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-04.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center.p-4(titulo="Talleres y encuentros con la comunidad local")
            .col-lg-6.order-lg-1.order-2
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Participación comunitaria:] involucra a actores locales, como la comunidad, autoridades y empresarios, para identificar recursos, ideas y visiones sobre el turismo.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Diagnóstico participativo:] la comunidad participa en la identificación de los atractivos más valiosos y en la definición de roles en el desarrollo del producto turístico.

            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-05.png', alt='Imagen decorativa')
          
          .row.justify-content-center.align-items-center.p-4(titulo="Desarrollo de experiencias turísticas")
            .col-lg-6.order-lg-1.order-2
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Diseño de rutas temáticas:] se crean recorridos o itinerarios que destacan aspectos específicos del destino (por ejemplo, la ruta cafetera, la ruta de la biodiversidad o la ruta de las leyendas).

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Identificación de experiencias únicas:] se definen actividades que ofrecen una experiencia auténtica, como turismo vivencial, interacción con pueblos indígenas o avistamiento de fauna.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Creación de paquetes turísticos:] se agrupan servicios como alojamiento, transporte y actividades coherentes con la experiencia turística deseada.

            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-06.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center.p-4(titulo="Validación del producto turístico")
            .col-lg-6.order-lg-1.order-2
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Prototipos de productos:] se crean y prueban prototipos de experiencias diseñadas con pequeños grupos de turistas.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Retroalimentación:] se recogen las impresiones de los turistas para realizar ajustes y mejorar el producto.

            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-07.png', alt='Imagen decorativa')
          
          .row.justify-content-center.align-items-center.p-4(titulo="Promoción y comercialización")
            .col-lg-6.order-lg-1.order-2
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Creación de marca:] se desarrolla una identidad visual y narrativa que resalte los valores y características únicas del producto.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p.mb-0 #[b Canales de comercialización:] se establecen colaboraciones con agencias de viajes, plataformas de reserva en línea y promoción en ferias de turismo.

            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-08.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.col-md-10
        .cajon.cajon.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6.col-md-5.mb-2
              figure
                img(src='@/assets/curso/temas/tema1/img-09.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p #[b Ejemplos en Colombia:]
              ul.lista-ul
                li.mb-3 
                  i.fas.fa-angle-right(style="color: #7D3A1B")
                  p.mb-0 #[b Eje Cafetero:] se identifica el café como eje central del producto turístico, complementado por la biodiversidad, las fincas tradicionales y experiencias culturales.
                
                li.mb-3 
                  i.fas.fa-angle-right(style="color: #7D3A1B")
                  p.mb-0 #[b Amazonas:] se enfoca en el ecoturismo, el turismo de aventura y la conservación del patrimonio indígena.

    p.mb-5 Estas actividades contribuyen a definir un producto turístico que resulte atractivo para los visitantes, y que sea también sostenible y beneficioso para las comunidades locales.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2. Principios y objetivos de desarrollo sostenible aplicados al producto

    p.mb-5 Aplicar los principios de sostenibilidad en el diseño de productos turísticos implica integrar prácticas que minimicen los impactos negativos en el medio ambiente, promuevan beneficios sociales y económicos para las comunidades locales y ofrezcan una experiencia enriquecedora para los turistas. A continuación, se describe cómo aplicar estos principios en el diseño de un producto turístico:

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Factores y dimensión de turismo y sostenibilidad. Programa de la Naciones Unidas para el Medio Ambiente</i>
        figure.mb-3
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema1/img-010.svg', alt='En la figura 1 se presenta un diagrama de sostenibilidad, mostrando tres dimensiones: medioambiental (eficacia de recursos, pureza medioambiental, diversidad), económico (viabilidad económica, prosperidad local), y social (calidad del empleo, equidad social, control social), con factores específicos en cada dimensión.')
          figcaption Nota . ResearchGate. (s.f.). Maximiliano E. Korstanje.
    
    p.mb-5 Para implementar un producto turístico sostenible, es fundamental considerar prácticas que respeten el entorno natural, cultural y social del destino. A continuación, se presentan los elementos clave de sostenibilidad que deben integrarse en el diseño del producto turístico, abarcando la conservación del medio ambiente, el apoyo a la economía local, el respeto cultural, y la educación de los turistas sobre prácticas responsables:

    .tarjeta.tarjeta--BG10.p-4.p-md-5.mb-5
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Conservación del medio ambiente
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Minimización del impacto ambiental:] se eligen recursos y actividades que generen el menor impacto posible en los ecosistemas, lo cual incluye el uso eficiente de energía y agua, además de una gestión adecuada de residuos.
                
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Uso de recursos naturales sostenibles:] se utilizan materiales locales, renovables y ecológicos en el desarrollo de infraestructuras y productos turísticos.
                
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Protección de la biodiversidad:] se diseñan actividades que respetan y protegen la flora y fauna locales, como tours de observación de fauna que sigan prácticas éticas o rutas de senderismo que no alteren los ecosistemas.

            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-011.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Beneficios sociales y económicos
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Integración de la comunidad local:] se involucra a la comunidad en el diseño y gestión del producto turístico, empleando a residentes como guías o promotores y adquiriendo productos locales.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Fomento de la economía local:] se promueve que el turismo beneficie directamente a la economía local mediante la compra de productos artesanales, el uso de servicios locales y la inversión en proyectos comunitarios.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Desarrollo de capacidades locales:] se ofrece capacitación a los miembros de la comunidad para que participen activamente en la cadena de valor del turismo, fortaleciendo habilidades en hospitalidad o gestión de pequeños negocios turísticos.

            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-012.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Conservación cultural
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Respeto y promoción de la cultura local:] se diseñan experiencias que respetan las tradiciones y valores culturales, evitando la explotación cultural. Esto puede incluir talleres de artesanía local o visitas a comunidades que permitan una interacción respetuosa con los turistas.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Autenticidad en la experiencia turística:]  se evita el turismo masivo que diluya las costumbres locales y se promueven experiencias que ofrezcan una inmersión auténtica en la cultura de la región.

            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-013.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Educación y sensibilización
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Concientización ambiental y cultural:] se diseñan experiencias que sensibilicen a los turistas sobre la importancia de la sostenibilidad mediante charlas, paneles informativos o actividades interactivas que fomenten la conservación del entorno y la cultura local.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Promoción del turismo responsable:] se promueven prácticas de turismo responsable, como el respeto a normas locales, la reducción del uso de plásticos y el apoyo a la conservación de sitios naturales y culturales visitados.

            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-014.png', alt='Imagen decorativa')
          
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Viabilidad económica a largo plazo
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Eficiencia de recursos:] se asegura que el producto turístico sostenible sea financieramente viable a largo plazo, diseñando servicios rentables que también garanticen la longevidad de los recursos y la comunidad involucrada.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Diversificación de actividades:] se ofrecen actividades variadas para atraer a diferentes tipos de turistas durante todo el año, evitando la dependencia de temporadas altas que podrían sobrecargar los recursos naturales y humanos.

            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-015.png', alt='Imagen decorativa')
          
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Gestión responsable del turismo
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Capacidad de carga:] se respeta la capacidad de carga del destino, controlando la cantidad de visitantes para evitar la sobreexplotación de recursos naturales y culturales.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Monitorización y mejora continua:] se implementa un sistema de evaluación continua del impacto del producto turístico en el entorno natural, la comunidad y la economía, realizando ajustes para optimizar la sostenibilidad del proyecto. 

            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-016.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 #[b Ejemplo de producto turístico sostenible:] un producto turístico sostenible podría consistir en el diseño de una ruta de ecoturismo en una reserva natural, donde los visitantes participen en actividades como caminatas guiadas, lideradas por guías locales capacitados en conservación, talleres de artesanía con comunidades indígenas, y alojamiento en eco-lodges que utilicen energías renovables. Parte de los ingresos generados se destinaría a proyectos de reforestación y programas de educación ambiental para la comunidad local.

    p.mb-5 En este contexto, es importante destacar la aplicación de los Objetivos de Desarrollo Sostenible (ODS) en el diseño de productos turísticos. La Agenda 2030 para el Desarrollo Sostenible establece una guía global para lograr un desarrollo equilibrado que integre aspectos sociales, económicos y medioambientales. Aplicar estos objetivos al turismo permite crear experiencias responsables y sostenibles que beneficien tanto a los turistas como a las comunidades locales y al entorno natural.

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Agenda 2030 para el Desarrollo Sostenible</i>
        figure.mb-3
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema1/img-017.png', alt='En la figura 1 se presenta un diagrama de sostenibilidad, mostrando tres dimensiones: medioambiental (eficacia de recursos, pureza medioambiental, diversidad), económico (viabilidad económica, prosperidad local), y social (calidad del empleo, equidad social, control social), con factores específicos en cada dimensión.')
          figcaption Nota. Tomado de Naciones Unidas (2015). Objetivos de Desarrollo Sostenible.

    p.mb-5 Algunos de los ODS más relevantes para el diseño de productos turísticos incluyen:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .tarjeta.tarjeta--BG06.p-4.mb-5
        LineaTiempoC.color-acento-botones.especial
          .row.justify-content-center.align-items-center(titulo="ODS 5")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Igualdad de género
              p Promoción de la igualdad de oportunidades mediante la creación de empleos equitativos para hombres y mujeres, y fomentando el liderazgo femenino en la gestión turística. Además, se pueden ofrecer experiencias que sensibilicen sobre la equidad de género.
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/icono-01.svg', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="ODS 6")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Agua limpia y saneamiento
              p Fomentar el uso responsable del agua mediante prácticas como la reutilización de aguas grises y el uso de instalaciones eficientes, además de asegurar que las actividades turísticas no afecten negativamente las fuentes de agua locales.
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/icono-02.svg', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="ODS 7")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Energía asequible y no contaminante
              p Incorporar energías renovables, como paneles solares, y promover la eficiencia energética en los alojamientos turísticos, además de educar a los visitantes sobre el uso responsable de la energía.

            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/icono-03.svg', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="ODS 8")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Trabajo decente y crecimiento económico
              p Apoyar el turismo local a través de empleos decentes en la cadena de valor turística y brindar capacitación a los trabajadores para fomentar su desarrollo profesional y la inclusión.
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/icono-04.svg', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="ODS 11")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Ciudades y comunidades sostenibles
              p Desarrollar experiencias que respeten la cultura y el patrimonio local, e integrarse en iniciativas de movilidad sostenible en áreas urbanas.
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/icono-05.svg', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="ODS 12")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Producción y consumo responsables
              p Diseñar productos que minimicen el uso de recursos naturales y promuevan el reciclaje y la reducción de residuos, así como sensibilizar a los turistas sobre prácticas responsables.
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/icono-06.svg', alt='Imagen decorativa') 

          .row.justify-content-center.align-items-center(titulo="ODS 13")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Acción por el clima
              p Promover productos turísticos de baja emisión de carbono, como actividades de ecoturismo, y apoyar proyectos de restauración de ecosistemas y reforestación.
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/icono-07.svg', alt='Imagen decorativa') 

          .row.justify-content-center.align-items-center(titulo="ODS 14")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Vida submarina
              p Implementar normas de conservación marina en actividades relacionadas con el mar y fomentar el ecoturismo marino para concienciar sobre la biodiversidad marina.
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/icono-08.svg', alt='Imagen decorativa') 

          .row.justify-content-center.align-items-center(titulo="ODS 15")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Vida de ecosistemas terrestres
              p Diseñar experiencias que respeten la fauna y flora locales, fomentando la visita a áreas naturales protegidas y la educación sobre la importancia de los ecosistemas.
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/icono-09.svg', alt='Imagen decorativa') 

          .row.justify-content-center.align-items-center(titulo="ODS 1 y 10")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Reducción de las desigualdades y fin de la pobreza
              p Incluir a comunidades vulnerables en la creación de productos turísticos, asegurando que obtengan beneficios económicos y fomentando la accesibilidad para todos. 
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/icono-010.svg', alt='Imagen decorativa') 

    p.mb-5 Integrar los ODS en el diseño de productos turísticos no solo es una tendencia creciente, sino una necesidad para asegurar la sostenibilidad a largo plazo. A través de prácticas responsables, el sector turístico puede contribuir al bienestar de las comunidades locales y al cuidado del medio ambiente, ofreciendo experiencias enriquecedoras y conscientes a los viajeros.

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3. Aplicar el modelo de turismo regenerativo al diseño del producto turístico

    p Para aplicar el modelo de turismo regenerativo al diseño de un producto turístico, se deben considerar principios que promuevan la restauración ambiental, el bienestar comunitario y una experiencia transformadora para el visitante. Este enfoque va más allá de la sostenibilidad, al enfocarse en regenerar tanto los ecosistemas como las economías y culturas locales, logrando así un turismo que contribuye positivamente a su entorno.
    p.mb-5 En este contexto, es importante destacar la aplicación de algunos pasos clave para integrar el turismo regenerativo en el diseño de productos turísticos:
    
    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-down")
        ImagenInfografica.color-acento-botones.mb-3.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-018.svg', alt='Imagen decorativa')

          .tarjeta.tarjeta--blanca.p-3(x="32.5%" y="8%" numero="+")
            p El diseño del producto debe ser co-creado con la comunidad local, promoviendo su empoderamiento económico y cultural. Incorporar prácticas que valoren la cultura local, como talleres de gastronomía y experiencias de arte, permite un desarrollo turístico que respeta y celebra el patrimonio cultural.

          .tarjeta.tarjeta--blanca.p-3(x="68%" y="8%" numero="+")
            p La infraestructura debe ser ecológica, utilizando materiales sostenibles, energías renovables y prácticas de economía circular. Esto incluye el compostaje de residuos orgánicos y el uso de agua reutilizable, promoviendo un consumo responsable.

          .tarjeta.tarjeta--blanca.p-3(x="15.5%" y="27%" numero="+")
            p Implica una investigación exhaustiva del entorno natural, identificando fragilidades y oportunidades de regeneración. Es esencial colaborar con ecólogos y expertos locales para asegurar que el turismo contribuya a la restauración del medio ambiente mediante prácticas como la reforestación y la limpieza de hábitats.

          .tarjeta.tarjeta--blanca.p-3(x="50%" y="26.5%" numero="+")
            p Se busca que los turistas se reconecten con la naturaleza y comprendan la importancia de la regeneración ambiental. Actividades como caminatas guiadas, ceremonias locales y educación ambiental ayudan a fomentar un compromiso consciente con la conservación.

          .tarjeta.tarjeta--blanca.p-3(x="84.5%" y="27%" numero="+")
            p Es fundamental evaluar constantemente los impactos en la comunidad y el medio ambiente, adaptando el producto turístico a las necesidades cambiantes del entorno para garantizar su regeneración a largo plazo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 #[b Ejemplo práctico:] un eco-lodge regenerativo puede ofrecer actividades de reforestación, sistemas de agua de lluvia y alimentos locales, combinados con talleres de agricultura sostenible impartidos por la comunidad. Los turistas también pueden participar en proyectos de regeneración y aprender sobre la cultura local a través de experiencias significativas.

    p.mb-5 Aplicar el turismo regenerativo al diseño de productos turísticos fomenta una relación equilibrada entre el turista, la comunidad y el entorno natural, promoviendo un turismo que no solo reduce su impacto, sino que contribuye activamente a la regeneración y prosperidad de los ecosistemas y las personas involucradas.

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4. Estructuración y diseño del producto turístico

    p.mb-5 En Colombia, el desarrollo y estructuración de productos turísticos se centran en maximizar la riqueza y diversidad natural, cultural e histórica que el país ofrece. Este proceso requiere una identificación exhaustiva de los atractivos clave en cada región, estableciendo qué tipo de turismo se adapta mejor a cada destino, ya sea ecoturismo, turismo cultural, de aventura, de bienestar, o de sol y playa, entre otro, a través de estos se busca crear experiencias auténticas y significativas que resalten la identidad de cada lugar, generando una conexión memorable para los visitantes.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-8.col-md-6.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img-019.svg', alt='Imagen decorativa')
          .col-lg-6.col-12
            p El diseño de estos productos incluye un análisis riguroso de mercado y una segmentación clara del perfil del turista, que abarca desde sus expectativas hasta sus necesidades y preferencias. Igualmente, la sostenibilidad ocupa un lugar central, tanto para garantizar la preservación de los recursos naturales y culturales como para beneficiar a las comunidades locales, las alianzas entre el sector público y privado resultan esenciales para optimizar la infraestructura, mejorar la señalización y el transporte, y aumentar la promoción tanto a nivel nacional como internacional.
            .cajon.cajon.color-secundario.p-4.mb-3
              p.mb-0 #[b Los productos turísticos en Colombia siguen una lógica de circuitos que conectan destinos estratégicos y permiten explorar la autenticidad y diversidad de cada región. Estos circuitos no solo facilitan una experiencia integral y atractiva para el turista, sino que también promueven un turismo responsable.]

    p.mb-5 Al implementar prácticas sostenibles y respetuosas con el medio ambiente, se busca impactar positivamente a las comunidades locales, empoderándolas para que formen parte activa del desarrollo turístico. Así, Colombia se consolida como un destino versátil y vibrante, con un compromiso creciente hacia un turismo que respeta y preserva su riqueza natural y cultural para futuras generaciones .

    .row
      .col-lg-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_Producto_Turistico.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Producto turístico

    Separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5. Diseño del paquete turístico

    p.mb-5 El diseño de un paquete turístico es un proceso estratégico que combina la atracción del producto, el análisis del mercado y la experiencia del cliente, con el objetivo de ofrecer una oferta competitiva y diferenciada. Este proceso integra diferentes elementos que aseguran la calidad, viabilidad y atractivo del paquete. A continuación, se dan unos pasos clave tanto para la creación del paquete como para su promoción:

    .tarjeta.tarjeta--BG10.p-4.p-md-5.mb-5
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Identificación del producto turístico primer paso para desarrollar el paquete
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Destino turístico:] playas, montañas, ciudades históricas.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Actividades:] excursiones, deportes, turismo cultural o gastronómico.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Servicios:] transporte, alojamiento, guías turísticos.

            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-020.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Investigación de mercado y definición del producto
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Identificación del tipo de turismo:] aventura, cultural, naturaleza, gastronómico, bienestar, entre otros.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Análisis de la demanda:] evaluar el perfil de turistas interesados, nacionales e internacionales.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Estudio de la competencia:] revisar paquetes similares y sus características. Selección del destino: priorizar lugares atractivos como Cartagena, Medellín, San Andrés o el Eje Cafetero.

            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-021.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Diseño del itinerario
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Duración del paquete:] establecer días y noches del viaje.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Actividades y sitios de interés:] incluir visitas guiadas, experiencias únicas y tiempo libre para explorar
                
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Balance en las actividades:] garantizar un equilibrio entre ocio y actividades programadas.

            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-022.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Segmentación del mercado objetivo
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Demografía:] edad, género y nivel de ingresos.
                  
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Geografía:] enfoque nacional o internacional.
                
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Psicografía:] intereses, estilos de vida y preferencias (lujo, aventura, ecológico).

            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-023.png', alt='Imagen decorativa')
          
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Selección de proveedores
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Alojamiento:] hoteles, eco-lodges, casas rurales, según el perfil del cliente

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Alimentación:] incluir opciones gastronómicas locales o en el alojamiento.
                
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Transporte:] aéreo, terrestre o marítimo, con traslados incluidos.
                
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Guías turísticos:] personal capacitado, preferiblemente bilingüe.
                
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Experiencias únicas:] actividades exclusivas como entradas a museos, parques o tours.
                
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Otros servicios:] seguros de viaje, asistencia médica y permisos.

            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-024.png', alt='Imagen decorativa')
          
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Fijación de precios y costeo
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Costos fijos y variables:] transporte, alojamiento, comisiones y marketing.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Margen de ganancia:] establecer una ganancia razonable y competitiva.
                
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Descuentos:] tarifas para grupos o temporadas bajas.
                
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Valor añadido:] incluir servicios exclusivos o personalizados.

            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-025.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Legislación y permisos
              ul.lista-ul
                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Cumplir normativas legales:] inscripción en el Registro Nacional de Turismo (RNT), permisos de operación y seguros.

                li.mb-3 
                  i.lista-ul__vineta(style="font-size: 1.9rem")
                  p #[b Bioseguridad y seguros:] garantizar medidas de salud y protección para los turistas. 

            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-026.png', alt='Imagen decorativa')

    p.mb-5 Este enfoque permite diseñar paquetes turísticos que no solo sean atractivos para el mercado objetivo, sino que también promuevan un turismo sostenible, seguro y adaptado a las necesidades y expectativas del cliente.

    Separador

    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6. <em>Marketing</em> del paquete turístico

    p.mb-5 La promoción de paquetes turísticos es un proceso integral que abarca desde la creación de estrategias publicitarias hasta el monitoreo de resultados. Estas estrategias buscan garantizar experiencias memorables para los turistas y posicionar los productos turísticos como opciones atractivas y sostenibles. A continuación, se presentan los elementos clave para desarrollar un plan de marketing exitoso:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-10
        .tabla-a.clstabla.color-acento-contenido
          table
            thead
              tr
                th(style="width:20%") Estrategias de promoción y <em>marketing</em>
                th(style="width:20%") Gestión de reservas y atención al cliente
                th(style="width:20%") Monitoreo y evaluación
                th(style="width:20%") Sostenibilidad en el turismo
            tbody
              tr(style="background-color: #F6F6F6")
                td <b>Material promocional:</b> elaborar contenido visual y textual atractivo (folletos, videos y páginas web) que resalte las experiencias únicas del paquete.
                td <b>Sistema de reservas:</b> implementar plataformas digitales que permitan gestionar reservas de manera eficiente y accesible.
                td <b>Opinión del cliente:</b> recopilar comentarios para mejorar continuamente la oferta.
                td <b>Prácticas responsables:</b> incorporar iniciativas que minimicen el impacto ambiental, apoyen a las comunidades locales y promuevan el respeto cultural.

              tr
                td <b>Segmentación del público objetivo:</b> identificar canales de promoción adecuados, como redes sociales, plataformas de turismo (TripAdvisor o Booking), Google Ads y ferias de turismo.
                td <b>Servicio al cliente:</b> ofrecer asistencia personalizada y soporte antes, durante y después de la experiencia turística.
                td <b>Análisis financiero:</b> revisar costos e ingresos para garantizar la rentabilidad.
                td 

              tr(style="background-color: #F6F6F6")
                td <b>Paquetes promocionales:</b> ofrecer descuentos por reservas anticipadas, tarifas grupales y promociones de temporada alta o baja.
                td 
                td <b>Adaptación a tendencias:</b> ajustar los paquetes según las nuevas preferencias y necesidades del mercado.
                td 

    p.mb-5 El éxito de un paquete turístico radica en su capacidad para captar la atención de los clientes potenciales y destacarse en un mercado altamente competitivo. Para lograrlo, es imprescindible desarrollar estrategias de marketing que combinen creatividad, impacto y efectividad. Estas estrategias no solo deben resaltar las características únicas del producto, sino también utilizar herramientas digitales, contenido visual atractivo y ofertas personalizadas para atraer y fidelizar a los turistas. A continuación, se detallan acciones clave para garantizar la visibilidad y el posicionamiento estratégico del paquete turístico:

    .col-xl-10.mx-auto.mb-5
      .d-flex.flex-wrap.align-items-center.mb-5
        .col-xl-7.order-2.order-xl-1.pe-xl-4
          LineaTiempoD.color-primario.linea-tiempo-edit
            .d-block(numero="1" titulo="Propuesta de valor atractiva") 
              .col-12.mb-4.mb-md-0
                ul.lista-ul
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Destacar los beneficios únicos del paquete, como su exclusividad o personalización.
                
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Resaltar características diferenciadoras, como destinos exóticos o actividades únicas.

            .d-block(numero="2" titulo="Uso de contenido visual") 
              .col-12.mb-3.mb-md-0
                ul.lista-ul
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Crear videos promocionales y fotografías de alta calidad que muestren las experiencias incluidas.
                  
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Incorporar testimonios y reseñas de clientes satisfechos para generar confianza.
            
            .d-block(numero="3" titulo="<em>Marketing</em> digital") 
              .col-12.mb-3.mb-md-0
                ul.lista-ul
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Optimizar la página web para atraer tráfico y facilitar reservas.
                  
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Utilizar redes sociales (Facebook o Instagram) y campañas de Google Ads para aumentar el alcance.
                  
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Implementar email marketing con ofertas personalizadas a través de newsletters.
            
            .d-block(numero="4" titulo="Colaboraciones estratégicas") 
              .col-12.mb-3.mb-md-0
                ul.lista-ul
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Participar en plataformas de turismo como Expedia, Booking o TripAdvisor.
                  
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Trabajar con influencers y bloggers de viajes para dar visibilidad al paquete.

            .d-block(numero="5" titulo="Ofertas y promociones") 
              .col-12.mb-3.mb-md-0
                ul.lista-ul
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Ofrecer descuentos por reservas anticipadas o para grupos grandes.
                  
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Crear promociones de temporada, como vacaciones de verano o Semana Santa.
                  
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Establecer programas de fidelización para premiar a los clientes recurrentes.

            .d-block(numero="6" titulo="Distribución del paquete") 
              .col-12.mb-3.mb-md-0
                ul.lista-ul
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Promover el paquete a través de agencias de viajes físicas y online.
                  
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Colaborar con operadores turísticos para ampliar la oferta.
                  
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Facilitar la venta directa a través del sitio web oficial.          
              
            .d-block(numero="7" titulo="Seguimiento y retroalimentación") 
              .col-12.mb-3.mb-md-0
                ul.lista-ul
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Solicitar reseñas para mejorar la reputación y atraer nuevos clientes.
                  
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Recoger opiniones de los turistas para ajustar y mejorar el paquete.
                  
                  li.mb-3 
                    i.fas.fa-angle-right(style="color: #7D3A1B")
                    p.mb-0 Realizar mejoras continuas basadas en las tendencias del mercado y las preferencias de los clientes. 

        img.col-xl-5.mb-4.mb-xl-0.mx-auto.order-1.order-xl-2(src='@/assets/curso/temas/tema1/img-027.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 #[b Ejemplo práctico:] un paquete turístico de aventura en la montaña podría diseñarse para incluir alojamiento en un hotel ecológico, transporte desde la ciudad principal, excursiones guiadas de senderismo, actividades emocionantes como escalada y rafting, además de comidas tradicionales que enriquezcan la experiencia cultural. Para promocionarlo, se pueden emplear estrategias como la difusión en redes sociales y blogs especializados en turismo de aventura, así como campañas publicitarias enfocadas en temporadas altas como el verano o festividades, maximizando su atractivo para los clientes potenciales.
          
    p.mb-5 Con una estrategia bien diseñada y ejecutada, el paquete no solo destacará en el mercado, sino que atraerá a los turistas ideales.










</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
