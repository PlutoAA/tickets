import { createDomain } from "effector-next";

const link = createDomain();

export const setLink = link.createEvent();

export const $link = link
  .createStore("https://example.com")
  .on(setLink, (_, link) => link);
$link.watch((value) => {
  console.log("updated", value);
});
