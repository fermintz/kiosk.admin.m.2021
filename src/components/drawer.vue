<template>
  <v-navigation-drawer
    v-model="visible"
    fixed
    right
    height="100%"
    overlay-opacity="0.3"
    :touchless="false"
  >
    <div class="drawer-inner">
      <div class="profile">
        <span>프리미엄회원</span>
        <h4>워시앤클린 광안점</h4>
        <div class="btns">
          <v-btn text @click="$router.push('login')">
            로그아웃
          </v-btn>
        </div>
      </div>
      <div class="menu">
        <dl v-for="(first, index) in menu" :key="index">
          <dt>{{first.first}}</dt>
          <dd>
            <div 
              class="second-item" 
              v-for="(second, index2) in first.second" 
              :key="index2"
              v-ripple
              @click="$router.push(second.name)"
            >
              <label>{{second.title}}</label>
              <span v-show="second.premium">P</span>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
      menu:[
        {
          active:false,
          first:'장비(현금)관리',
          second:[
            {
              title:'월매출현황(동전)',
              name:'machineCalendar',
            },
            {
              title:'장비별 판매종합',
              name:'machineTotal',
              premium:true,
            },
            {
              title:'장비 이용내역',
              name:'machineUseList',
            },
            {
              title:'원격투입',
              name:'machineRemote',
            },
            {
              title:'원격투입 내역',
              name:'remoteReason'
            },
          ],
        },
        {
          active:false,
          first:'키오스크',
          second:[
            {
              title:'키오스크 매출종합',
              premium:true,
              name:'kioskTotal'
            },
            {
              title:'월 매출현황',
              name:'kioskCalendar',
            },
            {
              title:'월 포인트 사용현황',
              name:'pointCalendar'
            },
            {
              title:'키오스크 이용내역',
              name:'kioskUseList'
            },
            {
              title:'키오스크 제어',
              name:'kioskControl'
            },
            {
              title:'경고방송 송출',
              premium:true,
              name:'kioskSound'
            },
            {
              title:'카카오톡 알림 설정',
              premium:true,
              name:'kakaoSetup'
            },
            {
              title:'회원목록',
              name:'memberList'
            },
            {
              title:'포인트 지급/차감',
              name:'pointControl'
            },
            {
              title:'포인트 지급/차감 내역',
              name:'pointList'
            },
            {
              title:'문자발송',
              name:'sms'
            },
            {
              title:'포인트 적립률 설정',
              name:'pointSetup'
            },
            {
              title:'포인트 적립이벤트',
              name:'pointEventSetup',
            },
          ],
        },
        {
          active:false,
          first:'이용분석',
          second:[
            {
              title:'월별 이용통계',
              premium:true,
              name:'statsMonth'
            },
            {
              title:'주간 이용통계',
              premium:true,
              name:'statsWeek'
            },
            {
              title:'일별 이용통계',
              premium:true,
              name:'statsDay'
            },
            {
              title:'시간별 이용통계',
              premium:true,
              name:'statsTime'
            },
            {
              title:'이용비교',
              premium:true,
              name:'statsRank'
            },
            {
              title:'나의 매장 비용계산',
              premium:true,
              name:'myShopCalc'
            },

          ],
        },
      ],
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  },
}
</script>

<style lang="scss" scoped>
.v-navigation-drawer{
  z-index:10;
  scroll-behavior: smooth;
}

.drawer-inner{

  .profile{
    border-bottom:1px solid #e2e2e2;
    padding:15px;

    span{
      font-size:11px;
      color:#0686D2;
    }

    h4{
      font-size:15px;
    }

    .btns{
      text-align:right;
      .v-btn{
        background:#f2f2f2;
        border-radius:15px;
        height:28px;
        font-size:12px;
      }
    }
  }

  .menu{
    padding:20px;
    padding-bottom:60px;

    dl{
      margin-bottom:25px;
      dt{
        font-size:15px;
        font-weight:500;
      }
      dd{
        margin-top:10px;
        .second-item{
          display:flex;
          align-items: center;
          padding:10px;
          border-radius:5px;

          label{
            font-size:13px;
            line-height:1;
            color:#292929;
          }
          span{
            display:flex;
            justify-content: center;
            align-items: center;
            width:16px;
            height:16px;
            font-size:10px;
            margin-left:8px;
            background:#FFD500;
            border-radius:4px;
          }
        }
      }
    }
    dl:last-child{
      margin-bottom:0;
    }
    
  }
}

</style>
