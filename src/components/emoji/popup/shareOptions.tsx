import { component$, type QRL } from "@builder.io/qwik";
import CopyButton, { isCopyEnabled } from "~/components/buttons/copyButton";
import ShareButton, { isShareEnabled } from "~/components/buttons/shareButton";

interface ShareOptionsProps {
  text: string;
  onCopy: QRL<() => void>;
}

export default component$((props: ShareOptionsProps) => {
  return (
    <div class="flex w-full gap-1">
      {isCopyEnabled() && (
        <CopyButton copyText={props.text} onCopy={props.onCopy} />
      )}
      {isShareEnabled() && <ShareButton shareText={props.text} />}
    </div>
  );
});
