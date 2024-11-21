import { useQuery } from '@tanstack/react-query'
import { request } from '../config/request'

export const useUserGet = () => {
  return (
    useQuery({
      queryKey: ['user-data'],
      queryFn: ()=> request.get("/students").then(res => res.data),
      onError: (error) => {
        console.log(error);
      }
    })
  )
}
