import { type RequestHandler } from "@builder.io/qwik-city";
import { filterEmoji } from "~/components/emoji/filterEmoji";
import { emojiList, tags } from "~/constants/emoji";

export const onGet: RequestHandler = async ({ json, url }) => {
  const urlTags = url.searchParams.get("tags")?.split(",") || [];

  for (const tag of urlTags) {
    if (!tag) {
      json(400, { error: "Invalid tags" });
      return;
    } else if (!tags.includes(tag as any)) {
      json(400, { error: "Unknown tag" });
      return;
    }
  }

  const responseBody: Record<string, string[]> = {};
  const filtered = filterEmoji(urlTags as any);
  for (const key of filtered) {
    responseBody[key] = emojiList[key];
  }

  json(200, responseBody);
};
