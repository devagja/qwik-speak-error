import { component$ } from '@builder.io/qwik';
import { Speak, $translate as t } from 'qwik-speak';

export default component$(() => {
  return (
    <Speak assets={['exampleb']} runtimeAssets={['exampleb']}>
      {t('exampleb.text')}
    </Speak>
  );
});
