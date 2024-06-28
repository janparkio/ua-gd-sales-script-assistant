export const scriptData = {
INICIO: {
    category: "Inicio",
    title: "Esto es lo que se ve",
    series: false,
    messages:
      "Hola 👋🏻, te saluda [Nombre] de la Universidad Americana. ",
    options: [
      { text: "No contesta", next: "NO_CONTESTA" },
      { text: "Modalidad Virtual", next: "MODALIDAD_VIRTUAL_001" },
      { text: "Modalidad Presencial", next: "MODALIDAD_PRESENCIAL_001" },
    ],
  },
  MODALIDAD_VIRTUAL_001: {
    category: "Modalidad Virtual - DL",
    title: "Modalidad Virtual",
    series: true,
    messages: [
      "A través de la plataforma CANVAS ya tendrías todos los materiales de estudio tales como pdf, libros, videos explicativos, entre otros. Estaría habilitada para vos las 24hs del día. Podes conectarte en el horario que vos decidas e ir estudiando a tu ritmo. El costo de la cuota ya te incluye tus aranceles para exámenes parciales y finales y todos tus materiales de estudio",
      "Adicionalmente a esto, también tendrías un pequeño curso de nivelación en el cual desarrollarás una materia referente a la carrera de tu interés. Sería para que puedas aprender a utilizar la plataforma y también para que nosotros podamos tener en cuenta el nivel educacional que manejas actualmente.","¿Hasta acá te queda todo claro lo que te mencioné?",
    ],
    options: [
      { text: "Paso 2", next: "MODALIDAD_VIRTUAL_002" },
    ],
  },
  MODALIDAD_VIRTUAL_002: {
    category: "Modalidad Virtual - DL",
    title: "Modalidad Virtual",
    series: true,
    messages: [
      "Perfecto, te comento otros puntos de la modalidad virtual","Aquí no tendrás un horario fijo, ya que vos mismo estarías decidiendo que días y en qué horarios conectarte. Lo hacemos de esta forma justamente para brindarles mayor libertad a todos nuestros estudiantes en sus horarios 🤩","Los únicos días establecidos que tendrías son para la entrega de trabajos, exámenes parciales y finales","Pero vas a tener acceso a un calendario donde te indica todo eso una vez que ingreses a tu plataforma de estudios","¿Tendrías alguna duda hasta aquí?",
    ],
    options: [
      { text: "Paso 3", next: "MODALIDAD_VIRTUAL_003" },
    ],
  },
  MODALIDAD_VIRTUAL_003: {
    category: "Modalidad Virtual - DL",
    title: "Modalidad Virtual",
    series: true,
    messages: [
      "Excelente, entonces ahora te facilito todos los costos y la malla curricular.  ¿Me indicas dónde estás viviendo actualmente?","De esta forma te menciono cual es la sede o espacio americana más cercano a vos con todos los costos y beneficios 🥳",
    ],
    options: [
      { text: "Paso 4", next: "MODALIDAD_VIRTUAL_004" },
    ],
  },
  
  MODALIDAD_VIRTUAL_004: {
    category: "Modalidad Virtual - DL",
    title: "Modalidad Virtual",
    series: true,
    messages: [
      "[LIC. EN CIUDADES INTELIGENTES]\n\n-Duración: 4 años\n-Inicio de clases: 02 de marzo\n-Sede: Asunción\n-Modalidad: Online\n\n[MATRICULA PROMOCIONAL POR INICIO DE INSCRIPCION]\n99.000 Gs.\n\n[Costo por materia: 405.000Gs.]","Este costo ya te incluye todo lo que serían tus materiales de estudio, los accesos a las plataformas y también todos tus aranceles de exámenes parciales y finales 🥳",
    ],
    options: [
      { text: "Cierre de Ventas", next: "CIERRE_VENTAS" },
    ],
  },
  CIERRE_VENTAS: {
    category: "Cierre de Ventas",
    title: "Cierre de Ventas",
    series: true,
    messages: [
      "Te comento que de momento estamos realizando reservas de cupo en la matrícula promocional de los 99.000Gs ya que las inscripciones cierran el día viernes. Directamente con tus datos personales ya podemos reservarte un cupo.","¿Te interesaría reservar un cupo?"
    ],
    options: [  
      { text: "Inscripción", next: "INSCRIPCION" },
      { text: "Objeción", next: "OBJECIONES" },
    ],
  },
  INSCRIPCION: {
    category: "Inscripcion",
    title: "Inscripción",
    series: false,
    messages: [
      "Para dejar totalmente activa tu inscripción necesitamos estos datos y ya te estaremos reservando un cupo en la carrera de tu interés","Nombre","Apellido"
    ],
    options: [
      { text: "Cierre de Ventas", next: "CIERRE_VENTAS_002" },
    ],
  },
  CIERRE_VENTAS_002: {
    category: "Cierre de Ventas",
    title: "Cierre de Ventas",
    series: true,
    messages: [
      "Lo único que nos faltaría es agendar el pago de tu matrícula promocional de los 99.000Gs","¿Para qué día te queda bien agendar el pago?",
    ],
    options: [
      { text: "Cierre de Ventas", next: "CIERRE_VENTAS_003" },
    ],
  },
  CIERRE_VENTAS_003: {
    category: "Cierre de Ventas",
    title: "Cierre de Ventas",
    series: true,
    messages: [
      "Agendamos el pago de tu matrícula promocional de los 99.000Gs para el día [día + número] de [mes]. Ante cualquier duda o consulta estoy a las órdenes",
    ],
    options: [
      { text: "Cierre de Ventas", next: "CIERRE_VENTAS_002" },
    ],
  },
  OBJECIONES: {
    category: "Objeciones",
    title: "Objeciones",
    series: false,
    messages: [
      "Seleccioná el tipo de objeción mencionada"
    ],
    options: [
      { text: "Económico", next: "OBJECIONES_ECON" },
      { text: "Distancia", next: "OBJECIONES_DISTANCE" },
    ],
  },
  MODALIDAD_PRESENCIAL_001: {
    category: "Modalidad Presencial - PR",
    title: "Esto es lo que se ve",
    series: true,
    messages: [
      "A través de la plataforma CANVAS ya tendrías todos los materiales de estudio tales como pdf, libros, videos explicativos, entre otros. Estaría habilitada para vos las 24hs del día. Podes conectarte en el horario que vos decidas e ir estudiando a tu ritmo. El costo de la cuota ya te incluye tus aranceles para exámenes parciales y finales y todos tus materiales de estudio",
      "Adicionalmente a esto, también tendrías un pequeño curso de nivelación en el cual desarrollarás una materia referente a la carrera de tu interés. Sería para que puedas aprender a utilizar la plataforma y también para que nosotros podamos tener en cuenta el nivel educacional que manejas actualmente.","¿Hasta acá te queda todo claro lo que te mencioné?","Perfecto, te comento otros puntos de la modalidad virtual","Aquí no tendrás un horario fijo, ya que vos mismo estarías decidiendo que días y en qué horarios conectarte. Lo hacemos de esta forma justamente para brindarles mayor libertad a todos nuestros estudiantes en sus horarios 🤩","Los únicos días establecidos que tendrías son para la entrega de trabajos, exámenes parciales y finales","Pero vas a tener acceso a un calendario donde te indica todo eso una vez que ingreses a tu plataforma de estudios","¿Tendrías alguna duda hasta aquí?","Excelente, entonces ahora te facilito todos los costos y la malla curricular.  ¿Me indicas dónde estás viviendo actualmente?",
    ],
    options: [
      { text: "Caso 2", next: "SOLICITUD_INFO_2" },
      { text: "Nuevo alumno", next: "NUEVO_ALUMNO" },
      { text: "Solicita más información", next: "MAS_INFO" },
    ],
  },
  // Add more scenarios here
};
