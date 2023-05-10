import type { SpeakConfig } from 'qwik-speak'

export const supportedLocales = [
  { lang: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles' },
  { lang: 'pt-BR', currency: 'BRL', timeZone: 'America/Sao_Paulo' }
]

export const config: SpeakConfig = {
  defaultLocale: supportedLocales[0],
  supportedLocales,
  assets: ['app'],
  runtimeAssets: ['app']
}
