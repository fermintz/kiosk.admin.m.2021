import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SubPage from '@/components/layout/subPage';
import MachineTotal from '../views/machine/machine_total.vue';
import MachineUseList from '../views/machine/machine_use_list';
import MachineRemote from '../views/machine/remote';
import RemoteReason from '../views/machine/remote_reason';
import KioskTotal from '../views/kiosk/kiosk_total'
import KioskContorl from '../views/kiosk/kiosk_control'
import KioskSound from '../views/kiosk/sound'
import MemberList from '../views/kiosk/member_list'
import KakaoSetup from '../views/kiosk/kakao'
import MemberDetail from '../views/kiosk/member_detail'
import Sms from '../views/kiosk/sms'
import PointControl from '../views/kiosk/point_control'
import KioskUseList from '../views/kiosk/kiosk_use_list'
import PointList from '../views/kiosk/point_list'
import MachineCalendar from '../views/machine/machine_calendar'
import KioskCalendar from '../views/kiosk/kiosk_calendar'
import PointCalendar from '../views/kiosk/point_calendar'
import PointSetup from '../views/kiosk/point_setup'
import PointEventSetup from '../views/kiosk/point_event_setup'
import PointEventAdd from '../views/kiosk/point_event_add'

import StatsMonth from '../views/stats/month'
import StatsWeek from '../views/stats/week'
import StatsDay from '../views/stats/day'
import StatsTime from '../views/stats/time'
import StatsRank from '../views/stats/rank'
import MyShopCalc from '../views/stats/myShop'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path:'/sub',
    name:'subPage',
    component: SubPage,
    children:[
      {
        path:"/machineTotal",
        name:'machineTotal',
        component: MachineTotal,
      },
      {
        path:"/machineUseList",
        name:'machineUseList',
        component: MachineUseList,
      },
      {
        path:"/machineRemote",
        name:'machineRemote',
        component: MachineRemote,
      },
      {
        path:"/remoteReason",
        name:'remoteReason',
        component: RemoteReason,
      },
      {
        path:"/kioskTotal",
        name:'kioskTotal',
        component: KioskTotal,
      },
      {
        path:"/kioskUseList",
        name:'kioskUseList',
        component: KioskUseList,
      },
      {
        path:"/kioskControl",
        name:'kioskControl',
        component: KioskContorl,
      },
      {
        path:"/kioskSound",
        name:'kioskSound',
        component: KioskSound,
      },
      {
        path:"/memberList",
        name:'memberList',
        component: MemberList,
      },
      {
        path:"/kakaoSetup",
        name:'kakaoSetup',
        component: KakaoSetup,
      },
      {
        path:"/pointControl",
        name:'pointControl',
        component: PointControl,
      },
      {
        path:"/sms",
        name:'sms',
        component: Sms,
      },
      {
        path:"/pointList",
        name:'pointList',
        component: PointList,
      },
      {
        path:"/machineCalendar",
        name:'machineCalendar',
        component: MachineCalendar,
      },
      {
        path:"/kioskCalendar",
        name:'kioskCalendar',
        component: KioskCalendar,
      },
      {
        path:"/pointCalendar",
        name:'pointCalendar',
        component: PointCalendar,
      },
      {
        path:"/statsMonth",
        name:'statsMonth',
        component: StatsMonth,
      },
      {
        path:"/statsWeek",
        name:'statsWeek',
        component: StatsWeek,
      },
      {
        path:"/statsDay",
        name:'statsDay',
        component: StatsDay,
      },
      {
        path:"/statsTime",
        name:'statsTime',
        component: StatsTime,
      },
      {
        path:"/statsRank",
        name:'statsRank',
        component: StatsRank,
      },
      {
        path:"/myShopCalc",
        name:'myShopCalc',
        component: MyShopCalc,
      },
      {
        path:"/pointSetup",
        name:'pointSetup',
        component: PointSetup,
      },
      {
        path:"/pointEventSetup",
        name:'pointEventSetup',
        component: PointEventSetup,
      },
    ],
  },
  {
    path:"/memberDetail",
    name:'memberDetail',
    component: MemberDetail,
  },
  {
    path:"/pointEventAdd",
    name:'pointEventAdd',
    component: PointEventAdd,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(){
    return {x:0, y:0}
  }
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location){
  return originalPush.call(this, location).catch(err => {
    if(err.name !== 'NavigationDuplicated') throw err;
  })
}

export default router;
