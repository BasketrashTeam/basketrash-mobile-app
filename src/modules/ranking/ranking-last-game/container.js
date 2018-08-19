import { connect } from 'react-redux';

import RankingLastGame from './component';

const mapStateToProps = state => ({
  date: state.ranking.lastGameDate,
});

export default connect(mapStateToProps)(RankingLastGame);
