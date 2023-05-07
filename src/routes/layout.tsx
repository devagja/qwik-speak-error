import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { ChangeLocale } from '~/components/change-locale/change-locale';


export default component$(() => {
  return (
    <>
      <div class='w-full'>
        <div class='w-[480px] m-auto p-4 bg-slate-100 mt-4'>
          <ChangeLocale />
          <div class='flex flex-row gap-2 mb-4'>
            <Link href='/'>Home</Link>
            <Link href='/examplea'>Example A</Link>
            <Link href='/exampleb'>Example B</Link>
          </div>
          <Slot />
        </div>
      </div>
    </>
  );
});
