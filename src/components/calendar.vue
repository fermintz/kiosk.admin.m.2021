<template>
  <div class="calendar">
    <div class="control">
      <v-btn icon @click="prevMonth">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <h3>
        {{ $moment(today).format("YYYY-MM") }}
      </h3>
      <v-btn icon @click="nextMonth">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>

    <div class="week-text">
      <span v-for="item in weekText" :key="item">
        {{ item }}
      </span>
    </div>
    <div class="days">
      <dl
        v-for="(day, index) in dates"
        :key="index"
        :class="{
          day:true,
          prevMonth: index < firstDateIndex,
          nextMonth: lastDateIndex < index,
          dayActive: dayActive === index,
        }"
        @click="dayActive = index"
      >
        <dt>
          <span>{{ day }}</span>  
        </dt>
        <dd>{{ bindAmount(day) }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
let date = new Date();

export default {
  data() {
    return {
      weekText: ["일", "월", "화", "수", "목", "금", "토"],
      dates: [],
      today: date,
      amount_table: new Map(),
      firstDateIndex: null,
      lastDateIndex: null,
      dayActive:null,
    };
  },

  mounted() {
    this.calendarMake();
    this.amount_table = new Map()
      .set('1', 1000)
      .set('2', 2000)
      .set('3', 10000);
    console.log(this.monthOfDays());
  },

  methods: {
    calendarMake() {
      const viewYear = date.getFullYear();
      const viewMonth = date.getMonth();

      console.log("오늘날짜:" + date);
      console.log("현재년도:" + viewYear);
      console.log("이번달:" + viewMonth);

      const prevMonthLast = new Date(viewYear, viewMonth, 0);
      const thisMonthLast = new Date(viewYear, viewMonth + 1, 0);

      const plDate = prevMonthLast.getDate(); //지난달 마지막 날짜
      const plDay = prevMonthLast.getDay(); // 지난달 마지막 요일
      const tlDate = thisMonthLast.getDate(); // 이번달 마지막 날짜
      const tlDay = thisMonthLast.getDay(); // 이번달 마지막 요일

      console.log("plDate 지난달 마지막 날짜:" + plDate);
      console.log("plDay 지난달 마지막 요일:" + plDay);
      console.log("tlDate 이번달 마지막 날짜:" + tlDate);
      console.log("tlDay 이번달 마지막 요일:" + tlDay);

      const prevDates = [];
      const thisDates = [...Array(tlDate + 1).keys()].slice(1);
      const nextDates = [];

      if (plDay !== 6) {
        for (let i = 0; i < plDay + 1; i++) {
          prevDates.unshift(plDate - i);
        }
      }

      for (let i = 1; i < 7 - tlDay; i++) {
        nextDates.push(i);
      }

      console.log(thisDates);
      console.log(prevDates);
      console.log(nextDates);

      this.dates = prevDates.concat(thisDates, nextDates);

      console.log(this.dates);

      this.firstDateIndex = this.dates.indexOf(1);
      this.lastDateIndex = this.dates.lastIndexOf(tlDate);

      console.log(this.firstDateIndex);
      console.log(this.LastDateIndex);
    },

    bindAmount(day) {
      return this.amount_table.get(day) ?? '-';
    },

    monthOfDays() {
      const selectMonth = this.$moment([2021, 8, 1]);
      const firstDate = selectMonth.clone().startOf("month").startOf("week");
      const lastDate = selectMonth.clone().endOf("month").endOf("week");

      const duration = lastDate.diff(firstDate, "day") + 1;

      const days = new Array(duration)
        .fill(firstDate.toDate())
        .map((day, index) => {
          return this.$moment(day).add(index, "day").format('D');
        });

      return days;
    },

    prevMonth() {
      date.setMonth(date.getMonth() - 1);
      this.calendarMake();
    },

    nextMonth() {
      date.setMonth(date.getMonth() + 1);
      this.calendarMake();
    },
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  .control {
    display: Flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .v-btn {
      background: #f6f6f6;
      width: 30px;
      height: 30px;
    }
  }

  .week-text {
    display: flex;
    margin-bottom: 15px;
    span {
      flex: 1;
      text-align: center;
      font-size: 12px;
    }

    span:first-child {
      color: #d22828;
    }

    span:last-child {
      color: #0686d2;
    }
  }

  .days {
    display: flex;
    flex-flow: row wrap;

    dl {
      text-align: center;
      width: calc(100% / 7);
      padding: 8px 2px;
      background: #f8f8f8;
      margin-bottom: 10px;
      dt {
        span{
          position: relative;
        }
        font-size: 11px;
      }
      dd {
        font-size: 9px;
        margin-top: 5px;
      }
    }

    dl:nth-child(7n) {
      border-radius: 0 5px 5px 0;
      dt {
        color: #0686d2;
      }
    }
    dl:nth-child(7n + 1) {
      border-radius: 5px 0 0 5px;
      dt {
        color: #d22828;
      }
    }

    dl.prevMonth {
      dt {
        color: #999;
      }
      dd {
        color: #999;
      }
    }

    dl.nextMonth {
      dt {
        color: #999;
      }
      dd {
        color: #999;
      }
    }

    dl.dayActive{
      dt{
        span:after{
          content:'';
          display:block;
          background:rgba(255,0,0,0.15);
          width:24px;
          height:24px;
          position: absolute;
          left:50%;
          margin-left:-12px;
          top:-5px;
          border-radius:12px;
        }
      }
    }
  }
}
</style>
