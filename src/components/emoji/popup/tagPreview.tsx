import { component$ } from "@builder.io/qwik";

interface TagPreviewProps {
  tags: string[];
}

export default component$((props: TagPreviewProps) => {
  return (
    <div class="flex w-full gap-1">
      {props.tags.map((t) => (
        <span
          key={t}
          class="flex-1 rounded-sm bg-slate-300 p-2 text-center capitalize dark:bg-slate-700"
        >
          {t}
        </span>
      ))}
    </div>
  );
});
