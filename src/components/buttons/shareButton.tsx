import { component$ } from "@builder.io/qwik";
import BaseButton from "./baseButton";
import { FaIcon } from "qwik-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

interface ShareButtonProps {
  shareText: string;
}

export default component$((props: ShareButtonProps) => {
  return (
    <BaseButton
      onClick$={() => {
        navigator.share({
          text: props.shareText,
        });
      }}
    >
      <span class="flex items-center justify-center gap-2">
        <FaIcon icon={faShare} class="h-4" />
        Share
      </span>
    </BaseButton>
  );
});

export const isShareEnabled = () => !!navigator.share;
