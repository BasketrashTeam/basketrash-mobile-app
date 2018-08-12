import { createStackNavigator } from 'react-navigation';

import RankingScreen from './modules/ranking/ranking-screen';

export default createStackNavigator({
  Ranking: { screen: RankingScreen },
});
