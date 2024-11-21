import { useMutation } from "@tanstack/react-query";
import { request } from "../config/request";
import { client } from "../config/query-clinet";

export const useUserPost = () => {
  return useMutation({
    mutationFn: (user) => request.put(`/students/${user.id}`, user),
    onSuccess: (data) => {
      client.invalidateQueries(["user-data"]);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
