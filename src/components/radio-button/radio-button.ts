import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pagination',
  components: {
  },
  props: {
    radioValues: Array
  },
  data() {
    return {
      title: 'radio button',
      selectedValue: null
    };
  },
  watch: {
    selectedValue() {
      this.$emit('radioChanged', this.selectedValue)
    },
    radioValues() {
      this.selectedValue = this.radioValues[0].value
    }
  }
});
