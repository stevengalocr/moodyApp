export interface Tip {
  title: string;
  description: string;
  icon: string;
}

export interface EmotionTips {
  name: string;
  color: string;
  tips: Tip[];
}

export const EMOTION_TIPS: EmotionTips[] = [
  {
    name: 'Feliz',
    color: '#FFF9C4',
    tips: [
      { title: 'Agradece conscientemente', description: 'Escribe 3 cosas por las que estás agradecido hoy.', icon: 'feliz' },
      { title: 'Comparte tu alegría', description: 'Llama a un ser querido o comparte una historia positiva.', icon: 'feliz' },
      { title: 'Haz algo que ames', description: 'Aprovecha tu energía para un hobby o actividad creativa.', icon: 'feliz' },
      { title: 'Muévete con alegría', description: 'Baila, haz ejercicio o sal a caminar disfrutando el momento.', icon: 'feliz' },
      { title: 'Celebra sin culpa', description: 'Permítete disfrutar sin sentirte obligado a “hacer más”.', icon: 'feliz' },
      { title: 'Crea recuerdos', description: 'Toma una foto o escribe en tu diario este buen momento.', icon: 'feliz' },
      { title: 'Ayuda a alguien', description: 'Pequeños actos de bondad potencian tu bienestar.', icon: 'feliz' },
      { title: 'Disfruta el presente', description: 'Haz una pausa y simplemente respira y observa a tu alrededor.', icon: 'feliz' },
      { title: 'Cuida tu energía', description: 'No te sobrecargues solo porque estás de buen humor.', icon: 'feliz' },
      { title: 'Visualiza tu futuro', description: 'Usa este estado para soñar y planear con optimismo.', icon: 'feliz' }
    ]
  },
  {
    name: 'Triste',
    color: '#DCD7F9',
    tips: [
      { title: 'Permítete sentir', description: 'No te obligues a estar bien de inmediato.', icon: 'triste' },
      { title: 'Abraza el silencio', description: 'Medita o quédate en un lugar tranquilo.', icon: 'triste' },
      { title: 'Habla con alguien', description: 'No tienes que cargar con todo tú solo.', icon: 'triste' },
      { title: 'Llora si lo necesitas', description: 'Es un acto de sanación, no de debilidad.', icon: 'triste' },
      { title: 'Consiéntete', description: 'Una ducha caliente, una manta suave, una comida reconfortante.', icon: 'triste' },
      { title: 'Busca la naturaleza', description: 'Ver árboles, cielo o agua puede ayudarte mucho.', icon: 'triste' },
      { title: 'Evita tomar decisiones grandes', description: 'Tu claridad emocional es temporal.', icon: 'triste' },
      { title: 'Haz algo pequeño y bonito por ti', description: 'Pintarte las uñas, regar una planta, ordenar tu espacio.', icon: 'triste' },
      { title: 'Conecta con recuerdos felices', description: 'Fotos, música, aromas familiares.', icon: 'triste' },
      { title: 'Recuerda: esto también pasará', description: 'La tristeza no es permanente.', icon: 'triste' }
    ]
  },
  {
    name: 'Ansioso',
    color: '#D2F5E3',
    tips: [
      { title: 'Practica respiración diafragmática', description: 'Lleva el aire al abdomen.', icon: 'ansioso' },
      { title: 'Haz “descarga mental”', description: 'Escribe tus pendientes para sacarlos de la cabeza.', icon: 'ansioso' },
      { title: 'Haz contacto físico con algo frío', description: 'Agua fría o hielo te anclan.', icon: 'ansioso' },
      { title: 'Reduce estímulos', description: 'Baja volumen, evita pantallas fuertes.', icon: 'ansioso' },
      { title: 'Haz grounding', description: 'Camina descalzo, toca una planta, siente una textura.', icon: 'ansioso' },
      { title: 'Usa aromaterapia relajante', description: 'Lavanda, eucalipto, menta.', icon: 'ansioso' },
      { title: 'Visualiza tu lugar seguro', description: 'Cierra los ojos e imagina un lugar donde sientas paz.', icon: 'ansioso' },
      { title: 'Haz actividades repetitivas', description: 'Colorear, tejer, lavar platos.', icon: 'ansioso' },
      { title: 'Habla de tus sensaciones', description: 'No las ignores ni te culpes.', icon: 'ansioso' },
      { title: 'Recuerda: no estás solo y esto no durará para siempre', description: '', icon: 'ansioso' }
    ]
  },
  {
    name: 'Estresado',
    color: '#D7E1F2',
    tips: [
      { title: 'Haz una pausa activa', description: 'Estiramientos, caminar 5 min, respirar profundo.', icon: 'estresado' },
      { title: 'Reorganiza tus tareas', description: 'Prioriza, delega o elimina si es posible.', icon: 'estresado' },
      { title: 'Evita multitasking', description: 'Enfócate en una cosa a la vez.', icon: 'estresado' },
      { title: 'Date un break digital', description: 'Aléjate del celular por 30 minutos.', icon: 'estresado' },
      { title: 'Hidrátate y come algo nutritivo', description: 'No subestimes tu cuerpo.', icon: 'estresado' },
      { title: 'Haz journaling de descarga', description: 'Escribe qué te sobrepasa.', icon: 'estresado' },
      { title: 'Desahoga sin culpa', description: 'Puedes quejarte un rato, no te lo guardes todo.', icon: 'estresado' },
      { title: 'Agéndate un momento de placer', description: 'Una serie, baño relajante, un snack rico.', icon: 'estresado' },
      { title: 'Evita cafeína o azúcar en exceso', description: 'Pueden aumentar el estrés.', icon: 'estresado' },
      { title: 'Reconoce que estás haciendo lo mejor que puedes', description: '', icon: 'estresado' }
    ]
  },
  {
    name: 'Enojado',
    color: '#FFD6D6',
    tips: [
      { title: 'Respira profundamente', description: 'Inhala por 4, exhala por 6 durante 3 minutos.', icon: 'enojado' },
      { title: 'Escribe sin filtro', description: 'Libera emociones en un diario sin juzgarte.', icon: 'enojado' },
      { title: 'Haz ejercicio fuerte', description: 'Libera la tensión con movimiento intenso.', icon: 'enojado' },
      { title: 'Escucha música instrumental', description: 'Calma tu sistema nervioso.', icon: 'enojado' },
      { title: 'Toma distancia', description: 'Si algo te hizo enojar, aléjate antes de reaccionar.', icon: 'enojado' },
      { title: 'Identifica el origen', description: '¿Qué te hizo sentir así realmente?', icon: 'enojado' },
      { title: 'Practica afirmaciones de calma', description: '“Estoy a salvo. Esta emoción pasará.”', icon: 'enojado' },
      { title: 'Evita confrontaciones impulsivas', description: 'No envíes ese mensaje aún.', icon: 'enojado' },
      { title: 'Usa el humor', description: 'A veces, una sonrisa interna cambia el enfoque.', icon: 'enojado' },
      { title: 'Date un espacio físico', description: 'Camina solo o sal al aire libre.', icon: 'enojado' }
    ]
  },
  {
    name: 'Preocupado',
    color: '#E3E4FA',
    tips: [
      { title: 'Haz una lista de lo que puedes controlar', description: 'Y deja ir lo demás.', icon: 'preocupado' },
      { title: 'Ancla al presente', description: '5 cosas que ves, 4 que sientes, 3 que escuchas...', icon: 'preocupado' },
      { title: 'Respira cuadrado', description: '4 segundos inhalar, 4 sostener, 4 exhalar, 4 sostener.', icon: 'preocupado' },
      { title: 'Habla con alguien de confianza', description: 'A veces decirlo en voz alta alivia.', icon: 'preocupado' },
      { title: 'Evita sobreinformarte', description: 'Desactiva notificaciones si te alteran.', icon: 'preocupado' },
      { title: 'Crea un plan de acción', description: '¿Qué paso pequeño puedes dar hoy?', icon: 'preocupado' },
      { title: 'Aférrate a una rutina', description: 'Te da seguridad y previsibilidad.', icon: 'preocupado' },
      { title: 'Haz un ritual de calma nocturno', description: 'Té, lectura ligera, velas suaves.', icon: 'preocupado' },
      { title: 'Repite mantras', description: '“Lo que temo no ha ocurrido. Estoy a salvo ahora.”', icon: 'preocupado' },
      { title: 'Acude a apoyo profesional si es frecuente', description: 'La terapia no es solo para crisis.', icon: 'preocupado' }
    ]
  }
];
