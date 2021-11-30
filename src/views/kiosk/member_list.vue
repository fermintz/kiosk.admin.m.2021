<template>
  <div class="member_list_wrap">
    <div class="top_btns">
      <v-btn text rounded>
        <v-icon>
          mdi-magnify
        </v-icon>
        <label>회원검색</label>
      </v-btn>
      <v-btn text rounded 
        @click="$refs.memberAdd.handle(true)"
      >
        <v-icon>
          mdi-plus
        </v-icon>
        <label>회원등록</label>
      </v-btn>
    </div>

    <div class="member_total_info">
      <dl>
        <dt>등록된 회원수</dt>
        <dd>401 명</dd>
      </dl>
      <dl>
        <dt>이번달 신규가입자</dt>
        <dd>12 명</dd>
      </dl>
      <dl>
        <dt>오늘 신규가입자</dt>
        <dd>0 명</dd>
      </dl>
    </div>
    <div class="member_list">
      <!-- <div class="no_item">
        등록된 회원이 없습니다.
      </div> -->
      <div class="member_item" v-for="item in 10" :key="item">
        <div class="top">
          <label>010-8525-4561</label>
          <div class="user_point">
            <span>남은 포인트</span>
            <strong>37,000 P</strong>
          </div>
        </div>
        <div class="user_info">
          <dl>
            <dt>총 결제금액</dt>
            <dd>100,000 원</dd>
          </dl>
          <dl>
            <dt>총 사용한 포인트</dt>
            <dd>48,500 P</dd>
          </dl>
          <dl>
            <dt>총 받은 보너스포인트</dt>
            <dd>5,600 P</dd>
          </dl>
        </div>
       
        <v-btn text @click="$router.push('memberDetail')">상세정보</v-btn>
        
      </div>
    </div>

    <MemberAdd ref="memberAdd" />
    
  </div>
</template>

<script>
import MemberAdd from '@/components/modal/member_add.vue'


export default {
  components:{
    MemberAdd
  },
}
</script>

<style lang="scss" scoped>
.member_list_wrap{

  .top_btns{
    padding:0 25px;
    display:flex;
    .v-btn{
      flex:1;
      height:40px;
      border:1px solid #e2e2e2;
      margin-right:15px;
      box-shadow: 3px 3px 12px rgba(0,0,0,0.05);
      .v-icon{
        width:18px;
        height:18px;
        background:#0686D2;
        margin-right:5px;
        color:#fff;
        border-radius:100px;
        font-size:12px;
      }
      label{
        font-size:12px;
      }
    }

    .v-btn:last-child{
      margin-right:0px;
    }
  }
  
  .member_total_info{
    margin:20px;
    background:#f2f2f2;
    border-radius:10px;
    padding:15px;

    dl{
      display:flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom:5px;
      dt{font-size:12px;}
      dd{font-size:12px;}
    }
    dl:last-child{
      margin-bottom:0px;
    }
  }

  .member_list{   
    border-top:1px solid #e2e2e2;

    .no_item{
      text-align:center;
      height:100px;
      display:flex;
      justify-content: center;
      align-items: center;
      font-size:12px;
      color:#888;
    }

    .member_item{
      padding:20px;
      border-bottom:1px solid #e2e2e2;
      .top{
        display:flex;
        justify-content: space-between;
        align-items: center;

        label{
          font-size:16px;
          font-weight:500
        }

        span{
          color:#888;
          font-size:12px;
          margin-right:10px;
        }
        strong{
          font-size:14px;
          font-weight:500;
          color:#0686D2;
        }
      }

      .user_info{
        padding:12px;
        background:#f8f8f8;
        margin-top:10px;
        border-radius:10px;
        dl{
          align-items: center;
          display:flex;
          justify-content: space-between;
          margin-bottom:5px;
          dt{
            font-size:11px;
          }
          dd{
            font-size:11px;
          }
        }
        dl:last-child{
          margin-bottom:0px;
        }
      }

      .v-btn{
        width:100%;
        border:1px solid #aaa;
        font-size:11px;
        height:32px;
        padding:0 10px;
        margin-top:10px;
      }
    }
  }
}
</style>