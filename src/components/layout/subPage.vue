<template>
  <div class="subPage">
    <Drawer ref="drawer"/>
    <Header @drawer="drawerOpenEvent" />

    <div class="contents">
      <div class="subTitle">
        <h3>서브페이지 제목</h3>
        <p>카테고리</p>
      </div>

      <router-view />
    
    </div>

  </div>
</template>

<script>
import Header from '@/components/header'
import Drawer from '@/components/drawer'

export default {
  components:{
    Header, Drawer
  },
  methods:{
    drawerOpenEvent(){
      this.$refs.drawer.handle(true)
    },
  },
}
</script>

<style lang="scss" scoped>

.subPage{
  .subTitle{
    text-align:center;
    margin-bottom:25px;
    h2{

    }
    p{
      font-size:13px;
      margin:0px;
      padding:0px;
      color:#0686D2;

    }
  }

}

</style>