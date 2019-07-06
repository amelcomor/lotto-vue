<template>
  <div class="round">
    <div class="upper">
      <div class="left-placeholder"></div>
      <div class="center-placeholder" id="center-placeholder"></div>
      <div class="right-placeholder"></div>
    </div>

    <div class="lower">
      <div class="left">
        <div class="fifth">
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[5].isOdd, odd: ballsToShow[5].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[5].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[6].isOdd, odd: ballsToShow[6].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[6].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[7].isOdd, odd: ballsToShow[7].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[7].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[8].isOdd, odd: ballsToShow[8].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[8].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[9].isOdd, odd: ballsToShow[9].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[9].value }}</div>
            </div>
          </div>
        </div>
        <div class="fifth">
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[10].isOdd, odd: ballsToShow[10].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[10].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[11].isOdd, odd: ballsToShow[11].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[11].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[12].isOdd, odd: ballsToShow[12].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[12].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[13].isOdd, odd: ballsToShow[13].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[13].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[14].isOdd, odd: ballsToShow[14].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[14].value }}</div>
            </div>
          </div>
        </div>
        <div class="fifth">
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[15].isOdd, odd: ballsToShow[15].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[15].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[16].isOdd, odd: ballsToShow[16].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[16].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[17].isOdd, odd: ballsToShow[17].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[17].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[18].isOdd, odd: ballsToShow[18].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[18].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[19].isOdd, odd: ballsToShow[19].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[19].value }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="center" id="center-main">
        <div class="center-balls" id="center-balls">
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[0].isOdd, odd: ballsToShow[0].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[0].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[1].isOdd, odd: ballsToShow[1].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[1].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[2].isOdd, odd: ballsToShow[2].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[2].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[3].isOdd, odd: ballsToShow[3].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[3].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[4].isOdd, odd: ballsToShow[4].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[4].value }}</div>
            </div>
          </div>
        </div>
        <div class="ball-container-center">
          <div class="ball center" v-bind:class="{ waiting: waitingForRound}">
            <div
              v-if="!waitingForRound && !resultsInProgress && !roundStarting"
              class="ball-value"
            >{{currentBall.ball}}</div>
            <div v-if="waitingForRound" class="ball-value description">WAITING FOR ROUND</div>
            <div v-if="resultsInProgress" class="ball-value description">RESULTS</div>
            <div v-if="roundStarting" class="ball-value description">ROUND STARTING</div>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="fifth">
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[20].isOdd, odd: ballsToShow[20].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[20].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[21].isOdd, odd: ballsToShow[21].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[21].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[22].isOdd, odd: ballsToShow[22].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[22].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[23].isOdd, odd: ballsToShow[23].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[23].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[24].isOdd, odd: ballsToShow[24].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[24].value }}</div>
            </div>
          </div>
        </div>
        <div class="fifth">
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[25].isOdd, odd: ballsToShow[25].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[25].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[26].isOdd, odd: ballsToShow[26].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[26].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[27].isOdd, odd: ballsToShow[27].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[27].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[28].isOdd, odd: ballsToShow[28].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[28].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[29].isOdd, odd: ballsToShow[29].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[29].value }}</div>
            </div>
          </div>
        </div>
        <div class="fifth">
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[30].isOdd, odd: ballsToShow[30].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[30].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[31].isOdd, odd: ballsToShow[31].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[31].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[32].isOdd, odd: ballsToShow[32].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[32].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[33].isOdd, odd: ballsToShow[33].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[33].value }}</div>
            </div>
          </div>
          <div class="ball-container">
            <div
              class="ball"
              v-bind:class="{ pick: !ballsToShow[34].isOdd, odd: ballsToShow[34].isOdd}"
            >
              <div class="ball-value">{{ ballsToShow[34].value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  props: {
    windowWidth: Number
  },
  watch: {
    windowWidth() {
      this.setRoundLayout();
    }
  },
  computed: {
    ...mapState([
      "resultsInProgress",
      "roundStarting",
      "waitingForRound",
      "currentBall",
      "balls",
      "odds",
      "results",
      "ballsToShow"
    ])
  },
  methods: {
    setRoundLayout() {
      let initialized =
        document.getElementById("center-placeholder") &&
        document.getElementById("center-balls") &&
        document.getElementById("center-main");
      if (this.windowWidth <= 500 && initialized) {
        document
          .getElementById("center-placeholder")
          .appendChild(document.getElementById("center-balls"));
      } else {
        document
          .getElementById("center-main")
          .prepend(document.getElementById("center-balls"));
      }
    }
  },
  mounted() {
    this.setRoundLayout();
  }
};
</script>

<style lang="scss" scoped>
.round {
  height: 100%;
  display: flex;
  padding: 40px 30px;
  flex-direction: column;
  box-sizing: border-box;

  .ball {
    position: relative;
    border-radius: 100%;
    background: #0d2547;
    box-shadow: 0 0 0 2px #0d2547;
    border: 2px solid #286ed0;
    height: 90px;
    width: 90px;
    max-width: 90px;
    max-height: 90px;

    .ball-value {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 100px;
      font-family: Roboto-Regular;
      font-weight: 400;
      color: white;
      line-height: 72px;
    }

    &.pick {
      .ball-value {
        font-size: 24px;
        font-family: Roboto-Medium;
        font-weight: 500;
      }
    }

    &.center {
      height: 270px;
      width: 270px;
      max-width: 270px;
      max-height: 270px;

      .description {
        font-size: 30px;
        text-align: center;
        line-height: 40px;
      }

      &.waiting {
        background: #133667;
        box-shadow: 0 0 0 2px #133667;
        border: 2px solid #133667;

        .ball-value {
          color: #7d90ab;
        }
      }
    }

    &.odd {
      background: #133667;
      box-shadow: 0 0 0 2px #133667;
      border: 2px solid #133667;

      .ball-value {
        color: #7d90ab;
        font-size: 24px;
        font-family: Roboto-Medium;
        font-weight: 500;
      }
    }
  }

  .upper {
    display: flex;

    .left-placeholder,
    .right-placeholder {
      display: flex;
      flex: 1;
    }

    .center-placeholder {
      display: flex;
      flex: 3;

      .center-balls {
        width: 100%;
        padding: 0 30px;
        display: flex;
        justify-content: space-between;

        .ball-container {
          width: 22%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 70px;
        }
      }
    }
  }

  .lower {
    display: flex;
    height: 100%;

    .left,
    .right {
      display: flex;
      flex: 1;
      flex-wrap: wrap;

      .fifth {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .ball-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 70px;
        }
      }
    }

    .left {
      .fifth {
        align-items: flex-start;
      }
    }

    .right {
      .fifth {
        align-items: flex-end;
      }
    }

    .center {
      display: flex;
      flex-direction: column;
      flex: 2;

      .center-balls {
        padding: 0 30px;
        display: flex;

        .ball-container {
          width: 22%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 70px;
        }
      }

      .ball-container-center {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50%;
      }
    }
  }
}

