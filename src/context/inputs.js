import { linkCheckboxes } from "@/utils/linkCheckboxes";
import { createDomain } from "effector-next";

const inputs = createDomain();

export const setInput = inputs.createEvent();

export const $inputs = inputs
  .createStore(new Array(linkCheckboxes.length).fill(false))
  .on(setInput, (_, inputs) => inputs);
