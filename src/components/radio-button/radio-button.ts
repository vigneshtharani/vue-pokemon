import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pagination',
  components: {
  },
  props: {
    radioValues: Array as any
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
      this.selectedValue = this.radioValues && this.radioValues.length && this.radioValues[0].value || null
    }
  }
});
