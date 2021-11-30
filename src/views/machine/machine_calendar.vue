<template>
  <div class="machine_calendar">

    <div class="total">
      <dl>
        <dt>
          <strong>이번달 매출합계</strong>
          <span>2021-09</span>
        </dt>
        <dd>1,389,500 원</dd>
      </dl>
      <dl>
        <dt>
          <strong>이번달 최고매출일</strong>
          <span>2021-09-12</span>
        </dt>
        <dd>156,000 원</dd>
      </dl>
      <dl>
        <dt>
          <strong>이번달 최소매출일</strong>
          <span>2021-09-27</span>
        </dt>
        <dd>128,000 원</dd>
      </dl>
    </div>

    <div class="calendar_wrap">
      <Calendar />
    </div>

    <div class="guide">
      <p>달력에는 총 합계만 표기됩니다.</p>
    </div>

    <div class="selected_day">
      <h4>2021-09-12</h4>

      <div class="day_total">
        <dl>
          <dt>이용건수</dt>
          <dd>12건</dd>
        </dl>
        <dl>
          <dt>매출합계</dt>
          <dd>128,500 원</dd>
        </dl>
      </div>
    </div>

    <div class="list">
      <div class="item" v-for="item in 10" :key="item">
        <div class="left">
          <span>2021-06-18 12:00</span>
          <strong>1번 강력 세탁기</strong>
        </div>
      
        <div class="price">
          5,000 원
        </div>
     
      </div>
    </div>

    <div class="list-footer">

    </div>
  </div>
</template>

<script>
import Calendar from '@/components/calendar'

export default {

  components:{
    Calendar
  },
}
</script>

<style lang="scss" scoped>
.machine_calendar{
  .calendar_wrap{
    padding:0 15px;
  }

  .guide{
    padding:0 15px;
    p{
      font-size:12px;
      margin:0;
      color:#898989;
    }
    p:before{
      content:'*';
      color:#d22828;
      margin-right:5px;
    }
  }

  .total{
    margin-bottom:20px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding:15px;
    overflow-x:auto;
    scroll-behavior: smooth;

    dl{
      flex:none;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      width:160px;
      margin-right:15px;
      height:90px;
      border:1px solid #e2e2e2;
      background:#fff;
      padding:10px;
      border-radius:5px;
      box-shadow: 3px 3px 12px rgba(0,0,0,0.05);

      dt{
        strong{
          display:block;
          font-size:12px;
        }
        span{
          display:block;
          font-size:10px;
          color:#898989;
        }
      }
      dd{
        text-align:right;
        font-size:14px;
        font-weight:500;
      }     
    }

    dl:first-child{
      dd{
        color:#de0059
      }
    }
  }

  .total:after{
    content:'';
    display:block;
    min-width:15px;
    height:15px;
  }
  
  .total::-webkit-scrollbar{
    display:none;
  }

  .selected_day{
    margin:30px 15px 0 15px;
    background:rgba(255,0,0,0.05);
    padding:15px;
    border-radius:5px;

    h4{
      margin-bottom:10px;
    }

    .day_total{
      dl{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:8px;
        dt{
          font-size:12px;
          color:#898989;
        }
        dd{
          font-size:12px;
          font-weight:500;
        }
      }
      dl:last-child{
        margin-bottom:0px;
      }
    }
  }

  .list{
    margin-top:20px;

    .item{
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding:15px;
      border-bottom:1px solid #e2e2e2;

      .left{
        flex:1;
        margin-right:15px;

        span{
          display:block;
          font-size:11px;
          display:block;
          color:#898989;
        }
        strong{
          display:block;
          margin:2px 0;
          font-size:12px;
          font-weight:500;
        }
        label{
          display:block;
          font-size:10px;
        }
      }

      .price{
        font-size:14px;
        font-weight:500;
      }
 
    }
  }
}
</style>