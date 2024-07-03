export const scriptData = {
  INICIO: {
    category: "Inicio",
    title: "Bievenida",
    series: false,
    messages: "Hola 👋🏻, te saluda **[Nombre]** de la Universidad Americana.",
    options: [
      { text: "No contesta", next: "NO_CONTESTA" },
      { text: "Modalidad Virtual", next: "MODALIDAD_VIRTUAL_001" },
      { text: "Modalidad Presencial", next: "MODALIDAD_PRESENCIAL_001" },
    ],
  },
  INICIO_002: {
    category: "Inicio",
    title: "Bievenida 2",
    series: false,
    messages: "Hola 👋🏻, soy [Nombre] de la Universidad Americana.",
 },
  INICIO_003: {
    category: "Inicio",
    title: "Bievenida 3",
    series: false,
    messages: "Hola 👋🏻, soy [Nombre] de la Universidad Americana.",
  },
  NO_CONTESTA: {
    category: "No contesta",
    title: "No contesta 1",
    series: false,
    messages: "",
  },
  MODALIDAD_VIRTUAL_001: {
    category: "Modalidad Virtual - DL",
    title: "Modalidad Virtual",
    series: true,
    messages: [
      "A través de la plataforma CANVAS ya tendrías todos los materiales de estudio tales como pdf, libros, videos explicativos, entre otros. Estaría habilitada para vos las 24hs del día. Podes conectarte en el horario que vos decidas e ir estudiando a tu ritmo. El costo de la cuota ya te incluye tus aranceles para exámenes parciales y finales y todos tus materiales de estudio",
      "Adicionalmente a esto, también tendrías un pequeño curso de nivelación en el cual desarrollarás una materia referente a la carrera de tu interés. Sería para que puedas aprender a utilizar la plataforma y también para que nosotros podamos tener en cuenta el nivel educacional que manejas actualmente.",
      "¿Hasta acá te queda todo claro lo que te mencioné? ",
    ],
  },
  MODALIDAD_VIRTUAL_002: {
    category: "Modalidad Virtual - DL",
    title: "Modalidad Virtual",
    series: true,
    messages: [
      "Perfecto, te comento otros puntos de la modalidad virtual",
      "Aquí no tendrás un horario fijo, ya que vos mismo estarías decidiendo que días y en qué horarios conectarte. Lo hacemos de esta forma justamente para brindarles mayor libertad a todos nuestros estudiantes en sus horarios 🤩",
      "Los únicos días establecidos que tendrías son para la entrega de trabajos, exámenes parciales y finales",
      "Pero vas a tener acceso a un calendario donde te indica todo eso una vez que ingreses a tu plataforma de estudios",
      "¿Tendrías alguna duda hasta aquí?",
    ],
  },
  MODALIDAD_VIRTUAL_003: {
    category: "Modalidad Virtual - DL",
    title: "Modalidad Virtual",
    series: true,
    messages: [
      "Excelente, entonces ahora te facilito todos los costos y la malla curricular.  ¿Me indicas dónde estás viviendo actualmente?",
      "De esta forma te menciono cual es la sede o espacio americana más cercano a vos con todos los costos y beneficios 🥳",
    ],
  },
  MODALIDAD_VIRTUAL_004: {
    category: "Modalidad Virtual - DL",
    title: "Modalidad Virtual",
    series: true,
    messages: [
      "**[NOMBRE DE CARRERA]**\n\n-Duración: X años\n-Inicio de clases: XX de Mes\n-Sede: XXX\n-Modalidad: Online\n\n**[MATRICULA PROMOCIONAL POR INICIO DE INSCRIPCION]**\n99.000 Gs.\n\n**[Cuota: XXX.XXXGs.]**",
      "Este costo ya te incluye todo lo que serían tus materiales de estudio, los accesos a las plataformas y también todos tus aranceles de exámenes parciales y finales 🥳",
    ],
    options: [{ text: "Cierre de Ventas", next: "CIERRE_VENTAS" }],
  },
  CIERRE_VENTAS: {
    category: "Cierre de Ventas",
    title: "Cierre de Ventas",
    series: false,
    messages: [
      "Te comento que de momento estamos realizando reservas de cupo en la matrícula promocional de los 99.000 Gs. ya que las inscripciones cierran el día viernes. Directamente con tus datos personales ya podemos reservarte un cupo.",
      "¿Te interesaría reservar un cupo?",
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
    messages: ["Seleccioná la modalidad a inscribir"],
    options: [
      { text: "Virtual", next: "INSCRIPCION_VIRTUAL" },
      { text: "Presencial", next: "INSCRIPCION_PRESENCIAL" },
    ],
  },
  INSCRIPCION_VIRTUAL: {
    category: "Inscripcion",
    title: "Inscripción Virtual",
    series: false,
    messages: [
      "Para dejar totalmente activa tu inscripción necesitamos estos datos y ya te estaremos reservando un cupo en la carrera de tu interés. \n\n•Nombre completo:\n•Número de cédula:\n•Número de contacto:\n•Fecha de nacimiento:\n•Correo electrónico:\n•Colegio de egreso:\n•Carrera de interés:\n•Espacio Americana:",
    ],
    options: [{ text: "Cierre de Ventas", next: "CIERRE_VENTAS_002" }],
  },
  INSCRIPCION_PRESENCIAL: {
    category: "Inscripcion",
    title: "Inscripción Presencial",
    series: false,
    messages: [
      "Para dejar totalmente activa tu inscripción necesitamos estos datos y ya te estaremos reservando un cupo en la carrera de tu interés. \n\n•Nombre completo:\n•Número de cédula:\n•Número de contacto:\n•Fecha de nacimiento:\n•Correo electrónico:\n•Colegio de egreso:\n•Carrera de interés:\n•Turno:",
    ],
    options: [{ text: "Cierre de Ventas", next: "CIERRE_VENTAS_002" }],
  },
  CIERRE_VENTAS_002: {
    category: "Cierre de Ventas",
    title: "Cierre de Ventas",
    series: true,
    messages: [
      "Lo único que nos faltaría es agendar el pago de tu matrícula promocional de los 99.000Gs",
      "¿Para qué día te queda bien agendar el pago?",
    ],
  },
  CIERRE_VENTAS_003: {
    category: "Cierre de Ventas",
    title: "Cierre de Ventas",
    series: true,
    messages: [
      "Agendamos el pago de tu matrícula promocional de los 99.000Gs para el día [día + número] de [mes]. Ante cualquier duda o consulta estoy a las órdenes",
    ],
  },
  OBJECIONES: {
    category: "Objeciones",
    title: "Objeciones",
    series: false,
    messages: ["Seleccioná el tipo de objeción mencionada"],
    options: [
      { text: "Económico", next: "OBJECIONES_ECON" },
      { text: "Distancia", next: "OBJECIONES_DISTANCIA" },
    ],
  },
  OBJECIONES_ECON: {
    category: "Objeciones",
    title: "Objeciones Económicas",
    series: false,
    messages: [
      "Para esta situación, recomendamos ofrecer llevar menos materias y comentar que con los cursos de verano puede regularizar.",
      "También podrías comentarle sobre la modalidad virtual **(en caso de que se oferte la carrera)**",
      "Por último, podrías mencionar sobre los descuentos mediante convenios",
    ],
  },
  OBJECIONES_DISTANCIA: {
    category: "Objeciones",
    title: "Objeciones por Distancia",
    series: false,
    messages: [
      "Para esta situación, recomendamos ofrecer la modalidad virtual **(en caso de oferta)**",
      "También podrías consultar por la posibilidad de vivir hacia alrededores",
    ],
  },
  MODALIDAD_PRESENCIAL_001: {
    category: "Modalidad Presencial - PR",
    title: "Modalidad Presencial",
    series: true,
    messages: [
      "Clases en vivo a través de la plataforma de Microsoft Teams de lunes a viernes. Sería con tus compañeros y con tus profesores en el horario que vos decidas, puede ser de mañana tarde o noche. A finales de marzo, ya tendrás tus clases de manera 100% presencial en la sede de Asunción. El costo de la cuota ya te incluye tus aranceles para exámenes parciales y finales",
      "Adicionalmente a esto, también tendrías un pequeño curso de nivelación en el cual desarrollarás una materia referente a la carrera de tu interés. Sería para que puedas aprender a utilizar la plataforma y también para que nosotros podamos tener en cuenta el nivel educacional que manejas actualmente.",
      "¿Hasta acá te queda todo claro lo que te mencioné?",
    ],
  },
  MODALIDAD_PRESENCIAL_002: {
    category: "Modalidad Presencial - PR",
    title: "Modalidad Presencial",
    series: true,
    messages: [
      "Excelente, entonces ahora te facilito todos los costos y la malla curricular.",
      "**[NOMBRE DE CARRERA]**\n\n-Duración: X años\n-Inicio de clases: XX de Mes\n-Sede: XXX\n-Modalidad: Presencial\n\n**[MATRICULA PROMOCIONAL POR INICIO DE INSCRIPCION]**\nXXX.000 Gs.\n\n**[Turno noche: (18:15 a 21:00hs)]**\n[Cuota: XXX.XXXGs.]",
      "Este costo ya te incluye todo lo que serían tus materiales de estudio, los accesos a las plataformas y también todos tus aranceles de exámenes parciales y finales 🥳",
    ],
    options: [{ text: "Cierre de Ventas", next: "CIERRE_VENTAS" }],
  },
  SOLICITUD_WHATSAPP: {
    category: "Solicitud WhatsApp",
    title: "WhatsApp",
    series: false,
    messages: ["Seleccioná el tipo de caso sucedido/necesitado"],
    options: [
      {
        text: "NO se logra dar información, pide todo por escrito",
        next: "SOLICITUD_WHATSAPP_001",
      },
      {
        text: "Solicita todo lo hablado, por escrito",
        next: "SOLICITUD_WHATSAPP_002",
      },
    ],
  },
  SOLICITUD_WHATSAPP_001: {
    category: "Solicitud WhatsApp",
    title: "WhatsApp",
    series: false,
    messages: [
      "Hola 👋🏻, te saluda [Nombre] de la Universidad Americana.",
      "Te paso todos los costos y también como sería la modalidad de estudio para que puedas tener mayor conocimiento.",
      "Te consulto primeramente, ¿ya fuiste [alumno/a] de la Univ. Americana en algún momento o ya abonaste por matrícula anteriormente? 😊",
    ],
  },
  SOLICITUD_WHATSAPP_002: {
    category: "Solicitud WhatsApp",
    title: "WhatsApp",
    series: false,
    messages: [
      "Hola 👋🏻, te saluda [Nombre] de la Universidad Americana.",
      "Te paso un resumen de todo lo que conversamos para que lo puedas tener por escrito y también para poder dejarte mi número de contacto ante cualquier duda o consulta que tengas.",
    ],
  },
  SERVICIOS: {
    category: "Servicios",
    title: "Servicios",
    series: false,
    messages: [
      "Para esta clase de situaciones, tenemos una línea gratuita para nuestros alumnos, sería el *8263 opción 1 o también al 021 729 4900 en el cual podrás comunicarte con centro de atención al estudiante, de esa manera tendrás retorno para tus dudas 🤩",
      "Podes comunicarte al *8263 opción 1 o también al 021 729 4900 que sería la opción para comunicarte con el centro de atención al estudiante, de esa manera tendrás retorno para tus dudas 🤩",
    ],
  },
  BIENVENIDA: {
    category: "Bienvenida",
    title: "Bienvenida",
    series: false,
    messages: [
      "¡Genial! Verificamos que el pago ingresó sin inconvenientes. Desde ya te damos la bienvenida a la Universidad Americana y te recordamos que estamos para acompañarte y ayudarte en todo lo que necesites en este nuevo desafío.📚",
      "Te comento que por correo electrónico te estarán llegando tus contraseñas y nombres de usuarios",
      "Podes ingresar al siguiente enlace en tu portal alumno para visualizar tus facturas, verificar tus calificaciones, abonar por tus aranceles e inscribirte para tus siguientes periodos:\n\n[https://portal.americana.edu.py/inicioEstudiantes.aspx](https://portal.americana.edu.py/inicioEstudiantes.aspx)",
    ],
  },
  PENDIENTE_DE_PAGO: {
    category: "Pendiente de Pago",
    title: "Seguimiento 1",
    series: true,
    messages: [
      "Hola [nombre], te saluda de nuevo [Nombre] de la Universidad Americana.",
      "Te recuerdo que habíamos agendado el pago de tu matrícula promocional de los 99.000Gs para hoy. Si tenes algún inconveniente o duda por favor no dudes en consultarme",
      "Una vez que puedas realizar el pago, lo único que te estaría solicitando es el comprobante a modo de corroborar que haya ingresado correctamente 😁.",
    ],
  },
  PENDIENTE_DE_PAGO_02: {
    category: "Pendiente de Pago",
    title: "Seguimiento 2",
    series: true,
    messages: [
      "Hola [nombre], te saluda de nuevo [Nombre] de la Universidad Americana.",
      "¿Lograste abonar por tu matrícula promocional de los 99.000Gs?",
    ],
  },
  PENDIENTE_DE_PAGO_03: {
    category: "Pendiente de Pago",
    title: "Seguimiento 3",
    series: true,
    messages: [
      "Hola [nombre], soy [Nombre] de la Universidad Americana nuevamente.",
      "Quería saber si es que llegaste a abonar por tu matrícula promocional de 99.000Gs, o si no para poder ceder el cupo a otro interesado, ya que se están agotando los lugares 😢",
    ],
  },
  PENDIENTE_DE_PAGO_04: {
    category: "Pendiente de Pago",
    title: "Seguimiento 4",
    series: true,
    messages: [
      "Hola [nombre], ¿Cómo estás?. Te saluda [Nombre] de la Universidad Americana.",
      "Te comento que la promoción de los 99.000Gs de momento ya no está habilitada. Si es que estás [interesado/a] aún, puedo ver de que te habiliten de nuevo en el momento que vas a pagar, así te sale ese monto",
      "¿Te interesaría aún seguir una carrera de grado con nosotros?",
    ],
  },
  // Add more scenarios here
};
