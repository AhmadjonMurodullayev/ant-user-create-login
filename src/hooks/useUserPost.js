import { useMutation } from "@tanstack/react-query";
import { request } from "../config/request";
import { client } from "../config/query-clinet";

export const useUserPost = () => {
  return useMutation({
    mutationFn: (data) =>
      request.post("/students", data).then((res) => res.data),
    onSuccess: (data) => {
      client.invalidateQueries(["user-data"]);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
