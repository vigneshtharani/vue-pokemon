import CommonProvider from '@/providers/apis/common';

export default {
  getPokemonList(params: any) {
    console.log('is it works');
    return CommonProvider.getPokemonList(params);
  },
  getPokemonDetails(id: string) {
    return CommonProvider.getPokemonDetails(id);
  }
}
