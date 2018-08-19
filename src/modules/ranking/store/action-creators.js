import * as mock from '../mock';
import {
  FETCH_LAST_GAME_DATE_FAIL,
  FETCH_LAST_GAME_DATE_START,
  FETCH_LAST_GAME_DATE_SUCCESS,
  FETCH_RANKING_FAIL,
  FETCH_RANKING_START,
  FETCH_RANKING_SUCCESS,
} from './action-types';

const fetchLastGameDate = () => async (dispatch) => {
  dispatch({ type: FETCH_LAST_GAME_DATE_START });

  try {
    // TODO: Fetch the API instead of using mock
    dispatch({ type: FETCH_LAST_GAME_DATE_SUCCESS, payload: mock.lastGameDate });
  } catch (error) {
    dispatch({ type: FETCH_LAST_GAME_DATE_FAIL });
  }
};

const fetchRanking = () => async (dispatch) => {
  dispatch({ type: FETCH_RANKING_START });

  try {
    // TODO: Fetch the API instead of using mock
    dispatch({ type: FETCH_RANKING_SUCCESS, payload: mock.ranking });
  } catch (error) {
    dispatch({ type: FETCH_RANKING_FAIL });
  }
};

/* eslint-disable import/prefer-default-export */
export const fetch = () => async (dispatch) => {
  fetchLastGameDate()(dispatch);
  fetchRanking()(dispatch);
};
