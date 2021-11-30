<template>
  <div class="machine_use_list">
    <DateSelect type="date" />

    <div class="list">
      <div class="list-item" v-for="item in 10" :key="item">
        <div class="left">
          <span>2021-06-18 12:00</span>
          <label>1번 강력 세탁기</label>
        </div>
        <div class="right">
          <strong>5,000</strong>
        </div>
      </div>
      <v-btn text class="more">
        더보기
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
.machine_use_list{

  .list{
    margin-top:30px;
    border-top:1px solid #e2e2e2;

    .list-item{
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding:0 15px;
      height:80px;
      border-bottom:1px solid #e2e2e2;

      .left{
        display:flex;
        flex-direction: column;
        flex:1;
        span{
          color:#898989;
          font-size:12px;
        }
        label{
          font-size:14px;
          margin-top:3px;
        }
      }
      .right{
        strong{
          color:#DE0059;
        }
        strong:after{
          content:'원';
          font-size:12px;
          font-weight:400;
          margin-left:5px;
          color:#292929;
        }
      }
    }

    .more{
      width:100%;
      height:50px;
    }
  }
}
</style>