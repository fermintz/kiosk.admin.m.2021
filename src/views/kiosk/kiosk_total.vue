<template>
  <div class="kiosk_total">
    <DateSelect type="month"/>

    <div class="member_info">
      <dl>
        <dt>신규가입자</dt>
        <dd>29</dd>
      </dl>
      <dl>
        <dt>총 회원수</dt>
        <dd>339</dd>
      </dl>
    </div>

    <div class="sales_info">
      <h4>
        키오스크(현금)
      </h4>
      <div class="info_row">
        <dl>
          <dt>결제횟수</dt>
          <dd>29</dd>
        </dl>
        <dl>
          <dt>결제금액</dt>
          <dd>339,000</dd>
        </dl>
        <dl>
          <dt>지급된포인트</dt>
          <dd>51,000</dd>
        </dl>
      </div>
    </div>

    <div class="sales_info">
      <h4>
        키오스크(카드)
      </h4>
      <div class="info_row">
        <dl>
          <dt>결제횟수</dt>
          <dd>199</dd>
        </dl>
        <dl>
          <dt>결제금액</dt>
          <dd>1,778,000</dd>
        </dl>
        <dl>
          <dt>지급된포인트</dt>
          <dd>231,000</dd>
        </dl>
      </div>
    </div>

    <div class="sales_total">
      <h4>
        키오스크 종합
      </h4>
      <div class="info_row">
        <dl>
          <dt>총 결제횟수</dt>
          <dd>228</dd>
        </dl>
        <dl class="price">
          <dt>총 결제금액</dt>
          <dd>2,117,000</dd>
        </dl>
        <dl class="point">
          <dt>총 지급된포인트</dt>
          <dd>282,000</dd>
        </dl>
      </div>
      <div class="remainder">
        <dl>
          <dt>회원들이 가지고 있는<br>총 포인트</dt>
          <dd>3,687,911</dd>
        </dl>
      </div>
    </div>
    
  </div>
</template> 

<script>
import DateSelect from '@/components/date_select'

export default {
  components:{
    DateSelect,
  },
}
</script>

<style lang="scss" scoped>
.kiosk_total{

  .member_info{
    display:flex;
    align-items: center;
    padding:0 15px;
    margin:30px 0;

    dl{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex:1;
      height:65px;
      border:1px solid #e2e2e2;
      border-radius:10px;
      margin-right:10px;
      dt{
        font-size:12px;
      }
      dd{
        font-size:16px;
        font-weight:500;
      }
    }
    dl:last-child{
      margin-right:0;
    }
  }

  .sales_info{
    padding:0 15px;
    margin-bottom:30px;

    h4{
      font-size:14px;
      margin-bottom:10px;
    }
    .info_row{
      display:flex;
      border:1px solid #e2e2e2;
      border-radius:10px;
      
      dl{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        flex:1;
        border-right:1px solid #e2e2e2;
        padding:10px;
        min-height:65px;
        dt{
          font-size:11px;
          color:#888;
        }
        dd{
          text-align:right;
          font-size:14px;
        }
      }

      dl:last-child{
        border-right:0px;
      }
    }
  }
  
  .sales_total{
    padding:0 15px;
    h4{
      font-size:14px;
      margin-bottom:10px;
    }
    .info_row{
      background:#F9F2F5;
      padding:15px;
      border-radius:10px;

      dl{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:10px;

        dt{
          font-size:12px;
        }
        dd{
          font-size:14px;
          font-weight:500;
        }
      }

      dl:last-child{
        margin-bottom:0px;
      }

      dl.price{
        dd{
          color:#DE0059;
        }
      }
      dl.point{
        dd{color:#0686D2}
      }
    }

    .remainder{
      background:#f8f8f8;
      margin-top:10px;
      padding:15px;
      border-radius:10px;

      dl{
        display:flex;
        justify-content: space-between;
        align-items: center;
        dt{
          font-size:12px;
        }
        dd{
          font-size:14px;
          font-weight:500;
        }
      }
    }
  }


}
</style>