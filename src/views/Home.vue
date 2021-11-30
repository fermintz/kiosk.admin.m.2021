<template>
  <div class="wrap">
    <Drawer ref="drawer"/>
    <Header @drawer="drawerOpenEvent" />

    <v-main>
      <div class="home contents">
        <div class="home-tab-head">
          <div class="tab-inner">
            <v-btn text
              v-for="(item, index) in ['금일매출','매출캘린더']" 
              :key="index"
              @click="tabAction(index)"
              :class="{active: homeTabs === index, tabBtn:true}"
              :ripple="false"
              linght
            >
              <label>{{item}}</label>
            </v-btn>
            <div 
              class="activeBox"
              :style="{left:activePosition +'px'}"
            />
          </div> <!-- tab -->
        </div>

        <div class="tab-cont" 
          v-show="homeTabs === 0"
        >
          <div class="day-sales">
            <div class="day-select">
              <v-btn icon>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <h3>2021-08-26</h3>
              <v-btn icon>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </div>

            <div class="day-summary">
              <v-row>
                <v-col cols="6">
                  <div class="summary-item">
                    <label>장비동전매출</label>
                    <div class="bottom">
                      <span>3회</span>
                      <strong>78,500</strong>
                    </div>
                  </div>   
                </v-col>
                <v-col cols="6">
                  <div class="summary-item">
                    <label>포인트사용(키오스크)</label>
                    <div class="bottom">
                      <span>3회</span>
                      <strong>98,500</strong>
                    </div>
                  </div>   
                </v-col>
                <v-col cols="6">
                  <div class="summary-item">
                    <label>카드충전(키오스크)</label>
                    <div class="bottom">
                      <span>3회</span>
                      <strong>126,500</strong>
                    </div>
                  </div>   
                </v-col>
                <v-col cols="6">
                  <div class="summary-item">
                    <label>현금충전(키오스크)</label>
                    <div class="bottom">
                      <span>3회</span>
                      <strong>138,500</strong>
                    </div>
                  </div>   
                </v-col>
              </v-row>

              <div class="total">
                <dl class="day-total">
                  <dt>금일매출</dt>
                  <dd>442,000</dd>
                </dl>
                <dl class="month-total">
                  <dt>이번 달 매출</dt>
                  <dd>3,416,000</dd>
                </dl>
              </div> <!-- total -->

              <div class="guide-text">
                <p>
                  <span>포인트사용(키오스크):</span> 키오스크에서 고객이 사용한 총 포인트금액
                </p>
              </div>
            </div>
          </div> <!-- day-sales -->
        </div> <!-- day-cont -->

        <div class="tab-cont" v-show="homeTabs === 1">

          <Calendar />

          <div class="day-detail">
            <div class="today-label">
              <span>2021년 8월 26일</span>
            </div>
            <table>
              <tr>
                <td>장비매출(동전)</td>
                <td>2건</td>
                <td>23,000 원</td>
              </tr>
              <tr>
                <td>장비매출(동전)</td>
                <td>4건</td>
                <td>54,000 원</td>
              </tr>
              <tr>
                <td>키오스크(카드)</td>
                <td>10건</td>
                <td>89,000 원</td>
              </tr>
            </table>
            <div class="total">
              <label>총 매출</label>
              <strong>201,000</strong>
            </div>
          </div>

          <div class="calendar-guide">
            <p>- 달력에는 해당 일의 총 매출합계만 표기됩니다.</p>
            <p>- 날짜를 선택하시면 상세한 내역을 확인 할 수 있습니다.</p>
          </div>
        </div>

        <HomeQuickBtns />

        <div class="today-order-list">
          <div class="list-title">
            <h4>실시간 매출정보</h4>
            <p>금일 최근 거래된 항목을<br>확인할 수 있습니다</p>
          </div>

          <div class="list-tabs">
            <div class="list-tab-head">
              <v-btn text v-for="(item, index) in ['장비(현금)','키오스크']" 
                :key="index"
                :class="{active:todayOrderTabs === index}"
                @click="todayOrderTabs = index"
              >
                {{item}}
              </v-btn>
              <div 
                class="active-bar" 
                :style="{right:todayOrderTabs === 0 ? 80 + 'px' : 0 + 'px'}"
              />
            </div>

            <div class="list">
              <div class="list-item" v-for="item in 5" :key="item">
                <div class="top">
                  <label>관리자</label>
                  <span>2021-08-26 12:34</span>
                </div>
                <dl>
                  <dt>회원번호</dt>
                  <dd>010-8525-4561</dd>
                </dl>
                <dl>
                  <dt>변동포인트</dt>
                  <dd>-1,000 P</dd>
                </dl>
              </div>
              <div class="more-btn" v-ripple>
                <label>목록 전체보기</label>
                <v-icon>mdi-chevron-right</v-icon>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- home -->
    </v-main>
  </div> <!-- wrap -->
</template>

<script>
import Header from '@/components/header'
import Calendar from '@/components/calendar'
import Drawer from '@/components/drawer'
import HomeQuickBtns from '@/components/homeQuickBtns'

export default {
  name: "Home",
  components: {
    Header, Calendar, Drawer, HomeQuickBtns
  },
  data(){
    return{
      homeTabs:0,
      activePosition:0,
      todayOrderTabs:0,
    }
  },
  methods:{
    tabAction(index){
      this.homeTabs = index;

      if(index === 0){
        this.activePosition = 0
      }else{
        this.activePosition = 100
      }
    },

    drawerOpenEvent(){
      this.$refs.drawer.handle(true)
    },
  },
};
</script>