@media screen and (max-width: 1600px) {
  .round {
    padding: 35px 25px;

    .ball {
      height: 80px;
      width: 80px;
      max-width: 80px;
      max-height: 80px;

      .ball-value {
        font-size: 90px;
        line-height: 66px;
      }

      &.pick {
        .ball-value {
          font-size: 22px;
        }
      }

      &.center {
        height: 250px;
        width: 250px;
        max-width: 250px;
        max-height: 250px;

        .description {
          font-size: 28px;
          line-height: 38px;
        }
      }

      &.odd {
        .ball-value {
          font-size: 22px;
        }
      }
    }
  }
}

@media screen and (max-width: 1366px) {
  .round {
    padding: 20px;

    .ball {
      height: 70px;
      width: 70px;
      max-width: 70px;
      max-height: 70px;

      .ball-value {
        font-size: 80px;
        line-height: 60px;
      }

      &.pick {
        .ball-value {
          font-size: 20px;
        }
      }

      &.center {
        height: 230px;
        width: 230px;
        max-width: 230px;
        max-height: 230px;

        .description {
          font-size: 26px;
          line-height: 35px;
        }
      }

      &.odd {
        .ball-value {
          font-size: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .round {
    .ball {
      height: 60px;
      width: 60px;
      max-width: 60px;
      max-height: 60px;

      .ball-value {
        font-size: 70px;
        line-height: 50px;
      }

      &.center {
        height: 210px;
        width: 210px;
        max-width: 210px;
        max-height: 210px;

        .description {
          font-size: 24px;
          line-height: 32px;
        }
      }
    }
  }
}

@media screen and (max-width: 850px) {
  .round {
    .ball {
      height: 50px;
      width: 50px;
      max-width: 50px;
      max-height: 50px;

      .ball-value {
        font-size: 65;
        line-height: 45;
      }

      &.center {
        height: 170px;
        width: 170px;
        max-width: 170px;
        max-height: 170px;

        .description {
          font-size: 20px;
          line-height: 30px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .round {
    padding: 15px 15px;

    .ball-container {
      height: 40px !important;
    }

    .ball-container-center {
      height: auto;
      margin-top: 15px;
    }

    .ball {
      .ball-value {
        font-size: 60px;
      }

      &.pick {
        height: 38px;
        width: 38px;
        max-width: 38px;
        max-height: 38px;

        .ball-value {
          font-size: 14px;
          line-height: 19px;
        }
      }

      &.center {
        height: 127px;
        width: 127px;
        max-width: 127px;
        max-height: 127px;

        .description {
          font-size: 15px;
          line-height: 20px;
        }
      }

      &.odd {
        height: 38px;
        width: 38px;
        max-width: 38px;
        max-height: 38px;

        .ball-value {
          font-size: 14px;
          line-height: 19px;
        }
      }
    }
  }
}

@media screen and (max-width: 639px) {
  .round {
    .lower {
      .center {
        flex: 1;
        align-items: center;

        .center-balls {
          width: 100%;
          justify-content: space-between;
        }
      }
    }

    .ball-container {
      height: min-content !important;
      width: min-content !important;
    }

    .ball-container-center {
      height: auto;
      margin-top: 20px;
      width: min-content;
    }

    .ball {
      .ball-value {
        font-size: 40px;
        line-height: 48px;
      }

      &.pick {
        height: 30px;
        width: 30px;
        max-width: 30px;
        max-height: 30px;
        align-items: center;

        .ball-value {
          font-size: 12px;
          line-height: 18px;
        }
      }

      &.center {
        height: 110px;
        width: 110px;
        max-width: 110px;
        max-height: 110px;

        .description {
          font-size: 13px;
          line-height: 18px;
        }
      }

      &.odd {
        height: 30px;
        width: 30px;
        max-width: 30px;
        max-height: 30px;

        .ball-value {
          font-size: 12px;
          line-height: 18px;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .fifth {
    padding: 20px 0 0 0 !important;
  }

  .ball-container-center {
    height: auto !important;
    margin-top: 20px;
    width: min-content;
  }
}

@media screen and (max-width: 460px) {
  .round {
    padding: 10px;

    .lower {
      .center {
        flex: 1;
        align-items: center;
      }
    }

    .ball-container {
      height: min-content !important;
      width: min-content !important;
    }

    .ball {
      .ball-value {
        font-size: 40px;
        line-height: 48px;
      }

      &.pick {
        height: 22px;
        width: 22px;
        max-width: 22px;
        max-height: 22px;

        .ball-value {
          font-size: 10px;
          line-height: 17px;
        }
      }

      &.center {
        height: 88px;
        width: 88px;
        max-width: 88px;
        max-height: 88px;

        .description {
          font-size: 10px;
          line-height: 15px;
        }
      }

      &.odd {
        height: 22px;
        width: 22px;
        max-width: 22px;
        max-height: 22px;

        .ball-value {
          font-size: 10px;
          font-weight: 500;
          line-height: 17px;
        }
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .center-placeholder {
    .center-balls {
      padding: 0 25px !important;
    }
  }
}

@media screen and (max-width: 359px) {
  .center-placeholder {
    .center-balls {
      padding: 0 8px !important;
    }
  }
}
</style>
