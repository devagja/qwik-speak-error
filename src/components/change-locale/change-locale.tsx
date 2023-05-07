import { component$, $ } from '@builder.io/qwik';
import {  useSpeakConfig, SpeakLocale } from 'qwik-speak';

export const ChangeLocale = component$(() => {
  const config = useSpeakConfig();

  const changeLocale$ = $((newLocale: SpeakLocale) => {
    // Store locale in a cookie 
    document.cookie = `locale=${JSON.stringify(newLocale)};max-age=86400;path=/`;

    location.reload();
  });

  return (
    <div class='flex flex-row gap-2 mb-4'>
      {config.supportedLocales.map(value => (
        <button key={value.lang} onClick$={async () => await changeLocale$(value)}>
          {value.lang}
        </button>
      ))}
    </div>
  );
});