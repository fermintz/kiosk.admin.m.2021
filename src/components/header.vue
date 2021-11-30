<template>
  <div class="header">
    <div class="logo" @click="$router.push('/')">
      <h2><b>P</b>AYOT</h2>
    </div>
    <div class="btns">
      <v-btn icon class="message">
        <v-icon>mdi-email-outline</v-icon>
        <!-- <label>문자발송</label> -->
      </v-btn>
      <v-btn icon class="kakao">
        <v-icon>mdi-chat</v-icon>
      </v-btn>
      <v-btn icon class="menu" @click.stop="drawerUpdate">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    drawerUpdate(){
      this.$emit('drawer')
    }
  },  
}
</script>

<style lang="scss">

.header{
  position:sticky;
  top:0px;
  background:rgba(255,255,255,0.7);
  backdrop-filter: blur(7px);
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:60px;
  padding:0 15px;
  z-index:3;

  .logo{

    h2{
      font-weight:800;
      b{
        color:#0686D2;
      }
    }
  }

  .btns{
    .v-btn{
      margin-left:10px;

      .v-icon{
        font-size:18px;
      }
    }
    .v-btn.message{
      background:#DE0059;
      color:#fff;
      border-radius:18px;

      label{font-size:11px;margin-left:3px;}
    }
    .v-btn.kakao{
      background:#FFC400;
    }
    .v-btn.menu{
      background:#292929;
      color:#fff;
    }
  }
}

</style>