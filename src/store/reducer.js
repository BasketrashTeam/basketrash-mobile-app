import { combineReducers } from 'redux';

import rankingReducer from '../modules/ranking/store/reducer';

export default combineReducers({
  ranking: rankingReducer,
});
