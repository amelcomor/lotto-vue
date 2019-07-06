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
    evenOddTotal: 5,
    overUnderLimit: 5,
    ballsToShow: [
      { index: 0, value: 0, isOdd: true },
      { index: 1, value: 0, isOdd: true },
      { index: 2, value: 0, isOdd: true },
      { index: 3, value: 0, isOdd: true },
      { index: 4, value: 0, isOdd: true },
      { index: 5, value: 0, isOdd: true },
      { index: 6, value: 0, isOdd: true },
      { index: 7, value: 0, isOdd: true },
      { index: 8, value: 0, isOdd: true },
      { index: 9, value: 0, isOdd: true },
      { index: 10, value: 0, isOdd: true },
      { index: 11, value: 0, isOdd: true },
      { index: 12, value: 0, isOdd: true },
      { index: 13, value: 0, isOdd: true },
      { index: 14, value: 0, isOdd: true },
      { index: 15, value: 0, isOdd: true },
      { index: 16, value: 0, isOdd: true },
      { index: 17, value: 0, isOdd: true },
      { index: 18, value: 0, isOdd: true },
      { index: 19, value: 0, isOdd: true },
      { index: 20, value: 0, isOdd: true },
      { index: 21, value: 0, isOdd: true },
      { index: 22, value: 0, isOdd: true },
      { index: 23, value: 0, isOdd: true },
      { index: 24, value: 0, isOdd: true },
      { index: 25, value: 0, isOdd: true },
      { index: 26, value: 0, isOdd: true },
      { index: 27, value: 0, isOdd: true },
      { index: 28, value: 0, isOdd: true },
      { index: 29, value: 0, isOdd: true },
      { index: 30, value: 0, isOdd: true },
      { index: 31, value: 0, isOdd: true },
      { index: 32, value: 0, isOdd: true },
      { index: 33, value: 0, isOdd: true },
      { index: 34, value: 0, isOdd: true }
    ]
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
    },
    SET_BALLS_TO_SHOW(state, balls) {
      for (let i = 0; i < balls.length; i++) {
        state.ballsToShow[i].value = balls[i].ball;
        state.ballsToShow[i].isOdd = false;
      }
    },
    SET_ODDS_TO_SHOW(state, odds) {
      for (let i = 0; i < odds.length; i++) {
        state.ballsToShow[i].value = odds[i].odds;
        state.ballsToShow[i].isOdd = true;
      }
    },
    ADD_NEW_BALL_TO_SHOW(state, ball) {
      for (let i = 0; i < state.ballsToShow.length; i++) {
        if (state.ballsToShow[i].isOdd == true) {
          state.ballsToShow[i].value = ball.ball;
          state.ballsToShow[i].isOdd = false;
          break;
        }
      }
    },
    RESET_BALLS_TO_SHOW(state) {
      for (const ball of state.ballsToShow) {
        ball.value = 0;
        ball.isOdd = true;
      }
    }
  },
  actions: {
    'SOCKET_1d0d6713-b7c9-4f07-ab23-3451a06e8989'({ commit }, socketData) {
      let isState = socketData.type == 'state';
      let type =
        socketData.type == 'state' ? socketData.data.type : socketData.type;
      switch (type) {
        case 'countdown':
          console.log('CASE COUNTDOWN', socketData.data);
          commit('SET_ROUND_IN_PROGRESS', false);
          commit('SET_RESULTS_IN_PROGRESS', false);
          if (isState) {
            commit('SET_ODDS', socketData.data.odds);
            commit('SET_ODDS_TO_SHOW', socketData.data.odds);
            commit('SET_COUNTDOWN_IN_PROGRESS', false);
            commit('SET_WAITING_FOR_ROUND', true);
          } else {
            commit('RESET_BALLS_TO_SHOW');
            commit('SET_COUNTDOWN', socketData.data.delay);
            commit('SET_COUNTER_TOTAL', socketData.data.delay);
            commit('SET_COUNTDOWN_IN_PROGRESS', true);
          }
          break;
        case 'ball':
          console.log('CASE BALL', socketData.data);
          commit('SET_WAITING_FOR_ROUND', false);
          commit('SET_ROUND_STARTING', false);
          if (isState) {
            commit('SET_COUNTDOWN_IN_PROGRESS', false);
            commit('SET_RESULTS_IN_PROGRESS', false);
            commit('SET_ODDS', socketData.data.odds);
            commit('SET_BALLS', socketData.data.balls);
            commit('SET_ODDS', socketData.data.odds);
            commit('SET_BALLS', socketData.data.balls);
            commit(
              'SET_CURRENT_BALL',
              socketData.data.balls[socketData.data.balls.length - 1]
            );
            commit('SET_ODDS_TO_SHOW', socketData.data.odds);
            commit('SET_BALLS_TO_SHOW', socketData.data.balls);
          } else {
            commit('SET_CURRENT_BALL', socketData.data);
            commit('ADD_NEW_BALL_TO_SHOW', socketData.data);
          }
          commit('SET_ROUND_IN_PROGRESS', true);
          break;
        case 'new':
          console.log('CASE NEW', socketData.data);
          commit('SET_COUNTDOWN_IN_PROGRESS', false);
          commit('SET_WAITING_FOR_ROUND', false);
          commit('SET_ROUND_IN_PROGRESS', false);
          commit('SET_RESULTS_IN_PROGRESS', false);
          commit('SET_RESULTS', []);
          commit('SET_ODDS', socketData.data.odds);
          commit('SET_ODDS_TO_SHOW', socketData.data.odds);
          commit('SET_CURRENT_BALL', undefined);
          if (isState) {
            commit('SET_BALLS', []);
          } else {
            commit('SET_BALLS', []);
          }
          commit('SET_ODDS_TO_SHOW', socketData.data.odds);
          commit('SET_ROUND_STARTING', true);
          break;
        case 'results':
          console.log('CASE RESULTS', socketData.data);
          commit('SET_COUNTDOWN_IN_PROGRESS', false);
          commit('SET_WAITING_FOR_ROUND', false);
          commit('SET_ROUND_IN_PROGRESS', false);
          commit('SET_RESULTS', socketData.data.balls);
          commit('SET_BALLS_TO_SHOW', socketData.data.balls);
          commit('SET_RESULTS_IN_PROGRESS', true);
          break;
      }
    }
  }
});
