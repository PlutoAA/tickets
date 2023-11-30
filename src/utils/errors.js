import { toast } from "react-toastify";

export const showAuthError = (error) => {
  const axiosError = error;

  if (axiosError.response) {
    if (axiosError.response.status === 401) {
      toast.error("Bad credentials");
      return;
    }
  }

  toast.error(error.message);
};
