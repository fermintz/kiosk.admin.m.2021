<template>
  <div class="shop_rank">
    <DateSelect type="year" />

    <div class="stats_summary">
      <dl>
        <dt>나의 매장 월 평균이용액</dt>
        <dd>
          <strong>5,062,000 원</strong>
        </dd>
      </dl>
      <dl>
        <dt>전국 매장 월 평균이용액</dt>
        <dd>
          <strong>5,062,000 원</strong>
        </dd>
      </dl>

      <dl>
        <dt>상위(10%) 월 평균 이용액</dt>
        <dd>
          <strong>5,062,000 원</strong>
        </dd>
      </dl>
      <dl>
        <dt>하위(10%) 월 평균 이용액</dt>
        <dd>
          <strong>5,062,000 원</strong>
        </dd>
      </dl>
    </div>

    <div class="chart_wrap">
      차트자리
    </div>

    <div class="inner">
      
      <div class="shop_avg_list">
        <h4>매장평균 매출</h4>
        <dl v-for="item in 12" :key="item">
          <dt>{{item}}월</dt>
          <dd>
            <span class="myshop">
              <label>나의 매장 매출</label>
              <strong>811,500 원</strong>
            </span>
            <span>
              <label>전국 평균 매출</label>
              <strong>2,824,439 원</strong>
            </span>
            <span>
              <label>상위 10% 평균</label>
              <strong>5,366,546 원</strong>
            </span>
            <span>
              <label>하위 10% 평균</label>
              <strong>961,400 원</strong>
            </span>
          </dd>
        </dl>
      </div>
    </div>

  </div>
</template>

<script>
import DateSelect from '@/components/date_select';

export default {
  components:{DateSelect},
}
</script>

<style lang="scss" scoped>
.shop_rank{
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



.shop_avg_list{
  h4{
    margin:30px 0 20px 0;
  }
  dl{ 
    margin-bottom:20px;
    dt{
      display:flex;
      align-items: center;
      padding:0 10px;
      background:#f8f8f8;
      height:40px;
      border-radius:5px;
    }
    dd{
      padding:15px 5px;
      span{
        display:flex;
        align-items: center;
        justify-content: space-between;
        font-size:12px;
        margin-bottom:5px;

        label{
          font-weight:400;
          color:#898989;
        }
        strong{
          font-weight:500;
        }
      }
      span.myshop{
        strong{
          color:#DE0059
        }
      }
      span:last-child{
        margin-bottom:0px;
      }
    }
  }
}

</style>