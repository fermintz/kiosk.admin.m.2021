<template>
  <div class="quick-menu">
    <div class="inner">
      <dl class="menu-item">
        <dt v-ripple>
          <v-icon>mdi-washing-machine</v-icon>
        </dt>
        <dd>
          장비금액 원격투입
        </dd>
      </dl>
      <dl class="menu-item">
        <dt v-ripple>
          <v-icon>mdi-cog</v-icon>
        </dt>
        <dd>
          키오스크 설정
        </dd>
      </dl>
      <dl class="menu-item">
        <dt v-ripple>
          <v-icon>mdi-plus-circle</v-icon>
        </dt>
        <dd>
          회원포인트 지급/차감
        </dd>
      </dl>
      <dl class="menu-item">
        <dt v-ripple>
          <v-icon>mdi-account</v-icon>
        </dt>
        <dd>
          회원목록 보기
        </dd>
      </dl>
      <dl class="menu-item">
        <dt v-ripple>
          <v-icon>mdi-email</v-icon>
        </dt>
        <dd>
          이벤트 문자발송
        </dd>
      </dl>
    </div>
  </div> <!-- quick-menu -->
</template>

<style lang="scss" scoped>
.quick-menu{
    margin-top:20px;

    .inner{
      display:flex;
      align-items: center;
      justify-content: flex-start;
      background:#F4F7F9;
      padding:30px;
      overflow-x:auto;
      scroll-behavior: smooth;

      dl{
        margin-right:20px;

        dt{
          display:flex;
          align-items: center;
          justify-content: center;
          width:45px;
          height:45px;
          border-radius:18px;
          background:#fff;
          .v-icon{
            font-size:24px;
            color:#0686D2;
          }
        }
        dd{
          text-align: center;
          margin-top:8px;
          font-size:9px;
          line-height:1.4;
        }
      }
      dl:last-child{
        margin-right:0px;
      }
    }

    .inner:after{
      display:block;
      content:'';
      min-width:20px;
      height:20px;
    }

    .inner::-webkit-scrollbar{
      display:none;
    }
  }
</style>