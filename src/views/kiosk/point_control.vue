<template>
  <div class="point_control">
    <div class="member_search">
      <dl>
        <dt>회원번호 검색</dt>
        <dd>
          <input type="text" placeholder="전화번호 뒷 4자리입력">
        </dd>
      </dl>
      <v-btn text rounded>
        조회하기
      </v-btn>
    </div>

    <div class="list_head">
      <div class="left">
        <span>검색된 회원</span>
        <strong>10</strong>
      </div>
    </div>

    <div class="result_list">
      
      <div class="result_item" v-for="item in 10" :key="item">
        <div class="left">
          <h4>010-8525-4561</h4>
          <dl class="point">
            <dt>남은 포인트</dt>
            <dd>1,821,900 P</dd>
          </dl> 
        </div>
        <div class="btns">
          <v-btn text class="remove" @click="$refs.pointRemove.handle(true)">포인트<br>차감하기</v-btn>
          <v-btn text class="add" @click="$refs.pointAdd.handle(true)">포인트<br>충전하기</v-btn>
        </div>
      </div>
    </div>

    <PointAdd ref="pointAdd"/>
    <PointRemove ref="pointRemove"/>
  </div>
</template>

<script>
import PointAdd from '@/components/modal/point_add.vue'
import PointRemove from '@/components/modal/point_remove.vue'

export default {
  components:{
    PointAdd, PointRemove
  },
}
</script>

<style lang="scss" scoped>
.point_control{
  .member_search{
    margin:0 15px;
    border:1px solid #e2e2e2;
    border-radius:10px;
    padding:20px;


    dl{
      dt{
        font-size:11px;
        margin-bottom:5px;
      }
      dd{
        input{
          width:100%;
          height:40px;
          border-radius:5px;
          background:#f2f2f2;
        }
      }
    }

    .v-btn{
      margin-top:20px;
      width:100%;
      height:40px;
      border:1px solid #0686D2;
      color:#0686D2;
    }
  }

  .list_head{
    display:flex;
    align-items: center;
    justify-content: center;
    padding:0 15px;
    font-size:12px;
    margin:30px 0;

    .left{
      display:flex;
      align-items: center;
      height:26px;
      border-radius:13px;
      padding:0 15px;
      background:#f2f2f2;
      
      span{
      
      }
      strong{
        margin-left:5px;
        color:#0686D2;
      }
    }
    
  }
  .result_list{
    
    border-top:1px solid #e2e2e2;

    .result_item{
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding:20px;
      border-bottom:1px solid #e2e2e2;
      
      h4{
        font-size:14px;
      }

      dl{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-top:5px;
        dt{font-size:12px;color:#898989;margin-right:10px;}
        dd{font-weight:500;font-size:12px;color:#0686D2}
      }

      .btns{
        display:flex;
        align-items: center;
        .v-btn{
          flex:1;
          font-size:11px;
          text-align:left;
          height:45px;
          border:1px solid #e2e2e2;
          border-radius:5px;
          padding:0 8px;
          margin-left:6px;
        }

        .v-btn.remove{
          color:#de0059;
          border:1px solid #de0059;
        }
        .v-btn.add{
          color:#0686D2;
          border:1px solid #0686D2
        }
      }
    }
  }
}
</style>