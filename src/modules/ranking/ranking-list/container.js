import { connect } from 'react-redux';

import { rankingSelector } from '../store/selectors';
import RankingList from './component';

const mapStateToProps = state => ({
  ranking: rankingSelector(state),
});

export default connect(mapStateToProps)(RankingList);
