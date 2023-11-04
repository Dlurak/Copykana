import { component$, Slot, type QRL } from "@builder.io/qwik";

interface BaseButtonProps {
  onClick$: QRL<() => void>;
}

export default component$((props: BaseButtonProps) => {
  return (
    <button
      class="w-full flex-1 rounded-sm bg-slate-300 px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
      onClick$={props.onClick$}
    >
      <Slot />
    </button>
  );
});
