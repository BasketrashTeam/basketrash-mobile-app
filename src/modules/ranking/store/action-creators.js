import * as mock from '../mock';
import {
  FETCH_LAST_GAME_DATE_FAIL,
  FETCH_LAST_GAME_DATE_START,
  FETCH_LAST_GAME_DATE_SUCCESS,
  FETCH_RANKING_FAIL,
  FETCH_RANKING_START,
  FETCH_RANKING_SUCCESS,
} from './action-types';

export const fetchRanking = () => async (dispatch) => {
  dispatch({ type: FETCH_RANKING_START });

  try {
    // TODO: Fetch the API instead of using mock
    dispatch({ type: FETCH_RANKING_SUCCESS, payload: mock.ranking });
  } catch (error) {
    dispatch({ type: FETCH_RANKING_FAIL });
  }
};
