import type { Languages, Messages } from '@/constants/types'
import { reactive } from 'vue'

// locales.ts
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
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph2: {
        title: 'Título de la página 1 2',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph3: {
        title: 'Título de la página 1 3',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph4: {
        title: 'Título de la página 1 4',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph5: {
        title: 'Título de la página 1 5',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
    },
    page2: {
      paragraph1: {
        title: 'Título de la página 2 1',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph2: {
        title: 'Título de la página 2 2',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph3: {
        title: 'Título de la página 2 3',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph4: {
        title: 'Título de la página 2 4',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
      paragraph5: {
        title: 'Título de la página 2 5',
        text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
      },
    },
  },
})
