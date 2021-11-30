<template>
  <div class="point_event_setup">
    <!-- <div class="guide">
      지정한 요일/시간에 이벤트 적립률을 적용합니다
    </div> -->
    <div class="setup_btns">
      <v-btn text @click="$router.push('pointEventAdd')">이벤트 추가하기</v-btn>
    </div>

    <div class="event_list">
      <h4>적용중인 이벤트</h4>
      <div class="no_data">
        등록된 이벤트가 없습니다.
      </div>

      <div class="event_item">
        <dl>
          <dt>적용요일</dt>
          <dd>수요일</dd>
        </dl>
        <dl>
          <dt>적용시간</dt>
          <dd>23:00 ~ 08:00</dd>
        </dl>

        <div class="divider" />

        <div class="point_table">
          <div class="rows">
            <span class="name">금액구간</span>
            <span class="cash">현금적립률</span>
            <span class="card">카드적립률</span>
          </div>
          <div class="rows">
            <span class="name">1만원 미만</span>
            <span class="cash">12%</span>
            <span class="card">5%</span>
          </div>
          <div class="rows">
            <span class="name">1만원~2만원 미만</span>
            <span class="cash">12%</span>
            <span class="card">5%</span>
          </div>
          <div class="rows">
            <span class="name">2만원~3만원 미만</span>
            <span class="cash">12%</span>
            <span class="card">5%</span>
          </div>
          <div class="rows">
            <span class="name">3만원~4만원 미만</span>
            <span class="cash">12%</span>
            <span class="card">5%</span>
          </div>
          <div class="rows">
            <span class="name">4만원~5만원 미만</span>
            <span class="cash">12%</span>
            <span class="card">5%</span>
          </div>
          <div class="rows">
            <span class="name">5만원 이상</span>
            <span class="cash">12%</span>
            <span class="card">5%</span>
          </div>
        </div>
        
        <div class="item_footer">
          <v-btn text>삭세하기</v-btn>
        </div>
      </div>
    </div>


  </div>
</template>

<script>


export default {
  components:{

  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.point_event_setup{
  padding:0 15px;

  .setup_btns{
    display:flex;
    height:40px;
    justify-content: center;
    align-items: center;
  
    .v-btn{
      font-size:12px;
      border:1px solid #de0059;
      color:#de0059;
      border-radius:20px;
    }
  }

  .guide{
    display:flex;
    align-items: center;
    justify-content: center;
    background:#F9F8F4;
    height:40px;
    text-align:center;
    font-size:12px;
    border-radius:5px;
    margin-bottom:15px;
    margin-top:20px;
  }

  .event_list{
    margin-top:30px;

    h4{
      margin-bottom:10px;
      font-size:14px;
    }

    .no_data{
      display:flex;
      justify-content: center;
      align-items: center;
      font-size:12px;
      text-align:center;
      background:#f2f2f2;
      height:40px;
      border-radius:5px;
    }

    .event_item{
      border:1px solid #e2e2e2;
      padding:15px;
      border-radius:5px;
      margin-top:15px;
      box-shadow: 3px 3px 12px rgba(0,0,0,0.05);


      dl{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:5px;
        dt{
          font-size:12px;
        }
        dd{
          font-size:12px;
        }
      }

      .divider{
        height:1px;
        background:#e2e2e2;
        margin:15px 0;
      }
      
      .point_table{  
        .rows{
          display:flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom:10px;
          background:#f2f2f2;
          height:30px;
          border-radius:5px;

          span{
            font-size:12px;
          }
          span.name{
            flex:2;
            padding:0 10px;
          }
          span.cash{
            text-align:center;
            flex:1;
            color:#de0059;
          }
          span.card{
            text-align:center;
            flex:1;
            color:#de0059;
          }
        }
        .rows:first-child{
          background:#fff;
          span{
            font-size:11px;
            color:#888;
          }
        }
      }

      .item_footer{
        text-align:right;
        margin-top:15px;
        .v-btn{
          font-size:12px;
          border:1px solid #aaa;
          height:30px;
          min-width:auto;
          padding:0 15px;
          border-radius:5px;
        }
      }
    }

  }  
}
</style>