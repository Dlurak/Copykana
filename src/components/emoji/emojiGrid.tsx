import { component$, type QRL } from "@builder.io/qwik";
import { type tag, type emojiType } from "~/constants/emoji";
import Emoji from "./emoji";
import { filterEmoji } from "./filterEmoji";

interface EmojiGridProps {
  tags: tag[];
  onClick: QRL<(emoji: emojiType) => void>;
}

export default component$((props: EmojiGridProps) => {
  const filteredEmoji = filterEmoji(props.tags);

  return (
    <div class="flex flex-wrap gap-2">
      {filteredEmoji.map((emoji) => (
        <span key={emoji}>
          <Emoji emoji={emoji} onClick={props.onClick} />
        </span>
      ))}
    </div>
  );
});
