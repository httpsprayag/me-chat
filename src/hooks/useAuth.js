import { getCookie } from "cookies-next";

export const useAuth = () => {
  const user = getCookie("email");
  return user !== undefined;
};
