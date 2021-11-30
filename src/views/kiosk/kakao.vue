<template>
  <div class="kakao_setup">
    <div class="item">
      <div class="item_info">
        <img src="@/assets/img/kakao_01.png">
        <div class="text">
          <h4>충전 및 결제알림</h4>
          <p>키오스크 현금 및 카드결제 이용시 충전내역, 결제내역을 카톡으로 발송합니다</p>
        </div>
      </div>
      <dl>
        <dt>사용여부</dt>
        <dd>
          <v-switch
            v-model="switch1"
          ></v-switch>
        </dd>
      </dl>
    </div>

    <div class="item">
      <div class="item_info">
        <img src="@/assets/img/kakao_02.png">
        <div class="text">
          <h4>포인트 지급 및 차감알림</h4>
          <p>관라지가 직접 사용자의 포인트를 변경하게 되면 변동 내역을 카톡으로 발송합니다</p>
        </div>
      </div>
      <dl>
        <dt>사용여부</dt>
        <dd>
          <v-switch
            v-model="switch2"
          ></v-switch>
        </dd>
      </dl>
    </div>

    <div class="item">
      <div class="premium">
        해당 기능은 프리미엄 회원 전용기능입니다
      </div>
      <div class="item_info">
        <img src="@/assets/img/kakao_03.png">
        <div class="text">
          <h4>장비(세탁)종료 알림</h4>
          <p>세탁물 방치를 예방하기 위해 세탁종료 3~5분전 알림메세지를 카톡으로 발송합니다</p>
        </div>
      </div>
      <dl>
        <dt>사용여부</dt>
        <dd>
          <v-switch
            v-model="switch3"
          ></v-switch>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      switch1:false,
      switch2:false,
      switch3:false,
    }
  }
}
</script>

<style lang="scss" scoped>
.kakao_setup{
  .item{
    padding:30px;
    border-bottom:1px solid #e2e2e2;

    .premium{
      background:#FFD500;
      font-size:12px;
      margin-bottom:15px;
      padding:8px;
      border-radius:100px;
      text-align:center;

    }

    dl{
      border-radius:10px;
      padding:0 15px;
      display:flex;
      justify-content: space-between;
      align-items: center;
      background:#f8f8f8;

      dt{
        font-size:12px;
      }
    }

    .item_info{
      display:flex;
      margin-bottom:15px;
      
      img{
        display:block;
        width:80px;
        height:80px;
        border:1px solid #e2e2e2;
        border-radius:5px;
      }
  
      .text{
        margin-left:20px;
        h4{
          font-weight:500;
        }
        p{
          flex:1;
          font-size:12px;
          margin-bottom:0;
          margin-top:5px;
          color:#888;
        }
      }
    }
  }

  .item:last-child{
    border-bottom:0px;
  }
}
</style>