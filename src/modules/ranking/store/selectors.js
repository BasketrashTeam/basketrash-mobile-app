import { createSelector } from 'reselect';

const fetchingLastGameDateSelector = state => state.ranking.fetchingLastGameDate;
const errorLastGameDateSelector = state => state.ranking.errorLastGameDate;
const fetchingRankingSelector = state => state.ranking.fetchingRanking;
const errorRankingSelector = state => state.ranking.errorRanking;

export const lastGameDateSelector = state => state.ranking.lastGameDate;
export const rankingSelector = state => state.ranking.ranking;

export const fetchingSelector = createSelector(
  fetchingLastGameDateSelector,
  fetchingRankingSelector,
  (fetchingLastGameDate, fetchingRanking) => fetchingLastGameDate || fetchingRanking,
);

export const errorSelector = createSelector(
  errorLastGameDateSelector,
  errorRankingSelector,
  (errorLastGameDate, errorRanking) => errorLastGameDate || errorRanking,
);
