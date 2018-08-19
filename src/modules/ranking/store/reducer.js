import {
  FETCH_LAST_GAME_DATE_FAIL,
  FETCH_LAST_GAME_DATE_START,
  FETCH_LAST_GAME_DATE_SUCCESS,
  FETCH_RANKING_FAIL,
  FETCH_RANKING_START,
  FETCH_RANKING_SUCCESS,
} from './action-types';

const initialState = {
  fetchingLastGameDate: false,
  errorLastGameDate: false,
  lastGameDate: null,
  fetchingRanking: false,
  errorRanking: false,
  ranking: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LAST_GAME_DATE_START:
      return {
        ...state,
        fetchingLastGameDate: true,
      };

    case FETCH_LAST_GAME_DATE_SUCCESS:
      return {
        ...state,
        errorLastGameDate: false,
        fetchingLastGameDate: false,
        lastGameDate: action.payload,
      };

    case FETCH_LAST_GAME_DATE_FAIL:
      return {
        ...state,
        errorLastGameDate: true,
        fetchingLastGameDate: false,
        lastGameDate: null,
      };

    case FETCH_RANKING_START:
      return {
        ...state,
        fetchingRanking: true,
      };

    case FETCH_RANKING_SUCCESS:
      return {
        ...state,
        errorRanking: false,
        fetchingRanking: false,
        ranking: action.payload,
      };

    case FETCH_RANKING_FAIL:
      return {
        ...state,
        errorRanking: true,
        fetchingRanking: false,
        ranking: [],
      };

    default:
      return state;
  }
};
