<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Estrategias de productos turísticos sostenibles',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar el manejo de las temáticas identificación, diseño, marketing, paquetes, calidad y competitividad del producto turístico.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'El turismo sostenible se enfoca en minimizar los impactos negativos y maximizar los beneficios para todas las partes interesadas.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Bien hecho! El turismo sostenible busca el equilibrio entre beneficios y reducción de impactos.',
          mensaje_incorrecto:
            'Incorrecto. El turismo sostenible tiene como objetivo minimizar impactos negativos y maximizar los beneficios.',
        },
        {
          id: 2,
          texto:
            'El diseño de un paquete turístico no incluye el análisis de la demanda y segmentación de mercado.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis de demanda y segmentación es esencial en el diseño de paquetes turísticos.',
          mensaje_incorrecto:
            'No es correcto. Un paquete turístico debe considerar el análisis de demanda y segmentación.',
        },
        {
          id: 3,
          texto:
            'El turismo regenerativo busca no solo minimizar el impacto, sino también restaurar ecosistemas y comunidades.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Bien hecho! El turismo regenerativo va más allá de la sostenibilidad al restaurar activamente el entorno.',
          mensaje_incorrecto:
            'Incorrecto. El turismo regenerativo tiene un enfoque restaurativo y de impacto positivo.',
        },
        {
          id: 4,
          texto:
            'La capacidad de carga real de un destino turístico es igual a su capacidad física sin ajustes.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La capacidad de carga real ajusta la capacidad física según factores limitantes.',
          mensaje_incorrecto:
            'No es correcto. La capacidad de carga real considera limitaciones que afectan la capacidad física.',
        },
        {
          id: 5,
          texto:
            'La sostenibilidad en el turismo implica únicamente la conservación del medio ambiente.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La sostenibilidad también abarca el impacto social y económico en comunidades.',
          mensaje_incorrecto:
            'No es correcto. La sostenibilidad en turismo considera factores ambientales, sociales y económicos.',
        },
        {
          id: 6,
          texto:
            'La participación de la comunidad local es un aspecto clave para el éxito de los productos turísticos sostenibles.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Bien hecho! La inclusión de la comunidad es fundamental en productos turísticos sostenibles.',
          mensaje_incorrecto:
            'Incorrecto. La participación comunitaria es esencial en la sostenibilidad turística.',
        },
        {
          id: 7,
          texto:
            'El <em>marketing</em> de productos turísticos es innecesario en el contexto de destinos sostenibles.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El <em>marketing</em> es importante para comunicar la propuesta de valor de destinos sostenibles.',
          mensaje_incorrecto:
            'No es correcto. El marketing es esencial para atraer y educar sobre destinos sostenibles.',
        },
        {
          id: 8,
          texto:
            'El diseño de experiencias auténticas y personalizadas es una tendencia en el turismo actual.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Bien hecho! Las experiencias auténticas son cada vez más valoradas por los turistas.',
          mensaje_incorrecto:
            'Incorrecto. Las experiencias personalizadas y auténticas son tendencias en el turismo moderno.',
        },
        {
          id: 9,
          texto:
            'Las entidades privadas no tienen ninguna influencia en la competitividad de un destino turístico.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Las entidades privadas juegan un papel fundamental en la oferta y calidad de servicios turísticos.',
          mensaje_incorrecto:
            'No es correcto. Las entidades privadas son clave para mejorar la competitividad del turismo.',
        },
        {
          id: 10,
          texto:
            'El análisis de la capacidad de carga asegura que un destino no sea sobreexplotado por el turismo.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! La capacidad de carga protege al destino de la sobreexplotación.',
          mensaje_incorrecto:
            'Incorrecto. El análisis de capacidad de carga ayuda a prevenir la sobreexplotación de un destino.',
        },
        {
          id: 11,
          texto:
            'La valoración sostenible de un producto turístico considera el impacto ambiental y social de sus operaciones.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Bien hecho! La valoración sostenible analiza el impacto en el medio ambiente y la comunidad.',
          mensaje_incorrecto:
            'No es correcto. La valoración sostenible incluye tanto el impacto ambiental como el social.',
        },
        {
          id: 12,
          texto:
            'Un producto turístico que involucra la biodiversidad debe tener en cuenta la protección de la flora y fauna locales.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! La protección de la biodiversidad es crucial para productos turísticos en entornos naturales.',
          mensaje_incorrecto:
            'Incorrecto. La biodiversidad necesita protección en productos turísticos en áreas naturales.',
        },
        {
          id: 13,
          texto:
            'La calidad en el turismo se limita a la limpieza y mantenimiento de los sitios turísticos.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La calidad turística incluye atención al cliente, seguridad, y otros factores.',
          mensaje_incorrecto:
            'No es correcto. La calidad turística abarca diversos aspectos, no solo la limpieza y mantenimiento.',
        },
        {
          id: 14,
          texto:
            'El ecoturismo es un tipo de turismo sostenible que contribuye a la conservación del entorno natural.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Bien hecho! El ecoturismo promueve la conservación del ambiente natural.',
          mensaje_incorrecto:
            'Incorrecto. El ecoturismo tiene como base la conservación del entorno natural.',
        },
        {
          id: 15,
          texto:
            'El turismo masivo favorece la sostenibilidad de los destinos turísticos.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El turismo masivo suele afectar negativamente la sostenibilidad de los destinos.',
          mensaje_incorrecto:
            'No es correcto. El turismo masivo puede generar impactos negativos en la sostenibilidad.',
        },
        {
          id: 16,
          texto:
            'La diversificación de actividades en un destino turístico ayuda a reducir la dependencia de una temporada específica.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! La diversificación permite un flujo turístico más estable durante todo el año.',
          mensaje_incorrecto:
            'Incorrecto. Diversificar actividades ayuda a que el turismo no dependa de una sola temporada.',
        },
        {
          id: 17,
          texto:
            'Las prácticas de turismo responsable promueven el respeto a las normas locales y la reducción del uso de plásticos.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Bien hecho! El turismo responsable fomenta prácticas sostenibles como la reducción de plásticos.',
          mensaje_incorrecto:
            'Incorrecto. El turismo responsable impulsa prácticas de respeto y sostenibilidad ambiental.',
        },
        {
          id: 18,
          texto:
            'El enfoque de turismo regenerativo no incluye la educación ambiental de los turistas.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La educación ambiental es parte del turismo regenerativo para generar conciencia.',
          mensaje_incorrecto:
            'No es correcto. El turismo regenerativo incluye educar a los turistas sobre la importancia ambiental.',
        },
        {
          id: 19,
          texto:
            'Los factores de valoración de un producto turístico incluyen la funcionalidad, experiencia, economía y sostenibilidad.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! Estas valoraciones son esenciales para evaluar un producto turístico integralmente.',
          mensaje_incorrecto:
            'Incorrecto. La valoración de un producto turístico incluye aspectos funcionales, experienciales y sostenibles.',
        },
        {
          id: 20,
          texto:
            'En Colombia, el turismo comunitario es promovido para que las comunidades participen activamente en la oferta turística.',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Bien hecho! El turismo comunitario permite la participación activa de las comunidades locales.',
          mensaje_incorrecto:
            'Incorrecto. El turismo comunitario busca integrar a las comunidades en la oferta turística del destino.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
