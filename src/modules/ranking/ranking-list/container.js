import { connect } from 'react-redux';

import RankingList from './component';

const mapStateToProps = state => ({
  ranking: state.ranking.ranking,
});

export default connect(mapStateToProps)(RankingList);
