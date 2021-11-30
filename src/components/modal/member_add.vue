<template>
  <v-dialog
    v-model="visible"
  >
    <div class="modal member_add">
      <div class="top">
        <h4>
          <v-icon>mdi-plus-circle</v-icon>
          회원등록

        </h4>
      </div>
      <div class="cont">
        <dl>
          <dt>가입 휴대전화번호 입력</dt>
          <dd>
            <input type="number" placeholder="'-' 제외입력 ">
          </dd>
        </dl>
        <div class="guide">
          <p>비밀번호는 0000으로 설정됩니다</p>
          <p>고객님의 개인정보 수집 및 이용동의를 받은 후 진행해주세요</p>
          <p>이용방법을 모르실때는 고객센터로 문의해주세요</p>
        </div>
      </div>

      <div class="bottom">
        <v-btn text rounded @click="handle(false)">취소</v-btn>
        <v-btn text rounded @click="handle(false)">등록완료</v-btn>
      </div>
    </div> 
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
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

.member_add{
  background:#fff;
  
  border-radius:10px;

  .top{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:60px;
    padding:0 15px;

    h4{
      display:flex;
      align-items: center;
      .v-icon{
        font-size:18px;
        margin-right:5px;
      }
    }
    
  }

  
  .cont{
    padding:0 15px;

    dl{
      dt{
        font-size:12px;
        margin-bottom:10px;
      }
      dt:before{
        content:'*';
        color:#de0059;
        margin-right:5px;
      }
      dd{
        input{
          width:100%;
          border:1px solid #aaa;
          border-radius:5px;
          height:40px;
        }
      }
    }

    .guide{
      margin-top:15px;
      p{
        font-size:10px;
        margin-bottom:5px;
        color:#888;
      }
    }
  }
  

  .bottom{
    display:flex;
    justify-content: flex-end;
    align-items: center;
    padding:15px 15px;
    background:#f8f8f8;
    margin-top:20px;
    
    .v-btn{
      font-size:12px;
      border:1px solid #292929;
      margin-left:10px;
      font-size:12px;
      height:36px;
      
    }

    .v-btn:last-child{
      border-color:#de0059;
      color:#de0059;
      
    }
  }
}
</style>