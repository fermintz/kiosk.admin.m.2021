<template>
  <v-bottom-sheet
    v-model="visible"
  >
    <div class="point_control">
      <h4><span>010-8525-4561</span> 회원 포인트차감</h4>
      <p><span>차감할 금액</span>과 차감사유를 입력해주세요</p>

      <div class="form">
        <div class="input_box">
          <input type="number" placeholder="차감금액을 입력해주세요" :value="coinValue"/>
          <span>원</span>
        </div>
        <div class="btns">
          <v-btn text @click="coinValue += 100">+100원</v-btn>
          <v-btn text @click="coinValue += 1000">+1,000원</v-btn>
          <v-btn text @click="coinValue += 5000">+5,000원</v-btn>
          <v-btn text @click="coinValue = null">초기화</v-btn>
        </div>

        <dl>
          <dt>
            포인트 차감사유입력<span>(선택사항)</span>
          </dt>
          <dd>
            <textarea 
              placeholder="충전사유를 입력해주세요"
            />
          </dd>
        </dl>

        <v-btn text class="finish">입력완료</v-btn>
      </div>
    </div>
  </v-bottom-sheet>
</template>

<script>
export default {
  data(){
    return{
      coinValue:null,
      visible:false,
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
.point_control{
  background:#fff;
  padding:25px;
  border-radius:30px 30px 0 0;

  h4{
    span{color:#DE0059}
  }

  p{
    font-size:12px;
    margin-top:5px;
    span{
      color:#DE0059
    }
  }

  .form{
    .input_box{
      display:flex;
      align-items: center;
      position:relative;

      input{
        flex:1;
        height:40px;
        width:100%;
        padding:0 5px;
        padding-right:40px;
        border:1px solid #aaa;
        border-radius:5px;
      }
      span{
        position:absolute;
        right:0;
        width:40px;
        text-align:center;
        font-size:12px;
      }
    }
    
    .btns{
      border:1px solid #aaa;
      display:flex;
      align-items: center;
      margin-top:10px;
      border-radius:5px;
      overflow:hidden;

      .v-btn{
        flex:1;
        height:34px;
        border-radius:0;
        border-right:1px solid #e2e2e2;
        font-size:12px;
      }
      .v-btn:last-child{
        border-right:0px;
      }
    }

    dl{
      margin-top:30px;
      dt{
        font-size:12px;
        span{
          color:#888;
          margin-left:5px;
        }
      }
      dd{
        margin-top:5px;

        textarea{
          border:1px solid #aaa;
          width:100%;
          border-radius:5px;
          resize:none;
          height:100px;
        }
      }
    }

    .finish{
      width:100%;
      height:50px;
      background:#DE0059;
      border-radius:5px;
      color:#fff;
      font-size:12px;
      margin-top:10px;
    }
  }
}
</style>