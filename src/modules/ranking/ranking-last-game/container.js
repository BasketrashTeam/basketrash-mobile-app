import { connect } from 'react-redux';

import { lastGameDateSelector } from '../store/selectors';
import RankingLastGame from './component';

const mapStateToProps = state => ({
  date: lastGameDateSelector(state),
});

export default connect(mapStateToProps)(RankingLastGame);
