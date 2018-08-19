import { connect } from 'react-redux';

import RankingScreen from './component';

const mapStateToProps = state => ({ ...state.ranking });

const mapDispatchToProps = dispatch => ({
  fetchRanking: dispatch.ranking.fetchRanking,
});

export default connect(mapStateToProps, mapDispatchToProps)(RankingScreen);
