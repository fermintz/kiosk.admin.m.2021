<template>
  <div class="machine_remote">
    <div class="guide">
      <p><span>[금액투입]</span>을 터치하시면 장비에 원격으로 금액을 투입할 수 있습니다</p>
    </div>


    <div class="tab-head">
      <v-btn text 
        v-for="(item,index) in ['전체','세탁기','건조기','기타장비']" 
        :key="index"
        :class="{active:activeList === index}"
      >
        <label>{{item}}</label>
        <span>10</span>
      </v-btn>
    </div>

    <div class="machine_list">    
      <div class="list_item" v-for="item in 10" :key="item">
        <div class="left">
          <label>1번세탁기</label>
          <span>27kg</span>
        </div>
        <div class="right">
          <v-btn text @click="$refs.machineRemoteModal.handle(true)">
            금액투입
          </v-btn>
        </div>
      </div> 
    </div>

    <MachineRemoteModal ref="machineRemoteModal"/>
  </div>
</template>

<script>
import MachineRemoteModal from '@/components/machine_remote'

export default {
  components:{
    MachineRemoteModal
  },
  data(){
    return{
      activeList:0,
    }
  }
}
</script>

<style lang="scss" scoped>
.machine_remote{

  .guide{
    background:#f2f2f2;
    padding:15px;
    border-radius:5px;
    margin:0 15px;
    margin-bottom:30px;

    p{
      font-size:12px;
      margin:0px;

      span{
        color:#DE0059;
      }
    }
  }

  .tab-head{
    display:flex;
    align-items: center;
    justify-content: flex-start;
    overflow-x:auto;
    scroll-behavior: smooth;
    margin-bottom:15px;
    padding:0 15px;

    .v-btn{
      height:34px;
      background:#f2f2f2;
      border-radius:17px;
      margin-right:10px;

      label{
        font-size:12px;
      }
      span{
        font-size:11px;
        margin-left:3px;
      }
    }

    .v-btn.active{
      background:#DE0059;
      color:#fff;
    }
  }

  .tab-head::-webkit-scrollbar{
    display:none;
  }

  .machine_list{
    padding:0 15px;
    .list_item{
      border:1px solid #e2e2e2;
      border-radius:5px;
      padding:15px;
      display:flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 3px 3px 12px rgba(0,0,0,0.05);
      margin-bottom:10px;

      .left{
        display:flex;
        flex-direction: column;

        label{
          font-size:14px;
        }
        span{
          font-size:12px;
          color:#898989;
          margin-top:3px;
        }
      }
      .right{
        .v-btn{
          width:60px;
          height:60px;
          font-size:12px;
          border:2px solid #DE0059;
          color:#de0059;
          border-radius:30px;
          font-weight:500;
        }
      }
    }
  }
}
</style>