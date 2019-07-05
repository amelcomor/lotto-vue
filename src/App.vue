<template>
  <div
    id="app"
    v-if="countdownInProgress || roundInProgress || waitingForRound || resultsInProgress || roundStarting"
  >
    <Header />
    <div class="info">
      <p>COUNTDOWN: {{countdownInProgress}}</p>
      <p>ROUND: {{roundInProgress}}</p>
      <p>WAITING: {{waitingForRound}}</p>
      <p>RESULTS: {{resultsInProgress}}</p>
      <p>STARTING: {{roundStarting}}</p>
      <p>CURRENT BALL: {{currentBall}}</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState([
      "channel",
      "countdownInProgress",
      "roundInProgress",
      "waitingForRound",
      "resultsInProgress",
      "roundStarting",
      "currentBall"
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
  }
};
</script>

<style lang="scss">
@import "src/assets/scss/reset.scss";
@import "src/assets/scss/fonts.scss";
.info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  p {
    font-size: 30px;
    font-family: Roboto-Regular;
    color: black;
  }
}
</style>
