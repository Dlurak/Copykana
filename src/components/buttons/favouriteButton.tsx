import { component$, useSignal } from "@builder.io/qwik";
import BaseButton from "./baseButton";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { FaIcon } from "qwik-fontawesome";
import type { emojiType } from "~/constants/emoji";
import { isFavourite, toggleFavourite } from "../emoji/favourites";

interface FavouriteButtonProps {
  emoji: emojiType;
}

export default component$((props: FavouriteButtonProps) => {
  const isFav = useSignal(isFavourite(props.emoji));

  return (
    <BaseButton
      onClick$={() => {
        toggleFavourite(props.emoji);
        isFav.value = !isFav.value;
      }}
    >
      <span class="flex items-center justify-center gap-2">
        <FaIcon icon={isFav.value ? faHeartCrack : faHeart} class="h-4" />
        {isFav.value ? "Unfavourite" : "Favourite"}
      </span>
    </BaseButton>
  );
});
