import { createEffect } from "effector-next";
import { toast } from "react-toastify";
import api from "./axiosClient";

export const singInFx = createEffect(async ({ url, email, password }) => {
  const { data } = await api.post(url, { email, password });
  toast.success("logged in");

  return data;
});

export const checkUserAuthFx = createEffect(async (url) => {
  try {
    const { data } = await api.get(url);

    return data;
  } catch (error) {
    const axiosError = error;

    if (axiosError.response) {
      if (axiosError.response.status === 403) {
        return false;
      }
    }

    toast.error(error.message);
  }
});

export const logoutFx = createEffect(async (url) => {
  try {
    await api.get(url);
  } catch (error) {
    toast.error(error.message);
  }
});
