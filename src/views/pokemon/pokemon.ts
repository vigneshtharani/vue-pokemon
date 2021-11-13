import { defineComponent } from 'vue';
import CommonService from '@/providers/services/common.service';

export default defineComponent({
  name: 'Pokemon',
  components: {

  },
  data() {
    return {
      title: 'pokemon title',
      id: this.$route.params.id,
      isLoaded: false,
      pokemonDetail: {}
    }
  },
  mounted() {
    CommonService.getPokemonDetails(this.id).then((response) => {
      console.log(response, 'response');
      this.pokemonDetail = response;
      this.isLoaded = true;
    });
  },
  methods: {

  }
});
