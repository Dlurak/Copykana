import type { emojiType, tag } from "~/constants/emoji";
import { emojiList } from "../../constants/emoji";

const allEmoji = Object.keys(emojiList) as emojiType[];

export const filterEmoji = (tags: tag[]) =>
  allEmoji.filter((emoji) =>
    tags.every((tag) => emojiList[emoji].includes(tag)),
  );
