<template>
  <div class="kiosk_calendar">
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
          <strong>이번달 현금매출 합계</strong>
          <span>2021-09</span>
        </dt>
        <dd>156,000 원</dd>
      </dl>
      <dl>
        <dt>
          <strong>이번달 카드매출 합계</strong>
          <span>2021-09</span>
        </dt>
        <dd>156,000 원</dd>
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
      <h4>
        <span>2021-09-12</span>
      </h4>
      <div class="day_total">
        <dl>
          <dt>카드결제</dt>
          <dd class="number">21건</dd>
          <dd class="price">48,000 원</dd>
        </dl>
        <dl>
          <dt>현금결제</dt>
          <dd class="number">5건</dd>
          <dd class="price">134,000 원</dd>
        </dl>
        <dl>
          <dt>총 매출합계</dt>
          <dd class="number">26건</dd>
          <dd class="price">182,000 원</dd>
        </dl>
      </div>
    </div>

    <div class="list">
      <div class="item">
        <div class="left">
          <span>2021-09-21 12:34</span>
          <strong>010-8525-4561</strong>
          <label>현금결제</label>
        </div>
        <div class="price">
          12,900 원
        </div>
      </div>
      <div class="item" v-for="item in 5" :key="item">
        <div class="left">
          <span>2021-09-21 12:34</span>
          <strong>010-8525-4561</strong>
          <label>카드결제</label>
        </div>
        <div class="price">
          12,900 원
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Calendar from '@/components/calendar'

export default {
  components:{
    Calendar,
  }
}
</script>

<style lang="scss" scoped>
.kiosk_calendar{
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
        margin-bottom:10px;
        dt{
          flex:1;
          font-size:12px;
          color:#898989;
        }
        dd.number{
          width:50px;
          text-align:right;
          font-size:12px;
        }
        dd.price{
          width:90px;
          font-size:12px;
          text-align:right;
        }
      }
      dl:last-child{
        padding-top:10px;
        border-top:1px solid #e2e2e2;
        margin-bottom:0px;
        
        dd.price{
          color:#de0059;
          font-size:14px;
        }
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
          font-size:14px;
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