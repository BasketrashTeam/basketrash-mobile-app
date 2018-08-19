import { connect } from 'react-redux';

import { fetchRanking } from '../store/action-creators';
import { error as selectError, fetching as selectFetching } from '../store/selectors';
import RankingScreen from './component';

const mapStateToProps = state => ({
  error: selectError(state),
  fetching: selectFetching(state),
});

const mapDispatchToProps = dispatch => ({
  fetchRanking: () => dispatch(fetchRanking()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RankingScreen);
