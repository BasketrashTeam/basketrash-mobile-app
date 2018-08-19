import { connect } from 'react-redux';

import { fetchRanking, fetchLastGameDate } from '../store/action-creators';
import { errorSelector, fetchingSelector, lastGameDateSelector } from '../store/selectors';
import RankingScreen from './component';

const mapStateToProps = state => ({
  error: errorSelector(state),
  fetching: fetchingSelector(state),
  lastGameDateExists: lastGameDateSelector(state) !== null,
});

const mapDispatchToProps = dispatch => ({
  fetch: () => {
    dispatch(fetchRanking());
    dispatch(fetchLastGameDate());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RankingScreen);
