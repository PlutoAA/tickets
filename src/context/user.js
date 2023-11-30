import { createDomain } from "effector-next";

const user = createDomain();

export const setUser = user.createEvent();

export const $user = user.createStore({}).on(setUser, (_, user) => user);
