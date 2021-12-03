<template>
  <div class="myShop_calc">
    <DateSelect type="month"/>

    <div class="inner">
      <div class="cost_form">
        <h4>비용입력</h4>
        <div class="input_box">
          <input type="text" placeholder="비용 항목이름">
        </div>
        <div class="input_box">
          <input type="text" placeholder="금액입력">
        </div>
        <v-btn text>
          추가하기
        </v-btn>
      </div>   

      <div class="divider" />

      <div class="cost_info">
        <dl>
          <dt><b>12</b>월 매출</dt>
          <dd>1,863,500 원</dd>
        </dl>
        <div class="divider" />
        <div class="no-data">
          등록된 비용이 없습니다.
        </div>
        <dl>
          <dt><v-icon>mdi-minus-circle</v-icon> 전기세</dt>
          <dd>200,000 원</dd>
          <dd class="del">
            <v-btn text>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </dd>
        </dl>
        <dl>
          <dt><v-icon>mdi-minus-circle</v-icon> 월세</dt>
          <dd>400,000 원</dd>
          <dd class="del">
            <v-btn text>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </dd>
        </dl>
        <dl>
          <dt><v-icon>mdi-minus-circle</v-icon> 수도세</dt>
          <dd>150,000 원</dd>
          <dd class="del">
            <v-btn text>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </dd>
        </dl>
      </div>

      <div class="total">
        <span>합계</span>
        <strong>1,113,500 원</strong>
      </div>
    </div>
  </div>
</template>

<script>
import DateSelect from '@/components/date_select'

export default {
  components:{
    DateSelect
  },
}
</script>

<style lang="scss" scoped>
.myShop_calc{
  .inner{
    padding:0px 15px;

    h4{
      font-size:14px;
      margin-bottom:10px;
    }

    .cost_form{
      margin-top:40px;
      .input_box{
        margin-bottom:10px;
        input{
          width:100%;
          height:40px;
          border:1px solid #e2e2e2;
          border-radius:5px;
          padding:0 10px;
        }
      }

      .v-btn{
        height:40px;
        background:#292929;
        color:#fff;
        width:100%;
        border-radius: 5px;
        font-weight:400;
      }
    }

    .divider{
      height:1px;
      background:#e2e2e2;
      margin:30px 0;
    }

    .cost_info{
      border:1px solid #e2e2e2;
      padding:15px;
      border-raidus:5px;
      .divider{
        margin:15px 0;
      }
      .no-data{
        background:#f8f8f8;
        font-size:12px;
        padding:15px;
        border-radius:5px;
        text-align:center;
        display:none;
      }

      dl{
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom:15px;
        dt{
          display:flex;
          align-items: center;
          flex:1;
          font-size:14px;
          .v-icon{
            margin-right:5px;
            font-size:16px;
            color:#aaa;
          }
        }
        dd{
          font-size:14px;
        }
        dd.del{
          margin-left:10px;
          .v-btn{
            padding:0px;
            min-width:18px;
            height:18px;
            background:#292929;
            .v-icon{
              font-size:14px;
              color:#fff;
            }
          }
        }
      }
      dl:last-child{
        margin-bottom:0px;
      }
    }
  }

  .total{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:10px;
    background:#F9F2F5;
    border-radius:5px;
    margin-top:15px;

    span{
      font-size:12px;
    }
    strong{
      font-weight:500;
      color:#DE0059;
    }
  }
}
</style>