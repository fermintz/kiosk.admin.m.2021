<template>
  <div class="kiosk_sound">
    <div class="kiosk_img">
      <img src="@/assets/img/kiosk_sound.png">
      <p>페이오티 키오스크는 각 페이지마다 안내음성을 지원하며,
별도로 경고방송을 직접 송출할 수 있습니다</p>
    </div>
    
    <div class="sound_btns">
      <div class="sound_btn" v-ripple>
        <div class="text">
          <strong>일반 경고사운드</strong>
          <span>키오스크에서 일반 경고음을 송출합니다</span>
        </div>
        <div class="icon">
          <v-icon>mdi-play-circle</v-icon>
          <label>재생하기</label>
        </div>
      </div>

      <div class="sound_btn" v-ripple>
        <div class="text">
          <strong>퇴장 경고사운드</strong>
          <span>"빨래방을 이용하지 않는 분들은 퇴장해주시기 바랍니다"</span>
        </div>
        <div class="icon">
          <v-icon>mdi-play-circle</v-icon>
          <label>재생하기</label>
        </div>
      </div>

      <div class="sound_btn" v-ripple>
        <div class="text">
          <strong>CCTV 경고사운드</strong>
          <span>"CCTV 촬영중입니다. 퇴거하지 않으시면 업무방해로 경찰출동조치 하도록 하겠습니다"</span>
        </div>
        <div class="icon">
          <v-icon>mdi-play-circle</v-icon>
          <label>재생하기</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kiosk_sound{
  padding:0 25px;

  .kiosk_img{
    text-align:center;
    img{width:70%;}
    p{
      text-align:left;
      font-size:12px;
      color:#888;
      margin:0;
    }
  }

  .sound_btns{
    margin-top:30px;

    .sound_btn{
      display:flex;
      align-items: center;
      border:1px solid #e2e2e2;
      border-radius:10px;
      padding:0 15px;
      height:90px;
      margin-bottom:10px;
      box-shadow: 3px 3px 12px rgba(0,0,0,0.05);
      
      .text{
        flex:1;
        margin-right:15px;
        strong{
          display:block;
          font-size:14px;
        }
        span{
          display:block;
          font-size:11px;
          color:#888;
          margin-top:5px;
        }
      }
      .icon{
        display:flex;
        flex-direction: column;
        .v-icon{
          font-size:32px;
          color:#0686D2;
        }
        label{
          font-size:11px;
          margin-top:5px;
        }
      }
    }
  }
}
</style>