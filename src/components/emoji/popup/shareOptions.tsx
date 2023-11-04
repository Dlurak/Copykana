import { component$ } from "@builder.io/qwik";
import CopyButton, { isCopyEnabled } from "~/components/buttons/copyButton";
import ShareButton, { isShareEnabled } from "~/components/buttons/shareButton";

interface ShareOptionsProps {
  text: string;
}

export default component$((props: ShareOptionsProps) => {
  return (
    <div class="flex w-full gap-1">
      {isCopyEnabled() && <CopyButton copyText={props.text} />}
      {isShareEnabled() && <ShareButton shareText={props.text} />}
    </div>
  );
});
