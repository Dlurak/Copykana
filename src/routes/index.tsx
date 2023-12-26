import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import EmojiGrid from "~/components/emoji/emojiGrid";
import EmojiPopup from "~/components/emoji/popup/emojiPopup";
import TagSelector from "~/components/tags/tagSelector";
import { type tag, tags, type emojiType } from "~/constants/emoji";

export default component$(() => {
  const selectedTags = useSignal<tag[]>([]);
  const selectedEmoji = useSignal<null | emojiType>(null);
  const favouriteFilterIsApplied = useSignal(false);

  const tagChangeFunc = $((tags: tag[]) => {
    selectedTags.value = tags.filter((t) => t !== "favourite");
    favouriteFilterIsApplied.value = tags.includes("favourite");
  });
  const emojiClickFunc = $((emoji: emojiType) => {
    selectedEmoji.value = emoji;
  });
  const popupCloseFunc = $(() => {
    selectedEmoji.value = null;
  });

  return (
    <>
      <TagSelector tags={tags} onChange={tagChangeFunc} />
      <hr class="mb-4 mt-3 rounded-full" />
      <EmojiGrid
        tags={selectedTags.value}
        onClick={emojiClickFunc}
        appyFavFilter={favouriteFilterIsApplied.value}
      />

      {selectedEmoji.value && (
        <EmojiPopup emoji={selectedEmoji.value} onClose={popupCloseFunc} />
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: "Copykana",
  meta: [
    {
      name: "description",
      content: "Copykana is a tool to copy and share text based emoji.",
    },
  ],
};
