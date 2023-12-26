import { component$, type QRL } from "@builder.io/qwik";
import CopyButton, { isCopyEnabled } from "~/components/buttons/copyButton";
import FavouriteButton from "~/components/buttons/favouriteButton";
import ShareButton, { isShareEnabled } from "~/components/buttons/shareButton";
import type { emojiType } from "~/constants/emoji";

interface ShareOptionsProps {
  text: emojiType;
  onCopy: QRL<() => void>;
}

export default component$((props: ShareOptionsProps) => {
  return (
    <div class="flex w-full flex-col gap-1">
      <div class="flex w-full gap-1">
        {isCopyEnabled() && (
          <CopyButton copyText={props.text} onCopy={props.onCopy} />
        )}
        {isShareEnabled() && <ShareButton shareText={props.text} />}
      </div>
      <FavouriteButton emoji={props.text} />
    </div>
  );
});
