<template>
  <div class="footer">
    <div class="left" v-if="roundInProgress || resultsInProgress || roundStarting">
      <div>
        <div>OVER</div>
        <div>UNDER</div>
      </div>
      <div class="over-under">{{ firstFiveSum }}</div>
    </div>
    <div class="right" v-if="roundInProgress || resultsInProgress || roundStarting">
      <div>
        <div>Even</div>
        <div class="progress">
          <div class="filler" v-bind:style="{ width: (evens.length / evenTotal) * 100 + '%' }"></div>
        </div>
        <div>{{ evens.length }}</div>
      </div>
      <div>
        <div>Odd</div>
        <div class="progress">
          <div class="filler" v-bind:style="{ width: (odds.length / oddTotal) * 100 + '%' }"></div>
        </div>
        <div>{{ odds.length }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Footer",
  data() {
    return {
      oddTotal: 0,
      evenTotal: 0,
      odds: [],
      evens: [],
      firstFiveSum: 0,
      firstFiveSumIterrator: 0
    };
  },
  computed: {
    ...mapState([
      "countdownInProgress",
      "roundInProgress",
      "resultsInProgress",
      "roundStarting",
      "currentBall",
      "balls",
      "results",
      "evenOddTotal",
      "overUnderLimit"
    ])
  },
  created() {
    console.log("footer created");
    let tempBalls = this.resultsInProgress ? this.results : this.balls;

    this.initData();
    if (tempBalls && tempBalls.length > 0) {
      if (tempBalls.length >= this.overUnderLimit) {
        this.firstFiveSumIterrator = this.overUnderLimit;
      } else {
        this.firstFiveSumIterrator = tempBalls.length;
      }
      for (let i = 0; i < this.firstFiveSumIterrator; i++) {
        this.firstFiveSum += tempBalls[i].ball;
      }
      const tempEvenOddTotal =
        tempBalls.length >= this.evenOddTotal
          ? this.evenOddTotal
          : tempBalls.length;
      for (let i = 0; i < tempEvenOddTotal; i++) {
        if (tempBalls[i].ball % 2 == 0) {
          this.evens.push(tempBalls[i].ball);
        } else {
          this.odds.push(tempBalls[i].ball);
        }
      }
    }
  },
  methods: {
    initData() {
      this.oddTotal = 0;
      this.evenTotal = 0;
      this.odds = [];
      this.evens = [];
      this.firstFiveSum = 0;
      this.firstFiveSumIterrator = 0;
      this.initEvenOdd();
    },
    initEvenOdd() {
      for (let i = 1; i <= this.evenOddTotal; i++) {
        if (Math.abs(i) % 2 === 1) {
          this.oddTotal++;
        } else {
          this.evenTotal++;
        }
      }
    }
  },
  watch: {
    currentBall() {
      if (this.countdownInProgress) {
        this.initData();
      } else {
        if (this.odds && this.evens && this.currentBall) {
          if (
            this.odds.length < this.oddTotal &&
            this.currentBall.ball % 2 !== 0
          ) {
            this.odds.push(this.currentBall.ball);
          }

          if (
            this.evens.length < this.evenTotal &&
            this.currentBall.ball % 2 === 0
          ) {
            this.evens.push(this.currentBall.ball);
          }

          if (this.firstFiveSumIterrator < this.overUnderLimit) {
            this.firstFiveSum += this.currentBall.ball;
            this.firstFiveSumIterrator++;
          }
        }
      }
    },
    countdownInProgress() {
      this.initData();
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 0 30px;
  display: flex;
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: #1f3047;
  color: white;
  font-weight: 400;
  font-family: Roboto-Regular;
  font-size: 20px;
  box-sizing: border-box;

  .left {
    display: flex;
    align-items: center;
    flex: 3;

    .over-under {
      padding-left: 10px;
      font-size: 20px;
      font-weight: 500;
      font-family: Roboto-Medium;
    }
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div {
      display: flex;
      align-items: center;

      :first-child {
        width: 65px;
      }

      .progress {
        width: calc(100% - 85px);
        height: 4px;
        background: #7d90ab;
        margin-right: 15px;

        .filler {
          height: 100%;
          background: white;
          width: 0;
        }
      }

      :last-child {
        text-align: right;
        width: 20px;
      }
    }
  }
}

@media screen and (max-width: 1600px) {
  .footer {
    padding: 0 25px;
  }
}

@media screen and (max-width: 1366px) {
  .footer {
    padding: 0 20px;
    height: 50px;
    font-size: 18px;

    .over-under {
      font-size: 18px;
    }

    .progress {
      height: 3px;
    }
  }
}

@media screen and (max-width: 768px) {
  .footer {
    padding: 0 15px;
    height: 35px;
    font-size: 12px;
    line-height: 14px;

    .over-under {
      font-size: 18px;
      line-height: 22px;
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      & > div {
        display: flex;
        align-items: center;

        :first-child {
          width: 35px;
        }

        .progress {
          width: calc(100% - 55px);
          height: 3px;
          margin-right: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .right {
    flex: 1 !important;
  }

  .left {
    flex: 2 !important;
  }
}

@media screen and (max-width: 360px) {
  .right {
    flex: 1 !important;
    padding-left: 30px;
  }

  .left {
    flex: 1 !important;
  }
}
</style>