<style lang="scss">
.home{
  .home-tab-head{
    display:flex;
    justify-content: center;
    align-items: center;
        
    .tab-inner{
      position: relative;
      background:#f2f2f2;
      border-radius:20px;
      overflow:hidden;
      
      .v-btn{
        position: relative;
        z-index:2;
        width:100px;
        height:40px;
        border-radius:20px;       
        label{color:#898989}
      }

      .v-btn.active{
        
        label{
          color:#292929;
        }
      }

      .activeBox{
        position: absolute;
        top:0px;
        left:0px;
        width:100px;
        border:2px solid #292929;
        height:40px;
        border-radius:20px;
        z-index:1;
        transition:left .3s;
        background:#fff;
      }
    }
  }

  .tab-cont{
    padding:30px 15px;

    .calendar-guide{
      margin-top:25px;

      p{
        font-size:11px;
        padding:0;
        margin:0;
        margin-bottom:5px;
        color:#888;
        background:#F9F8F4;
        border-radius:5px;
        padding:5px;
        margin-bottom:5px;  
      }
    }

    .day-detail{

      border-radius:5px;
      margin-top:20px;

      .today-label{
        display:flex;
        justify-content: center;

        span{
          background:rgba(255,0,0,0.1);
          font-size:13px;
          padding:3px 15px;
          border-radius:99px;
        }
      }

      table{
        width:100%;
        font-size:12px;
        margin-top:10px;

        td{height:25px;}
        td:nth-child(1){
          color:#898989;
        }
        td:nth-child(2){
          width:40px;
          text-align:right;
        }
        td:nth-child(3){
          text-align:right;
          width:80px;
        }

      }

      .total{
        border-top:1px solid #e2e2e2;
        padding-top:10px;
        margin-top:10px;
        font-size:12px;
        display:flex;
        justify-content: space-between;
        align-items: center;

        label{font-size:12px;}
        strong{
          font-size:16px;
          color:#DE0059;
        }
        strong:after{
          content:'원';
          font-size:12px;
          margin-left:5px;
        }
      }
    }
  }

  .day-sales{
    .day-select{
      display:flex;
      align-items: center;
      justify-content: space-between;

      .v-btn{
        background:#f6f6f6;
        width:30px;
        height:30px;
      }
    }

    .day-summary{
      margin-top:30px;

      .row{
        padding:5px;
      }
      .col{
        padding:5px;
      }
      .summary-item{
        display:flex;;
        flex-direction: column;
        justify-content: space-between;
        border:1px solid #e2e2e2;
        border-radius:5px;
        padding:10px;
        box-shadow: 3px 3px 10px rgba(0,0,0,0.05);
        height:80px;
        
        label{
          font-size:11px;
        }
        .bottom{
          display:flex;
          justify-content: space-between;
          align-items: center;
          span{
            color:#0686D2;
            font-size:12px;
          }
          strong{
            font-weight:500;
            font-size:15px;
          }
          strong:after{
            content:'원';
            font-size:12px;
            font-weight:400;
            margin-left:5px;
          }

        }
      }
    }

    .total{
      margin-top:20px;
      dl{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:10px;

        dt{
          font-size:12px;
        }

        dd{
          font-size:16px;
          font-weight:500;
        }
        dd:after{
          content:'원';
          font-size:12px;
          font-weight:400;
          margin-left:5px;
        }
      }
      dl:last-child{
        margin-bottom:0;
      }

      .day-total{
        dd{color:#DE0059}
      }
    }

    .guide-text{
      margin-top:15px;
      border-radius:5px;

      p{
        font-size:11px;
        background:#F9F8F4;
        color:#898989;
        padding:5px;
        border-radius:5px;
        margin-bottom:5px;  
        span{
          color:#292929;
        }
      }

      p:before{
        content:'*';
        margin-right:5px;
        color:#d22828;
      }

      p:last-child{
        margin-bottom:0;
      }
    }
  }

  .today-order-list{
    margin-top:30px;

    .list-title{
      padding:0 15px;

      p{
        font-size:12px;
        color:#898989;
        margin-top:5px;
        padding:0;
      }
    }

    .list-tab-head{
      position: relative;
      display:flex;
      justify-content: flex-end;

      .v-btn{
        width:80px;
        position: relative;
        border-radius:0px;
      }

      .active-bar{
        position:absolute;
        bottom:0px;
        right:0px;
        width:80px;
        height:2px;
        background:#DE0059;
        transition:right .5s;
      }

    }

    .list{
      border-top:1px solid #e2e2e2;

      .list-item{
        border-bottom:1px solid #e2e2e2;
        font-size:13px;
        padding:15px;

        .top{
          display:flex;
          align-items: center;
          margin-bottom:10px;

          label{
            height:22px;
            background:#f2f2f2;
            padding:0 10px;
            display:flex;
            justify-content: center;
            align-items: center;
            border-radius:5px;
            margin-right:10px;
            font-size:11px;
          }
          span{
            color:#898989;
          }
        }
        
        dl{
          display:flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom:5px;
        }
        dl:last-child{
          margin-bottom:0;
          dd{
            color:#DE0059;
          }
        }
      }
    }

    .more-btn{
      display:flex;
      justify-content: center;
      align-items: center;
      height:50px;

      label{
        font-size:12px;
      }
      .v-icon{
        font-size:18px;
        color:#0686D2;
        margin-left:5px;
      }
    }
  }
}
</style>
