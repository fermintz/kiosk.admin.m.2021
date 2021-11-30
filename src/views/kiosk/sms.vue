<template>
  <div class="sms_wrap">
    <div class="member_setup">
      <dl class="member_select">
        <dt>회원기준선택</dt>
        <dd>
          <v-dialog
            ref="dialog2"
            v-model="modal2"
            :return-value.sync="select"
            
          >
            <template v-slot:activator="{on, attrs}">
              <v-btn
                text
                v-bind="attrs"
                v-on="on"
                class="select-btn"
              >
                <label>{{selected}}</label>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <div class="select_card">
              <ul>
                <li 
                  v-for="(item, index) in ['전체가입자','회원 가입일 기준','회원 이용일 기준']" 
                  :key="index"
                  @click="memberSelect(item ,index)"
                  v-ripple
                >
                  {{item}}
                </li>
              </ul>
            </div>
          </v-dialog>
        </dd>
      </dl>
      <dl class="date_select" v-show="dateActive">
        <dt>기준날짜</dt>
        <dd>
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                v-bind="attrs"
                v-on="on"
                class="select-btn"
                
              >{{date}}</v-btn>
            </template>
            <v-date-picker
              v-model="date"
              @input="$refs.dialog.save(date)"
              locale="ko"
            ></v-date-picker>
          </v-dialog>

          <v-btn text 
            class="prev"
            v-for="(item,index) in ['이전','이후']"
            :key="index"
            :class="{active:dateTime === index}" 
            @click="dateTime = index"
          >
            {{item}}
          </v-btn>
        </dd>
      </dl>
      <dl class="price_select">
        <dt>회원 결제금액</dt>
        <dd>
          <div class="input_box">
            <input type="number" placeholder="금액을 입력해주세요">
            <span>원 이상 사용자</span>
          </div>
        </dd>
      </dl>
      <v-btn text rounded class="search_btn">회원 조회하기</v-btn>
    </div>

    <div class="member_searched">
      <div class="top">
        <div class="member_number">
          <span>대상 회원수</span>
          <strong>312</strong>
        </div>
        <div class="total_member">
          총 회원수: 506명
        </div>
        <dl class="event_select">
          <dt>이벤트선택</dt>
          <dd>
            <v-btn
              text
              v-for="(item,index) in ['문자만 발송','문자+포인트 발송']" 
              :key="index"
              @click="eventSelected = index"
              :class="{active:eventSelected === index}"
            >
              <v-icon v-show="eventSelected === index">
                mdi-check-circle
              </v-icon>
              <span>
                {{item}}
              </span>
            </v-btn>
          </dd>
        </dl>
    
        <div class="input_box" v-show="eventSelected === 1">
          <input type="number" placeholder="적립금액을 입력해주세요">
          <span>원</span>
        </div>
        <textarea placeholder="보내실 문자내용을 입력해주세요"></textarea>

        <div class="guide">
          <p>이모티콘 및 일부 특수문자들의 경우 발송이 불가능합니다.</p>
        </div>
      </div>

      <div class="bottom">
        <dl>
          <dt>대상회원</dt>
          <dd>330명</dd>
        </dl>
        <dl>
          <dt>이벤트종류</dt>
          <dd>문자 + 포인트적립</dd>
        </dl>
        <dl>
          <dt>대상분류</dt>
          <dd>모든회원</dd>
        </dl>

        <div class="divider" />

        <dl>
          <dt>대상자 x 문자발송비용(건당 55원)</dt>
          <dd>18,150 원</dd>
        </dl>
        <dl>
          <dt>부가가치세</dt>
          <dd>1,650 원</dd>
        </dl>
        
        <div class="divider" />

        <dl class="last">
          <dt>최종결제금액</dt>
          <dd>19,800</dd>
        </dl>

        <v-btn text rounded>
          결제 후 발송하기
        </v-btn>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      modal:false,
      modal2:false,
      date:'',
      dateActive:false,
      dateTime:0,
      selected:'전체가입자',
      eventSelected:0
    }
  },
  mounted(){
    this.date = this.$moment().format('YYYY-MM-DD')
  },
  methods:{
    memberSelect(value, index){
      this.selected = value;
      if(index != 0){
        this.dateActive = true;
      }else{
        this.dateActive = false
      }
      this.modal2 = false
    }
  },
}
</script>

