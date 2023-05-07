import type { SpeakConfig } from 'qwik-speak';

export const config: SpeakConfig = {
  defaultLocale: { lang: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles' },
  supportedLocales: [
    { lang: 'pt-BR', currency: 'BRL', timeZone: 'America/Sao_Paulo' },
    { lang: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles' }
  ],
  assets: [
    'home',
    'examplea',
    'exampleb' // Translations shared by the pages
  ]
};