export const scriptData = {
  INICIO: {
    category: "Inicio",
    message:
      "Hola, te saluda [Nombre] de la Universidad Americana. ¿En qué puedo ayudarte hoy?",
    options: [
      { text: "Solicitud de información", next: "SOLICITUD_INFO" },
      { text: "No contesta", next: "NO_CONTESTA" },
      { text: "Modalidad Virtual", next: "MODALIDAD_VIRTUAL" },
    ],
  },
  SOLICITUD_INFO: {
    category: "Solicitud de Información",
    message:
      "Te paso todos los costos y también cómo sería la modalidad de estudio para que puedas tener mayor conocimiento. Te consulto primeramente, ¿ya fuiste [alumno/a] de la Univ. Americana en algún momento o ya abonaste por matrícula anteriormente? ☺",
    options: [
      { text: "Es alumno anterior", next: "ALUMNO_ANTERIOR" },
      { text: "Nuevo alumno", next: "NUEVO_ALUMNO" },
      { text: "Solicita más información", next: "MAS_INFO" },
    ],
  },
  NO_CONTESTA: {
    category: "No Contesta",
    message:
      "Hola, te saluda [Nombre] de la Universidad Americana. Te escribo por este medio ya que estuviste dejando tu interés en seguir la carrera de [Nombre Carrera]. ¿Ya lograste recibir información o conversar con un asesor?",
    options: [
      { text: "Responde", next: "RESPONDE_NO_CONTESTA" },
      { text: "No responde", next: "NO_RESPONDE" },
      { text: "Solicita llamada", next: "SOLICITA_LLAMADA" },
    ],
  },
  MODALIDAD_VIRTUAL: {
    category: "Modalidad Virtual",
    message:
      "Te explico como sería la modalidad online para que puedas tener una idea más clara 🤩 A través de la plataforma CANVAS ya tendrías todos los materiales de estudio tales como pdf, libros, videos explicativos, entre otros. Estaría habilitada para vos las 24hs del día. ¿Hasta acá te queda todo claro lo que te mencioné?",
    options: [
      { text: "Sí, está claro", next: "MODALIDAD_VIRTUAL_CLARA" },
      { text: "Necesita más explicación", next: "EXPLICACION_ADICIONAL" },
      { text: "Preguntar por costos", next: "COSTOS_MODALIDAD_VIRTUAL" },
    ],
  },
  ALUMNO_ANTERIOR: {
    category: "Alumno Anterior",
    message:
      "¡Qué bueno volver a contactarte! Como ya conoces nuestra universidad, te cuento las novedades que tenemos para este año...",
    options: [
      { text: "Continuar estudios", next: "CONTINUAR_ESTUDIOS" },
      { text: "Nueva carrera", next: "NUEVA_CARRERA" },
      { text: "Información de becas", next: "INFO_BECAS" },
    ],
  },
  NUEVO_ALUMNO: {
    category: "Nuevo Alumno",
    message:
      "¡Bienvenido a la Universidad Americana! Estamos emocionados de que estés considerando estudiar con nosotros. ¿Sobre qué carrera te gustaría recibir información?",
    options: [
      { text: "Carreras de grado", next: "CARRERAS_GRADO" },
      { text: "Carreras de posgrado", next: "CARRERAS_POSGRADO" },
      { text: "Cursos cortos", next: "CURSOS_CORTOS" },
    ],
  },
  COSTOS_MODALIDAD_VIRTUAL: {
    category: "Costos Modalidad Virtual",
    message:
      "Los costos de nuestra modalidad virtual son muy accesibles. Para la carrera de [Nombre Carrera], la matrícula tiene un costo promocional de 99.000 Gs. y cada materia cuesta 405.000 Gs. ¿Te gustaría que te enviara más detalles sobre el plan de pagos?",
    options: [
      { text: "Sí, enviar detalles", next: "ENVIAR_DETALLES_PAGO" },
      { text: "No, tengo otra pregunta", next: "OTRA_PREGUNTA" },
      { text: "Quiero inscribirme", next: "PROCESO_INSCRIPCION" },
    ],
  },
  // Add more scenarios here
};
