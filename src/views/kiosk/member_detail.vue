<template>
  <div class="member_detail">
    <div class="header">
      <div class="left">
        <v-btn icon @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="detail_title">
      <h3>010-8525-4561님의 <b>상세정보</b></h3>
    </div>
    
    <div class="user_total_info">
      <dl class="my_point">
        <dt>현재 남은 포인트</dt>
        <dd>8,000 P</dd>
      </dl>
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
      <div class="point_btns">
        <v-btn text class="remove" @click="$refs.pointRemove.handle(true)">포인트 차감하기</v-btn>
        <v-btn text class="add" @click="$refs.pointAdd.handle(true)">포인트 충전하기</v-btn>
      </div>
    </div>
    
    <DateSelect type="month"/>
   
    <div class="user_use_list">
      <div class="use_item">
        <div class="item_cont">
          <div class="item_top">
            <label class="chage">포인트충전</label>
            <span>2021-08-17 13:23</span>
          </div>
          <div class="item_info">
            <span>키오스크</span>
            <strong>+10,000 P</strong>
          </div>
        </div>
        <div class="item_bottom">
          <label>카드결제</label>
          <div class="user_point">
            <span>남은포인트</span>
            <strong>37,000 P</strong>
          </div>
        </div>
      </div> <!-- use_item -->

      <div class="use_item">
        <div class="item_cont">
          <div class="item_top">
            <label class="admin">관리자</label>
            <span>2021-08-17 13:23</span>
          </div>
          <div class="item_info">
            <span>포인트충전</span>
            <strong>+10,000 P</strong>
          </div>
        </div>
        <div class="item_bottom">
          <div class="user_point">
            <span>남은포인트</span>
            <strong>37,000 P</strong>
          </div>
        </div>
      </div> <!-- use_item -->

      <div class="use_item" v-for="item in 10" :key="item">
        <div class="item_top">
          <label class="use">포인트사용</label>
          <span>2021-08-17 13:23</span>
        </div>
        <div class="item_info">
          <span>상단 3번 건조기(27kg)</span>
          <strong>-10,000 P</strong>
        </div>
        <div class="item_bottom">
          <!-- <label>-</label> -->
          <div class="user_point">
            <span>남은포인트</span>
            <strong>37,000 P</strong>
          </div>
        </div>
      </div> <!-- use_item -->
    </div>

    <PointAdd ref="pointAdd"/>
    <PointRemove ref="pointRemove"/>
  </div>
</template>

<script>
import DateSelect from '@/components/date_select'
import PointAdd from '@/components/modal/point_add.vue'
import PointRemove from '@/components/modal/point_remove.vue'

export default {
  components:{
    DateSelect, PointAdd, PointRemove
  },
}
</script>

<style lang="scss" scoped>
.member_detail{
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
  }
  
  .detail_title{
    margin-bottom:20px;

    h3{
      padding:0 15px;
      font-size:18px;
      font-weight:400;
      b{
        color:#0686D2;
        font-weight:500;
        display:block;
      }
    }
  }

  .user_total_info{
    margin:15px 15px 30px 15px;
    padding:20px;
    background:#f8f8f8;
    border-radius:10px;
    

    dl.my_point{
      border-bottom:1px solid #e2e2e2;
      padding-bottom:15px;
      margin-bottom:15px;
      dd{
        font-size:14px;
        font-weight:500;
        color:#0686D2
      }
    }
    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:10px;
      dt{
        font-size:12px;
        color:#898989;
      }
      dd{
        font-size:12px;
      }
    }
    dl:last-child{
      margin-bottom:0px;
    }
  }

  .point_btns{
    display:flex;
    align-items: center;
    margin-top:20px;
    border:1px solid #e2e2e2;
    border-radius:20px;
    background:#fff;
    overflow:hidden;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.05);

    .v-btn{
      flex:1;
      font-size:12px;
      border:0px;
      height:40px;
      border-radius:0px;
    }
    .v-btn:first-child{
      color:#de0059;
    }
    .v-btn:last-child{
      color:#0686D2;
    }
  }


  .user_use_list{
    margin-top:30px;
    border-top:1px solid #e2e2e2;

    .use_item{
      border-bottom:1px solid #e2e2e2;
      border-radius:5px;
      padding:20px;

      .item_top{
        display:flex;
        align-items:center;

        label{
          display:flex;
          justify-content: center;
          align-items: center;
          padding:0 8px;
          height:20px;
          font-size:10px;
          background:#292929;
          color:#fff;
          border-radius:5px;
        }

        label.chage{
          background:#0686D2;
        }
        label.use{
          background:#de0059;
        }

        span{
          margin-left:10px;
          font-size:12px;
          color:#898989;
        }
      }

      .item_info{
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin:12px 0;

        span{
          font-size:12px;
        }
        strong{
          font-weight:500;
        }
      }

      .item_bottom{
        display:flex;
        align-items: center;
        justify-content: space-between;
        height:36px;
        padding:0 15px;
        background:#F4F7F9;
        border-radius:5px;

        label{
          font-size:11px;
          
        }
        .user_point{
          flex:1;
          display:flex;
          justify-content: flex-end;
          align-items: center;
          span{font-size:11px;margin-right:10px;color:#898989;}
          strong{font-size:11px;}
        }
      }
    }
  }
  
}
</style>