<template>
  <div class="machine_total"> <!-- 장비별 판매종합 -->
    <DateSelect type="month" />

    <div class="total">
      <label>해당 월 장비매출</label>
      <span>843,000</span>
    </div>

    <div class="machine-list">
      <div class="no-item">
        등록된 장비가 없습니다.
      </div>
      <div class="list-item" v-for="item in 6" :key="item">
        <div class="left">
          <span>{{item}}위</span>
          <label>1번 세탁기</label>
        </div>
        <div class="right">
          <span>12건</span>
          <strong>78,400 원</strong>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import DateSelect from '@/components/date_select'

export default {
  components:{
    DateSelect
  },
}
</script>

<style lang="scss" scoped>
.machine_total{

}

.total{
  display:flex;
  align-items: center;
  justify-content: space-between;
  background:#f2f2f2;
  height:50px;
  border-radius:10px;
  padding:0 15px;
  margin:20px 15px;

  label{
    font-size:12px;
  }
  span{
    font-weight:500;
    color:#DE0059;
  }
  span:after{
    content:'원';
    margin-left:5px;
    font-size:12px;
    font-weight:400;
    color:#292929;
  }
}

.machine-list{
  margin:0 15px;

  .no-item{
    text-align:center;
    border-radius:10px;
    padding:15px;
    border:1px solid #e2e2e2;
    font-size:12px;
    margin-bottom:10px;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.05);
  }

  .list-item{
    display:flex;
    justify-content: space-between;
    align-items: center;
    border:1px solid #e2e2e2;
    border-radius:10px;
    padding:15px;
    margin-bottom:10px;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.05);

    .left{
      display:flex;
      align-items: center;
      flex:1;
      margin-right:15px;

      span{
        display:flex;
        justify-content: center;
        align-items: center;
        width:36px;
        height:36px;
        background:#e2e2e2;
        border-radius:18px;
        font-size:12px;
        margin-right:10px;
      }
      label{
        font-size:14px;
        flex:1;
      }
    }
    .right{
      display:flex;
      flex-direction: column;
      align-items: flex-end;

      span{
        font-size:11px;
        color:#0686D2
      }
      strong{
        font-size:14px;
        font-weight:500;
      }
    }
  }

  @for $i from 1 through 4 {
    .list-item:nth-child(#{$i}){
      .left{
        span{
          background:#DE0059;
          color:#fff;
        }
      }
    }
  }

}
</style>