import { type RequestHandler } from "@builder.io/qwik-city";
import { tags } from "~/constants/emoji";

export const onGet: RequestHandler = async ({ json }) => {
  json(200, { tags: tags.filter((t) => t !== "favourite") });
};
