import { component$, useSignal, type QRL } from "@builder.io/qwik";
import { type tag, type emojiType, emojiList } from "~/constants/emoji";
import Emoji from "./emoji";
import { filterEmoji } from "./filterEmoji";
import { getFavourites } from "./favourites";

const allEmoji = Object.keys(emojiList) as emojiType[];

interface EmojiGridProps {
  tags: tag[];
  appyFavFilter: boolean;
  onClick: QRL<(emoji: emojiType) => void>;
}

export default component$((props: EmojiGridProps) => {
  return (
    <div class="flex flex-wrap gap-2">
      {filterEmoji(
        props.tags,
        props.appyFavFilter ? getFavourites() : allEmoji,
      ).map((emoji) => (
        <span key={emoji}>
          <Emoji emoji={emoji} onClick={props.onClick} />
        </span>
      ))}
    </div>
  );
});
