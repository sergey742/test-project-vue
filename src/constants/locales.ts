import { reactive } from 'vue'

import type { Languages, Messages } from '@/constants/types'

export const messages: Record<Languages, Messages> = reactive({
  en: {
    header: {
      appTitle: 'Test Project Vue',
      navigation: {
        page1: 'Page 1',
        page2: 'Page 2',
      },
    },
    page1: {
      paragraph1: {
        title: 'Page 1 Title 1',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph2: {
        title: 'Page 1 Title 2',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph3: {
        title: 'Page 1 Title 3',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph4: {
        title: 'Page 1 Title 4',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph5: {
        title: 'Page 1 Title 5',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph6: {
        title: 'Page 1 Title 6',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph7: {
        title: 'Page 1 Title 7',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph8: {
        title: 'Page 1 Title 8',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph9: {
        title: 'Page 1 Title 9',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph10: {
        title: 'Page 1 Title 10',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
    },
    page2: {
      paragraph1: {
        title: 'Page 2 Title 1',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph2: {
        title: 'Page 2 Title 2',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph3: {
        title: 'Page 2 Title 3',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph4: {
        title: 'Page 2 Title 4',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph5: {
        title: 'Page 2 Title 5',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph6: {
        title: 'Page 2 Title 6',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph7: {
        title: 'Page 2 Title 7',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph8: {
        title: 'Page 2 Title 8',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph9: {
        title: 'Page 2 Title 9',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph10: {
        title: 'Page 2 Title 10',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
    },
  },
  es: {
    header: {
      appTitle: 'Test Project Vue Espanol',
      navigation: {
        page1: 'Página 1',
        page2: 'Página 2',
      },
    },
    page1: {
      paragraph1: {
        title: 'Título de la página 1 1',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph2: {
        title: 'Título de la página 1 2',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph3: {
        title: 'Título de la página 1 3',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph4: {
        title: 'Título de la página 1 4',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph5: {
        title: 'Título de la página 1 5',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph6: {
        title: 'Título de la página 1 6',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph7: {
        title: 'Título de la página 1 7',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph8: {
        title: 'Título de la página 1 8',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph9: {
        title: 'Título de la página 1 9',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph10: {
        title: 'Título de la página 1 10',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
    },
    page2: {
      paragraph1: {
        title: 'Título de la página 2 1',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph2: {
        title: 'Título de la página 2 2',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph3: {
        title: 'Título de la página 2 3',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph4: {
        title: 'Título de la página 2 4',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph5: {
        title: 'Título de la página 2 5',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph6: {
        title: 'Título de la página 2 6',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph7: {
        title: 'Título de la página 2 7',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph8: {
        title: 'Título de la página 2 8',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph9: {
        title: 'Título de la página 2 9',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
      paragraph10: {
        title: 'Título de la página 2 10',
        text: 'Cada texto incluye ejercicios con preguntas para evaluar la comprensión lograda. Esto te permitirá reforzar tu vocabulario, mejorar la gramática y reconocer expresiones propias del español.',
      },
    },
  },
})
