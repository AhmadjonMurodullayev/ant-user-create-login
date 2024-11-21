import { useMutation } from '@tanstack/react-query';
import { request } from '../config/request';
import { client } from '../config/query-clinet';

export const useUserDelete = () => {
  return useMutation({
    mutationFn: (id) => request.delete(`/students/${id}`),
    onSuccess: (data) => {
      client.invalidateQueries(['user-data']);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};