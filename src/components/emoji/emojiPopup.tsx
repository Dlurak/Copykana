import { component$, type QRL } from "@builder.io/qwik";
import { FaIcon } from "qwik-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { emojiList, type emojiType } from "~/constants/emoji";

interface EmojiPopupProps {
    emoji: emojiType;
    onClose: QRL<() => void>;
}

export default component$((props: EmojiPopupProps) => {
  const tags = emojiList[props.emoji];

  return (
    <div class="fixed bottom-2 left-2 flex max-w-full flex-col items-stretch gap-3 rounded-md bg-slate-200 p-4 shadow-2xl dark:bg-slate-800">
      <div class="flex items-center justify-between gap-4">
        <h3 class="text-lg font-semibold">{props.emoji}</h3>

        <button onClick$={props.onClose}>
          <FaIcon icon={faWindowClose} class="h-6 cursor-pointer" />
        </button>
      </div>

      <div class="flex w-full gap-1">
        {tags.map((t) => (
          <span
            key={t}
            class="flex-1 rounded-sm bg-slate-300 p-2 text-center capitalize dark:bg-slate-700"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
});
