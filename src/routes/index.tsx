import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import EmojiGrid from "~/components/emoji/emojiGrid";
import TagSelector from "~/components/tags/tagSelector";
import { type tag, tags } from "~/constants/emoji";

export default component$(() => {
  const selectedTags = useSignal<tag[]>([]);
  const tagChangeFunc = $((tags: tag[]) => {
    selectedTags.value = tags;
  });

  return (
    <>
      <TagSelector tags={tags} onChange={tagChangeFunc} />
      <hr class="mb-4 mt-3 rounded-full" />
      <EmojiGrid tags={selectedTags.value} />
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
