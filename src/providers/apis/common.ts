import http from "./http";
import { objectIntoQueryParams } from '@/utils/global';

export default {
  getPokemonList(params: any) {
    const parseParams = objectIntoQueryParams(params);
    return http.get(`pokemon?${parseParams}`).then((response) => {
      return response.data;
    });
  },
  getPokemonDetails(id: string) {
    return http.get(`pokemon/${id}`).then((response) => {
      return response.data;
    });
  }
}
