<template>
  <v-dialog
    v-model="visible"
  >
    <div class="sales_summary">
      <div class="top">
        <h4>2월 요약</h4>
      </div>
      
      <div class="cont">
        <dl>
          <dt>건조기</dt>
          <dd>
            <span>3,675건</span>
            <strong>12,035,500 원</strong>
          </dd>
        </dl>
        <dl>
          <dt>기타장비</dt>
          <dd>
            <span>1,261건</span>
            <strong>2,305,500 원</strong>
          </dd>
        </dl>
        <dl>
          <dt>세탁기</dt>
          <dd>
            <span>2,503건</span>
            <strong>12,343,000 원</strong>
          </dd>
        </dl>
        <dl class="month_total">
          <dt>합계</dt>
          <dd>
            <span>7,439건</span>
            <strong>26,684,000 원</strong>
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
      visible:true
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
    justify-content: center;
    padding:20px 20px;

    h4{
      display:flex;
      justify-content: center;
      align-items: center;
      font-size:12px;
      font-weight:500;
      height:26px;
      border-radius:13px;
      background:#292929;
      color:#fff;
      padding:0 20px;
    }
  }
  .cont{
    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding:0 20px;
      height:60px;
      border-bottom:1px solid #e2e2e2;

      dt{
        font-size:14px;
      }
      dd{
        text-align:right;
        span{
          font-size:11px;
          color:#898989;
          display:block;
        }
        strong{
          display:block;
          font-size:12px;
          font-weight:500;
        }
      }
    }
    dl.month_total{
      background:#F9F2F5;
      dt{
        font-weight:500;
      }
      dd{
        span{
          color:#292929;
        }
        strong{
          color:#de0059;
          font-size:14px;
        }
      }
    }

    dl:last-child{
      border-bottom:0px;
    }
  }
  .bottom{}
}
</style>