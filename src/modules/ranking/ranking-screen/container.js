import { connect } from 'react-redux';

import RankingScreen from './component';

const mapStateToProps = ({ ranking }) => ({
  error: ranking.error,
  fetching: ranking.fetching,
});

const mapDispatchToProps = dispatch => ({
  fetchRanking: dispatch.ranking.fetchRanking,
});

export default connect(mapStateToProps, mapDispatchToProps)(RankingScreen);
