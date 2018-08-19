import { connect } from 'react-redux';

import { fetch } from '../store/action-creators';
import { errorSelector, fetchingSelector, lastGameDateSelector } from '../store/selectors';
import RankingScreen from './component';

const mapStateToProps = state => ({
  error: errorSelector(state),
  fetching: fetchingSelector(state),
  lastGameDateExists: lastGameDateSelector(state) !== null,
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RankingScreen);
