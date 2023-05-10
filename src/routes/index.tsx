import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Speak, $translate as t } from 'qwik-speak';

export default component$(() => {
  return (
    <>
      <Speak assets={['home']} runtimeAssets={['home']}>
        <div>{t('home.text')} </div>
      </Speak>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