<style lang="scss" scoped>
.sms_wrap{
  padding:0 15px;

  .member_setup{
    border:1px solid #e2e2e2;
    border-radius:10px;
    padding:20px;
    background:#fff;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.05);

    dl{
      margin-bottom:25px;
      dt{
        font-size:11px;
      }
      dd{
        margin-top:5px;
      }
    }

    dl.member_select{
      dd{
        .v-btn{
          width:100%;
          height:40px;
          border:1px solid #e2e2e2;
          background:#f8f8f8;
          border-radius:5px;
          justify-content: space-between;

          label{font-size:12px;}
        }
      }
    }     

    dl.date_select{
      dd{
        display:flex;
        align-items: center;
        .select-btn{
          flex:1;
          margin-right:5px;
          border:1px solid #e2e2e2;
          height:40px;
          background:#f8f8f8;
          border-radius:5px;
        }
        .v-btn.next, .v-btn.prev{
          border:1px solid #e2e2e2;
          height:40px;
          min-width:40px;
          padding:0 10px;
          margin-left:5px;
          font-size:12px;
          border-radius:5px;
        }

        .v-btn.active{
          background:#0686D2;
          color:#fff;
          border:0;
        }
      }
    }

    dl.price_select{
      dd{
        .input_box{
          position: relative;
          display:flex;
          align-items: center;
          input{
            width:100%;
            height:40px;
            padding:0 80px 0 10px;
            border-radius:5px;
            border:1px solid #e2e2e2;
          }
          span{
            right:10px;
            position: absolute;
            font-size:11px;
          }
        }
      }
    }
    .search_btn{
      width:100%;
      height:40px;
      border:1px solid #0686D2;
      color:#0686D2;
    }
  }

  

  .member_searched{
    border:1px solid #e2e2e2;
    
    border-radius:10px;
    margin-top:20px;
    background:#fff;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.05);

    .top{
      padding:20px;

      .member_number{
        display:flex;
        justify-content: space-between;
        align-items: center;
        height:40px;
        border-bottom:1px solid #e2e2e2;

        span{font-size:12px;}
        strong{
          color:#de0059;
          font-weight:500;
          font-size:18px;
        }
        strong:after{
          content:'명';
          font-size:12px;
          font-weight:400;
          color:#292929;
          margin-left:5px;
        }
      }

      .total_member{
        text-align:right;
        font-size:11px;
        margin-top:5px;
        margin-bottom:20px;
      }

      .event_select{
        margin-bottom:20px;
        dt{
          font-size:11px;
          margin-bottom:5px;
        }
        dd{
          display:Flex;
          align-items: center;

          .v-btn{
            flex:1;
            border:1px solid #e2e2e2;
            margin-right:10px;
            span{
              font-size:11px;
            }
            .v-icon{
              font-size:16px;
              margin-right:2px;
              color:#de0059;
            }
          }
          .v-btn.active{
            border:1px solid #de0059;
            span{
              color:#de0059
            }
          }
          .v-btn:last-child{
            margin-right:0px;
          }
        }
      }

      .input_box{
        position: relative;
        display:flex;
        align-items: center;
        margin-bottom:10px;
        input{
          width:100%;
          height:40px;
          padding:0 50px 0 10px;
          border-radius:5px;
          border:1px solid #e2e2e2;
        }
        span{
          right:10px;
          position: absolute;
          font-size:11px;
        }
      }

      textarea{
        resize: none;
        height:120px;
        width:100%;
        border-radius:5px;
        border:1px solid #e2e2e2;
      }

      .guide{
        margin-top:10px;
        margin-bottom:15px;
        p{
          font-size:11px;
          margin:0px;
        }
        p:before{
          content:'*';
          color:#de2828;
          margin-right:3px;
        }
      }
    
    }

    .bottom{
      padding:20px;
      background:#f8f8f8;

      dl{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:10px;
        dt{
          font-size:12px;
        }
        dd{
          font-size:12px;
        }
      }

      dl.last{
        dd{
          font-size:18px;
          color:#de0059;
          font-weight:500;
        }
        dd:after{
          content:'원';
          font-size:12px;
          font-weight:400;
          margin-left:5px;
          color:#292929;
        }
      }

      .divider{
        height:1px;
        background:#e2e2e2;
        margin:15px 0;
      }

      .v-btn{
        margin-top:40px;
        width:100%;
        background:#de0059;
        color:#fff;
        height:40px;
      }
    }

    
  }
}

.select_card{
  background:#fff;

  ul{
    list-style: none;;
    margin:0px;
    padding:0px;

    li{
      display:flex;
      align-items: center;
      padding:0 15px;
      height:50px;
      border-bottom:1px solid #e2e2e2;
      font-size:14px;
    }
  }
}
</style>