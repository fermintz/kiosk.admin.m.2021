<template>
  <div class="point_setup">
    <div class="guide">
      상시 적용되는 포인트 적립률입니다.
    </div>

    <div class="list">
      <dl>
        <dt>1만원미만 적립률</dt>
        <dd>
          <div class="point_input_box">
            <label>현금</label>
            <input type="number" placeholder="0">
            <span>%</span> 
          </div>
          <div class="point_input_box">
            <label>카드</label>
            <input type="number" placeholder="0">
            <span>%</span> 
          </div>
        </dd>
      </dl>
      <dl>
        <dt>1만원~2만원 미만</dt>
        <dd>
          <div class="point_input_box">
            <label>현금</label>
            <input type="number" placeholder="0">
            <span>%</span> 
          </div>
          <div class="point_input_box">
            <label>카드</label>
            <input type="number" placeholder="0">
            <span>%</span> 
          </div>
        </dd>
      </dl>
      <dl>
        <dt>2만원~3만원 미만</dt>
        <dd>
          <div class="point_input_box">
            <label>현금</label>
            <input type="number" placeholder="0">
            <span>%</span> 
          </div>
          <div class="point_input_box">
            <label>카드</label>
            <input type="number" placeholder="0">
            <span>%</span> 
          </div>
        </dd>
      </dl>
      <dl>
        <dt>3만원~4만원 미만</dt>
        <dd>
          <div class="point_input_box">
            <label>현금</label>
            <input type="number" placeholder="0">
            <span>%</span> 
          </div>
          <div class="point_input_box">
            <label>카드</label>
            <input type="number" placeholder="0">
            <span>%</span> 
          </div>
        </dd>
      </dl>
      <dl>
        <dt>4만원~5만원 미만</dt>
        <dd>
          <div class="point_input_box">
            <label>현금</label>
            <input type="number" placeholder="0">
            <span>%</span> 
          </div>
          <div class="point_input_box">
            <label>카드</label>
            <input type="number" placeholder="0">
            <span>%</span> 
          </div>
        </dd>
      </dl>
    </div>

    <v-btn text>
      적용하기
    </v-btn>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.point_setup{
  padding:0 15px;

  .guide{
    display:flex;
    align-items: center;
    justify-content: center;
    background:#F9F8F4;
    height:40px;
    text-align:center;
    font-size:12px;
    border-radius:20px;
    margin-bottom:15px;
  }

  .list{


    dl{
      padding:15px;
      border:1px solid #e2e2e2;
      border-radius:5px;
      margin-bottom:10px;
      box-shadow: 3px 3px 12px rgba(0,0,0,0.05);

      dt{
        font-size:12px;
        margin-bottom:6px;
        font-weight:400;
      }
      dd{
        display:flex;
        align-items: center;
        .point_input_box{
          display:flex;
          flex:1;
          position: relative;
          align-items: center;
          margin-right:10px;

          input{
            width:100%;
            border:1px solid #c2c2c2;
            border-radius:5px;
            text-align:right;
            height:40px;
            padding:0 25px 0 40px;
            
          }

          label{
            position:absolute;
            left:10px;
            font-size:10px;
            color:#888;
          }
          span{
            position:absolute;
            right:10px;
            font-size:10px;
          }
        }
        .point_input_box:last-child{
          margin-right:0px;
        }
      } 
    }
  }

  .v-btn{
    width:100%;
    height:50px;
    background:#de0059;
    border-radius:5px;
    color:#fff;
    margin-top:10px;
  }
  
}
</style>