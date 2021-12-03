<template>
  <v-dialog
    v-model="visible"
  >
    <div class="sales_summary">
      <div class="top">
        <h4><span>2월</span> 요약</h4>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      
      <div class="cont">
        <dl>
          <dt>장비직접투입</dt>
          <dd>
            <span>84건</span>
            <strong>135,500 원</strong>
          </dd>
        </dl>
        <dl>
          <dt>키오스크(현금)</dt>
          <dd>
            <span>161건</span>
            <strong>305,500 원</strong>
          </dd>
        </dl>
        <dl>
          <dt>키오스크(카드)</dt>
          <dd>
            <span>303건</span>
            <strong>643,000 원</strong>
          </dd>
        </dl>
          
      </div>

      <div class="bottom">
        <dl class="month_total">
          <dt>합계</dt>
          <dd>
            <span>548건</span>
            <strong>1,084,000 원</strong>
          </dd>
        </dl>
      </div>

    </div>    
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  },
}
</script>

<style lang="scss" scoped>
.sales_summary{
  background:#fff;
 
  .top{
    display:flex;
    align-items: center;
    justify-content: space-between;
    height:56px;
    padding:0 15px;
    border-bottom:1px solid #d2d2d2;

    h4{
      display:flex;
      justify-content: center;
      align-items: center;
      font-size:18px;
      font-weight:500;
      span{
        color:#de0059;
      }
    }
  }
  .cont{
    padding:15px 20px;
    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:10px;
      padding-bottom:10px;
      border-bottom:1px solid #e2e2e2;
      
      dt{
        display:flex;
        align-items: center;
        justify-content: center;
        font-size:14px;
        font-weight:500;
      }
      dd{
        text-align:right;
        span{
          font-size:12px;
          color:#898989;
          display:block;
        }
        strong{
          display:block;
          font-size:14px;
          font-weight:500;
        }
      }
    }

    dl:last-child{
      margin-bottom:0;
      padding-bottom:0;
      border-bottom:0px;
    }

  }
  .bottom{
    background:#F9F2F5;
    padding:15px 20px;
    dl.month_total{
      display:flex;
      align-items: center;
      justify-content: space-between;

      dt{
        font-weight:500;
      }
      dd{
        text-align:right;
        span{
          font-size:12px;
          color:#898989;
          display:block;
        }
        strong{
          color:#de0059;
          display:block;
          font-size:16px;
          font-weight:500;
        }
      }
    }
  }
}
</style>