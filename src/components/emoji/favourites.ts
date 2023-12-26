import type { emojiType } from "~/constants/emoji";

export const getFavourites = () => {
  try {
    const raw = localStorage.getItem("favourites");
    if (!raw) throw new Error();

    return JSON.parse(raw) as emojiType[];
  } catch (e) {
    return [] as emojiType[];
  }
};

/**
 * Returns if an emoji is a favourite emoji
 * on the Server this defaults to `false`
 */
export const isFavourite = (emoji: emojiType) => {
  try {
    const favs = getFavourites();

    return favs.includes(emoji);
  } catch (e) {
    return false;
  }
};

const addFavourite = (emoji: emojiType) => {
  try {
    const oldFavs = getFavourites();
    const newFavs = [...oldFavs, emoji];
    localStorage.setItem("favourites", JSON.stringify(newFavs));
    return newFavs;
  } catch (e) {
    return [] as emojiType[];
  }
};

const removeFavourite = (emoji: emojiType) => {
  const newFavs = getFavourites().filter((fa) => fa !== emoji);
  try {
    localStorage.setItem("favourites", JSON.stringify(newFavs));
  } catch (e) {
    return newFavs;
  }

  return newFavs;
};

/*
 * Toggle if an emoji is a favourite
 * @returns The new list of favourites whill will also be saved to localstorage
 */
export const toggleFavourite = (emoji: emojiType) =>
  isFavourite(emoji) ? removeFavourite(emoji) : addFavourite(emoji);
