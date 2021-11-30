<template>
  <div class="kiosk_control">

    <dl class="kisok_btn" v-ripple>
      <dt>
        <v-icon class="play">
          mdi-play
        </v-icon>
      </dt>
      <dd>
        <strong>키오스크 작동</strong>
        <span>키오스크의 판매를 재개합니다</span>
      </dd>
    </dl>

    <dl class="kisok_btn" v-ripple>
      <dt>
        <v-icon class="stop">
          mdi-stop
        </v-icon>
      </dt>
      <dd>
        <strong>키오스크 정지</strong>
        <span>키오스크의 판매를 중지합니다</span>
      </dd>
    </dl>

    <dl class="kisok_btn" v-ripple>
      <dt>
        <v-icon class="replay">
          mdi-cached
        </v-icon>
      </dt>
      <dd>
        <strong>프로그램 종료 후 재실행</strong>
        <span>키오스크 프로그램을 종료 후 다시 실행합니다</span>
      </dd>
    </dl>

    <dl class="kisok_btn" v-ripple>
      <dt>
        <v-icon class="power">
          mdi-power
        </v-icon>
      </dt>
      <dd>
        <strong>전원 종료 후 재부팅</strong>
        <span>키오스크 전원을 완전히 종료 후 다시 시작합니다</span>
      </dd>
    </dl>

  </div>
</template>

<style lang="scss" scoped>
.kiosk_control{
  padding:0 25px;
  margin-top:50px;


  dl{
    position: relative;
    display:flex;
    align-items: center;
    border:1px solid #e2e2e2;
    padding:15px;
    border-radius:10px;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.05);
    min-height:90px;
    margin-bottom:10px;
    
    dt{
      .v-icon{
        font-size:36px;
      }

      .v-icon.play{color:#0686D2}
      .v-icon.stop{color:#292929}
      .v-icon.replay{color:#2A8F1F}
      .v-icon.power{color:#D22828}
    }
    dd{
      flex:1;
      margin-left:20px;

      strong{
        display:block;
        font-size:13px;
        font-weight:500;
      }
      span{
        display:block;
        font-size:11px;
        margin-top:5px;
        color:#888;
      }
    }
  }
 
}
</style>