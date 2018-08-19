import { lastGameDate as lastGameDateMock, ranking as rankingMock } from './mock';

export default {
  state: {
    error: false,
    fetching: false,
    lastGameDate: lastGameDateMock,
    ranking: [],
  },
  reducers: {
    fetchRankingStart: state => ({
      ...state,
      fetching: true,
    }),
    fetchRankingSuccess: (state, payload) => ({
      ...state,
      error: false,
      fetching: false,
      ranking: payload,
    }),
    fetchRankingFail: state => ({
      ...state,
      error: true,
      fetching: false,
      ranking: [],
    }),
  },
  effects: dispatch => ({
    fetchRanking: async () => {
      try {
        dispatch.ranking.fetchRankingStart();
        // TODO: Fetch the API instead of using mock
        dispatch.ranking.fetchRankingSuccess(rankingMock);
      } catch (error) {
        dispatch.ranking.fetchRankingFailed();
      }
    },
  }),
};
