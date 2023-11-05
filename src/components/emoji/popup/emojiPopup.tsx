import { component$, useSignal, type QRL, $, useTask$ } from "@builder.io/qwik";
import { FaIcon } from "qwik-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { emojiList, type emojiType } from "~/constants/emoji";
import TagPreview from "./tagPreview";
import ShareOptions from "./shareOptions";

interface EmojiPopupProps {
  emoji: emojiType;
  onClose: QRL<() => void>;
}

export default component$((props: EmojiPopupProps) => {
  const tags = emojiList[props.emoji];

  const communicationText = useSignal<null | string>(null);

  useTask$(({ track }) => {
    track(() => props.emoji);
    communicationText.value = null;
  });

  const onCopy = $(() => {
    communicationText.value = "Copied!";
    setInterval(() => (communicationText.value = null), 5_000);
  });

  return (
    <div class="fixed bottom-2 right-2 flex max-w-full flex-col items-stretch gap-3 rounded-md bg-slate-200 p-4 shadow-2xl dark:bg-slate-800">
      <div class="flex items-center justify-between gap-4">
        <h3 class="text-lg font-semibold">{props.emoji}</h3>

        <button
          onClick$={() => {
            communicationText.value = null;
            props.onClose();
          }}
        >
          <FaIcon icon={faWindowClose} class="h-6" />
        </button>
      </div>

      <TagPreview tags={tags} />

      <ShareOptions text={props.emoji} onCopy={onCopy} />

      <p class="text-center text-emerald-800 empty:hidden dark:text-emerald-300">
        {communicationText.value}
      </p>
    </div>
  );
});
