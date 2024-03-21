"use client";
export const useAuth = () => {
  return localStorage.getItem("user").length > 0;
};
