import { connect } from 'react-redux';

import { fetchRanking } from '../store/action-creators';
import RankingScreen from './component';

const mapStateToProps = ({ ranking }) => ({
  error: ranking.error,
  fetching: ranking.fetching,
});

const mapDispatchToProps = dispatch => ({
  fetchRanking: () => dispatch(fetchRanking()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RankingScreen);
