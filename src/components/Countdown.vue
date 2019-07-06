<template>
  <div class="countdown">
    <div class="counter">{{ counter.minutes }}:{{ counter.seconds }}</div>
    <div class="loader-container">
      <loading-progress
        :progress="countdownForSvg"
        :indeterminate="true"
        :counter-clockwise="false"
        :hide-background="false"
        :size="size"
        :fillDuration="countdownForSvg"
        class="loader-class"
      />
    </div>
  </div>
</template>
 
<script>
import { mapState } from "vuex";

export default {
  name: "Countdown",
  data() {
    return {
      counter: { minutes: "", seconds: "" },
      size: Number
    };
  },
  props: {
    windowWidth: Number
  },
  computed: {
    ...mapState(["counterTotal"]),
    countdownForSvg() {
      return this.counterTotal * 2;
    }
  },
  created() {
    this.countdownLocal = this.counterTotal;
    this.countTime();
    if (this.countdownLocal > 0) {
      setInterval(() => {
        this.countTime();
      }, 1000);
    }
    this.size = this.windowWidth <= 400 ? 150 : 200;
  },
  watch: {
    windowWidth() {
      this.size = this.windowWidth <= 400 ? 150 : 200;
    }
  },
  methods: {
    countTime() {
      this.counter.minutes = Math.floor(this.countdownLocal / 60).toString();
      this.counter.seconds = (this.countdownLocal % 60).toString();
      if (this.countdownLocal >= 0) {
        this.counter.minutes = Math.floor(this.countdownLocal / 60).toString();
        this.counter.seconds = (this.countdownLocal % 60).toString();
        if (parseInt(this.counter.seconds, 10) < 10) {
          this.counter.seconds = `0${this.counter.seconds}`;
        }
        this.countdownLocal--;
      }
    }
  }
};
</script> 
<style lang="scss" scoped>
.countdown {
  .counter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: Roboto-Light !important;
    font-size: 60px;
    line-height: 72px;
  }
  .loader-class {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 400px) {
    .counter {
      font-size: 45px !important;
    }
  }
}
</style>
