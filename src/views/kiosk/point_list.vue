<template>
  <div class="point_list">
    <DateSelect type="month" />
    <div class="list-head">
      <h4>
        이용건 수 <span>24</span>
      </h4>
    </div>
    <div class="list">
      <div class="item">
        <div class="top">
          <div class="icon remove">차감</div>
          <dl>
            <dt>2021-06-24 12:00</dt>
            <dd>010-8525-4651</dd>
          </dl>
        </div>
        <div class="bottom">
          <dl>
            <dt>금액</dt>
            <dd>5,000 원</dd>
          </dl>
          <dl>
            <dt>사유</dt>
            <dd>사유를 입력하지 않았습니다</dd>
          </dl>
        </div>
      </div>

      <div class="item">
        <div class="top">
          <div class="icon add">충전</div>
          <dl>
            <dt>2021-06-24 12:00</dt>
            <dd>010-8525-4651</dd>
          </dl>
        </div>
        <div class="bottom">
          <dl>
            <dt>금액</dt>
            <dd>5,000 원</dd>
          </dl>
          <dl>
            <dt>사유</dt>
            <dd>사유를 입력하지 않았습니다</dd>
          </dl>
        </div>
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
.point_list{
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
        .icon.remove{
          background-color:#0686D2;
          color:#fff;
        }

        .icon.add{
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
          margin-bottom:6px;

          dt{
            width:40px;
            font-size:12px;
            color:#898989;
          }
          dd{font-size:12px;}
        }
        dl:first-child{
          dd{color:#de0059}
        }
        dl:last-child{
          margin-bottom:0px;
        }
      }
      
    }
  }
}
</style>