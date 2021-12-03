<script>
import {Bar} from 'vue-chartjs';

export default {
  extends: Bar,
  props:{
    datas:{
      type:Object,
      default: null,
    },
    options:{
      type:Object,
      default: null,
    },
  },

  mounted () {
    this.renderChart(this.datas, this.options)
  }
}
</script>