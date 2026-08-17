import { Video } from "lucide-react";

export const activities = [
  {
    name: 'Boxeo',
    color: '#F9A8D4',
    image: '/images/boxeo.jpg',
    tag: 'Potencia',
    text: 'Técnica, reflejos y resistencia para liberar tu mejor versión.',
    video: '/videos/hero-boxing.mp4',
  },
  {
    name: 'Funcional',
    color: '#AED581',
    image: '/images/funcional.jpg',
    tag: 'Intensidad',
    text: 'Circuitos dinámicos que entrenan cada músculo y cada movimiento.',
    video: '/videos/hero-funcional.mp4',
  },
  {
    name: 'Calistenia',
    color: '#81D4FA',
    image: '/images/calistenia.jpg',
    tag: 'Control',
    text: 'Dominá tu cuerpo con progresiones de fuerza y movilidad.',
  },
  {
    name: 'Danza',
    color: '#FFF176',
    image: '/images/danza.jpg',
    tag: 'Energía',
    text: 'Ritmo, coordinación y cardio en una clase que no se siente como rutina.',
  },
  {
    name: 'Taekwondo',
    color: '#FFB74D',
    image: null,
    tag: 'Casual / Competitivo',
    text: 'Disciplina, técnica y preparación física para todos los niveles.',
  },
  {
    name: 'Telas',
    color: '#E0E0E0',
    image: null,
    tag: 'Aéreo',
    text: 'Fuerza, flexibilidad y expresión corporal suspendido en el aire.',
  },
  {
    name: 'Acrobacia',
    color: '#FFCDD2',
    image: '/images/acrobacia.jpg',
    tag: 'Coordinación',
    text: 'Ejercicios de equilibrio y flexibilidad para desafiar tu cuerpo.',
  },
]
// DIAS Y HORARIOS

export const days = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
]

export const classes = {
  Lunes: [
    {
      time: '07:00',
      activity: 'Funcional',
      teacher: 'Javier Pérez',
    },
    {
      time: '17:00',
      activity: 'Telas',
      teacher: 'Celeste Gómez'
    },
    {
      time: '18:00',
      activity: 'Boxeo',
      teacher: 'Manuel Álvarez',
    },
    {
      time: '20:00',
      activity: 'Calistenia',
      teacher: 'Roma Giménez',
    }
  ],

  Martes: [
    {
      time: '09:00',
      activity: 'Danza',
      teacher: 'Alexandra Path',
    },
    {
      time: '18:30',
      activity: 'Funcional',
      teacher: 'Javier Pérez',
    },
    {
      time: '20:30',
      activity: 'Boxeo',
      teacher: 'Manuel Álvarez',
    },
  ],

  Miércoles: [
    {
      time: '07:00',
      activity: 'Funcional',
      teacher: 'Javier Pérez',
    },
    {
      time: '18:00',
      activity: 'Boxeo',
      teacher: 'Manuel Álvarez',
    },
    {
      time: '20:00',
      activity: 'Calistenia',
      teacher: 'Roma Giménez',
    },
  ],

  Jueves: [
    {
      time: '09:00',
      activity: 'Danza',
      teacher: 'Alexandra Path',
    },
    {
      time: '18:30',
      activity: 'Funcional',
      teacher: 'Javier Pérez',
    },
    {
      time: '20:30',
      activity: 'Boxeo',
      teacher: 'Manuel Álvarez',
    },
  ],

  Viernes: [
    {
      time: '08:00',
      activity: 'Calistenia',
      teacher: 'Roma Giménez',
    },
    {
      time: '18:00',
      activity: 'Funcional',
      teacher: 'Javier Pérez',
    },
    {
      time: '20:00',
      activity: 'Boxeo',
      teacher: 'Manuel Álvarez',
    },
  ],

  Sábado: [
    {
      time: '09:00',
      activity: 'Funcional',
      teacher: 'Javier Pérez',
    },
    {
      time: '11:00',
      activity: 'Danza',
      teacher: 'Alexandra Path',
    },
    {
      time: '12:00',
      activity: 'Telas',
      teacher: 'Celeste Gómez'
    },
    {
      time: '13:00',
      activity: 'Boxeo',
      teacher: 'Manuel Álvarez',
    },
  ],
}

export const plans = [
  { name: 'Boxeo', price: '25.000', priceClass:'3.000', note: 'La experiencia completa', featured: false, features: ['Más de 7 bolsas', 'Clases todos los días de la semana', 'Recreativo y Profesional'] },
  { name: 'Funcional', price: '20.000', priceClass:'2.500', note: 'Entrenamiento integral', featured: false, features: ['Circuitos dinámicos', 'Clases todos los días de la semana', 'Entrenamiento personalizado'] },
  { name: 'Calistenia', price: '22.000', priceClass:'2.800', note: 'Fuerza y control corporal', featured: false, features: ['Progresiones de fuerza', 'Clases todos los días de la semana', 'Entrenamiento personalizado'] },
  { name: 'Danza', price: '18.000', priceClass:'2.200', note: 'Ritmo y coordinación', featured: false, features: ['Clases de danza variadas', 'Clases todos los días de la semana', 'Entrenamiento personalizado'] },
  { name: 'Taekwondo', price: '23.000', priceClass:'2.900', note: 'Defensa personal y disciplina', featured: false, features: ['Técnicas de defensa personal', 'Clases todos los días de la semana', 'Entrenamiento personalizado'] },
  { name: 'Telas', price: '24.000', priceClass:'3.100', note: 'Aéreo y acrobático', featured: false, features: ['Técnicas de telas aéreas', 'Clases todos los días de la semana', 'Entrenamiento personalizado'] },
  { name: 'Acrobacia', price: '21.000', priceClass:'2.700', note: 'Equilibrio y flexibilidad', featured: false, features: ['Ejercicios de equilibrio y flexibilidad', 'Clases todos los días de la semana', 'Entrenamiento personalizado'] },
]

export const equipmentVideos = [
  { src: '/videos/equippment/equipment-boxeo.mp4', alt: 'Bolsas de boxeo' },
  { src: '/videos/equippment/equipment-calistenia.mp4', alt: 'calistenia'},
  { src: '/videos/equippment/equipment-funcional.mp4', alt:'funcional'},
]

