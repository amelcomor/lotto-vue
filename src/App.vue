<template>
  <div
    id="app"
    v-if="countdownInProgress || roundInProgress || waitingForRound || resultsInProgress || roundStarting"
  >
    <div class="wrapper">
      <Header />
      <div class="content">
        <Round
          v-if="roundInProgress || resultsInProgress || waitingForRound || roundStarting"
          :windowWidth="windowWidth"
        />
        <Countdown :windowWidth="windowWidth" v-if="countdownInProgress"/>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Countdown from "./components/Countdown.vue";
import Round from "./components/Round.vue";

export default {
  name: "app",
  data() {
    return {
      windowWidth: 0
    };
  },
  components: {
    Header,
    Footer,
    Countdown,
    Round
  },
  computed: {
    ...mapState([
      "channel",
      "countdownInProgress",
      "roundInProgress",
      "waitingForRound",
      "resultsInProgress",
      "roundStarting",
      "currentBall",
      "countdown"
    ])
  },
  sockets: {
    connect() {
      this.$socket.emit("subscribe", {
        channel: this.channel,
        subChannels: {
          language: "en",
          deliveryPlatform: "Web",
          playerUuid: null
        }
      });
    }
  },
  created() {
    window.addEventListener("resize", this.getWindowWidth);
    this.getWindowWidth();
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  }
};
</script>

<style lang="scss">
@import "src/assets/scss/reset.scss";
@import "src/assets/scss/fonts.scss";
.wrapper {
  height: 100vh;
  min-width: 100%;
  min-height: 400px;
  position: absolute;

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 63px;
    bottom: 60px;
    background-color: #286ed0;
    overflow-y: hidden;
  }
}

@media screen and (max-width: 1600px) {
  .wrapper {
    min-height: 780px;
  }
}

@media screen and (max-width: 1366px) {
  .wrapper {
    min-height: 670px;

    .content {
      top: 53px;
      bottom: 50px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .wrapper {
    min-height: 600px;
  }
}

@media screen and (max-width: 859px) {
  .wrapper {
    min-height: 500px;
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    min-height: 360px;

    .content {
      top: 45px;
      bottom: 35px;
    }
  }
}

@media screen and (max-width: 460px) {
  .wrapper {
    min-height: 305px;
  }
}
</style>
