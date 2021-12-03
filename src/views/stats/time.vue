<template>
  <div class="stats_wrap">
    <DateSelect type="month" />

    <div class="stats_summary">
      <dl>
        <dt>이용이 가장 많은 달</dt>
        <dd>
          <strong>7월</strong>
          <span>5,062,000 원</span>
        </dd>
      </dl>

      <dl>
        <dt>이용이 가장 많은 달</dt>
        <dd>
          <strong>7월</strong>
          <span>5,062,000 원</span>
        </dd>
      </dl>

      <dl>
        <dt>이용이 가장 많은 달</dt>
        <dd>
          <strong>7월</strong>
          <span>5,062,000 원</span>
        </dd>
      </dl>
    </div>

    <div class="chart_wrap">
      차트자리
    </div>

    <div class="inner">
      <div class="year_total">
        <span>2021년 총 매출</span>
        <strong>45,495,000 원</strong>
      </div>

      <div class="month_total_table">
        <v-row>
          <v-col cols="4" v-for="item in 10" :key="item">
            <div class="item" v-ripple @click="$refs.salesSummary.handle(true)">
              <span>{{item}}월</span>
              <strong>178,000 원</strong>
              <v-icon>mdi-plus-circle</v-icon>
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="month_summary">
        
      </div>
    </div>

    <SalesSummary ref="salesSummary"/>
  </div>
</template>

<script>
import DateSelect from '@/components/date_select';
import SalesSummary from '@/components/modal/sales_summary'

export default {
  components:{DateSelect, SalesSummary},
}
</script>

<style lang="scss" scoped>
.stats_wrap{
  .inner{
    padding:0 15px;
  }
}

.stats_summary{
  display:flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow-x:auto;
  scroll-behavior: smooth;
  padding:30px 20px;

  dl{
    flex:none;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width:180px;
    padding:12px;
    border:1px solid #e2e2e2;
    height:90px;
    margin-right:10px;
    border-radius:5px;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.05);
  

    dt{font-size:11px;}
    dd{
      text-align:right;
      strong{
        display:block;
        font-size:14px; 
      }
      span{
        display:block;
        font-size:12px;
        color:#0686D2;
      }
    }
  }
}
.stats_summary:after{
  content:'';
  display:block;
  min-width:20px;
  height:20px;
}
.stats_summary::-webkit-scrollbar{
  display:none;
}

.chart_wrap{
  display:flex;
  justify-content: center;
  align-items: center;
  height:300px;
  background:#f8f8f8;
}

.year_total{
  display:flex;
  align-items: center;
  justify-content: space-between;
  background:#f2f2f2;
  height:40px;
  padding:0 15px;
  border-radius:5px;
  margin-top:20px;

  span{
    font-size:12px;
    color:#898989;
  }
  strong{
    font-size:14px;
    font-weight:500;
  }
}

.month_total_table{
  margin-top:20px;
  border-top:1px solid #e2e2e2;
  border-left:1px solid #e2e2e2;
  .row{
    padding:0px;
    margin:0px;
  }
  .col{
    padding:0;
  }
  .item{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding:10px;
    border-right:1px solid #e2e2e2;
    border-bottom:1px solid #e2e2e2;
    position: relative;
    min-height:70px;

    span{
      font-size:12px;
      color:#898989;
      display:block;
    }
    strong{
      display:block;
      font-weight:500;
      font-size:13px;
    }
    .v-icon{
      position:absolute;
      right:10px;
      top:10px;
      font-size:18px;
      color:#0686D2;
    }
  }

}

</style>