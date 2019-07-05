import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    channel: '1d0d6713-b7c9-4f07-ab23-3451a06e8989',
    countdownInProgress: false,
    roundInProgress: false,
    waitingForRound: false,
    resultsInProgress: false,
    roundStarting: false,
    currentBall: undefined,
    results: [],
    odds: [],
    balls: [],
    counterTotal: 0,
    countdown: 0,
    evenOddTotal: 5,
    overUnderLimit: 5
  },
  mutations: {
    SET_COUNTDOWN_IN_PROGRESS(state, value) {
      state.countdownInProgress = value;
    },
    SET_ROUND_IN_PROGRESS(state, value) {
      state.roundInProgress = value;
    },
    SET_WAITING_FOR_ROUND(state, value) {
      state.waitingForRound = value;
    },
    SET_RESULTS_IN_PROGRESS(state, value) {
      state.resultsInProgress = value;
    },
    SET_ROUND_STARTING(state, value) {
      state.roundStarting = value;
    },
    SET_CURRENT_BALL(state, value) {
      state.currentBall = value;
    },
    SET_BALLS(state, value) {
      state.balls = value;
    },
    SET_ODDS(state, value) {
      state.odds = value;
    },
    SET_RESULTS(state, value) {
      state.results = value;
    },
    SET_COUNTER_TOTAL(state, value) {
      state.counterTotal = value;
    },
    SET_COUNTDOWN(state, value) {
      state.countdown = value;
    }
  },
  actions: {
    'SOCKET_1d0d6713-b7c9-4f07-ab23-3451a06e8989'({ commit }, socketData) {
      console.log({ type: socketData.type, data: socketData.data });
      let isState = socketData.type == 'state';
      let type =
        socketData.type == 'state' ? socketData.data.type : socketData.type;
      switch (type) {
        case 'countdown':
          console.log('CASE COUNTDOWN');
          commit('SET_ROUND_IN_PROGRESS', false);
          commit('SET_RESULTS_IN_PROGRESS', false);
          if (isState) {
            commit('SET_ODDS', socketData.data.odds);
            commit('SET_COUNTDOWN_IN_PROGRESS', false);
            commit('SET_WAITING_FOR_ROUND', true);
          } else {
            commit('SET_COUNTDOWN', socketData.data.delay);
            commit('SET_COUNTER_TOTAL', socketData.data.delay);
            commit('SET_COUNTDOWN_IN_PROGRESS', true);
          }
          break;
        case 'ball':
          console.log('CASE BALL');
          commit('SET_WAITING_FOR_ROUND', false);
          commit('SET_ROUND_STARTING', false);
          commit('SET_ROUND_IN_PROGRESS', true);
          if (isState) {
            commit('SET_BALLS', socketData.data.balls);
            commit('SET_ODDS', socketData.data.odds);
            commit(
              'SET_CURRENT_BALL',
              socketData.data.balls[socketData.data.balls.length - 1]
            );
            commit('SET_COUNTDOWN_IN_PROGRESS', false);
            commit('SET_RESULTS_IN_PROGRESS', false);
          } else {
            commit('SET_CURRENT_BALL', socketData.data);
          }
          break;
        case 'new':
          console.log('CASE NEW');
          commit('SET_RESULTS', []);
          commit('SET_ODDS', socketData.data.odds);
          commit('SET_CURRENT_BALL', undefined);
          commit('SET_ROUND_STARTING', true);
          commit('SET_COUNTDOWN_IN_PROGRESS', false);
          commit('SET_WAITING_FOR_ROUND', false);
          commit('SET_ROUND_IN_PROGRESS', false);
          commit('SET_RESULTS_IN_PROGRESS', false);
          if (isState) {
            commit('SET_BALLS', socketData.data.balls);
          } else {
            commit('SET_BALLS', []);
          }
          break;
        case 'results':
          console.log('CASE RESULTS');
          commit('SET_RESULTS', socketData.data.balls);
          commit('SET_COUNTDOWN_IN_PROGRESS', false);
          commit('SET_WAITING_FOR_ROUND', false);
          commit('SET_ROUND_IN_PROGRESS', false);
          commit('SET_RESULTS_IN_PROGRESS', true);
          break;
      }

      // switch (socketData.type) {
      //   case 'state':
      //     if (socketData.data.type == 'countdown') {
      //       // this.odds = socketData.data.odds;
      //       commit('SET_COUNTDOWN_IN_PROGRESS', false);
      //       commit('SET_WAITING_FOR_ROUND', true);
      //       commit('SET_ROUND_IN_PROGRESS', false);
      //       commit('SET_RESULTS_IN_PROGRESS', false);
      //     }
      //     if (socketData.data.type == 'ball') {
      //       // this.balls = socketData.data.balls;
      //       // this.odds = socketData.data.odds;
      //       commit('SET_ROUND_STARTING', false);
      //       commit('SET_COUNTDOWN_IN_PROGRESS', false);
      //       commit('SET_WAITING_FOR_ROUND', false);
      //       commit('SET_ROUND_IN_PROGRESS', true);
      //       commit('SET_RESULTS_IN_PROGRESS', false);
      //     }
      //     if (socketData.data.type == 'new') {
      //       // this.odds = socketData.data.odds;
      //       // this.balls = socketData.data.balls;
      //       commit('SET_ROUND_STARTING', true);
      //       commit('SET_COUNTDOWN_IN_PROGRESS', false);
      //       commit('SET_WAITING_FOR_ROUND', false);
      //       commit('SET_ROUND_IN_PROGRESS', false);
      //       commit('SET_RESULTS_IN_PROGRESS', false);
      //     }
      //     if (socketData.data.type == 'results') {
      //       // this.results = socketData.data.balls;
      //       commit('SET_COUNTDOWN_IN_PROGRESS', false);
      //       commit('SET_WAITING_FOR_ROUND', false);
      //       commit('SET_ROUND_IN_PROGRESS', false);
      //       commit('SET_RESULTS_IN_PROGRESS', true);
      //     }
      //     break;
      //   case 'new':
      //     // this.balls = [];
      //     // this.results = [];
      //     // this.odds = socketData.data.odds;
      //     // this.currentBall = undefined;
      //     commit('SET_ROUND_STARTING', true);
      //     commit('SET_COUNTDOWN_IN_PROGRESS', false);
      //     commit('SET_WAITING_FOR_ROUND', false);
      //     commit('SET_ROUND_IN_PROGRESS', false);
      //     commit('SET_RESULTS_IN_PROGRESS', false);
      //     break;
      //   case 'ball':
      //     // this.currentBall = socketData.data;
      //     commit('SET_WAITING_FOR_ROUND', false);
      //     commit('SET_ROUND_STARTING', false);
      //     commit('SET_ROUND_IN_PROGRESS', true);
      //     break;
      //   case 'results':
      //     // this.results = socketData.data.balls;
      //     commit('SET_COUNTDOWN_IN_PROGRESS', false);
      //     commit('SET_WAITING_FOR_ROUND', false);
      //     commit('SET_ROUND_IN_PROGRESS', false);
      //     commit('SET_RESULTS_IN_PROGRESS', true);
      //     break;
      //   case 'countdown':
      //     // this.countdown = socketData.data.delay;
      //     // this.counterTotal = socketData.data.delay;
      //     commit('SET_COUNTDOWN_IN_PROGRESS', true);
      //     commit('SET_ROUND_IN_PROGRESS', false);
      //     commit('SET_RESULTS_IN_PROGRESS', false);
      //     break;
      // }
    }
  }
});
