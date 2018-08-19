import { connect } from 'react-redux';

import { ranking as selectRanking } from '../store/selectors';
import RankingList from './component';

const mapStateToProps = state => ({
  ranking: selectRanking(state),
});

export default connect(mapStateToProps)(RankingList);
