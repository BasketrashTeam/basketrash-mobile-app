import * as mock from '../mock';
import {
  FETCH_LAST_GAME_DATE_FAIL,
  FETCH_LAST_GAME_DATE_START,
  FETCH_LAST_GAME_DATE_SUCCESS,
  FETCH_RANKING_FAIL,
  FETCH_RANKING_START,
  FETCH_RANKING_SUCCESS,
} from './action-types';

const initialState = {
  error: false,
  fetching: false,
  lastGameDate: mock.lastGameDate,
  ranking: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANKING_START:
      return {
        ...state,
        fetching: true,
      };

    case FETCH_RANKING_SUCCESS:
      return {
        ...state,
        error: false,
        fetching: false,
        ranking: action.payload,
      };

    case FETCH_RANKING_FAIL:
      return {
        ...state,
        error: true,
        fetching: false,
        ranking: [],
      };

    default:
      return state;
  }
};
