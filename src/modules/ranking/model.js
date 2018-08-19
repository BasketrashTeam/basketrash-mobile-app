import { lastGameDate as lastGameDateMock, rank as rankMock } from './mock';

export default {
  state: {
    error: false,
    fetching: false,
    lastGameDate: lastGameDateMock,
    rank: [],
  },
  reducers: {
    fetchRankStart: state => ({
      ...state,
      fetching: true,
    }),
    fetchRankSuccess: (state, payload) => ({
      ...state,
      error: false,
      fetching: false,
      rank: payload,
    }),
    fetchRankFail: state => ({
      ...state,
      error: true,
      fetching: false,
      rank: [],
    }),
  },
  effects: dispatch => ({
    fetchRank: async () => {
      // TODO: Fetch the API
      try {
        dispatch.ranking.fetchRankStart();
        dispatch.ranking.fetchRankSuccess(rankMock);
      } catch (error) {
        dispatch.ranking.fetchRankFailed();
      }
    },
  }),
};
