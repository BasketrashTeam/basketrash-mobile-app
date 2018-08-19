import { connect } from 'react-redux';

import RankingScreen from './component';

const mapStateToProps = state => ({ ...state.ranking });

const mapDispatchToProps = dispatch => ({
  fetchRank: dispatch.ranking.fetchRank,
});

export default connect(mapStateToProps, mapDispatchToProps)(RankingScreen);
