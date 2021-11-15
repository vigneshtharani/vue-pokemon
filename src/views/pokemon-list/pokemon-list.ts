import { defineComponent } from 'vue';
import CommonService from '@/providers/services/common.service';
import Pagination from '@/components/pagination/pagination.vue';
import RadioButton from '@/components/radio-button/radio-button.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Pagination,
    RadioButton,
    PulseLoader
  },
  data() {
    return {
      pokemonList: [] as any,
      currentPage: 1,
      totalPokemonList: 0,
      perPage: 30,
      maxPokemonCount: 150,
      totalPages: 0,
      radioValues: [] as any,
      isShowPagination: true,
      isShowMoreLoad: false
    }
  },
  mounted() {
    this.totalPages = Math.ceil(this.maxPokemonCount / this.perPage);
    this.radioValues = [{
      name: 'load-by',
      label: 'Pagination',
      value: 1
    }, {
      name: 'load-by',
      label: 'Load More',
      value: 2
    }];
    const params = {
      offset: 0,
      limit: 30
    }
    this.getPokemonList(params).then((response) => {
      this.pokemonList = response.results;
    });
  },
  methods: {
    getPokemonList(params: any) {
      return CommonService.getPokemonList(params);
    },
    onPageChange(page: number) {
      (this.$refs['section'] as any).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      this.currentPage = page;
      const nextSetOffset = (page - 1) * 30;
      const params = {
        offset: nextSetOffset,
        limit: 30
      }
      this.getPokemonList(params).then((response) => {
        this.pokemonList = response.results;
      });
    },
    onRadioChanged(value: number) {
      this.isShowPagination = value === 1;
    },
    loadMore() {
      this.isShowMoreLoad = true;
      const params = {
        limit: 15,
        offset: 30
      }
      this.getPokemonList(params).then((responses: any) => {
        setTimeout(() => {
          this.pokemonList = [...this.pokemonList, ...responses.results];
          this.isShowMoreLoad = false;
        }, 2000);
      });
    }
  }
});
