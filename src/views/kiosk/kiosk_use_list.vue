<template>
  <div class="kiosk_use_list">
    <DateSelect type="day"/>

    <div class="list-head">
      <h4>이용건 <span>12</span></h4>
      
    </div>

    <div class="list">
      <div class="item">
        <div class="top">
          <div class="icon use">사용</div>
          <dl>
            <dt>2021-06-24 12:00</dt>
            <dd>010-8525-4651</dd>
          </dl>
        </div>
        <div class="bottom">
          <dl>
            <dt>장비명</dt>
            <dd>3번 세탁기(18kg)</dd>
          </dl>
          <dl>
            <dt>장비로 투입된 금액</dt>
            <dd>4,000 원</dd>
          </dl>
          <dl>
            <dt>결제수단</dt>
            <dd>포인트</dd>
          </dl>
          <dl>
            <dt>결제금액</dt>
            <dd>0 원</dd>
          </dl>
          <dl>
            <dt>변동포인트</dt>
            <dd>-4,000 P</dd>
          </dl>
        </div>
      </div>

      <div class="item">
        <div class="top">
          <div class="icon chage">충전</div>
          <dl>
            <dt>2021-06-24 12:00</dt>
            <dd>010-8525-4651</dd>
          </dl>
        </div>
        <div class="bottom">
          <dl>
            <dt>결제수단</dt>
            <dd>카드</dd>
          </dl>
          <dl>
            <dt>결제금액</dt>
            <dd>50,000 원</dd>
          </dl>
          <dl>
            <dt>변동포인트</dt>
            <dd>65,000 P</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DateSelect from '@/components/date_select'

export default {
  components:{DateSelect}
}
</script>

<style lang="scss" scoped>

.kiosk_use_list{
  .list-head{
    display:flex;
    align-items: center;
    padding:0 15px;
    justify-content:space-between;
    margin-top:30px;
    height:50px;
    border-top:1px solid #e2e2e2;
    
    h4{
      font-size:14px;
      span{color:#d22828;}
    }
  }
  .list{
    border-top:1px solid #e2e2e2;

    .item{
      border-bottom:1px solid #e2e2e2;
      
      .top{
        display:flex;
        align-items: center;
        padding:15px;

        .icon{
          display:flex;
          justify-content: center;
          align-items: center;
          width:50px;
          height:50px;
          background:#f2f2f2;
          border-radius:18px;
          margin-right:15px;
          font-size:14px;
        }
        .icon.chage{
          background-color:#0686D2;
          color:#fff;
        }

        .icon.use{
          background-color: #de0059;
          color:#fff;
        }

        dl{
          dt{font-size:12px;color:#898989;}
          dd{font-size:16px;font-weight:500;}
        }
      }
      .bottom{
        padding:20px;
        background:#f8f8f8;

        dl{
          display:flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom:6px;

          dt{font-size:12px;color:#898989;}
          dd{font-size:12px;}
        }
        dl:last-child{
          margin-bottom:0px;
          dd{
            color:#de0059;
          }
        }
      }
      
    }
  }
}
</style>