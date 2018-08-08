import { createStackNavigator } from 'react-navigation';

import RankingScreen from './screens/ranking';

export default createStackNavigator({
  Ranking: { screen: RankingScreen },
});
