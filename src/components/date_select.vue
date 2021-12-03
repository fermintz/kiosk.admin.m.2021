<template>
  <div class="date_select">
    <v-btn icon class="arrow">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>

    <v-dialog
      ref="dialog"
      v-model="modal"
      :return-value.sync="date"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
          class="select-btn"
        >{{date}}</v-btn>
      </template>
      <v-date-picker
        v-model="date"
        @input="$refs.dialog.save(date)"
        :type="this.type"
        locale="ko"
      ></v-date-picker>
    </v-dialog>

    <v-btn icon class="arrow">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props:[
    'type'
  ],
  data(){
    return{
      date: this.$moment().format('YYYY-MM'),
      modal:false,
    }
  },
  methods:{
    typeIn(value){
      switch (value) {
        case 'year':
          this.date = this.$moment().format('YYYY')
          break;
        case 'month':
          this.date = this.$moment().format('YYYY-MM')
          break;
        default:
          this.date = this.$moment().format('YYYY-MM-DD')
          break;
      }
    }
    
  },
  mounted(){
    this.typeIn(this.type)
  },

}
</script>


<style lang="scss" scoped>
.date_select{
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding:0 15px;

  .select-btn{
    background:#f2f2f2;
    border-radius:30px;
    height:34px;
    font-size:16px;
    font-weight:500;
  }

  .arrow{
    width:34px;
    height:34px;
    background:#f2f2f2;
  }
}
</style>