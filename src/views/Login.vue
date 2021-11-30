<template>
  <div class="login_wrap">
    <div class="login_top">
      <div class="logo">
        <img src="@/assets/img/logo_icon.png">
      </div>
      <p>페이오티 매출관리시스템</p>
    </div>
    <div class="login_form">
      <div class="input_box">
        <v-icon>mdi-account-circle</v-icon>
        <input type="text" placeholder="아이디">
      </div>
      <div class="input_box">
        <v-icon>mdi-lock</v-icon>
        <input type="password" placeholder="비밀번호">
      </div>
      <v-btn text @click="$router.push('/')">
        로그인
      </v-btn>
    </div>

    <div class="bottom">
      <v-btn text rounded>
        <img src="@/assets/img/kakao-icon.png">
        <label>카카오톡 문의하기</label>
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login_wrap{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;

  .login_top{
    margin-bottom:30px;
    text-align:center;
    .logo{
      img{height:120px;}
    }
    p{
      font-size:14px;
    }
  }
  .login_form{
    width:100%;
    padding:0 40px;

    .input_box{
      display:flex;
      align-items: center;
      position: relative;
      margin-bottom:10px;
      box-shadow: 3px 3px 12px rgba(0,0,0,0.05);

      .v-icon{
        width:46px;
        height:46px;
        position: absolute;
        left:0px;
        font-size:18px;

      }
      input{
        width:100%;
        border:1px solid #aaa;
        height:46px;
        border-radius:5px;
        padding-left:46px;
      }     
    }
    .v-btn{
      width:100%;
      border:1px solid #0686D2;
      color:#0686D2;
      height:46px;
      box-shadow: 3px 3px 12px rgba(0,0,0,0.05);
    }
  }

  .bottom{
    margin-top:40px;
    .v-btn{
      background:#f6f6f6;
      img{height:20px;}
      label{
        font-size:11px;
        margin-left:5px;
      }
    }
  }
}
</style>