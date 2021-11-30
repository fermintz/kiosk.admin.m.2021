<template>
  <div class="remote_reason">
    <DateSelect type="month" />

    <div class="list">
      <div class="no-item">
        등록 된 원격투입내역이 없습니다.
      </div>
      <div class="list-item" v-for="item in 10" :key="item">
        <div class="top">
          <div class="left">
            <span>2021-08-30 20:45</span>
            <label>2번 상단 건조기(20kg)</label>
          </div>
          <strong>1,000 원</strong>
        </div>

        <dl class="reason-text">
          <dt>사유</dt>
          <dd>사유를 입력하지 않았습니다.</dd>  
        </dl>
      </div>
      <v-btn text class="more">
        더 보기
      </v-btn>
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
.remote_reason{
  .list{
    margin-top:30px;
    border-top:1px solid #e2e2e2;

    .no-item{
      font-size:12px;
      border-bottom:1px solid #e2e2e2;
      padding:25px;
      text-align:center;
    }

    .list-item{
      display:flex;
      flex-direction: column;
      border-bottom:1px solid #e2e2e2;

      .top{
        padding:15px;
        display:Flex;
        align-items: center;
        .left{
          flex:1;
          margin-right:15px;
          span{
            display:block;
            font-size:12px;color:#888;
            margin-bottom:4px;
          }
          label{
            display:block;
            font-size:14px;
          }
        }
        
        strong{
          font-size:14px;
          color:#de0059;
        }
      }

      .reason-text{
        display:flex;
        align-items: flex-start;
        background:#F9F8F4;
        margin-bottom:0;
        padding:12px 15px;
        
        dt{font-size:12px;color:#898989;width:40px;}
        dd{font-size:12px;flex:1;}
      }
    }
  }

  .more{
    height:50px;
    width:100%;
  }
}
</style>