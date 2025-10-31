import { signIn, signOut, signUp, checkAuth } from "@/api/auth.api";

import { useMutation, useQuery } from "@tanstack/react-query";

export const useSignIn = () => {
  return useMutation({
    mutationFn: signIn,
  });
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
  });
};

export const useSignOut = () => {
  return useMutation({
    mutationFn: signOut,
  });
};

export const useCheckAuth = () => {
  return useQuery({
    queryKey:["user"],
    queryFn:checkAuth,
    retry:false
  })
}