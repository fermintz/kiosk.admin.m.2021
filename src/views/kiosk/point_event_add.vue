<template>

  <div class="point_event_add">
    <div class="header">
      <div class="left">
        <v-btn icon @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h4>이벤트 추가</h4>
      </div>
    </div>

    <div class="cont">
      <dl class="week_selector">
        <dt>적용요일 선택</dt>
        <dd>
          <v-btn 
            text
            v-for="(item,index) in ['월','화','수','목','금','토','일']" 
            :key="index"
            :class="{active:week === index}"
            @click="week = index"
          >
            {{item}}
          </v-btn>
        </dd>
      </dl>
      <dl class="time_selector">
        <dt>적용시간 선택</dt>
        <dd>

          <input
            type="time"
            v-bind="attrs"
            v-on="on"
            class="time_btn"
            value="00:00"
          />

          <span>부터</span>

          <input
            type="time"
            v-bind="attrs"
            v-on="on"
            class="time_btn"
            value="00:00"
          />

          <span>까지</span>
        </dd>
        <dd>
          
        </dd>
      </dl>

      <div class="divider" />

      <div class="point_input_form">
        <div class="rows">
          <span class="name">금액구간</span>
          <span class="cash">현금적립률</span>
          <span class="card">카드적립률</span>
        </div>
        <div class="rows">
          <span class="name">1만원 미만</span>
          <span class="cash">
            <input type="number" placeholder="0">
            <label>%</label>
          </span>
          <span class="card">
            <input type="number" placeholder="0">
            <label>%</label>
          </span>
        </div>
        <div class="rows">
          <span class="name">1만원~2만원 미만</span>
          <span class="cash">
            <input type="number" placeholder="0">
            <label>%</label>
          </span>
          <span class="card">
            <input type="number" placeholder="0">
            <label>%</label>
          </span>
        </div>
        <div class="rows">
          <span class="name">2만원~3만원 미만</span>
          <span class="cash">
            <input type="number" placeholder="0">
            <label>%</label>
          </span>
          <span class="card">
            <input type="number" placeholder="0">
            <label>%</label>
          </span>
        </div>
        <div class="rows">
          <span class="name">3만원~4만원 미만</span>
          <span class="cash">
            <input type="number" placeholder="0">
            <label>%</label>
          </span>
          <span class="card">
            <input type="number" placeholder="0">
            <label>%</label>
          </span>
        </div>
        <div class="rows">
          <span class="name">4만원~5만원 미만</span>
          <span class="cash">
            <input type="number" placeholder="0">
            <label>%</label>
          </span>
          <span class="card">
            <input type="number" placeholder="0">
            <label>%</label>
          </span>
        </div>
        <div class="rows">
          <span class="name">5만원 이상</span>
          <span class="cash">
            <input type="number" placeholder="0">
            <label>%</label>
          </span>
          <span class="card">
            <input type="number" placeholder="0">
            <label>%</label>
          </span>
        </div>
      </div>
    </div> <!-- cont -->

    <div class="footer">
      <v-btn text>취소하기</v-btn>
      <v-btn text>적용하기</v-btn>
    </div>
  </div>
 
</template>

<script>
export default {
  data(){
    return{
      visible:true,
      week:0,

    }
  }  
}
</script>

<style lang="scss" scoped>
.point_event_add{
  background:#fff;

  .header{
    position:sticky;
    top:0px;
    background:rgba(255,255,255,0.7);
    backdrop-filter: blur(7px);
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:60px;
    padding:0 15px;
    z-index:3;

    .left{
      display:flex;
      align-items: center;
      h4{
        margin-left:15px;
      }
    }
  }

  .cont{
    padding:20px;

    dl{
      margin-bottom:15px;
      dt{
        margin-bottom:10px;
        font-size:11px;
      }
    }
    dl.week_selector{
      dd{
        border-top:1px solid #e2e2e2;
        border-left:1px solid #e2e2e2;
        .v-btn{
          font-size:12px;
          width:20%;
          min-width:20%;
          padding:0px;
          height:30px;
          border-radius:0px;
          border-right:1px solid #e2e2e2;
          border-bottom:1px solid #e2e2e2;
        }
        .v-btn.active{
          color:#0686D2;
          background-color: #F4F7F9;;
        }
        .v-btn.active:after{
          content:'';
          position: absolute;
          display:block;
          width:100%;
          height:30px;
          border:1px solid #0686D2
        }
      }
    }
    dl.time_selector{
      dd{
        display:flex;
        align-items: center;

        .time_btn{
          border:1px solid #e2e2e2;
          border-radius:5px;
        }
        span{
          margin:0 10px;
          font-size:11px;
        }
      }
    }
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:20px 0;
  }

  .point_input_form{
    .rows{
      display:Flex;
      align-items: center;
      font-size:12px;
      height:30px;
      margin-bottom:10px;
      span{
        display:flex;
        align-items: center;
        position: relative;
        input{
          width:100%;
          border:1px solid #c2c2c2;
          height:30px;
          border-radius:5px;
          padding:0 20px 0 10px;
          text-align:right;
        }
        label{
          position: absolute;
          right:5px;
          color:#888
        }
      }
      span.name{flex:1;text-align:left;}
      span.cash{width:60px;text-align:center;margin-left:10px;}
      span.card{width:60px;text-align:center;margin-left:10px;}
    }

    .rows:first-child{
      span{
        font-size:11px;
        color:#888;;
      }
      span.cash{justify-self: center;align-self: center;text-align: center;;}
      span.card{justify-self: center;}
    }

    .rows:last-child{
      margin-bottom:0px;
    }
  }

  .footer{
    display:flex;
    align-items: center;
    justify-content: center;
    padding:20px;
    border-top:1px solid #e2e2e2;

    .v-btn{
      flex:1;
      margin-right:10px;
      height:40px;
      border-radius:5px;
      font-size:12px;
      border:1px solid #aaa;
      color:#292929;
      
    }
    .v-btn:last-child{
      margin-right:0px;
    }

    .v-btn:last-child{
      flex:2;
      background:#de0059;
      color:#fff;
      border:0px;
    }
  }
}
</style>