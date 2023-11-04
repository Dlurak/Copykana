import { component$, useSignal, type QRL, $ } from "@builder.io/qwik";
import type { tag } from "~/constants/emoji";

interface TagSelectorButtonProps {
  tag: tag;
  onChange?: QRL<(tag: tag, isSelected: boolean) => void>;
}

const TagSelectorButton = component$((props: TagSelectorButtonProps) => {
  const isSelected = useSignal(false);

  const normalBg =
    "bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700";
  const selectedBg =
    "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600";

  return (
    <button
      class={`${
        isSelected.value ? selectedBg : normalBg
      } rounded-sm p-1 capitalize transition-colors duration-300 ease-in-out`}
      onClick$={() => {
        isSelected.value = !isSelected.value;
        if (props.onChange) {
          props.onChange(props.tag, isSelected.value);
        }
      }}
    >
      {props.tag}
    </button>
  );
});

interface TagSelectorProps {
  tags: Readonly<tag[]>;
  onChange?: QRL<(selectedTags: tag[]) => void>;
}

export default component$((props: TagSelectorProps) => {
  const selectedTags = useSignal<tag[]>([]);

  const onChangeFunc = $((t: tag) => {
    const isCurrentlySelected = selectedTags.value.includes(t);
    if (isCurrentlySelected) {
      selectedTags.value = selectedTags.value.filter((tag) => tag !== t);
    } else {
      selectedTags.value = [...selectedTags.value, t];
    }

    if (props.onChange) {
      props.onChange(selectedTags.value);
    }
  });

  return (
    <div class="flex w-full gap-2 overflow-x-scroll">
      {props.tags.map((t) => (
        <span key={t}>
          <TagSelectorButton tag={t} onChange={onChangeFunc} />
        </span>
      ))}
    </div>
  );
});
