import { connect } from 'react-redux';

import { lastGameDate as selectLastGameDate } from '../store/selectors';
import RankingLastGame from './component';

const mapStateToProps = state => ({
  date: selectLastGameDate(state),
});

export default connect(mapStateToProps)(RankingLastGame);
